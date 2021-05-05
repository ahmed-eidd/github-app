import React from 'react'
import classes from './RepoList.module.scss'

const RepoList = ({children}) => {
  return (
    <div className={classes.Container}>
      {children} 
    </div>
  )
}

export default RepoList
