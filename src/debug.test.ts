import { expect, test } from "vitest";
import { isDebugOn } from ".";
test("debug is false", () => expect(isDebugOn()).toBeFalsy());
