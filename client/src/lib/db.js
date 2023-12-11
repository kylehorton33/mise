export const recipes = [
  {
    name: 'negroni',
    color: '#820202',
    ingredientLines: [
      {
        quantity: 1,
        ingredient: { name: 'gin', inStock: true, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'Campari', inStock: true, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'sweet vermouth', inStock: true, unit: 'oz' }
      }
    ]
  },
  {
    name: 'daiquiri',
    color: '#5fad47',
    ingredientLines: [
      {
        quantity: 1,
        ingredient: { name: 'rum', inStock: true, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'simple syrup', inStock: false, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'lime juice', inStock: true, unit: 'oz' }
      }
    ]
  },
  {
    name: 'Last Word',
    color: '#7fb820',
    ingredientLines: [
      {
        quantity: 1,
        ingredient: { name: 'gin', inStock: true, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'green Chartreuse', inStock: true, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'maraschino liquer', inStock: false, unit: 'oz' }
      },
      {
        quantity: 1,
        ingredient: { name: 'lime juice', inStock: true, unit: 'oz' }
      }
    ]
  }
]
