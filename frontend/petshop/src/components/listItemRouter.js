import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ListItemLink from './listItemLink';
import List from '@material-ui/core/List';

export default function listItemRouter(props) {
    const links = props.links;

    return (
        <div>
            <Router>
                <List style={{display : 'flex', justifyContent : "space-between"}}>
                {links.map(link => (
                    <>
                    <ListItemLink to={link.path} text={link.title}/>
                    <Switch>
                        <Route path={link.path}>
                            1
                        </Route>
                    </Switch>  
                    </> 
                ))}
                </List>
            </Router>
        </div>
    )
}
