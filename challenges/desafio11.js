db.produtos.find(
  { $and: [{ nome: { $ne: "McChicken" } }, { nome: { $ne: "Big Mac" } }] },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 }
);
