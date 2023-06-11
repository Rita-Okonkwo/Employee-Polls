import { Button, Caption1, Input, Subtitle1, Subtitle2 } from '@fluentui/react-components'
import React, { useEffect, useState } from 'react'
import { useStyles } from './New.style'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../../actions/questions'
import { useNavigate } from 'react-router-dom'
import { isNil } from 'lodash'


const mapStatesToProps = ({authReducer}) => {
    return {
        user: authReducer
    }
}

const New = ({dispatch, user}) => {
  const styles = useStyles()
  const navigate = useNavigate()
  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')

  const handleFirstChange = (_e, data) => {
    setFirstInput(data.value)
  }

  const handleSecondChange = (_e, data) => {
    setSecondInput(data.value)
  }

  const handleClick = () => {
    dispatch(handleSaveQuestion({
        optionOneText: firstInput,
        optionTwoText: secondInput,
        author: user
     }))
     navigate('/')
  }

  useEffect(() => {
    if (isNil(user)) {
        navigate('/login')
    } 
  }, [user, navigate])

  return (
    <div className={styles.main}>
        <Subtitle1>Would You Rather</Subtitle1>
        <Caption1>Create Your Own Poll</Caption1>
        <Subtitle2>First Option</Subtitle2>
        <Input value={firstInput} onChange={handleFirstChange}/>
        <Subtitle2>Second Option</Subtitle2>
        <Input value={secondInput} onChange={handleSecondChange}/>
        <Button disabled={firstInput === '' || secondInput === ''} onClick={handleClick}>Submit</Button>
    </div>
  )
}

export default connect(mapStatesToProps)(New)
