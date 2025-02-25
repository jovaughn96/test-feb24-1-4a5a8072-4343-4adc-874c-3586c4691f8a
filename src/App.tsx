import * as React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const Links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const HandleInvertColors = () =
