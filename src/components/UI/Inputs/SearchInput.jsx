import './SearchInput.scss'
import img from '../../../images/search-svgrepo-com.svg'



const SearchInput = ({value, onChange}) => {
    return (
        <div className="search-input">
            <label htmlFor="search-input">
                <img src={img} alt="Search icon"/>
            </label>
            <input value={value} onChange={onChange} id='search-input' className="input" type="text"/>
        </div>
    );
};

export default SearchInput;