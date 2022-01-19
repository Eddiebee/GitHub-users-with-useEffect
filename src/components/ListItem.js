export const ListItem = ({ item }) => {
  const { id, avatar_url, login, html_url } = item;
  return (
    <li key={id} className="user">
      <img src={avatar_url} alt={login + "avatar"} className="avatar" />
      <div>
        <h2 className="name">{login}</h2>
        <a href={html_url} className="profile-link">
          Profile
        </a>
      </div>
    </li>
  );
};
