import React from 'react';

import {Box, Typography} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


const ResumeExperiencePunctuation = ({points}) => {
    const maxPunctiation = 3

    let punctuation = []
    for (let i = 0; i < points && i < maxPunctiation; i++) {
        punctuation.push(<FiberManualRecordIcon key={i} style={{ fontSize: 17 }}/>)
    }
    for (let i = points; i < maxPunctiation; i++) {
        punctuation.push(<FiberManualRecordIcon key={i} color="disabled" style={{ fontSize: 17 }}/>);
    }

    return (
        <div style={{ display: 'inline-block' }}>
            {punctuation}
        </div>
    )
};


const ResumeExperience = (props) => {
    const {translator} = props
    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2]} m={[1,2]} style={{paddingBottom: 30}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.title}
            </Typography>
            <List container justify="center" spacing={3} style={{marginTop: '3vh', marginBottom: '2vh', textAlign: 'center'}} >
                {translator.experienceList.map((data, index) => (
                    <ListItem key={index} className={'MuiListItem-multilist'}>
                        <ListItemText primary={data[0]+':'} />
                        <ListItemIcon> <ResumeExperiencePunctuation points={data[1]}/> </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
};

export default ResumeExperience;
