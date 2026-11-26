interface ItemNota {
  cfop: string;
  cst: string;
  valor: number;
}

const item: ItemNota = {
  cfop: "5102",
  cst: "00",
  valor: 150.00,
};

console.log(`Cfop: ${item.cfop} | Cst: ${item.cst} | Valor: ${item.valor}`);