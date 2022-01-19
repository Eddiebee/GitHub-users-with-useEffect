export const ListItem = ({ item }) => {
  const { id, avatar_url, login, html_url } = item;
  return (
    <li key={id}>
      <img src={avatar_url} alt={login + "avatar"} />
      <div>
        <h2>{login}</h2>
        <a href={html_url}>View Profile</a>
      </div>
    </li>
  );
};
