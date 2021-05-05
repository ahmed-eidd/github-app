import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import RepoList from '../../components/RepoList/RepoList';
import { useDispatch, useSelector } from 'react-redux';
import { reposSelector, reposCountSelector } from '../../store/repos/selector';
import { fetchRepos } from '../../store/repos/slice';
import classes from './Home.module.scss';
import Repo from '../../components/RepoList/Repo/Repo';

const Home = () => {
  // Local State

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Selectors

  const repos = useSelector((state) => reposSelector(state));
  const reposCount = useSelector((state) => reposCountSelector(state));

  const reposDataLength =
    repos.length <= reposCount ? repos.length : reposCount;

  // Dispatch

  const dispatch = useDispatch();

  // useEffect

  const fetchMore = () => {
    // set hasMore to false if the current items are >= the all items in database !
    if (repos.length >= reposCount) {
      setHasMore(false);
      return false;
    }

    // otherwise get the data from the database
    setPage(prevState => prevState + 1)

    dispatch(fetchRepos(page + 1));
  };

  useEffect(() => {
    dispatch(fetchRepos(page));
  }, []);

  return (
    <div>
      <div className={classes.TitleContainer}>
        <h1>GitHub App</h1>
      </div>

      <InfiniteScroll
        dataLength={reposDataLength}
        hasMore={hasMore}
        next={fetchMore}
        loader={<h4>Loading...</h4>}
      >
        <RepoList>
          {repos.map((repo, index) => {
            return <Repo item={repo} key={index} />;
          })}
        </RepoList>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
