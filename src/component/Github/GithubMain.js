import React, {Component} from 'react';

import {Alert, AlertTitle} from '@material-ui/lab';
import Container from "@material-ui/core/Container";

import GithubMainTop from "./GithubMainTop";
import GithubMainTable from "./GithubMainTable";


class GithubMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            isLoaded: false,
            data: null
        };
    }

    componentDidMount() {
        const octokit = this.props.octokit;
        const excluded_repos = ['domohouse', 'DomoHouseApi']

        octokit.repos.listForAuthenticatedUser({type: 'owner', sort: 'created'}).then(value => {
            const repoList = value.data.filter(repo => !excluded_repos.includes(repo.name))
            this.setState({data: repoList})

        }).catch(reason => {
            console.log(reason.toString());
            this.setState({error: reason.toString()})
        }).finally(()=>
            this.setState({isLoaded: true})
        );
    }

    render() {
        const {error} = this.state;

        if (error !== '') {
            return (
                <Container maxWidth={"md"} style={{marginTop:150}}>
                    <Alert severity="error" style={{borderRadius:20}}>
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>
                </Container>
            )
        }else {
            const {data} = this.state;
            const {translator} = this.props;

            return (
                <Container maxWidth={"lg"} style={{marginTop: 85, marginBottom: 25}}>
                    <GithubMainTop translator={translator} repoList={data}/>
                    <GithubMainTable translator={translator} repoList={data} octokit={this.props.octokit}/>
                </Container>
            )
        }
    }
}

export default GithubMain;
