"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require('react');
require("./SearchBar.css");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const searchBarSlice_1 = require("../reducers/searchBarSlice");
const regions_1 = __importDefault(require("../helpers/regions"));
const SearchBar = () => {
    const regions = (0, react_redux_1.useSelector)((state) => state.searchbar.regions);
    const selected_region = (0, react_redux_1.useSelector)((state) => state.searchbar.selected_region);
    const user_input = (0, react_redux_1.useSelector)((state) => state.searchbar.user_input);
    const [region_menu, setRegionMenu] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleRegionClick = (item) => {
        dispatch((0, searchBarSlice_1.updateSelectedRegion)(item));
        setRegionMenu(false);
    };
    const handleRegionEnter = (item) => {
    };
    const handleRegionLeave = () => {
    };
    const handleInputChange = (event) => {
        dispatch((0, searchBarSlice_1.updateUserInput)(event.target.value));
        console.log(event.target.value);
    };
    const handleSubmit = () => {
        if (user_input) {
            console.log(selected_region + " " + user_input);
            setRegionMenu(false);
            navigate(`/league/${selected_region}/${user_input}`);
            //dispatch(setSearchParams({selected_region, user_input}));
        }
    };
    return (<>
           <div className="searchbar">
               <div className="bar">
                   {region_menu
            ?
                <div className="region-menu">
                               <div className="regions">
                               <span onClick={() => setRegionMenu(false)}>{regions_1.default[selected_region].abbreviation}</span>
                                   {regions.map((item, index) => {
                        if (item !== selected_region)
                            return <span key={index} onClick={() => handleRegionClick(item)} onMouseEnter={() => handleRegionEnter(item)} onMouseLeave={() => handleRegionLeave()}>
                                               {regions_1.default[item].abbreviation}</span>;
                    })}
                               </div>
                           </div>
            :
                <div className="region-button" onClick={() => setRegionMenu(true)}>
                               <p>{regions_1.default[selected_region].abbreviation}</p>
                           </div>}
                   <input className="username-input" value={user_input} onClick={() => setRegionMenu(false)} onInput={handleInputChange} type={"text"} onKeyUp={(event) => { if (event.code === "Enter")
        handleSubmit(); }}/>
                   <button className="submit-button" onClick={() => handleSubmit()}>
                       Search
                   </button>
                </div>
           </div>
       </>);
};
exports.default = SearchBar;
