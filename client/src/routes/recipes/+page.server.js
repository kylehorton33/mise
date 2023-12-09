export const load = () => {
  const allRecipes = [
    {
      name: 'ready',
      ingredients: [
        { name: 'a', inStock: true, unit: 'oz' },
        { name: 'b', inStock: true, unit: 'oz' }
      ]
    },
    {
      name: 'uno',
      ingredients: [
        { name: 'a', inStock: true, unit: 'oz' },
        { name: 'b', inStock: false, unit: 'oz' }
      ]
    },
    {
      name: 'dos',
      ingredients: [
        { name: 'a', inStock: true, unit: 'oz' },
        { name: 'b', inStock: true, unit: 'oz' }
      ]
    },
    {
      name: 'tres',
      ingredients: [
        { name: 'a', inStock: false, unit: 'oz' },
        { name: 'b', inStock: false, unit: 'oz' },
        { name: 'c', inStock: false, unit: 'oz' }
      ]
    }
  ]

  allRecipes.forEach((r) => {
    r.missing = r.ingredients.reduce((n, i) => n + +i.inStock, 0)
  })

  allRecipes.sort((a, b) => a.missing - b.missing)

  return {
    recipes: allRecipes
  }
}
