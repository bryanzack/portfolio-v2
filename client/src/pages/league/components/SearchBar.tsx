const React = require('react');
import './SearchBar.css';

import type { RootState } from "../../../store";
import type { SummonerQueryArgs } from '../../../store/api';
import { redirect, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, updateSelectedRegion } from "../reducers/searchBarSlice";
import { setSearchParams } from '../reducers/leagueSlice';
import Regions from '../helpers/regions';

const SearchBar = (): JSX.Element => {
    const regions = useSelector((state: RootState) => state.searchbar.regions);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    const user_input = useSelector((state: RootState) => state.searchbar.user_input);
    const [region_menu, setRegionMenu] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegionClick = (item: string) => {
        dispatch(updateSelectedRegion(item));
        setRegionMenu(false);
    }
    const handleRegionEnter = (item: string) => {
    }
    const handleRegionLeave = () => {

    }
    const handleInputChange = (event: any) => {
        dispatch(updateUserInput(event.target.value));
        console.log(event.target.value);
    }
    const handleSubmit = () => {
        if (user_input) {
            console.log(selected_region + " " + user_input);
            setRegionMenu(false);
            navigate(`/league/${selected_region}/${user_input}`);
            //dispatch(setSearchParams({selected_region, user_input}));
        }
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
                   <input className="username-input"
                          value={user_input}
                          onClick={() => setRegionMenu(false)}
                          onInput={handleInputChange}
                          type={"text"}
                          onKeyUp={(event) => { if (event.code === "Enter") handleSubmit()}}/>
                   <button className="submit-button" onClick={() => handleSubmit()}>
                       Search
                   </button>
                </div>
           </div>
       </>
    );
}

export default SearchBar;