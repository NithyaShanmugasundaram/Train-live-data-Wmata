import React from 'react';
import { getBackgroundColor, getBorderRadius } from '../../helpers';
import './Trains.css'
const Trains = ({ trainPosition }) => {
    return (<>{trainPosition.length > 0 && trainPosition.map((item, index) => {
        return (<div className="card" key={item.TrainId} style={{ backgroundColor: getBackgroundColor(item.LineCode), borderRadius: getBorderRadius(item.ServiceType) }}>
            <>Car Count: <p className='avatar-number'>{item.CarCount}</p></>
            <p>Train Number:{item.TrainNumber}</p>
            <p>Id:{item.TrainId}</p>
            <p>Service:{item.ServiceType}</p>
            <p>Line Code:{item.LineCode == null ? "Null" : item.LineCode}</p>

        </div>)
    })}</>);
}

export default Trains;
