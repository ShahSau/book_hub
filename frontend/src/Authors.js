import React from 'react'
import { useQuery, gql, } from '@apollo/client'
import Table from './Table'

const ALL_AUTHORS = gql`
 query{
  allAuthors {
    name
    bookCount
    born
   }
 }
`

const Authors = ({authors})=> {
    const result = useQuery(ALL_AUTHORS)
    if(result.loading){
        return <div>Loading....</div>
      }

    return (
        <div>
            <h1>authors</h1>
            <Table 
                tableData = {result.data.allAuthors}
                headerData = {['', 'born', 'books']}
            />
        </div>
    )
}

export default Authors