import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <div>
      <LoadingBar />
      {loading ? null : (
        <TweetPage match={{ params: { id: '8xf0y6ziyjabvozdd253nd' } }} />
      )}
    </div>
  )
}
const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
