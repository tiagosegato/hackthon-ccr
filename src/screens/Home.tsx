import React, { lazy } from 'react';
import '../App.css';
const PanelMap = lazy(() => import('./PanelMap.js'));

const Home: React.FC = () => <PanelMap />;

export default Home;