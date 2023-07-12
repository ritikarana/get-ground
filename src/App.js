import React from 'react';
import { Provider } from 'react-redux';
import './style.css';

import Book from './views/Book';

export default function App() {
  return (
      <div className="container py-4 app" data-test-id='book-list-component'>
        <Book />
      </div>
  );
}
