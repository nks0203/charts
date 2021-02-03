import {Route,Switch, BrowserRouter} from "react-router-dom";
import Dashboard from "./pages/dashboard";

const Routes = ()=>{
    return (<BrowserRouter><Switch>
        <Route exact path="/" component={Dashboard}></Route>
    </Switch></BrowserRouter>);
    
    
    }
    
export default Routes;