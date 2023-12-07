import { expect, test } from '@playwright/test'

test('index page has expected navbar', async ({ page }) => {
  await page.goto('/')
  const navbar = page.getByRole('navigation')
  await expect(navbar).toBeVisible()
  await expect(navbar.getByText('mise')).toBeVisible()
  await expect(navbar.getByAltText('search-icon')).toBeVisible()
  await expect(navbar.getByAltText('menu-icon')).toBeVisible()
})
