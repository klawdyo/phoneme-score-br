import { score } from "./index";

describe("score", () => {
  test("banana", () => expect(score("banana")).toBe(1));
  test("claudio", () => expect(score("claudio")).toBe(1));
  test("bronha", () => expect(score("bronha")).toBe(1));
  test("normal", () => expect(score("normal")).toBe(1));
  test("excecao", () => expect(score("excecao")).toBe(1));
  test("homem", () => expect(score("homem")).toBe(1));
  test("coisa", () => expect(score("coisa")).toBe(1));
  test("liquidificador", () => expect(score("liquidificador")).toBe(1));
  test("agua", () => expect(score("agua")).toBe(1));
  test("porteira", () => expect(score("porteira")).toBe(1));
  test("assu", () => expect(score("assu")).toBe(1));
  test("mossoro", () => expect(score("mossoro")).toBe(1));
  test("ipanguacu", () => expect(score("ipanguacu")).toBe(1));
  test("afonsobezerra", () => expect(score("afonsobezerra")).toBe(1));
  test("bonzinho", () => expect(score("bonzinho")).toBe(1));
  test("anormais", () => expect(score("anormais")).toBe(1));
  test("cinzenta", () => expect(score("cinzenta")).toBe(1));
  test("inscreve", () => expect(score("inscreve")).toBe(1));
  test("queens", () => expect(score("queens")).toBe(1));
  test("trans", () => expect(score("trans")).toBe(1));
});
