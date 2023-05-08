const Header = ({ activeBoard }) => {
  return (
    <header>
      <h1>{activeBoard.bname}</h1>
    </header>
  );
};
export default Header;
