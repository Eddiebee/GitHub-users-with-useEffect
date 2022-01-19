import { ListItem } from "./ListItem";

const List = ({ list, badge }) => {
  return (
    <ul className="users-list">
      {list.map((item) => (
        <ListItem key={item.id} item={item} badge={badge} />
      ))}
    </ul>
  );
};

export default List;
