import React from 'react';
import Home from './component/pages/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import View from "./component/Student/view";
import Edit from "./component/Student/edit";

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/view/:id" component={View} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
        </BrowserRouter> 
      </div>
    );
}

export default App;
