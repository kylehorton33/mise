import { error, redirect } from '@sveltejs/kit'

export const actions = {
  login: async ({ request }) => {
    const body = Object.fromEntries(await request.formData())

    try {
      // log in the user
      console.log(body)
    } catch (err) {
      console.log(err)
      throw error(err.status, err.message)
    }
    throw redirect(303, '/auth/my-account')
  }
}
