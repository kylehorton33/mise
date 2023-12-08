export const handle = async ({ event, resolve }) => {
  const token = event.cookies.get('user')

  try {
    event.locals.user = token
  } catch (error) {
    console.log('[ERROR] hooks.server.js', error)
    event.locals.user = null
    event.cookies.delete('user')
  }

  const response = await resolve(event)

  return response
}
