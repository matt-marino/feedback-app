import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Review must be at least 10 characters')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <div className="input-group">
                <input onChange={handleTextChange}
                type="text"
                placeholder='Write a review'
                value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
