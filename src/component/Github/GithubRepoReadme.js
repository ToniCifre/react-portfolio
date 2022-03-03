import React from 'react';

import {Box, Typography} from "@material-ui/core";
import {Alert, AlertTitle} from '@material-ui/lab';

import '../../css/github-markdown.css'


const GithubRepoReadme = ({repo, readme, error}) => {

    if (error !== '') {
        return (
            <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2}>
                <h3>README.md</h3>
                <Alert severity="info" style={{borderRadius: 20}}>
                    <AlertTitle>Info</AlertTitle>
                    {error}
                </Alert>
            </Box>

        )
    } else {
        readme = readme.replaceAll('src="', 'src="https://github.com/'+process.env.REACT_APP_GITHUB_OWNER+'/'+repo+'/raw/master/')
        readme = readme.replaceAll('href="/', 'href="https://github.com/'+process.env.REACT_APP_GITHUB_OWNER+'/'+repo+'/tree/master/')

        return (
            <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 2, 3]}>
                <Typography key={1} variant="h5" gutterBottom>README.md</Typography>


                <article className={'markdown-body'} style={{padding: 10}} dangerouslySetInnerHTML={{__html: readme}}/>
            </Box>
        )
    }
}


export default GithubRepoReadme;
