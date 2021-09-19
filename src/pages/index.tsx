import type { NextPage } from 'next';
import Head from 'next/head';

import { VStack, Heading } from '@chakra-ui/react';
import { EmployeeForm } from '../components/EmployeeForm';
import { Table } from '../components/Table';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Calcular salário</title>
      </Head>

      <VStack
        as="main"
        maxW={1440}
        mx="auto"
        textAlign="center"
        py="12"
        spacing="12"
      >
        <Heading as="h3" fontSize="5xl">
          Calcular salário
        </Heading>
        <EmployeeForm />
        <Heading as="h3" fontSize="5xl">
          Salários
        </Heading>
        <Table />
      </VStack>
    </div>
  );
};

export default Home;
