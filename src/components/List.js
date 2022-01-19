import { ListItem } from "./ListItem";

const List = ({ list }) => {
  return (
    <ul className="users-list">
      {list.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  );
};

export default List;
