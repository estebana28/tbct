export interface IAuth {
  _id: string
  createdAt: Date
  updatedAt: Date
  active?: boolean
  email: string
  code: string
}
