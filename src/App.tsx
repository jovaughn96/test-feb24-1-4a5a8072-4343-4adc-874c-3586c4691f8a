import * as React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

function App() {

  const Links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col"
