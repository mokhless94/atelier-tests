const total = (items = []) => items.reduce((somme, item) => {
  if (item.prix < 0) {
    throw new Error('Prix négatif');
  }

  if (item.qte <= 0) {
    return somme;
  }

  return somme + item.prix * item.qte;
}, 0);

module.exports = { total };