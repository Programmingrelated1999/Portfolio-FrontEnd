import React from 'react'
import Project from '../projects/Project'

import Loading from './Loading/Loading';
import Error from './Error/Error';

import { useSelector } from 'react-redux';

import "./Projects.css"

const Projects = () => {

  //get Current Project
  const allProjects = useSelector(state => state.allProjects.allProjectsData);
  const allProjectsIsLoading = useSelector(state => state.allProjects.isLoading);
  const allProjectsHasError = useSelector(state => state.allProjects.hasError);

  if(allProjectsIsLoading || allProjects === null){
    return <Loading />
  }

  if(allProjectsHasError){
    return <Error />
  }

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-list'>
      {
        allProjects.map(item => <Project item = {item}/>)
      }
      </div>
    </div>
  )
}

export default Projects
