import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom'
import Home from './components/home'
import NotFound from './components/not-found'
import UserDetails from './components/user-details'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from './components/register'
import NavBar from './components/nav-bar'
import DeleteUser from './components/delete-user'
import UpdateUser from './components/update-user'

const AppRouter = ()=>{

    return <Router>
         <NavBar/>
        <div className="conatainer">
            <div className="row">
                <div className="col">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route  path="/users/:id" component={UserDetails}/>
                        <Route  path="/register" component={Register}/>
                        <Route  path="/delete/:id" component={DeleteUser}/>
                        <Route  path="/update/:id" component={UpdateUser}/>
                        <Route  path="*" component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
}
export default AppRouter;

