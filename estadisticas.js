function promedio(array) {
  if (array.length === 0) return 0;
  return array.reduce((acc, num) => acc + num, 0) / array.length;
}

function desviacionEstandar(array) {
  if (array.length === 0) return 0;
  const media = promedio(array);
  const sumaCuadrados = array.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return Math.sqrt(sumaCuadrados / array.length);
}

module.exports = {
  promedio,
  desviacionEstandar,
};
