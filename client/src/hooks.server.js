export const handle = async ({ event, resolve }) => {
  const token = event.cookies.get('user')

  try {
    event.locals.user = token
  } catch (err) {
    console.error('[ERROR] hooks.server.js', err)
  }

  const response = await resolve(event)

  return response
}
