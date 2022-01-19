export const ListItem = ({ item, badge }) => {
  const { avatar_url, login, html_url } = item;
  return (
    <li className="user">
      <img
        src={avatar_url}
        alt={login + "avatar"}
        className="avatar"
        max-width={90}
      />
      <div>
        <h2 className="name">{login}</h2>
        <a href={html_url} className="profile-link">
          Profile
        </a>
      </div>
      <span className="badge">{badge}</span>
    </li>
  );
};
