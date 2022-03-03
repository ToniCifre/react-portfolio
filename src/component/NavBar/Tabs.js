import React from 'react';
import {Link} from "react-router-dom";

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// const AntTabs = withStyles({
//     root: {
//         borderBottom: '1px solid #e8e8e8',
//     },
//     indicator: {
//         backgroundColor: '#1890ff',
//     },
// })(Tabs);
//
// const AntTab = withStyles((theme) => ({
//     root: {
//         textTransform: 'none',
//         minWidth: 72,
//         fontWeight: theme.typography.fontWeightRegular,
//         marginRight: theme.spacing(4),
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:hover': {
//             color: '#40a9ff',
//             opacity: 1,
//         },
//         '&$selected': {
//             color: '#1890ff',
//             fontWeight: theme.typography.fontWeightMedium,
//         },
//         '&:focus': {
//             color: '#40a9ff',
//         },
//     },
//     selected: {},
// }))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#c5f6c2',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        minWidth:100,
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    demo2: {
        display: "inline-flex"
    },
}));

export default function CustomizedTabs({translator}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(window.location.pathname.includes('github')?1:0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <div className={classes.demo2}>
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab label={translator.resume} value={0} component={Link} to={'/'}/>
                    <StyledTab label={translator.repository} value={1} component={Link} to={'/github'}/>
                </StyledTabs>
            </div>
    );
}
