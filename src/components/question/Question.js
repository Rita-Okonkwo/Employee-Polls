import { Button, Caption2, Card, Subtitle2 } from "@fluentui/react-components";
import { connect } from "react-redux";
import { useStyles } from "./Question.style";
import { formatDate } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { isNil } from "lodash";
import { useEffect } from "react";

const mapStatesToProps = ({questionReducer, userReducer, authReducer}, {id}) => {
    const question = questionReducer[id]
    const user = userReducer[question.author]
    return {
        question,
        user,
        authReducer
    }
}

const Question = (props) => {
    const styles = useStyles()
    const navigate = useNavigate()

    useEffect(() => {
        if (isNil(props.authReducer)) {
            navigate('/login')
          }
        }, [navigate, props.authReducer])

    const handleClick = () => {
        navigate(`/questions/${props.id}`, {state: {answered: props.answered, question: props.question, user: props.user, auth: props.authReducer, id: props.id}})
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