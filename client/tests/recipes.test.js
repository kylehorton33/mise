import { expect, test } from '@playwright/test'

test.beforeEach('go to recipe page', async ({ page }) => {
  await page.goto('/recipes')
})

test('recipe content is available', async ({ page }) => {
  await expect(page.getByRole('heading')).toHaveText('Recipes')
  await expect(
    page.getByTestId('recipe-list').getByRole('listitem')
  ).toHaveCount(2)
})
