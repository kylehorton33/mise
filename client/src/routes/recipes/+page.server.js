import { recipes } from '$lib/db'

export const load = () => {
  recipes.forEach((r) => {
    r.missing = r.ingredientLines.reduce(
      (n, l) => n + +!l.ingredient.inStock,
      0
    )
  })

  recipes.sort((a, b) => a.missing - b.missing)

  return {
    recipes: recipes
  }
}
