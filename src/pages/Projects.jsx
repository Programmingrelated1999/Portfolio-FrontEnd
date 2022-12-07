import React, {useEffect} from 'react'
import Project from '../projects/Project'

import { useSelector, useDispatch } from 'react-redux';
import { loadAllProjectsData } from '../reducers/allProjectsReducer';

import Loading from './Loading/Loading';
import Error from './Error/Error';

import "./Projects.css"

const Projects = () => {

  //get Current Project
  const allProjects = useSelector(state => state.allProjects.allProjectsData);
  const allProjectsIsLoading = useSelector(state => state.allProjects.isLoading);
  const allProjectsHasError = useSelector(state => state.allProjects.hasError);

  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {dispatch(loadAllProjectsData())}, []);

  if(allProjectsIsLoading || allProjects === null){
    return <Loading />
  }

  if(allProjectsHasError){
    return <Error />
  }

  console.log("allProjects", allProjects);

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-list'>
      {
        //["SQL Design", "Project Tracker", "Machine Learning Game"].map(item => <Project item = {item}/>)
        allProjects.map(item => <Project item = {item}/>)
      }
      </div>
    </div>
  )
}

export default Projects
