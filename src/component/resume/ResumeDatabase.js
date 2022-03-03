import React from 'react';

import {Box, List, ListItem, ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const ResumeDatabase = (props) => {
    const {translator} = props
    return (
        <>
            <Typography variant="h4"  align={"center"}>{translator.title}</Typography>
            <Typography variant="subtitle1" component="p" color='textSecondary' align={"center"}>{translator.description}</Typography>

            <List style={{paddingTop:"2vw", paddingBottom:"3vw"}}>
                {translator.databaseList.map((data, index) => (
                    <ListItem key={index} alignItems="flex-start">

                        <ListItemText
                            primary={
                                    <Typography variant="h6">
                                        {data[0]}
                                    </Typography>
                            }
                            secondary={
                                <Typography variant="body1">
                                    {data[1]}
                                </Typography>
                            }
                        />



                    </ListItem>
                ))}
            </List>
        </>
    )


};
export default ResumeDatabase;
