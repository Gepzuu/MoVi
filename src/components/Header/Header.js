import "./Header.css";

const Header = () => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      window.scroll(0, 0);
    }
  };

  return (
    <span
      onClick={() => window.scroll(0, 0)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="header"
    >
      {/* Add any content or text for the header here */}
    </span>
  );
};

export default Header;
