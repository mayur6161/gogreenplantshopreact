import React, {Component} from "react";
import ReactDOM from "react-dom";
import MovieData from './moviedata.json'

class movieDetailPage extends Component {
    render() {
        console.log("inside render");
        return (<>
            <div style={{height: "40px", width: "100%",}}></div>

            <div>
                {MovieData.map((data, Title) => {
                    return (<div style={{width: "33%", float: "left"}} key={Title}>
                        <p style={{fontSize: "22px", fontWeight: "bold", color: "green"}}>{data.Title}</p>
                        <div style={{height: "40px", width: "100%",}}></div>
                    </div>);
                })}
            </div>


        </>);
    }
}

export default movieDetailPage;
