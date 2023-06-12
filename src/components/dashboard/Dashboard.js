import { connect } from "react-redux"
import { Dropdown, Option, Subtitle1, mergeClasses } from "@fluentui/react-components"
import { Navigate } from "react-router-dom"
import { QuestionList } from "../question-list/QuestionList"
import { useStyles } from "./Dashboard.style"
import { useState } from "react"

const mapStatesToProps = ({userReducer, questionReducer, authReducer}) => {
    const user = userReducer[authReducer]
    const answeredQuestions = user ? Object.keys(user.answers).sort((a, b) => questionReducer[b].timestamp - questionReducer[a].timestamp) : undefined
    const unansweredQuestions = Object.keys(questionReducer).filter((question) => {
        return !answeredQuestions.includes(question)
    }).sort((a, b) => questionReducer[b]?.timestamp - questionReducer[a]?.timestamp)
    return {
        user,
        authReducer,
        answeredQuestions,
        unansweredQuestions
    }
}

export const DashboardC = (props) => {
    const [answered, setAnswered] = useState('Unanswered')
    const styles = useStyles()
    const handleSelect = (_event, data) => {
        setAnswered(data.optionValue)
    }

    return (
        <>
        {props.authReducer &&  <div className={styles.main}>
            <Dropdown aria-labelledby='select-user' className={mergeClasses(styles.title, styles.dashboard)} defaultValue="Unanswered" onOptionSelect={handleSelect}>
                <Option>Unanswered</Option>
                <Option>Answered</Option>
            </Dropdown>
            {answered === 'Answered' && <div>
                    <Subtitle1 className={styles.title}>Answered Polls</Subtitle1>
                    <QuestionList questions={props.answeredQuestions} answered={true}/>
            </div>}
            {answered === 'Unanswered' && <div>
                    <Subtitle1 className={styles.title}>Unanswered Polls</Subtitle1>
                    <QuestionList questions={props.unansweredQuestions} answered={false}/>
                </div>}
        </div>}
        {!props.authReducer && <Navigate to="/login"/>}
        </>
    )
}

export default connect(mapStatesToProps)(DashboardC)