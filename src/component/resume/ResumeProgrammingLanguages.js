import React from 'react';

import {List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ResumeProgramming = (props) => {
    const {translator} = props
    return (
        <>
            <Typography variant="h4" gutterBottom align={"center"}>{translator.title}</Typography>
            <Typography variant="subtitle1" component="p" color='textSecondary' align={"center"}>{translator.description}</Typography>

            <div style={{marginTop: "1vh", marginBottom: "5vh", paddingLeft:"2vw", paddingRight:"2vw"}}>
                {translator.languagesList.map((data, index) => (
                    <List key={index} dense style={{paddingTop:"25px", paddingBottom:"25px"}}>
                        <div style={{display:"inline-flex", marginBottom:15}}>
                            {data['icon'] && <img src={"LanguageIcons/"+data['icon']+".svg"} alt={data['icon']}  style={{width:30, height:30, marginRight:10}}/>}
                            <Typography variant="h6" align={"left"}>{data['lang']}</Typography>
                        </div>

                        {data['con'].map((row, index) => (
                            <ListItem key={index}>
                                <ListItemIcon style={{width:35, minWidth:"auto"}}>
                                    <FiberManualRecordIcon style={{width:10}}/>
                                </ListItemIcon>
                                <ListItemText primary={row} style={{flex: 'inherit'}}/>
                            </ListItem>
                        ))}
                    </List>
                ))}
            </div>
        </>

    )


};
export default ResumeProgramming;
