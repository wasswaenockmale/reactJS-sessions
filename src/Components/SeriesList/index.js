import React from 'react';
import './index.css'

const SeriesListItem = props =>{
    return(
        <li key={props.series.id}>
            {props.series.text}
        </li>
    )
}

const filterList = (value, series) => {
    if(value.length === 0){
        return series;
    }else{
        console.log();
        return series.filter(element => {
            element.text.includes(value)
        });
    }
}

const SeriesList = ({list, value}) =>{
    return(
        <div>
            {}
            <p>This is the series list</p>
            <ul className="series-list">
                {filterList(value, list).map((element )=> 
                    <SeriesListItem series={element}/>
                )}
            </ul>
        </div>
    )
}

export default SeriesList;