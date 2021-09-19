import { createContext, useContext, ReactNode, useState } from 'react';

const PayrollContext = createContext<PayrollContextData>(
  {} as PayrollContextData
);

type Employee = {
  name: string;
  fixedSalary: string;
  totalSalesInMonth: string;
};

type Paycheck = {
  name: string;
  paycheck: number;
};

type PayrollContextData = {
  payroll: Paycheck[];
  generatePayroll: ({ name, fixedSalary, totalSalesInMonth }: Employee) => void;
  deletePayrollItem: (deletedItem: number) => void;
};

type PayrollContextProviderProps = {
  children: ReactNode;
};

export function PayrollContextProvider({
  children,
}: PayrollContextProviderProps) {
  const [payroll, setPayroll] = useState<Paycheck[]>([]);

  function calculatePaycheck(sales: number, salary: number) {
    return sales * 0.15 + salary;
  }

  function generatePayroll({ name, fixedSalary, totalSalesInMonth }: Employee) {
    const paycheck = {
      name,
      paycheck: calculatePaycheck(
        Number(totalSalesInMonth),
        Number(fixedSalary)
      ),
    };

    setPayroll([...payroll, paycheck]);
  }

  function deletePayrollItem(deletedItem: number) {
    const newPayroll = payroll.filter((paycheck, index) => {
      if (deletedItem !== index) {
        return paycheck;
      }
    });

    setPayroll([...newPayroll]);
  }

  return (
    <PayrollContext.Provider
      value={{
        payroll,
        generatePayroll,
        deletePayrollItem,
      }}
    >
      {children}
    </PayrollContext.Provider>
  );
}

export function usePayrollContext() {
  const context = useContext(PayrollContext);

  return context;
}
