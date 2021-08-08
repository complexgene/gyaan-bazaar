import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        minHeight: "100vh",
        maxWidth: 280,
        backgroundColor: "rgba(152,206,219,0.42)",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function LeftBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Categories
                </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button>
                <ListItemIcon>
                    <FastfoodIcon />
                </ListItemIcon>
                <ListItemText primary="Food" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <FlightTakeoffIcon />
                </ListItemIcon>
                <ListItemText primary="Travel" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <LocalMoviesIcon />
                </ListItemIcon>
                <ListItemText primary="Movies" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <SupervisorAccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="Romantic" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
