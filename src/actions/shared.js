import { getInitialData } from '../utils/api'
import { receiveTweets } from './tweets'
import { receiveUsers } from './users'
import { setAuthUser } from './authedUser'

import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(setAuthUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}
