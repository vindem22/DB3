import React , { useContext}from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import { Context } from '..';
import { authRoutes ,publicRoutes } from '../routes';


export default function PagesRouter() {
    const isAuth = true;
    const {user} = useContext(Context)
    console.log(user)
    return (
        <>
          <Switch>
            {true && authRoutes.map(({path, page}) => <Route key={path} path={path} component={page} exact></Route>)}
            {publicRoutes.map(({path, page}) => <Route key={path} path={path} component={page} exact></Route>)}
          </Switch>  
        </>
    )
}
