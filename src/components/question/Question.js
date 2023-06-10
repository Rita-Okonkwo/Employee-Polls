import { Button, Caption2, Card, Subtitle2 } from "@fluentui/react-components";
import { connect } from "react-redux";
import { useStyles } from "./Question.style";
import { formatDate } from "../../utils/helper";

const mapStatesToProps = ({questionReducer}, {id}) => {
    const question = questionReducer[id]
    return {
        question
    }
}

const Question = (props) => {
    const styles = useStyles()
    const handleClick = () => {
        //TODO: navigate to question page
    }
    return (
        <div className={styles.main}>
            <Card size="small" className={styles.card}>
                <Subtitle2>{props.question.author}</Subtitle2>
                <Caption2>{formatDate(props.question.timestamp)}</Caption2>
                <Button onClick={handleClick}>Show</Button>
            </Card>
        </div>
        
    )
}
export default connect(mapStatesToProps)(Question)