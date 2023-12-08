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

- Navbar/Sidebar (change links depending on user)
- Login Page, simulate user, Logout
- Planned Routes (ingrediends, recipes, about)