function SymbolGenerator(OnlySymbol) {
  let Symbols = "qwertyuiopasdfghjklzxcvbnm1234567890";

  if (OnlySymbol) {
    Symbols = "qwertyuiopasdfghjklzxcvbnm";
  }


  function RandomNumForSymbol() {
    const dn = OnlySymbol ? 26 : 36;
    const result = Math.floor(Math.random() * dn);

    return result.toString();
  }

  const rndResult = RandomNumForSymbol();

  let symbol = Symbols.charAt(rndResult);

  if (RandomNumForSymbol() > RandomNumForSymbol()) {
    symbol = Symbols[RandomNumForSymbol()].toUpperCase();
  }

  if (!symbol) {
    symbol = Symbols[RandomNumForSymbol()];
  }

  return symbol;
}


class Idder {
  static gen() {
    return new Promise((res) => {
      const S = SymbolGenerator;

      return res({
        id: `${S() + S() + S() + S() + S() + S() + S()}-${
          S() + S() + S() + S() + S() + S() + S()
        }-${S() + S() + S() + S() + S() + S() + S()}-${
          S() + S() + S() + S() + S() + S() + S()
        }`,
        date: new Date(),
      });
    });
  }
}

module.exports = Idder;
