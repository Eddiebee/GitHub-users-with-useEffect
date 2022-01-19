import { ListItem } from "./ListItem";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
};

export default List;
