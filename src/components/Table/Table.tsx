import { TableContainer, Th, Thead, Tr } from "./Table.styled";

export interface TableColumn {
  title: string | JSX.Element;
  id: string;
  colSpan?: number;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  renderRow: (el: any) => JSX.Element;
}

const Table: React.FC<TableProps> = ({ columns, data, renderRow }) => {
  return (
    <TableContainer>
      <Thead>
        <Tr>
          {columns.map((col) => (
            <Th key={col.id} id={col.id} colSpan={col.colSpan}>
              {col.title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <tbody>{data.map((el: any) => renderRow(el))}</tbody>
    </TableContainer>
  );
};

export default Table;
