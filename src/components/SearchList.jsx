import './SearchList.css';
export const SearchList = ({result}) => {
    return (
        <div onClick={(e) => alert(`You selected ${result}`)} className='search-result'>{result}</div>
    );
};



