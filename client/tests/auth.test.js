import { expect, test } from '@playwright/test'

test.beforeEach('login user', async ({ page }) => {
  await page.goto('/auth/login')
  await page.getByLabel('email').fill('user@example.com')
  await page.getByLabel('password').fill('password')
  await page.getByRole('button', { name: 'Login' }).click()
})

test('login success', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'user logged in' })
  ).toBeVisible()
})
