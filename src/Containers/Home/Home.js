import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RepoList from '../../components/RepoList/RepoList';
import {useDispatch, useSelector} from 'react-redux'
import {reposSelector, reposCountSelector} from '../../store/repos/selector';
import {fetchRepos} from '../../store/repos/slice'
import classes from './Home.module.scss';
import Repo from '../../components/RepoList/Repo/Repo';

const Home = () => {

  // Selectors

  const repos = useSelector((state) => reposSelector(state));
  const reposCount = useSelector((state) => reposCountSelector(state));

  // Dispatch

  const dispatch = useDispatch();

  // useEffect

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  return (
    <div>
      <div className={classes.TitleContainer}>
        <h1>GitHub App</h1>
      </div>

    <InfiniteScroll dataLength={reposCount}>
      <RepoList>
        {repos.map((repo) => (
          <Repo item={repo} key={repo.id} />
        ))}
        
      </RepoList>
    </InfiniteScroll>
    </div>
  );
};

export default Home;
