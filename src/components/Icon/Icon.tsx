import { FcIdea } from "react-icons/fc";
import { FaRandom, FaShoppingCart } from "react-icons/fa";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const icons: {
  [key: string]: any;
} = {
  Task: <FaShoppingCart />,
  "Random Thought": <FaRandom />,
  Idea: <FcIdea />,
  Quote: <BiSolidQuoteAltRight />,
};

interface IconProps {
  category: string;
}

const Icon: React.FC<IconProps> = ({ category }) => {
  return <>{icons[category]}</>;
};

export default Icon;
