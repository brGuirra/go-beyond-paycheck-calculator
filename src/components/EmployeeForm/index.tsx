import { Formik } from 'formik';

import * as Yup from 'yup';

import { VStack, Button } from '@chakra-ui/react';

import { InputControl } from '../InputControl';

import { usePayrollContext } from '../../context/payroll';

type Employee = {
  name: string;
  fixedSalary: string;
  totalSalesInMonth: string;
};

export const EmployeeForm = () => {
  const { generatePayroll } = usePayrollContext();

  const initialValues = { name: '', fixedSalary: '', totalSalesInMonth: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Este campo é obrigatório'),
    fixedSalary: Yup.string().required('Este campo é obrigatório'),
    totalSalesInMonth: Yup.number()
      .positive('O total de vendas deve ser um número positivo')
      .required('Este campo é obrigatório'),
  });

  const handleSubmit = (values: Employee) => {
    const employee = {
      name: values.name,
      fixedSalary: values.fixedSalary,
      totalSalesInMonth: values.totalSalesInMonth,
    };

    generatePayroll(employee);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <VStack
          as="form"
          maxW={800}
          w="100%"
          mx="auto"
          mt="12"
          spacing="8"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputControl
            inputProps={{
              type: 'text',
            }}
            name="name"
            label="Nome do funcionário"
          />
          <InputControl
            inputProps={{
              type: 'number',
            }}
            name="fixedSalary"
            label="Salário fixo"
          />
          <InputControl
            inputProps={{
              type: 'number',
            }}
            name="totalSalesInMonth"
            label="Valor das vendas no mês"
          />

          <Button type="submit" w="100%" p="6" colorScheme="green">
            Calcular salário
          </Button>
        </VStack>
      )}
    </Formik>
  );
};
