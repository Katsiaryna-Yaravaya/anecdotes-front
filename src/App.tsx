import React from 'react';
import GeneralMainJoke from "./components/GeneralMainJoke";
import {Provider} from "react-redux";
import {store} from "./store";
import SingleJoke from "./components/SingleJoke";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";

function App() {
    return (
        <>
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route
                            exact
                            path={'/'}
                            component={GeneralMainJoke}

                        />
                        <Route
                            exact
                            path={'/singlejoke'}
                            component={SingleJoke}
                        />
                    </Switch>
                </Provider>
            </BrowserRouter>
        </>
    );
}

export default App;
