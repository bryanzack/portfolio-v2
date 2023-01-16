const React = require('react');
import './SearchBar.css';

import type { RootState } from "../../store";
import { FC, ReactElement, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, updateSelectedRegion } from "../reducers/searchBarSlice";
import Regions from '../helpers/regions';

const SearchBar: FC = (): ReactElement => {
    const regions = useSelector((state: RootState) => state.searchbar.regions);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    const [region_menu, setRegionMenu] = useState(false);
    const [hovered_region, setHoveredRegion] = useState("");
    const dispatch = useDispatch();
    const handleRegionClick = (item: string) => {
        dispatch(updateSelectedRegion(item));
        setRegionMenu(false);
    }
    const handleRegionEnter = (item: string) => {
    }
    const handleRegionLeave = () => {

    }
    return (
       <>
           <div className="searchbar">
               <div className="bar">
                   {region_menu
                       ?
                           <div className="region-menu">
                               <div className="regions">
                               <span onClick={() => setRegionMenu(false)}>{Regions[selected_region].abbreviation}</span>
                                   {regions.map((item: string, index: number) => {
                                       if (item !== selected_region)
                                           return <span key={index}
                                                        onClick={() => handleRegionClick(item)}
                                                        onMouseEnter={() => handleRegionEnter(item)}
                                                        onMouseLeave={() => handleRegionLeave()}>
                                               {Regions[item].abbreviation}</span>
                                   })}
                               </div>
                           </div>
                       :
                           <div className="region-button" onClick={() => setRegionMenu(true)}>
                               <p>{Regions[selected_region].abbreviation}</p>
                           </div>
                   }
                   <input className="username-input" onClick={() => setRegionMenu(false)} type={"text"}>
                   </input>
                   <button className="submit-button" onClick={() => setRegionMenu(false)}>
                       Search
                   </button>
                </div>
           </div>
       </>
    );
}

export default SearchBar;