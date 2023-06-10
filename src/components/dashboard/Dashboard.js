import { connect } from "react-redux"
import Nav  from "../nav/Nav"
import { Divider } from "@fluentui/react-components"
import Question from "../question/Question"
import { Navigate } from "react-router-dom"
import { QuestionList } from "../question-list/QuestionList"

const mapStatesToProps = ({userReducer, questionReducer, authReducer}) => {
    const user = userReducer[authReducer]
    const answeredQuestions = user ? Object.keys(user.answers).sort((a, b) => questionReducer[a].timestamp - questionReducer[b].timestamp) : undefined
    const unansweredQuestions = Object.keys(questionReducer).filter((question) => {
        return !answeredQuestions.includes(question)
    }).sort((a, b) => questionReducer[a]?.timestamp - questionReducer[b]?.timestamp)
    return {
        user,
        authReducer,
        answeredQuestions,
        unansweredQuestions
    }
}

const Dashboard = (props) => {
    return (
        <>
        {props.authReducer &&  <div>
            <Nav user={props.user}/> 
            <Divider appearance="subtle"/>
            <QuestionList questions={props.answeredQuestions}/>
            <Divider appearance="subtle"/>
            <QuestionList questions={props.unansweredQuestions}/>
        </div>}
        {!props.authReducer && <Navigate to="/login"/>}
        </>
    )
}

export default connect(mapStatesToProps)(Dashboard)