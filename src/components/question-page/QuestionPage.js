import { useLocation } from "react-router-dom"
import {Answered} from "../answered/Answered"
import Unanswered  from "../unanswered/Unanswered"
import { useNavigate } from "react-router-dom"
import { isNil } from "lodash"
import { useEffect } from "react"
import { connect } from "react-redux"
import { FourZeroFour } from "../four-zero-four/FourZeroFour"

const mapStatesToProps = ({authReducer}) => {
  return {
    authUser: authReducer
  }
}

const QuestionPage = ({authUser}) => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (isNil(authUser)) {
        navigate('/login')
        console.log('auth')
      }
  }, [navigate, authUser])

  if (isNil(location.state)) {
    console.log('called')
    return <FourZeroFour/>
  }

  const answered = location.state.answered
  const question = location.state.question
  const user = location.state.user
  const auth = location.state.auth
  const id = location.state.id

  if (!user['questions'].includes(id)) {
    return <FourZeroFour/>
  }
  return (
    <>
    {answered && <Answered question={question} user={user}/>}
    {!answered && <Unanswered question={question} user={user} auth={auth}/>}
    </>
  )
}

export default connect(mapStatesToProps)(QuestionPage)