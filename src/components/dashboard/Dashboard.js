import { connect } from "react-redux"
import { Divider, Subtitle1 } from "@fluentui/react-components"
import { Navigate } from "react-router-dom"
import { QuestionList } from "../question-list/QuestionList"
import { useStyles } from "./Dashboard.style"

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

const Dashboard = (props) => {
    const styles = useStyles()
    return (
        <>
        {props.authReducer &&  <div>
            <Subtitle1 className={styles.title}>Answered Polls</Subtitle1>
            <QuestionList questions={props.answeredQuestions} answered={true}/>
            <Divider appearance="subtle"/>
            <Subtitle1 className={styles.title}>Unanswered Polls</Subtitle1>
            <QuestionList questions={props.unansweredQuestions} answered={false}/>
        </div>}
        {!props.authReducer && <Navigate to="/login"/>}
        </>
    )
}

export default connect(mapStatesToProps)(Dashboard)