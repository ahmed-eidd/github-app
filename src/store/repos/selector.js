import { createSelector } from 'reselect'

const reposStateSelector = (state) => state.repos



export const reposSelector = createSelector(
  [reposStateSelector],
  (repos) => repos.items.map(({name,owner,  id, description, created_at , stargazers_count, open_issues_count}) => ({
    id,
    name,
    description,
    date: created_at,
    stars: stargazers_count,
    issues: open_issues_count,
    avatar: owner?.avatar_url,
    authorName: owner?.login
  }))
)

export const reposCountSelector = createSelector(
  [reposStateSelector],
  (repos) => repos.count
)


export const reposLoadingSelector = createSelector(
  [reposStateSelector],
  (repos) => repos.loading
)