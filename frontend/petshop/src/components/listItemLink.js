import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function ListItemLink(props) {
    const {text, to , textColor} = props;
    const customLink = React.useMemo(() => 
        React.forwardRef((linkProps, ref) => (
            <Link ref={ref} to={to} {...linkProps}></Link>
        )),
        [to],
    );
    const listItemStyles = {
        color : textColor ? textColor : "white",
        textDecoration : "none"
    }
    return (
        <div>
                <ListItem style={listItemStyles} component={customLink}>
                    <ListItemText>{text}</ListItemText>
                </ListItem>
        </div>
    )
}
