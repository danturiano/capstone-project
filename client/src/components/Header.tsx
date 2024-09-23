import Button from './Button';
import { Link } from 'react-router-dom';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/help', label: 'Help Centre' },
];

function Header() {
  return (
    <div className="px-2 py-4 flex justify-evenly">
      <h1>ligtascab</h1>
      <div>
        {links.map((link) => {
          return (
            <Link to={link.path}>
              <Button>{link.label}</Button>
            </Link>
          );
        })}
      </div>
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
