import { expect, test } from '@playwright/test'

test('index page has expected navbar', async ({ page }) => {
  await page.goto('/')
  const navbar = page.getByRole('navigation')
  await expect(navbar).toBeVisible()
  await expect(navbar.getByText('mise')).toBeVisible()
  await expect(navbar.getByAltText('search-icon')).toBeVisible()
  await expect(navbar.getByAltText('menu-icon')).toBeVisible()
})

test('expected links are in sidebar', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByAltText('menu-icon').click()

  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Ingredients' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Recipes' })).toBeVisible()
})

test('auth routes exist', async ({ request, page }) => {
  const login = await request.get('/auth/login')
  const myAccount = await request.get('/auth/my-account')
  const auth = await page.goto('/auth')

  expect(myAccount.ok()).toBeTruthy()
  expect(login.ok()).toBeTruthy()
  expect(auth.url()).toContain('/auth/my-account')
})

test('other routes exist', async ({ request }) => {
  const ingredients = await request.get('/ingredients')
  const recipes = await request.get('/recipes')
  const about = await request.get('/about')

  expect(ingredients.ok()).toBeTruthy()
  expect(recipes.ok()).toBeTruthy()
  expect(about.ok()).toBeTruthy()
})
