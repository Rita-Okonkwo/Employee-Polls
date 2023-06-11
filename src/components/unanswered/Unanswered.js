import React, { useState } from 'react'
import { Title1, Image, Subtitle1, Card, Subtitle2, Button, Caption1 } from '@fluentui/react-components'
import { useStyles } from './Unanswered.style'
import { connect } from 'react-redux'
import { handleSetVote } from '../../actions/questions'
import { Checkmark20Filled } from '@fluentui/react-icons';

const mapStatesToProps = ({questionReducer}, {question}) => {
  const newQuestion = questionReducer[question.id]
  console.log(questionReducer)
  return {
    newQuestion
  }
}

const Unanswered = ({question, user, dispatch, auth, newQuestion}) => {
  const styles = useStyles()
  const [answered, setAnswered] = useState(undefined)
  console.log(newQuestion)
  const oneLength = newQuestion.optionOne.votes.length
  const twoLength = newQuestion.optionTwo.votes.length
  const onePercent = (oneLength / (oneLength + twoLength)) * 100
  const twoPercent = (twoLength / (oneLength + twoLength)) * 100

  const handleClick = (answer) => {
    dispatch(handleSetVote({
      qid: question.id,
      authedUser: auth,
      answer: answer
    }))
    setAnswered(answer)
  }

  return (
    <div className={styles.main}>
        <Title1>Poll by {question.author} </Title1>
        <Image src={user.avatarURL} shape='circular' className={styles.image}/>
        <Subtitle1>Would You Rather</Subtitle1>
        <div className={styles.cards}>
            <Card>
               {answered === 'optionOne' && <Checkmark20Filled/>}
                <Subtitle2>{question.optionOne.text}</Subtitle2>
                {!answered && <Button onClick={() => handleClick('optionOne')}>Vote</Button>}
                {answered && <Caption1>Total no of votes: {oneLength}</Caption1>}
                {answered && <Caption1>Percentage of votes: {onePercent}%</Caption1>}
            </Card>
            <Card>
               {answered === 'optionTwo' && <Checkmark20Filled/>}
                <Subtitle2>{question.optionTwo.text}</Subtitle2>
                {!answered && <Button onClick={() => handleClick('optionTwo')}>Vote</Button>}
                {answered && <Caption1>Total no of votes: {twoLength}</Caption1>}
                {answered && <Caption1>Percentage of votes: {twoPercent}%</Caption1>}
            </Card>
        </div>
    </div>
  )
}

export default connect(mapStatesToProps)(Unanswered)
