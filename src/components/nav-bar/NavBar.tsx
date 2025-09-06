import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.scss';

interface INavItem {
  id: string;
  name: string;
}

interface IProps {
  items: INavItem[];
  selectedItemId: string;
  userSelectedView: (viewId: string) => void;
}

const NavBar: React.FC<IProps> = ({ items, selectedItemId, userSelectedView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    userSelectedView(id);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="content nav-wrapper">
        <button className={`navbar-hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <MenuIcon />
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          {items.map((item) => (
            <li key={item.id} className={`navbar-item ${selectedItemId === item.id ? 'active' : ''}`}>
              <button className="navbar-link" onClick={() => handleItemClick(item.id)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
