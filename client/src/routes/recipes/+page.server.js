export const load = () => {
  return {
    recipes: [
      { name: 'ready', missing: 0, ingredients: ['a', 'b'] },
      { name: 'uno', missing: 1, ingredients: ['a', 'b', 'c'] },
      { name: 'dos', missing: 2, ingredients: ['b'] },
      { name: 'tres', missing: 3, ingredients: ['a'] }
    ]
  }
}
