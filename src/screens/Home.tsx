import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../App.css';
const PanelMap = lazy(() => import('./PanelMap'));
const MenuSuperior = lazy(() => import('./menu'));

const Home: React.FC = () => (
  <>
   <MenuSuperior />
   <PanelMap />
   </>
);

export default Home;