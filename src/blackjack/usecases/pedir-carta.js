/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo: ['3S','5H','10S','6D','4C']
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0)
    throw new Error("deck es obligatorio como un arreglo de string");

  const carta = deck.pop();
  return carta;
};
