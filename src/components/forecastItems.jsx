import React from 'react'

const ForecastItems = (props) => {
    return (
        <>
            <div className="Forecast-Content">
            <div className='days'>{props.day}</div>
                <h3>{props.sunrise}</h3>
                <h3>{props.sunset}</h3>
                <div className="weathermood"> <i className="fas fa-cloud fa-8x"></i></div>
                <h4>{props.temp}<span> °C</span></h4>

            </div>
        </>
    )
}

export default ForecastItems
