const phonems = [
  /^(nh|ss|rr|ch|lh|th)[aeiou]/, // nha, ssa, rra, cha
  /^[bcdfgkptv][rl][aeiou](ns)?/, // bri, cla
  /^[bcdfghjklmnprstvxz][aeiou][srlmnx]?/, // bar, 
  /^qu[aeiou]/,
  /^[aeiou]ns/,
  /^[aeiou][srlmnx]/,
  /^[aeiou]/,
];

const debug = false;
const log = (...params: any[]) => (debug ? console.log(...params) : undefined);

export function score(word: string): number {
  let success = 0;
  let index = 0;
  const wordLength = word.length;

  while (index < wordLength) {
    const result = meupau(word, index, phonems);
    log("result", result);

    if (!result.length) {
      index++;
      log("nao achou",  result);
    } else {
      index = result.index;
      success += result.length;
      log("achou",result);
    }

    if (index >= wordLength) break;
  }

  log("success", success);
  log("word.length", wordLength);

  return success / wordLength;
}

function meupau(word: string, index: number, phonems: RegExp[]): { index: number; length: number } {
  const substr = word.substring(index);
  let length = 0;

  log("verificando o", index, substr);

  for (const rgx of phonems) {
    const result = rgx.exec(substr);
    log("analise do regex", result);

    if (result && result[0]) {
      const increase = result[0].length + result.index;
      log("localizou", result[0], result[0].length);
      log("index localizado", result.index);
      log("increase", increase);

      index += increase;
      length = result[0].length;
      break;
    }
  }

  return { index, length };
}
