import React from 'react';

const Table = (props) => {

  const { tableData, headerData } = props;

  const tableHeader = () => {
    return headerData.map((data, idx) => {
      return (        
          <td key={idx} style={{fontWeight: 'bold'}}>{data}</td>
      )
    })
  }

  const returnTableData = () => {
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

  return (
    <>
      <table>
        <thead>
          <tr>            
            {tableHeader()}
          </tr>          
        </thead>
        <tbody>
          {returnTableData()}          
        </tbody>
      </table>
    </>
  )
}

export default Table;