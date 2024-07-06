function NavBar({ isOpen, onClose }) {
  const toggleNav = () => {
    onClose();
  };

  return (
    <aside className={isOpen ? "nav open" : "nav"}>
      <button
        className="material-symbols-outlined close-btn"
        onClick={toggleNav}
      >
        <span>close</span>
      </button>
      <ul className="navList">
        <a href="#products">
          <li>Products</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </aside>
  );
}

export default NavBar;
