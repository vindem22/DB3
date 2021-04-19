import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import { authRoutes ,publicRoutes } from '../routes';


export default function PagesRouter() {
    const isAuth = false;
    
    return (
        <>
          <Switch>
            {isAuth && authRoutes.map(({path, page}) => <Route key={path} path={path} component={page} exact></Route>)}
            {publicRoutes.map(({path, page}) => <Route key={path} path={path} component={page} exact></Route>)}
          </Switch>  
        </>
    )
}
