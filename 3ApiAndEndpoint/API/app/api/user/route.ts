import { NextResponse } from 'next/server'

export async function GET() {
  const user = { //mock user data
    id: 1,
    name: 'Jan Kowalski',
    email: 'jan@example.com'
  }
  
  return NextResponse.json(user)
}