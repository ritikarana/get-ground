import React from 'react';

class BooksItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.book_author}</td>
          <td>{this.props.book_pages}</td>
          <td>{this.props.book_publication_city}</td>
          <td>{this.props.book_publication_country}</td>
          <td>{this.props.book_publication_year}</td>
          <td>{this.props.book_title}</td>
        </tr>
      </tbody>
    );
  }
}

export default BooksItem;