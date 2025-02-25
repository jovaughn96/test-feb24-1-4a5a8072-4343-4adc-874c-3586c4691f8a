import * as React from 'react';

interface HeaderProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
