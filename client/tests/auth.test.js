import { expect, test } from '@playwright/test'

test.beforeEach('login user', async ({ page }) => {
  await page.goto('/auth/login')
  await page.getByLabel('email').fill('user@example.com')
  await page.getByLabel('password').fill('password')
  await page.getByRole('button', { name: 'Login' }).click()
})

test('login success', async ({ page }) => {
  await page.goto('/auth/my-account')
  await expect(page.getByRole('code')).toHaveText('user@example.com')
})

test('logout success', async ({ page }) => {
  await page.getByRole('navigation').getByAltText('menu-icon').click()
  await page.getByRole('button', { name: 'Logout' }).click()
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
  await page.goto('/auth/my-account')
  await expect(page.getByRole('code')).not.toHaveText('user@example.com')
})

test('expected links are in sidebar', async ({ page }) => {
  await page.getByRole('navigation').getByAltText('menu-icon').click()
  await expect(page.getByRole('link', { name: 'Login' })).not.toBeVisible()
  await expect(page.getByRole('link', { name: 'My Account' })).toBeVisible()
  await expect(page.getByAltText('account-icon')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible()
  await expect(page.getByAltText('logout-icon')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Ingredients' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Recipes' })).toBeVisible()
})
