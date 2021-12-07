import React from 'react';

const SearchResult = ({data}) => {
console.log(data)
    return (
        <>
            {data
                ? data.map((item, index) => {
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