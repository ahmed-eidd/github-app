import axios from '../../service/api';

export const fetchRepos = (page) => axios.get(`sort=stars&order=desc&per_page=10&page=${page}`);
