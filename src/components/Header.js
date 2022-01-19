const Header = ({ title, icon, position }) => {
  return (
    <header className={position > 208 ? "deep" : ""}>
      {icon}
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
