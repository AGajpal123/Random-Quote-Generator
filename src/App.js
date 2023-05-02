import React from "react";
import "./App.css";
import axios from "axios";
class App extends React.Component {
    //state is a global object that contains all specific things inside that component
    state = {
        advice: "",
    };

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice').then((response) => {
            const { advice } = response.data.slip;

            //to update state properties in class based components
            this.setState({
                //if property and value have same name, you can ommit the later
                // advice : {advice}
                advice
            });
            console.log(advice);
        }).catch((error) => {
            console.log(error);
        });
    }

    //run exactly after render of our component
    componentDidMount() {
        this.fetchAdvice();
    }
    render() {
        //object destructuring
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">
                        {advice}
                    </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>
                            GIVE ME ADVICE!
                        </span>
                    </button>
                </div>
            </div>
        );
    }


}
export default App;
