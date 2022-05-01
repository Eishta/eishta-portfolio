import React, { useState, useEffect } from 'react';
import { setTheme } from '../../redux/actions/actions';
import './theme.css';
import { useDispatch, useSelector } from 'react-redux';


const ThemePicker = () => {
    const dispatch = useDispatch();
    const currentTheme = useSelector(state => state.detail.theme)
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanding = () => {
        setIsExpanded(!isExpanded);
    }
    let themes = ['pink', 'red', 'green', 'yellow', 'orange', 'blue']
    return (
        <div
            className={isExpanded ? "theme-picker expand" : "theme-picker"}
            onMouseEnter={handleExpanding}
            onMouseLeave={handleExpanding}
            onClick={handleExpanding}
        >
            <div className="theme trans" ></div>
            {themes.map((theme,i) => <div key={i} className={currentTheme === theme ? `theme active  ${theme}` : `theme ${theme}`} onClick={() => dispatch(setTheme(theme))}></div>)}
        </div>
    )
}

export default ThemePicker