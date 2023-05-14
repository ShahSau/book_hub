import React from 'react'
import { useQuery, gql, } from '@apollo/client'
import Table from './Table'

const ALL_Books = gql`
 query{
    allBooks {
    title
    author
    published
   }
 }
`

const Books = ()=> {
    const result = useQuery(ALL_Books)
    if(result.loading){
        return <div>Loading....</div>
      }

    return (
        <div>
            <h1>books</h1>
            <Table 
                tableData = {result.data.allBooks}
                headerData = {['', 'author', 'published']}
                type='books'
            />
            {console.warn("DDDDD", result.data.allBooks)}
        </div>
    )
}

export default Books