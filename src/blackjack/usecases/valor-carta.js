/**
 * Esta función me permite tomar el valor de una carta
 * @param {String} carta Ejemplo: '3S'
 * @returns {Number} retorna el valor de una carta
 */

export const valorCarta = (carta) => {
  if (!carta) throw new Error("carta es obligatorio como un string");

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
