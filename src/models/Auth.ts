import mongoose, { FilterQuery, Model } from 'mongoose'
import { isAfter } from 'date-fns/isAfter'
import { v4 as uuidv4 } from 'uuid'
import {
  generateSixDigitCode,
  cleanEmail,
  isCodeExpired,
} from '@/utils/auxiliary'
import { AuthModel } from '@/schemas/Auth'

export class Auth {
  constructor() {
    AuthModel
  }

  static async getOrCreateAuthCode(email: string) {
    const code = generateSixDigitCode()
    const auth = await AuthModel.findOne({ email })
    if (!auth) return AuthModel.create({ email, code, createdAt: new Date() })
    if (isCodeExpired(auth.createdAt)) {
      return AuthModel.findOneAndUpdate(
        { email },
        {
          code,
          updatedAt: new Date(),
        },
      )
    }
    return auth
  }

  static async findByEmailAndCode(email: string, code: string) {
    const emailCleaned = cleanEmail(email)
    return await AuthModel.findOne({
      $and: [{ email: emailCleaned }, { code: code }],
    })
  }

  static async deleteByEmail(email: string) {
    return AuthModel.findOneAndDelete({ email })
  }
}
