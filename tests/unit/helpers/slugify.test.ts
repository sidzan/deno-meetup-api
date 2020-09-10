import { assertStrictEquals } from "../../../deps.ts";

import { slugify } from "../../../helpers/slugify.js";

Deno.test(`should trim " - " from start and end of text`, () => {
  assertStrictEquals(
    slugify(`-some test string-`),
    "some-test-string",
  );
});
