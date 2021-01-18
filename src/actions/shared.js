import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthUser } from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthUser(AUTHED_ID))
    })
  }
}
