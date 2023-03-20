db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);
// https://acervolima.com/mongodb-operador-de-data-atual-currentdate/

db.produtos.find({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
