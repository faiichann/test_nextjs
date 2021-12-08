import React from 'react';
import data from '../data.json'
import { useSelector } from 'react-redux'

const SearchResult = () => {
const searchKeyword = useSelector(state => state.search.keyword) 
  console.log(searchKeyword)
    console.log(data)

    const searchFilter = (t) => 
        t.description.toLowerCase().includes(searchKeyword) || 
        t.title.toLowerCase().includes(searchKeyword) ||
        t.name.toLowerCase().includes(searchKeyword)
        
        
    return (
        <>
            {data
                ? data.filter(searchFilter).map((item, index) => {
                      return (
                          <>
                         <div key={index}>
                             <div>Image</div>
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                           <hr></hr>
                         </div>
                         </>
                      )
                  })
                : null}
        </>
    );
};
export default SearchResult;