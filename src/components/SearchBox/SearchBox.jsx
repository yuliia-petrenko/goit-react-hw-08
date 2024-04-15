import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilterName } from '../../redux/filters/slice';
import { useId } from 'react';
import { IoIosSearch } from "react-icons/io";
import css from './SearchBox.module.css';

 const SearchBox= () =>{
    const filterValue = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    const nameId = useId();

    const handleChange = event => {
        const filter = event.target.value;
        dispatch(setFilterName(filter));
    };

    return (
        <div className={css.container}>
            <h2 className={css.filterTitle}>Find contact by filter</h2>
            <div>
                <label className={css.label} htmlFor={nameId}>
                    <input
                        placeholder="Search"
                        className={css.input}
                        type="text"
                        id={nameId}
                        value={filterValue}
                        onChange={handleChange}
                    />
                </label>
                 <button className={css.searchBtn} type="submit">
                    Search
                    <IoIosSearch className={css.btnIcon } size={'18px'} />
                 </button>
            </div>
        </div>
    );
 }
export default SearchBox;
