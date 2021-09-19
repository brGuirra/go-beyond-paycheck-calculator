import {
  Table as ChakraTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from '@chakra-ui/react';

import { usePayrollContext } from '../../context/payroll';

import { formatToCurrency } from '../../utils/formatToCurrency';

export const Table = () => {
  const { payroll, deletePayrollItem } = usePayrollContext();

  const handleDelete = (deletedItem: number) => {
    deletePayrollItem(deletedItem);
  };

  return (
    <ChakraTable variant="simple">
      <Thead>
        <Tr>
          <Th>Funcinário</Th>
          <Th>Salário com comissão</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {payroll &&
          payroll.map((paycheck, index) => (
            <Tr key={index}>
              <Td>{paycheck.name}</Td>
              <Td>{formatToCurrency(paycheck.paycheck)}</Td>
              <Td>
                <Button onClick={() => handleDelete(index)} colorScheme="red">
                  Deletar
                </Button>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </ChakraTable>
  );
};
