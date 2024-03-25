import React from 'react';
import './SearchResultList.css';
import { SearchList } from './SearchList';


const SearchResultList = ({results}) => {
    return(
        <div className='results-list'>
            {results.map((result,id)=>{
                    return <SearchList result={result.name} key={id}/>;
            })}
        </div>
    );

    


}
export default SearchResultList;