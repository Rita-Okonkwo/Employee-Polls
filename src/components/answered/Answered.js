import { Title1, Image, Card, Subtitle1, Caption1, Subtitle2 } from '@fluentui/react-components'
import React from 'react'
import { useStyles } from './Answered.style'

export const Answered = ({question, user}) => {
    const styles = useStyles()
    const oneLength = question.optionOne.votes.length
    const twoLength = question.optionTwo.votes.length
    const onePercent = (oneLength / (oneLength + twoLength)) * 100
    const twoPercent = (twoLength / (oneLength + twoLength)) * 100
  return (
    <div className={styles.main}>
        <Title1>Poll by {question.author} </Title1>
        <Image src={user.avatarURL} shape='circular' className={styles.image}/>
        <Subtitle1>Would You Rather</Subtitle1>
        <div className={styles.cards}>
            <Card>
                <Subtitle2>{question.optionOne.text}</Subtitle2>
                <Caption1>Total no of votes: {oneLength}</Caption1>
                <Caption1>Percentage of votes: {onePercent}%</Caption1>
            </Card>
            <Card>
                <Subtitle2>{question.optionTwo.text}</Subtitle2>
                <Caption1>Total no of votes: {twoLength}</Caption1>
                <Caption1>Percentage of votes: {twoPercent}%</Caption1>
            </Card>
        </div>
    </div>
  )
}
