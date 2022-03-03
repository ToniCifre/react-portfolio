import React, {Component, forwardRef} from 'react';
import {Link} from "react-router-dom";

import {Box} from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";

import MaterialTable from 'material-table';

import Clear from '@material-ui/icons/Clear';
import LockIcon from "@material-ui/icons/Lock";
import Search from '@material-ui/icons/Search';
import Remove from '@material-ui/icons/Remove';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import GitHubIcon from '@material-ui/icons/GitHub';
import ViewColumn from '@material-ui/icons/ViewColumn';
import OpenRepoIcon from '@material-ui/icons/OpenInNew';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Chip from "@material-ui/core/Chip";


class GithubMainTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            repoList: null
        };
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.repoList !== prevProps.repoList) {
            if(this.props.repoList !== null){

                const octokit = this.props.octokit;

                this.props.repoList.map((repo)=>{
                    octokit.repos.listLanguages({owner: repo.owner.login, repo: repo.name}).then(value => {
                        repo.languages = Object.keys(value.data).slice(0, 3)
                    }).catch(reason => {
                        console.log(reason.toString());
                    }).finally(()=>
                        this.setState({repoList: this.props.repoList})
                    );
                })

            }
        }
    }


    render() {
        const {repoList} = this.props;

        if (!repoList) {
            return (
                <Box border={1} borderColor="grey.300" boxShadow={2} borderRadius="20px" p={2} style={{marginTop: 25}}>
                    <Typography variant="h2"  gutterBottom><Skeleton/></Typography>
                    <Typography variant="h3" gutterBottom><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                    <Typography variant="body1" component='p' ><Skeleton/></Typography>
                </Box>
            )
        } else {
            const {translator} = this.props;
            const tableIcons = {
                DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
                FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
                LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
                NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
                PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
                ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
                Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
                SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
                ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
                ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
            };

            const columns = [
                {title: translator.table.name, field: 'name'},
                {title: translator.table.language, field: 'languages', grouping: true,
                    render: rowData => {
                        return rowData.languages && rowData.languages.length > 0 && (
                            rowData.languages.map((topic) => {
                                return <Chip key={topic} variant="outlined" size="small" label={topic}
                                             style={{margin: 1}}/>
                            })
                        )
                    }
                },
                    // render:rowData => {return rowData.languages? rowData.languages.join(', '):''}},
                {title: translator.table.description, field: 'description', hidden: true, searchable: true},
                {title: 'html_url', field: 'html_url', hidden: true},
                {title: translator.table.topics, field: 'topics', searchable: true,hidden: true,
                    render: rowData =>{return rowData.topics && rowData.topics.length > 0 && (
                        rowData.topics.map((topic) => {return <Chip key={topic} variant="outlined" size="small" label={topic} style={{margin: 1}}/>})
                    )}
                },
                {
                    title: translator.table.actions, field: 'private', type: 'boolean',
                    grouping: false,
                    headerStyle: {textAlign: "right"},
                    cellStyle: {textAlign: "right",},
                    render: rowData => (
                        <div>
                            <Tooltip title={translator.openRepo}>
                                <Link to={'/github/'+rowData.name} style={{color: 'currentcolor', marginRight:10}}>
                                    <OpenRepoIcon href={rowData.name}/>
                                </Link>
                            </Tooltip>
                            <Tooltip title={translator.private}>
                                {rowData.private ?
                                    <LockIcon/>
                                    :
                                    <a href={rowData.html_url} style={{color: 'currentcolor'}} >
                                        <GitHubIcon href={rowData.html_url}/>
                                    </a>
                                }
                            </Tooltip>
                        </div>
                    )
                }
            ];

            return (
                <Box border={1} borderColor="background.paper" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={0} style={{marginTop: 25}} >
                    <Typography variant="h3" gutterBottom align={"center"} style={{paddingTop: 20}}>
                        {translator.allRepo}
                    </Typography>
                    <MaterialTable
                        title=""
                        columns={columns}
                        data={repoList}
                        icons={tableIcons}
                        options={{columnsButton: true, headerStyle: {fontSize: '1.1em', fontWeight: 'bold'}}}
                        style={{borderRadius: 20, margin:'2vw', paddingBottom:15}}
                        detailPanel={
                            [{
                                tooltip: translator.table.showDesc,
                                icon: ExpandMoreIcon,
                                openIcon: ExpandLessIcon,
                                render: rowData => {
                                    return (
                                        <Box p={[1, 2, 3, 4]}>
                                            <Typography variant="h5" component="h5" gutterBottom>
                                                {translator.description}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                {rowData.description ? rowData.description: translator.noDescript}
                                            </Typography>

                                            {rowData.topics && rowData.topics.length > 0 && (
                                                <div style={{display:"flex", flexWrap:"wrap", margin:'25px 0 15px 0'}}>
                                                    <Typography variant="subtitle1" style={{fontWeight:"bolder"}}>
                                                        {translator.table.topics}:
                                                    </Typography>
                                                    {rowData.topics.map((topic) => {
                                                        return <Chip key={topic} variant="outlined" size="small"
                                                                     label={topic} style={{margin: 2}}/>
                                                    })}
                                                </div>
                                            )}
                                        </Box>
                                    )
                                }
                            }]
                        }
                    />
                </Box>
            )
        }
    }


}

export default GithubMainTable;
