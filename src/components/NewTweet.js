import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

const NewTweet = ({ dispatch, id }) => {
  const [text, setText] = useState('')
  const [toHome, setToHome] = useState(false)

  const tweetLeft = 280 - text.length

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddTweet(text, id))
    setText('')
    id ? setToHome(false) : setToHome(true)
  }

  if (toHome) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <h3 className='center'>Compose new Tweet</h3>
      <form className='new-tweet' onSubmit={handleSubmit}>
        <textarea
          placeholder="What's Happening?"
          value={text}
          onChange={handleChange}
          className='textarea'
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className='tweet-length'>{tweetLeft}</div>}
        <button className='btn' type='submit' disabled={text === ''}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect()(NewTweet)
