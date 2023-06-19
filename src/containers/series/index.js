import React, { Component } from "react";
import SeriesList from "../../Components/SeriesList";

class Series extends Component{
    state = {
        series: [],
        count: 0
      }

      componentDidMount(){
        const url = 'https://type.fit/api/quotes';
        fetch(url,)
        .then((response)=> response.json())
        .then(response => {
          console.log(response);
          this.setState({series: response})
        })
        .catch(err => console.log(err));
    
      }

      render(){
       return(
        <div>
            The length of the series is {this.state.series.length}
            <SeriesList list={this.state.series} value={this.props.value}/>
        </div>
       )
      }
}

export default Series;