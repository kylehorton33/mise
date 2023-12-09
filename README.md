# Set Up `client/`

- Svelte
- ESLint, Prettier
- Playwright, Vitest
- TailwindCSS, daisyUI

```
npm create svelte@latest client -y
-- Skeleton project (app template)
-- No (Add type checking with TypeScript)
-- Add: ESLint, Prettier, Playwright, Vitest
cd client/
npm i
npx svelte-add@latest tailwindcss --tailwindcss-daisyui
npm i
```

# Features

- Navbar/Sidebar (change links depending on user), SVG icons
- Login Page, simulate user, Logout
- Ingredients/Recipe Pages, filter functionality

# Data Model Plan

### ingredients
- name: 'Campari' (str, unique)
- inStock: true (bool)
- unit: 'oz' (str)

### recipes
- name: 'Campari' (str, unique)
- ingredients: ['Campari', 'gin', 'sweet vermouth'] (mutliref -> ingredients)
- recipe: 'Mix all ingredients' (text)

? maybe include ingredient amounts directly in recipe (repeating data from `ingredients` field but then don't need to deal with new sub-level of query)