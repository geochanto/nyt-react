import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchResultContainer from "./components/SearchResultContainer/SearchResultContainer";

const App = () =>
    <div>
        <Router>
            <div>
                <Route path="/" component={SearchResultContainer} />
            </div>
        </Router>
    </div>

export default App;
