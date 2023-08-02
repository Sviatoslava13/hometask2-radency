import { useSelector } from "react-redux";

import CategoryRow from "../components/CategoryRow/CategoryRow";
import Table, { TableColumn } from "../components/Table/Table";
import { CategoryStatictic } from "../redux/interface";
import { getNotes } from "../redux/selectors";

const columns: TableColumn[] = [
  {
    id: "1",
    title: "",
  },
  {
    id: "2",
    title: "Category",
  },
  {
    id: "3",
    title: "Active",
  },
  {
    id: "4",
    title: "Archived",
  },
];

const CategoriesTable = () => {
  const notes = useSelector(getNotes);
  const categories = notes.reduce<CategoryStatictic[]>((acc, note) => {
    const category = acc.find((cat) => cat.name === note.category);

    if (!category) {
      return [
        ...acc,
        {
          name: note.category,
          active: note.archived ? 0 : 1,
          archived: note.archived ? 1 : 0,
        },
      ];
    }

    note.archived ? (category.archived += 1) : (category.active += 1);
    return acc;
  }, []);

  return (
    <Table
      columns={columns}
      data={categories}
      renderRow={(el: CategoryStatictic) => (
        <CategoryRow key={el.name} category={el} />
      )}
    />
  );
};

export default CategoriesTable;
