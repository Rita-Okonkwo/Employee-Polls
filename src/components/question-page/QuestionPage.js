import { useLocation } from "react-router-dom"
import {Answered} from "../answered/Answered"
import { Title1 } from "@fluentui/react-components"
import Unanswered  from "../unanswered/Unanswered"
import { useNavigate } from "react-router-dom"
import { isNil } from "lodash"
import { useEffect } from "react"
import { connect } from "react-redux"

const mapStatesToProps = ({authReducer}) => {
  return {
    authUser: authReducer
  }
}

const QuestionPage = ({authUser}) => {
  const location = useLocation()
  const answered = location.state.answered
  const question = location.state.question
  const user = location.state.user
  const auth = location.state.auth
  const id = location.state.id
  const navigate = useNavigate()

  useEffect(() => {
    if (isNil(authUser)) {
        navigate('/login')
      }
  }, [navigate, authUser])

  if (!user['questions'].includes(id)) {
    return <Title1>404</Title1>
  }
  return (
    <>
    {answered && <Answered question={question} user={user}/>}
    {!answered && <Unanswered question={question} user={user} auth={auth}/>}
    </>
  )
}

export default connect(mapStatesToProps)(QuestionPage)