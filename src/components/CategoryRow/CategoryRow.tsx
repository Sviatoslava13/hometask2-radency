import { CategoryStatictic } from "../../redux/interface";
import Icon from "../Icon/Icon";
import { Td, Tr } from "../NoteRow/NoteRow.styled";

interface CategoryRowProps {
  category: CategoryStatictic;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ category }) => {
  return (
    <Tr>
      <Td>
        <Icon category={category.name} />
      </Td>
      <Td>{category.name}</Td>
      <Td>{category.active}</Td>
      <Td>{category.archived}</Td>
    </Tr>
  );
};

export default CategoryRow;
