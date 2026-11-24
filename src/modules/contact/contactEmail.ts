const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/alanhernandez9716@gmail.com'

export type ContactEmail = {
  name: string
  email: string
  phone: string
  service: string
  budget: string
  details: string
}

type FormSubmitResponse = {
  success?: boolean | string
  message?: string
}

export async function sendContactEmail(contact: ContactEmail): Promise<void> {
  const response = await fetch(FORM_SUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...contact,
      _subject: `Nueva solicitud de contacto de ${contact.name}`,
      _replyto: contact.email,
    }),
  })

  const result = (await response.json().catch(() => null)) as FormSubmitResponse | null

  if (!response.ok || result?.success === false || result?.success === 'false') {
    throw new Error(result?.message || 'No se pudo enviar el correo. Inténtalo de nuevo.')
  }
}
