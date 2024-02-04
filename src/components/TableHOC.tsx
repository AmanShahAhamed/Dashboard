import {
  useTable,
  Column,
  TableOptions,
  usePagination,
  useSortBy,
} from "react-table";

function TableHOC<T extends object>(
  columns: Column<T>[],
  data: T[],
  containerClassName: string,
  heading: string
) {
  return function HOC() {
    const option: TableOptions<T> = {
      columns,
      data,
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable(option, useSortBy, usePagination);

    return (
      <div className={containerClassName}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((hGroup) => (
              <tr {...hGroup.getHeaderGroupProps()}>
                {hGroup.headers.map((col: any) => (
                  <th {...col.getHeaderProps(col.getSortByToggleProps())}>
                    {col.render("Header")}
                    {col.isSorted && (
                      <span>{col.isSortedDesc ? "↑" : "↓"}</span>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
