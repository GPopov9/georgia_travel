import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

render(<App />, document.getElementById('root'));
