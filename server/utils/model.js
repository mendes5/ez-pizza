const { randomItemOf, randomItemsOf } = require("./random");

const isRecommendation = (theirs, ours) => {
  const sizeIsEqual = ours.size === theirs.size;
  const borderIsEqual = ours.border === theirs.border;
  const flavourIsEqual = ours.flavour === theirs.flavour;
  const extraIsEqual = ours.extra.every((id) => theirs.extra.includes(id));

  return sizeIsEqual && borderIsEqual && flavourIsEqual && extraIsEqual;
};

const currency = (value) => ({
  value,
  currency: "BRL",
});

const uuid = (
  mask = "00000000-0000-0000-0000-000000000000",
  values = "0123456789abcdef"
) =>
  mask.replace(/0/g, () => values[Math.floor(Math.random() * values.length)]);

const OPTIONS = {
  sizes: [
    { id: uuid(), name: "Pequena", cost: currency(10.0) },
    { id: uuid(), name: "Média", cost: currency(20.0) },
    { id: uuid(), name: "Grande", cost: currency(30.0) },
  ],
  borders: [
    { id: uuid(), name: "Borda de Mussarela", cost: currency(10.0) },
    { id: uuid(), name: "Borda de Requeijão", cost: currency(10.0) },
    { id: uuid(), name: "Borda de Catupiry", cost: currency(12.0) },
    { id: uuid(), name: "Borda de Chedar", cost: currency(10.0) },
    { id: uuid(), name: "Borda de Cream Chesse", cost: currency(10.0) },
    { id: uuid(), name: "Massa Integral", cost: currency(0.0) },
    { id: uuid(), name: "Massa Fina Tradicional", cost: currency(0.0) },
  ],
  extras: [
    { id: uuid(), name: "Extra Tomate/Cebola", cost: currency(1.0) },
    { id: uuid(), name: "Molho Extremo #LetEmKnow", cost: currency(1.0) },
    { id: uuid(), name: "Extra Azeitonas", cost: currency(1.0) },
    { id: uuid(), name: "Extra Queijo", cost: currency(1.0) },
    { id: uuid(), name: "Extra Temperos", cost: currency(1.0) },
    { id: uuid(), name: "Extra Molho", cost: currency(1.0) },
  ],
  flavours: [
    {
      id: uuid(),
      name: "Pizza torresmo de rolo",
      description:
        "Mussarela geleia de pimenta requeijão e lascas de torresmo de rolo",
      cost: currency(72.0),
    },
    {
      id: uuid(),
      name: "Pizza Escondidinho",
      description:
        "Carne seca, requeijão, purê de mandioca, mussarela e parmesão",
      cost: currency(73.0),
    },
    {
      id: uuid(),
      name: "Crocante",
      description:
        "Frango desfiado, presunto, mussarela, milho, requeijão, bacon e batata palha",
      cost: currency(72.0),
    },
    {
      id: uuid(),
      name: "Mexicana",
      description:
        "Mussarela, calabresa, molho de pimenta, ervilha, palmito, tomate, cebola, requeijão e bacon",
      cost: currency(69.0),
    },
    {
      id: uuid(),
      name: "Abobrinha",
      description: "Abobrinha laminada, mussarela e alho poró",
      cost: currency(58.0),
    },
    {
      id: uuid(),
      name: "Vegetariana",
      description:
        "Ervilha, milho, brócolis, palmito, azeitonas pretas, cream cheese e mussarela",
      cost: currency(58.0),
    },
    {
      id: uuid(),
      name: "Palmito",
      description: "Mussarela e palmito picado",
      cost: currency(65.0),
    },
    {
      id: uuid(),
      name: "Margherita",
      description: "Mussarela, tomate e manjericão",
      cost: currency(56.0),
    },
    {
      id: uuid(),
      name: "Batata Cheddar Bacon",
      description: "Mussarela, batatas, cheddar e bacon",
      cost: currency(66.0),
    },
  ],
};

const getRandomRecommendation = () => ({
  size: randomItemOf(OPTIONS.sizes).id,
  border: randomItemOf(OPTIONS.borders).id,
  flavour: randomItemOf(OPTIONS.flavours).id,
  extra: randomItemsOf(OPTIONS.extras).map((option) => option.id),
});

module.exports = {
  isRecommendation,
  currency,
  uuid,
  getRandomRecommendation,
  OPTIONS,
};
