import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

const Dashboard = ({ tweetIds }) => {
  return (
    <div>
      <h3 className='center'>Your timeline</h3>
      <ul className='dashboard-list'>
        {tweetIds.map((id) => {
          return (
            <li key={id}>
              <Tweet id={id} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  }
}

export default connect(mapStateToProps)(Dashboard)
