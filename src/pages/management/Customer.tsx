/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/TableHOC";

interface IDataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  role: "Admin" | "User";
}

const columns: Column<IDataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
];

const tableData: IDataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={
          "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
        }
        alt="User"
      />
    ),
    name: "Aman",
    email: "aman@gmail.com",
    gender: "Male",
    role: "Admin",
  },
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={
          "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        }
        alt="User"
      />
    ),
    name: "Shobhita",
    email: "shobhita@gmail.com",
    gender: "Female",
    role: "User",
  },
];

function Customer() {
  const [data, setData] = useState<IDataType[] | []>(tableData);
  const table = useCallback(
    TableHOC<IDataType>(columns, data, "dashboard-product-box", "Customer"),
    []
  );
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{table()}</main>
    </div>
  );
}

export default Customer;
