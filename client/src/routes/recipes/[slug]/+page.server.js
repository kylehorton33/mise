export const load = () => {
  return {
    recipe: {
      name: 'negroni',
      color: '#820202',
      ingredients: [
        { name: 'gin', inStock: true, unit: 'oz' },
        { name: 'Campari', inStock: true, unit: 'oz' },
        { name: 'sweet vermouth', inStock: true, unit: 'oz' }
      ]
    }
  }
}
