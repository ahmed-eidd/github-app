import { combineReducers} from 'redux'
import reposReducer from '../store/repos/slice'

const rootReducer = combineReducers({
  repos: reposReducer
})

export default rootReducer
