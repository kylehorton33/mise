import { expect, test } from '@playwright/test'

test.beforeEach('go to ingredient page', async ({ page }) => {
  await page.goto('/ingredients')
})

test('ingredient content is available', async ({ page }) => {
  await expect(page.getByRole('heading')).toHaveText('Ingredients')
  await expect(
    page.getByTestId('ingredient-list').getByRole('listitem')
  ).toHaveCount(3)
})
