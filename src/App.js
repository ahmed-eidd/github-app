import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux'
import {fetchRepos} from './store/repos/slice'
import './styles/global.scss';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos())
  }, [])
  const repos = useSelector((state) => state.repos.items)

  return (
    <div className="App">
     Github App
    </div>
  );
}

export default App;
