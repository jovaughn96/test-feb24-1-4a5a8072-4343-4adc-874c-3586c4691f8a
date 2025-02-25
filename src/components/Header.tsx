import * as React from 'react';

interface HeaderProps {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }
