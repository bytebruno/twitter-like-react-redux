import React, { useState } from 'react'

const NewTweet = () => {
  const [text, setText] = useState('')

  const tweetLeft = 280 - text.length

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //todo: Add tweet to store
    console.log('New tweet ', text)
    setText('')
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
        {tweetLeft <= 100 && (
            <div className='tweet-length'>
                {tweetLeft}
            </div>
        )}
        <button className='btn' type='submit' disabled={text === ''} >Submit</button>
      </form>
    </div>
  )
}

export default NewTweet
