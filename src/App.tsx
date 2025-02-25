import * as React from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const HandleInvertColors = () =
