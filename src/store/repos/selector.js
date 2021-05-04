import { createSelector } from 'reselect'

const reposStateSelector = (state) => state.repos.items


export const reposSelector = createSelector(
  [reposStateSelector],
  (repos) => repos.map(({name,owner,  id, description, created_at , stargazers_count, open_issues_count}) => ({
    name,
    description,
    date: created_at,
    stars: stargazers_count,
    issues: open_issues_count,
    avatar: owner?.avatar_url,
    authorName: owner?.login
  }))
)


