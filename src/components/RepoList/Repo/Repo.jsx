import React from 'react';
import classes from './Repo.module.scss';

const Repo = ({ item }) => {
  const { authorName, avatar, date, description, issues, name, stars } = item;

  return (
    <div className={classes.Container}>
      <div className={classes.ImgContainer}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={classes.TextContainer}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={classes.Btns}>
          <div className={classes.BtnStar}>Stars: {stars}</div>
          <div className={classes.BtnIssues}>Issues: {issues}</div>
          <p className={classes.Date}>
            Submitted{date}days ago by 
            <span>{authorName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Repo;
