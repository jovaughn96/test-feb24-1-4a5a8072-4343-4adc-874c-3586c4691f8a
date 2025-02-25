import * as React from 'react';

interface HeaderProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const Header: React.FC<HeaderProps
