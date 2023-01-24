const React = require('react');
import './SearchBar.css';

import type { RootState } from "../../../store";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateUserInput, updateSelectedRegion, setHistoryCookies} from "../reducers/searchBarSlice";
import { setShowHistory } from "../reducers/leagueSlice";
import Regions from '../helpers/regions';

const SearchBar = (): JSX.Element => {
    const cookies = new Cookies;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie, setCookie] = useState(cookies.get('hist'));
    const regions = useSelector((state: RootState) => state.searchbar.regions);
    const selected_region = useSelector((state: RootState) => state.searchbar.selected_region);
    const user_input = useSelector((state: RootState) => state.searchbar.user_input);
    const [region_menu, setRegionMenu] = useState(false);
    const show_history = useSelector((state: RootState) => state.league.show_history);
    const handleRegionClick = (item: string) => {
        dispatch(updateSelectedRegion(item));
        setRegionMenu(false);
    }
    const handleInputChange = (event: any) => {
        dispatch(updateUserInput(event.target.value));
        console.log(event.target.value);
    }
    // TODO `differentiate between history click submit & user input submit
    const handleSubmit = (region: string, name: string, method: string) => {
        setRegionMenu(false);
        dispatch(setShowHistory(false));
        type CookieEntry = {
            name: string,
            region: string,
        }
        if ((user_input && method === 'user') || method === 'history') {
            console.log(region + " " + name);
            navigate(`/league/${region}/${name}`);
            // `TODO: add typing to avoid any types
            if (cookie !== undefined) {
                setCookie([{region: region, name: name}, ...cookie.filter((item: CookieEntry) => item.name !== name).slice(0,4)]);
                cookies.set('hist', [{
                    region: region,
                    name: name
                }, ...cookie.filter((item: CookieEntry) => item.name !== name)], { path: '/'});
            } else {
                setCookie([{region: region, name: name}]);
                cookies.set('hist', [{
                    region: region,
                    name: name
                }], { path: '/'});
            }
            (document.activeElement as HTMLElement).blur();
        }
    }
    const handleRemoveCookie = (region: string, name: string) => {
        dispatch(setShowHistory(true));
        console.log(`remove cookie: ${region} : ${name}`);
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
                          onBlur={() => dispatch(setShowHistory(false))}
                          type={"text"}
                          onKeyUp={(event) => { if (event.code === "Enter") handleSubmit(selected_region, user_input, 'user')}}/>
                   <button className="submit-button" onClick={() => handleSubmit(selected_region, user_input, 'user')}>
                       Search
                   </button>
                   {(show_history && cookies.get('hist') !== undefined) &&
                       <div className={"search-history"}>
                           {cookie.map((cookie: any, index: number) => (
                                <div className={"history-entry"}>
                                    <div className="history-clickable" onMouseDown={() => {handleSubmit(cookie.region, cookie.name, 'history')}}>
                                        <div className={"history-region"}>
                                            {Regions[cookie.region].abbreviation}
                                        </div>
                                        <div className={"history-name"}>
                                            {cookie.name}
                                        </div>
                                    </div>
                                    <button className={"history-remove"} onMouseDown={() => handleRemoveCookie(user_input, selected_region)}>
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