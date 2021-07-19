import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.getElementById('root');
  render(<App />, rootNode);
});
