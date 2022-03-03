import React from 'react';

import {Box, Container, Grid, Typography} from "@material-ui/core";

import ResumeContact from "../component/resume/ResumeContact";
import ResumeDatabase from "../component/resume/ResumeDatabase";
import ResumeExperience from "../component/resume/ResumeExperience";
import ResumeProgramming from "../component/resume/ResumeProgrammingLanguages";
import ResumeTopDescription from "../component/resume/ResumeTopDescription";
import ResumeEducation from "../component/resume/ResumeEducation";


const Resume = (props) => {
    const {translator} = props

    return (
        <>
            <ResumeTopDescription description={translator.description}/>
            <Container maxWidth={"lg"} style={{marginTop: 25, marginBottom: 25}}>
                <Grid container justify="center">
                    <Grid item s={12} lg={8}>
                        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={[1, 3, 8]} m={[1,2]} style={{paddingBottom: 30}}>
                            <Typography variant="h3" align={"center"} style={{marginBottom: 60}}>{translator.skills}</Typography>
                            <ResumeProgramming translator={translator.knowledge.languages}/>
                            <ResumeDatabase translator={translator.knowledge.database}/>
                        </Box>
                    </Grid>
                    <Grid item s={12} lg={4}>
                        <ResumeExperience translator={translator.experience}/>
                        <ResumeEducation translator={translator.education}/>
                        <ResumeContact translator={translator.contact}/>
                    </Grid>

                </Grid>

            </Container>
        </>
    )


};
export default Resume;
