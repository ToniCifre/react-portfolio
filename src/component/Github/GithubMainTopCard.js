import React from 'react';
import {Link} from "react-router-dom";

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import LockIcon from '@material-ui/icons/Lock';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345
    },
    imageMedia: {
        height: '100%',
        width: '100%',
        borderRadius: 5,
    },
    boxMedia: {
        borderRadius: 5,
        height: 200,
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
    chipLanguages: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 25,
        '& > *': {
            marginRight: theme.spacing(0.5),
        },
    },
    cardContent: {
        paddingBottom: 5
    },
    githubIcon: {
        marginRight: 10
    },
}));

export default function GithubMainTopCard({data, translator}) {
    const classes = useStyles();

    return (
        <Card className={classes.root} bgcolor="textPrimary">
            <Link to={'/github/' + data.name} className={classes.link} >
                <CardActionArea>
                    <Box boxShadow={3} className={classes.boxMedia}>
                        <CardMedia
                            component="img"
                            alt={data.name}
                            height="140"
                            image={process.env.PUBLIC_URL + '/GithupRepoImages/'+translator.topRepositories[data.name].image}
                            title={data.name}
                            className={classes.imageMedia}
                        />
                    </Box>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" color="textPrimary">
                            {data.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {translator.topRepositories[data.name].description}
                        </Typography>

                        <div className={classes.chipLanguages}>
                            {translator.topRepositories[data.name].languages && (
                                translator.topRepositories[data.name].languages.map((lang)=>{
                                    return <Chip key={lang} variant="outlined" size="small" label={lang} />
                                })
                            )}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {data.private ?
                    <Chip icon={<LockIcon/>} label={translator.private} variant="outlined"/>
                    :
                    <Button size="small" href={data.html_url} >
                        <GitHubIcon className={classes.githubIcon}/>
                        {translator.viewGithub}
                    </Button>
                }
            </CardActions>
        </Card>
    )
}


