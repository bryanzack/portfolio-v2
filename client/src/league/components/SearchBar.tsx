const React = require('react');
import './SearchBar.css';

import type { RootState } from "../../store";
import { FC, ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, updateSelectedRegion } from "../reducers/searchBarSlice";


const SearchBar: FC = (): ReactElement => {
    const regions = useSelector((state: RootState) => state.searchbar.regions);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    const [region_menu, setRegionMenu] = useState(false);
    const handleRegionClick = (item: string) => {
        dispatch(updateSelectedRegion(item));
        setRegionMenu(false);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("regions:", + regions);
        console.log("active_region: ", + selected_region);
    }, []);
    return (
       <>
           <div className="searchbar">
               <div className="bar">
                   {region_menu
                       ?
                           <div className="region-menu">
                               <div className="regions">
                               <span>{selected_region}</span>
                                   {regions.map((item: string, index: number) => {
                                       if (item !== selected_region)
                                           return <span key={index}
                                                        onClick={() => handleRegionClick(item)}>{item}</span>
                                   })}
                               </div>
                           </div>
                       :
                           <div className="region-button" onClick={() => setRegionMenu(true)}>
                               <p>{selected_region}</p>
                           </div>
                   }
                   <input type={"text"} className="username-input">
                   </input>
                   <button className="submit-button">
                       Search
                   </button>
                </div>
           </div>
       </>
    );
}

export default SearchBar;