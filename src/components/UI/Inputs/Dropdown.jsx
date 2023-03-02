import './Dropdown.scss'



const Dropdown = ({onChange, value}) => {
    return (
            <select className='dropdown' value={value} onChange={onChange}>
                <option value='all'  className="dropdown__item">All</option>
                <option  className="dropdown__item">0-15</option>
                <option  className="dropdown__item">15-30</option>
                <option  className="dropdown__item">30+</option>
            </select>
    );
};

export default Dropdown;