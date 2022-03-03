import React, {useEffect, useRef, useState} from 'react';

import {Box} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import GithubMainTopCard from "./GithubMainTopCard";
import GithubMainTopCardSkeleton from "./GithubMainTopCardSkeleton";

import StackGrid from "react-stack-grid";

const GithubMainTop = ({repoList, translator})  => {

    const top_list = Object.keys(translator.topRepositories);
    const [gridd, setGridd] = useState(useRef(null));

    useEffect(() => {
        if(gridd.current !== null && repoList !== null){
            setTimeout(function() {gridd.updateLayout()}.bind(this), 100)
        }
        else if(gridd.current !== null){
            gridd.updateLayout()
        }
        if(gridd.current !== null&& repoList !== null){
            setTimeout(function() {gridd.updateLayout()}.bind(this), 1000)
        }
    }, [gridd, repoList]);

    return (
        <Box border={1} borderColor="background.darker" bgcolor="background.darker" boxShadow={2} borderRadius="20px" p={2} style={{paddingBottom: 30, minHeight:500}}>
            <Typography variant="h3" gutterBottom align={"center"}>
                {translator.topRepo}
            </Typography>
            <StackGrid columnWidth={345} style={{width:'100%', marginTop: 40}}
                       gutterWidth={20} gutterHeight={20} gridRef={grid => setGridd(grid)}>
                {repoList ?
                    repoList.filter(data => top_list.includes(data.name)).map((data, key) => (
                        <GithubMainTopCard key={key} data={data} translator={translator}/>
                    ))
                    :
                    top_list.map((data, key) => (
                        <GithubMainTopCardSkeleton key={key}/>
                    ))
                }
            </StackGrid>


                {/*{repoList ?*/}
                {/*    <StackGrid columnWidth={345} style={{width:'100%', marginTop: 40}}*/}
                {/*               gutterWidth={20} gutterHeight={20} gridRef={grid => setGridd(grid)}>*/}
                {/*        {repoList.filter(data => top_list.includes(data.name)).map((data, key) => (*/}
                {/*            <GithubMainTopCard key={key} data={data} translator={translator}/>*/}
                {/*        ))}*/}
                {/*    </StackGrid>*/}

                {/*    :*/}

                {/*    <div style={{marginBottom: 45, display:"flex", flexWrap:'wrap', justifyContent:'center'}}>*/}
                {/*        {top_list.map((data, key) => (*/}
                {/*            <div style={{margin: 10}}>*/}
                {/*                <GithubMainTopCardSkeleton/>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*}*/}




        </Box>
    )

}

export default GithubMainTop;
