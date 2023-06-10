import { useLocation } from "react-router-dom"
import {Answered} from "../answered/Answered"
import Unanswered  from "../unanswered/Unanswered"

export const QuestionPage = () => {
  const location = useLocation()
  const answered = location.state.answered
  const question = location.state.question
  const user = location.state.user
  const auth = location.state.auth
  return (
    <>
    {answered && <Answered question={question} user={user}/>}
    {!answered && <Unanswered question={question} user={user} auth={auth}/>}
    </>
  )
}