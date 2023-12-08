export const handle = async ({ event, resolve }) => {
  event.locals.user = event.cookies.get('user')
  const response = await resolve(event)

  return response
}
