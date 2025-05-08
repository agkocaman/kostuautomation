import { test } from "@playwright/test";

const Core = {
  create(name: string, config: any) {
    return (() => {

      if (config.E2E) {
        test.describe(`${name}`, async () => {
          config.beforeAll && test.beforeAll(config.beforeAll);
          config.afterAll && test.afterAll(config.afterAll);
          config.beforeEach && test.beforeEach(config.beforeEach);
          config.afterEach && test.afterEach(config.afterEach);
          await Promise.all(
            Object.keys(config.E2E).map((c) => {
              let testContent = config.E2E[c];
              let desc = `E2E- ${c} - ${testContent.notes} - ${testContent.tag}`;
              let skip = testContent.skip || config.E2E.skip;
              let only = testContent.only;
              if (skip) {
                test.skip(desc, async ({ page, context, browser }) => {
                  return testContent.run({ page, context, browser });
                });
              }
              if (only) {
                test.only(desc, async ({ page, context, browser }) => {
                  return testContent.run({ page, context, browser });
                });
              }
              if (!skip && !only) {
                test(desc, async ({ page, context, browser }) => {
                  return testContent.run({ page, context, browser });
                });
              }
            })
          );
        });
      }
    })();
  },
};

export default Core;