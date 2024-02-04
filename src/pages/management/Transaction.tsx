/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/TableHOC";

interface IDataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
}

const columns: Column<IDataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const tableData: IDataType[] = [
  {
    user: "Aman",
    amount: 45000,
    discount: 400,
    quantity: 12,
    status: <span className="red">Processing</span>,
  },
  {
    user: "Mohit",
    amount: 178655,
    discount: 789,
    quantity: 5,
    status: <span className="green">Delivered</span>,
  },
  {
    user: "Shobhit",
    amount: 78656,
    discount: 1399,
    quantity: 9,
    status: <span className="red">Processing</span>,
  },
];

function Transaction() {
  const [data, setData] = useState<IDataType[] | []>(tableData);
  const table = useCallback(
    TableHOC<IDataType>(columns, data, "dashboard-product-box", "Transactions"),
    []
  );
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{table()}</main>
    </div>
  );
}

export default Transaction;
