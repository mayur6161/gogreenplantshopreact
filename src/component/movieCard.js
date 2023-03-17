import React, {Component} from "react";
import ReactDOM from "react-dom";
import MovieData from './moviedata.json'
import {Link} from "react-router-dom";

class movieCard extends Component {
    render() {
        console.log("inside render");
        return (<>
            <div style={{height: "40px", width: "100%",}}></div>

            <Link to={`product-view/${MovieData.Title}`}>
                <div>
                    {MovieData.map((data, key) => {
                        return (<div style={{width: "33%", float: "left"}} key={key}>
                            <img style={{width: "70%", height: "400px", alignContent: "space-between"}}
                                 src={data.Poster} alt={data.Title}/>
                            <p style={{fontSize: "22px", fontWeight: "bold", color: "green"}}>{data.Title}</p>
                            <div style={{height: "40px", width: "100%",}}></div>

                        </div>);
                    })}
                </div>
            </Link>



        </>);
    }
}

export default movieCard;
