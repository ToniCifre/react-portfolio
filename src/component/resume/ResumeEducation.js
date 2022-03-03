import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Box, ListItemAvatar, Typography} from "@material-ui/core";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
        marginTop: '3vh',
        marginBottom: '2vh'
    },
    listCenter: {
        width: 'fit-content',
        margin:' 0 auto'
    },
}));

const ResumeEducation = (props) => {
    const {translator} = props
    const classes = useStyles();

    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2]} m={[1,2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>{translator.title}</Typography>

            <List className={classes.root}>
                {translator.educationList.map((data, index) => (
                    <ListItem alignItems="flex-start" key={index} className={classes.listCenter}>
                        <ListItemAvatar>
                            <img src={"EducationIcons/"+data[0]} alt="Logo"  style={{width:30, height:30, marginRight:10}}/>
                        </ListItemAvatar>
                        <ListItemText primary={data[1]} secondary={
                            <React.Fragment>
                                <Typography variant="body2" color="textPrimary" >
                                    {data[2]}
                                </Typography>
                                <Typography variant="subtitle2" display="block" >
                                    {data[3]}
                                </Typography>
                            </React.Fragment>
                        }/>
                    </ListItem>
                ))}
            </List>

        </Box>
    )
};

export default ResumeEducation;
