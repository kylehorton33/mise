import { recipes } from '$lib/db'

export const load = () => {
  recipes.forEach((r) => {
    r.missing = r.ingredients.reduce((n, i) => n + +!i.inStock, 0)
  })

  recipes.sort((a, b) => a.missing - b.missing)

  return {
    recipes: recipes
  }
}
