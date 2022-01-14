import React from 'react';



function InfoItems(props) {
    return <div className="item1 infoitems">
        <div className="inner1">{props.info}<span>{props.suffix}</span></div>
        <div className="inner2">{props.infoName}</div>

    </div>
}

export default InfoItems;




