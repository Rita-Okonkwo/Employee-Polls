import Question from "../question/Question"
import { useStyles } from "./QuestionList.style"

export const QuestionList = ({questions, answered}) => {
    const styles = useStyles()
    return (
          <ul className={styles.main}>
                {questions.map((id) => (
                    <Question id={id} answered={answered} key={id}/>
                ))}
            </ul>  
    )
}