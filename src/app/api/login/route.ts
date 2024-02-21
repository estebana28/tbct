import Auth from '@/models/Auth'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  // cheequeo si tiene auth creado
  // if not
  // crear code
  // crear auth
  // mandar code por mail y a la consola por ahora
  // retorno con flag de usuario nuevo (desde el front muestro tambien input de nombre y apellido)
  // else
  // mando code por mail y a la consola
}

export const POST = async (request: Request) => {
  // obtengo codigo y lo valido
  // si esta OK, creo User
  // con email, nombre y apellido
}
