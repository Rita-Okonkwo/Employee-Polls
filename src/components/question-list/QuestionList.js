import Question from "../question/Question"
import { useStyles } from "./QuestionList.style"

export const QuestionList = ({questions}) => {
    const styles = useStyles()
    return (
          <ul className={styles.main}>
                {questions.map((id) => (
                    <Question id={id} answered={true} key={id}/>
                ))}
            </ul>  
    )
}