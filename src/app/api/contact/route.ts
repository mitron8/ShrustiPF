import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, projectType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // TODO: Attach a delivery provider such as Resend or Nodemailer.
    console.log('Contact form submission:', { name, email, projectType, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Unable to process the request.' }, { status: 400 })
  }
}
