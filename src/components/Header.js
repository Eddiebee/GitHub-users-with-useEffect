const Header = ({ title, icon }) => {
  return (
    <header>
      {icon}
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
