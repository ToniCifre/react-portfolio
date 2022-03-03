import React, {Component} from 'react';

import {Box} from "@material-ui/core";
import { Alert, AlertTitle } from '@material-ui/lab';
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";


class GithubRepoDescription extends Component{

    render() {
        const { description, topics, translator } = this.props;

        if (description === null) {
            return (
                <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2}>
                    <h3>{translator.description}</h3>
                    <Alert severity="info" style={{borderRadius:20}}>
                        <AlertTitle>Info</AlertTitle>
                        {translator.noDescript}
                    </Alert>
                </Box>
            )
        } else {
            return (
                <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>

                    <table style={{height: '100%', width:'100%', borderCollapse: "collapse"}}>
                        <tbody>
                        <tr>
                            <td valign="top">
                                <Typography key={1} variant="h5" component="p" gutterBottom>{translator.description}</Typography>
                                <Typography key={2} variant="body1" style={{margin:'15px 0 25px 0'}}>{description}</Typography>
                            </td>
                        </tr>

                        <tr>
                            <td valign="bottom">
                                    {topics && (
                                        topics.map((topic)=>{
                                            return <Chip key={topic} variant="outlined" size="small" label={topic} style={{margin:2}}/>
                                        })
                                    )}

                            </td>
                        </tr>
                        </tbody>
                    </table>

                </Box>
            )
        }
    }


}
export default GithubRepoDescription;
