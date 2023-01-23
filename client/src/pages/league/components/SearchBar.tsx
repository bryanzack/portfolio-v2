const React = require('react');
import './SearchBar.css';

import type { RootState } from "../../../store";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, updateSelectedRegion } from "../reducers/searchBarSlice";
import { setShowHistory } from "../reducers/leagueSlice";
import Regions from '../helpers/regions';

const SearchBar = (): JSX.Element => {
    const cookies = new Cookies();
    const regions = useSelector((state: RootState) => state.searchbar.regions);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    const user_input = useSelector((state: RootState) => state.searchbar.user_input);
    const [region_menu, setRegionMenu] = useState(false);
    const show_history = useSelector((state: RootState) => state.league.show_history);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegionClick = (item: string) => {
        dispatch(updateSelectedRegion(item));
        setRegionMenu(false);
    }
    const handleInputChange = (event: any) => {
        dispatch(updateUserInput(event.target.value));
        console.log(event.target.value);
    }
    const handleInputFocus = () => {
        setRegionMenu(false);
        //dispatch(setShowHistory(false));
    }
    const handleSubmit = () => {
        setRegionMenu(false);
        dispatch(setShowHistory(false));
        if (user_input) {
            console.log(selected_region + " " + user_input);
            navigate(`/league/${selected_region}/${user_input}`);
            (document.activeElement as HTMLElement).blur();
        }
    }
    const handleRemoveCookie = (region: string, name: string) => {
        let remove = {name: name, region: region};
        let new_cookies = cookies.get('hist').filter((thing: any) => {
            console.log(thing);
            return (thing !== remove);
        });
        console.log(new_cookies);
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
                                                        onClick={() => handleRegionClick(item)}>
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
                          onInput={handleInputChange}
                          onFocus={() => dispatch(setShowHistory(true))}
                          type={"text"}
                          onKeyUp={(event) => { if (event.code === "Enter") handleSubmit()}}/>
                   <button className="submit-button" onClick={() => handleSubmit()}>
                       Search
                   </button>
                   {show_history &&
                       <div className={"search-history"} onMouseLeave={() => dispatch(setShowHistory(false))}>
                           {cookies.get('hist').map((cookie: any, index: number) => (
                                <div className={"history-entry"}>
                                    <div className="history-clickable" onClick={() => {navigate(`/league/${cookie.region}/${cookie.name}`); dispatch(setShowHistory(false))}}>
                                        <div className={"history-region"}>
                                            {Regions[cookie.region].abbreviation}
                                        </div>
                                        <div className={"history-name"}>
                                            {cookie.name}
                                        </div>
                                    </div>
                                    <button className={"history-remove"} onClick={() => handleRemoveCookie(cookie.region, cookie.name)}>
                                        x
                                    </button>
                                </div>
                               ))}
                       </div>
                   }
                </div>
           </div>
       </>
    );
}

export default SearchBar;