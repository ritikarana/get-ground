import React from 'react';
import BookList from '../components/BookList';

export default function Book() {
  return (
    <div className="h-100 d-flex flex-column" data-test-id='book-list-component'>
      <BookList />
    </div>
  );
}
