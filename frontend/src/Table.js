import React from 'react';

const Table = ({ tableData, headerData, type }) => {

  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return (        
          <td key={idx} style={{fontWeight: 'bold'}}>{data}</td>
      )
    })
  }

  const returnAuthorsData = () => {
    return tableData.map((authors) => {
      const { name, born, bookCount } = authors;
      return (
        <tr data-id={name} key={name}>
          <td>{name}</td>
          <td>{born}</td>
          <td>{bookCount}</td>
        </tr>
      )
    });
  }
  const returnBooksData = () => {
    return tableData.map((books) => {
      const { author, title, published } = books;
      return (
        <tr data-id={title} key={title}>
          <td>{title}</td>
          <td>{author}</td>
          <td>{published}</td>
        </tr>
      )
    });
  }
  return (
    <>
      <table>
        <thead>
          <tr>            
            {tableHeader()}
          </tr>          
        </thead>
        <tbody>
            {type === 'authors'? returnAuthorsData() : returnBooksData()}
        </tbody>
      </table>
    </>
  )
}

export default Table;