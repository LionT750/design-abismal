import { test, expect, type Locator, type Page } from "@playwright/test";

const loadingOverlay = (page: Page) => page.locator("div.fixed.inset-0.z-50");

const iconWithTitle = (scope: Locator, title: string) =>
  scope.locator("svg").filter({ has: scope.page().locator("title", { hasText: title }) });

test.describe("Landing page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await expect(loadingOverlay(page)).toBeHidden();
  });

  test("has the site title", async ({ page }) => {
    await expect(page).toHaveTitle("Design Abismal");
  });

  test("loading overlay disappears and scrolling is unlocked", async ({ page }) => {
    await expect(loadingOverlay(page)).toBeHidden();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  });

  test("hero section shows the brand and social links", async ({ page }) => {
    const hero = page.locator("#home");
    await expect(hero).toBeVisible();
    await expect(hero.getByRole("button", { name: /ABISMAL/ })).toBeVisible();
    await expect(iconWithTitle(hero, "Go to my GitHub")).toBeVisible();
    await expect(iconWithTitle(hero, "Go to my LinkedIn")).toBeVisible();
  });

  test("down arrow scrolls to About and updates the URL", async ({ page }) => {
    await page.locator('a[href="#about"]').click({ force: true });

    const about = page.locator("#about");
    await expect(about).toBeInViewport({ ratio: 0.5 });
    await expect(page).toHaveURL(/#about$/);
    await expect(about.getByRole("heading", { name: "About Me" })).toBeVisible();
  });

  test("up arrow scrolls back to Home and clears the hash", async ({ page }) => {
    await page.locator('a[href="#about"]').click({ force: true });
    await expect(page).toHaveURL(/#about$/);

    await page.locator('a[href="#home"]').click({ force: true });
    await expect(page.locator("#home")).toBeInViewport({ ratio: 0.5 });
    await expect(page).toHaveURL(/\/$/);
  });

  test("about section lists the tech stack", async ({ page }) => {
    const items = page.locator("#about li");
    await expect(items).toHaveCount(14);
    await expect(items.filter({ hasText: "Next.js" })).toHaveCount(1);
  });
});
