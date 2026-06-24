import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL

    console.log('--- /api/contact appelé ---')
    console.log('Webhook URL configurée :', webhookUrl ? 'OUI' : 'NON (manquante !)')

    if (!webhookUrl) {
      console.error('❌ GOOGLE_SHEET_WEBHOOK_URL manquant dans .env.local')
      return NextResponse.json(
        { error: 'Configuration serveur manquante (GOOGLE_SHEET_WEBHOOK_URL absent).' },
        { status: 500 }
      )
    }

    // Envoie les données vers le Google Apps Script
    const googleResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      redirect: 'follow',
    })

    console.log('Statut HTTP réponse Google :', googleResponse.status)

    // On lit le corps en texte brut d'abord, pour voir ce qui revient réellement
    const rawText = await googleResponse.text()
    console.log('Corps brut renvoyé par Google :', rawText.slice(0, 500))

    let result
    try {
      result = JSON.parse(rawText)
    } catch {
      // Google a renvoyé du HTML (page de login, erreur d'autorisation, etc.)
      console.error('❌ La réponse de Google n\'est pas du JSON valide. Vérifiez le déploiement Apps Script (accès "Tout le monde" + nouvelle version déployée).')
      return NextResponse.json(
        { error: 'Le script Google Sheets n\'a pas répondu correctement. Vérifiez le déploiement Apps Script.' },
        { status: 502 }
      )
    }

    if (result.result !== 'success') {
      console.error('❌ Erreur renvoyée par Apps Script :', result.message)
      throw new Error(result.message || 'Erreur lors de l\'enregistrement.')
    }

    console.log('✅ Donnée enregistrée avec succès dans Google Sheet')
    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('❌ Erreur API /api/contact :', error.message)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi.' },
      { status: 500 }
    )
  }
}