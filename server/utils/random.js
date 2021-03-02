// Generates numbers like
// 10 210 640 840 620 740
const getRandomPointCount = () => {
  const low = 10 * Math.floor(Math.random() * 10);
  const high = 100 * Math.floor(Math.random() * 10);

  return high + low;
};

const randomItemOf = (items) => items[Math.floor(Math.random() * items.length)];

const randomItemsOf = (items) => items.filter(() => Math.random() > 0.5);

module.exports = {
  getRandomPointCount,
  randomItemOf,
  randomItemsOf,
};
