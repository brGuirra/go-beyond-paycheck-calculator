export const formatToCurrency = (value: number) => {
  const salary = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return salary;
};
