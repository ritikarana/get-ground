import reducer, { fetchbook } from './bookSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({ "books": [] })
})

test('should handle a books empty list', () => {
  const previousState = { "books": [] }

  expect(reducer(previousState, fetchbook('Run the tests'))).toEqual([])
})


test('should handle a list of books', () => {

  const bookData = {
    id: 2086,
    book_author: [
      "Ανώνυμος"
    ],
    book_title: "Ο Αλέξανδρος ο Μακεδών",
    book_publication_year: 1529,
    book_publication_country: "Ιταλία",
    book_publication_city: "Βενετία",
    book_pages: 104
  }

  const previousState = { "books": bookData }

  expect(reducer(previousState, fetchbook('Run the tests'))).toMatchObject({ id: 2086 });
})

