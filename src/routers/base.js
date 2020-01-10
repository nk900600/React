import React, {Component} from "react";
import {BrowserRouter, Route,Link} from "react-router-dom";
import Header from "./header";
import Create from "./streams/streamCreate";
import {Edit} from "./streams/streamEdit";
import {Delete} from "./streams/streamDelete";
import {Post} from "./streams/streamPost";

class App3 extends Component {
    render() {

        console.log("dd");
        return (
            <div>
                <Header />
                    <BrowserRouter>
                        <div>
                            <Route path="/" exact component={Create}/>
                            <Route path="/1" component={Delete}/>
                            <Route path="/2" component={Post}/>
                            <Route path="/3" component={Edit}/>
                        </div>
                    </BrowserRouter>

            </div>
        )
    }
}


export default App3
