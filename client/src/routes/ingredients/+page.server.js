export const load = () => {
  return {
    ingredients: [
      { name: 'Campari', inStock: true },
      { name: 'gin', inStock: true },
      { name: 'lime juice', inStock: false },
      { name: 'rum', inStock: false },
      { name: 'simple syrup', inStock: true },
      { name: 'sweet vermouth', inStock: true }
    ]
  }
}

export const actions = {
  stock: async ({ request }) => {
    const body = Object.fromEntries(await request.formData())

    // set stock of ingredient
    console.log(body)
  }
}
