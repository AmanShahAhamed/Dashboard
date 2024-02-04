import TableHOC from "../components/TableHOC";
import { Column } from "react-table";

interface IDateType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

const columns: Column<IDateType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

function DashboardTable({ data = [] }: { data: IDateType[] }) {
  return TableHOC<IDateType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
}

export default DashboardTable;
