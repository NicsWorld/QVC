import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './SocketContext';
import './styles.css';

reactDom.render(<App />, document.getElementById('root'));