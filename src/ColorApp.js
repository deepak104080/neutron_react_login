import React, { useContext, useEffect } from "react";
import { DataAppContext } from './common/DataApp';
import {useNavigate} from 'react-router-dom';

const ColorApp = () => {
    const dataAppTemp = useContext(DataAppContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(!dataAppTemp.isLoggedIn) {
            navigate('/login');
        }
    }, [dataAppTemp]);
    const colors = [
        {
            name: 'blue',
            label: 'Blue',
            color: '#78d6f5'
        },
        {
            name: 'green',
            label: 'Green',
            color: '#4df0a6'
        },
        {
            name: 'red',
            label: 'Red',
            color: '#fc805d'
        }
    ];
    return(
        <>
        <div className='row bg-danger bg-opacity-50'>
            <div className='col-9'>
                {dataAppTemp.isLoggedIn && <div>Hi {dataAppTemp.userName}</div>}
            </div>
            <div className='col-3'>
                {dataAppTemp.isLoggedIn ? 
                (<button onClick={() => dataAppTemp.setLogin(false)}>Logout</button>) :
                (<button onClick={() => dataAppTemp.setLogin(true)}>Login</button>)}
            </div>
        </div>

            {
                colors && colors.map((item, index) => (
                    <div key={item.name + index} className='tile' style={{'background': item.color}} onClick={()=>dataAppTemp.setBgColor(item.color) }>{item.label}</div>
                ))
            }
        </>
    )
}

export default ColorApp;