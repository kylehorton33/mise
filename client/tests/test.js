import { expect, test } from '@playwright/test'

test('index page has expected navbar', async ({ page }) => {
  await page.goto('/')
  const navbar = page.getByRole('navigation')
  await expect(navbar).toBeVisible()
  await expect(navbar.getByText('mise')).toBeVisible()
  await expect(navbar.getByAltText('search-icon')).toBeVisible()
  await expect(navbar.getByAltText('menu-icon')).toBeVisible()
})

test('login link is in sidebar', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByAltText('menu-icon').click()

  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
})

test('auth routes exist', async ({ request, page }) => {
  const login = await request.get('/auth/login')
  const myAccount = await request.get('/auth/my-account')
  const auth = await page.goto('/auth')

  expect(myAccount.ok()).toBeTruthy()
  expect(login.ok()).toBeTruthy()
  expect(auth.url()).toContain('/auth/my-account')
})

test('login page works', async ({ page }) => {
  await page.goto('/auth/login')
  await page.getByLabel('email').fill('user@example.com')
  await page.getByLabel('password').fill('password')
  await page.getByRole('button', { name: 'Login' }).click()

  await expect(
    page.getByRole('heading', { name: 'user logged in' })
  ).toBeVisible()
})
