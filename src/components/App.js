import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

const App = ({dispatch, loading}) => {
  

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <div>
      <LoadingBar />
      {loading ? null : <NewTweet />}
    </div>
  )
}
const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)
