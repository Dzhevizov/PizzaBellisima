export default function formatPrice(priceBGN) {
  const priceEUR = priceBGN / 1.95; // фиксиран курс BGN -> EUR

  const formattedBGN = `${priceBGN.toFixed(2)} лв.`;
  const formattedEUR = `${priceEUR.toFixed(2)} €`;

  return `${formattedBGN} / ${formattedEUR}`;
}
