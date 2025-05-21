import { test, expect } from '@playwright/test';

test('Fill text box form and validate output', async ({ page }) => {
  // 1. Navigate to the page
  await page.goto('https://demoqa.com/text-box');

  // 2. Fill in the form
  await page.locator('#userName').fill('Kadhija QA');
  await page.locator('#userEmail').fill('kadhija2010engg@gmail.com');
  await page.locator('#currentAddress').fill('100 East Township');
  await page.locator('#permanentAddress').fill('London');

  // 3. Submit the form
  await page.locator('#submit').click();

  // 4. Assertions - Validate output
  await expect(page.locator('#output #name')).toHaveText('Name:Kadhija QA');
  await expect(page.locator('#output #email')).toHaveText('Email:kadhija2010engg@gmail.com');
  await expect(page.locator('#output #currentAddress')).toHaveText('Current Address :100 East Township');
  await expect(page.locator('#output #permanentAddress')).toHaveText('Permananet Address :London');
});