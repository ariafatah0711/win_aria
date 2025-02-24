import React, { useEffect, useState } from 'react';

const Settings = ({ widgetObj, output, additionalContent }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [widgetLocalObj, setWidgetLocalObj] = useState([]);

    useEffect(() => {
        widgetObj.forEach((widget) => {
            const state = getLocalStorage(widget.name);
            setWidgetLocalObj((prevWidgetLocalObj) => [
                ...prevWidgetLocalObj,
                { name: widget.name, changeState: widget.changeState, state: state }
            ]);
            widget.changeState(state);
        });
    }, []);

    const style = {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
    }
    const settingsStyle = {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        padding: '0px 10px',
        accentColor: 'var(--main-color)',
        fontSize: '10px'
    }
    const labelStyle = {
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    }
    const updateLocalStorage = (name, state) => {
        localStorage.setItem(name, state);
    }

    const getLocalStorage = (name) => {
        const tempState = localStorage.getItem(name);
        if (tempState === null) {
            localStorage.setItem(name, 'true');
            return true;
        }
        return tempState === 'true';
    }

    return (
        <div className='logo' style={style}>
            <button className="nf nf-cod-settings_gear settings clean-button"
                onClick={() => setShowSettings(!showSettings)}>
            </button>

            {showSettings ?
                <div style={divStyle}>
                    {widgetLocalObj && widgetLocalObj.map(({ name, changeState }, index) => {
                        return (
                            <div key={index} style={settingsStyle}>
                                <input type="checkbox" id={name} name={name} checked={getLocalStorage(name)}
                                       onChange={() => {
                                           const state = getLocalStorage(name);
                                           changeState(!state);
                                           updateLocalStorage(name, !state);
                                       }}/>
                                <label htmlFor={name} style={labelStyle}>{name}</label>
                            </div>
                        );
                    })}
                </div> : (
                    additionalContent
                )
            }
        </div>
    )
        ;
};

export default Settings;