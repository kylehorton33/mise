export const load = ({ locals }) => {
  console.log('[DEBUG] /layout.server.js', locals)
  if (locals.user) {
    return {
      user: locals.user
    }
  } else {
    return {
      user: undefined
    }
  }
}
