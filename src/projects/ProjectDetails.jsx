import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../pages/Loading/Loading';
import Error from '../pages/Error/Error';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

//Material UI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveTvIcon from '@mui/icons-material/LiveTv';

//route
import baseAPI from "../utils/routes";

import "./ProjectDetails.css"

const ProjectDetails = () => {

  //get Current Project
  const allProjects = useSelector(state => state.allProjects.allProjectsData);
  const allProjectsIsLoading = useSelector(state => state.allProjects.isLoading);
  const allProjectsHasError = useSelector(state => state.allProjects.hasError);

  const {id} = useParams();

  if(allProjectsIsLoading || allProjects === null){
    return <Loading />
  }

  if(allProjectsHasError){
    return <Error />
  }

  const currentProject = allProjects.find(project => project.id === id);

  return (
    <div className='project-details'>
      <Link to = "/projects"><h1 className='go-back'>&lt;&lt;Go Back</h1></Link>
      <h1 className='project-details-title'>{currentProject.name}</h1>
      <div className = "project-details-body">
        <div>
            <img src = {`${baseAPI}/${currentProject.image}`} alt = "demo"/>
            <div className='links'>
                <a href = {`${currentProject.github}`} target = "_blank" rel="noreferrer"><Button variant="contained" color = "secondary" style = {{padding: "0rem 6rem"}}>GitHub<GitHubIcon/></Button></a>
                <a href = {`${currentProject.live}`} target = "_blank" rel="noreferrer"><Button variant="contained" color = "secondary" style = {{padding: "0rem 6rem"}}>Live<LiveTvIcon/></Button></a>
            </div>
        </div>
        <div>
            <div className='project-description'>
                <h3 className='inline' >DESCRIPTION</h3>
                <p className='inline'>{currentProject.description}</p>
            </div>
            <div className = "project-purpose">
                <h3 className='inline'>PURPOSE</h3>
                <p className='inline'>{currentProject.purpose}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
