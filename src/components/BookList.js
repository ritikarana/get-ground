import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import { useGetBooksMutation } from '../redux/services/bookApi';
import BooksItem from './BooksItem';
import './styles/page.scss'
import BookPagination from './BookPagination';
import { PageSize } from '../constant';


export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const [pagesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);


  const [postData, setPostData] = useState({
    page: currentPage,
    itemsPerPage: PageSize,
    filters: []
  })
  const [getBooks, { isLoading }] = useGetBooksMutation({}, { refetchOnMountOrArgChange: true });

  useEffect(() => {
    setPostData((prevState) => {
      return ({
        ...prevState,
        page: currentPage
      });
    });
  }, [currentPage])

  useEffect(() => {
    getBooks(postData)
      .unwrap()
      .then(() => { })
      .then((error) => {
        console.log(error)
      })
  }, [postData])

  function debounce(func, wait) {
      let timerid;
    return (...args) => {
      if(timerid) clearTimeout(timerid);
      timerid = setTimeout(()=>{
        func(...args)
      }, wait)
    }
  }

   

  const handleChange = (event) => {
     debounce(setPostData((prevState)=>{
      return ({
        ...prevState,
        filters: [{type: "all", values: [...event.target.value]}]
      })
    }), 5000)

  }
 

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const currentBooks = books.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {isLoading && <div>Loading .... </div>}


      <input placeholder='Please enter for search' className='searchBar' onChange={handleChange} />

      <table className={'styledTable'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Author</th>
            <th>Book Pages</th>
            <th>Book Publication City</th>
            <th>Book Publication Country</th>
            <th>Book Publication Year</th>
            <th>Book Title</th>
          </tr>
        </thead>
        {currentBooks.map((book) => (
          <BooksItem key={book.id} {...book} />
        ))}
      </table>

      {books.length > 4 && (
        <BookPagination
          currentPage={currentPage}
          totalCount={books.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
          data-test-id={'pagination-bar'}

        />

      )}

    </>
  );
}
