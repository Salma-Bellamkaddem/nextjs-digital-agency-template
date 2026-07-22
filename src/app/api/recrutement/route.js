import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const formData = await request.formData()

    const fullName = formData.get('fullName')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const poste = formData.get('poste')
    const message = formData.get('message')
    const cvFile = formData.get('cv')

    let cvBase64 = null
    let cvName = null
    let cvType = null

    // Conversion du fichier CV en Base64 si présent
    if (cvFile && typeof cvFile === 'object') {
      const arrayBuffer = await cvFile.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      cvBase64 = buffer.toString('base64')
      cvName = cvFile.name
      cvType = cvFile.type
    }

    const payload = {
      fullName,
      phone,
      email,
      poste,
      message,
      cvBase64,
      cvName,
      cvType,
    }

    // URL de votre Google Apps Script (peut être mise dans .env.local)
    const webhookUrl = process.env.GOOGLE_SHEET_RECRUTEMENT_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK_URL

    const googleResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })

    const rawText = await googleResponse.text()
    const result = JSON.parse(rawText)

    if (result.result !== 'success') {
      throw new Error(result.message || 'Erreur Google Script')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('❌ Erreur API recrutement :', error.message)
    return NextResponse.json(
      { error: 'Erreur lors de la transmission de la candidature.' },
      { status: 500 }
    )
  }
}