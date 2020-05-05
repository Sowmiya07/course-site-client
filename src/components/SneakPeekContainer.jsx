import React from 'react';
import '../styles/SneakPeek-Styles.css';
import JSON_DATA from '../assets/data';
import SneakPeekCard from './SneakPeekCard';

function SneakPeekContainer({heading}) {
    return (
       <div>
           <h2 className="heading">{heading}</h2>
           <div className="flex-card">
                {JSON_DATA.map( data => <SneakPeekCard {...data}/>)}
           </div>
       </div>
    )
}

export default SneakPeekContainer;