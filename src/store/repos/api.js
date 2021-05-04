import axios from '../../service/api';

export const fetchRepos = () => axios.get('sort=stars&order=desc&per_page=2');
