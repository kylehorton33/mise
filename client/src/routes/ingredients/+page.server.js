export const load = () => {
  return {
    ingredients: [
      { name: 'a', inStock: true },
      { name: 'b', inStock: false },
      { name: 'c', inStock: true }
    ]
  }
}

export const actions = {
  stock: async ({ request }) => {
    const body = Object.fromEntries(await request.formData())

    console.log(body)
  }
}
