import { error, redirect } from '@sveltejs/kit'

export function load() {
  throw redirect(302, '/auth/my-account')
}

export const actions = {
  login: async ({ cookies, request }) => {
    const body = Object.fromEntries(await request.formData())

    try {
      // simulate user login
      if (body.email === 'user@example.com' && body.password === 'password') {
        cookies.set('user', body.email, { path: '/' })
      }
    } catch (err) {
      console.log('[ERROR] /auth/page.server.js', err)
      throw error(err.status, err.message)
    }
    throw redirect(303, '/')
  }
}
