import { connect } from "react-redux"
import Nav  from "../nav/Nav"
import { Divider } from "@fluentui/react-components"
import Login from "../login/Login"

const mapStatesToProps = ({userReducer, questionReducer, authReducer}) => {
    const user = userReducer[authReducer]
    return {
        questions: Object.keys(questionReducer),
        user,
        authReducer
    }
}

const Dashboard = (props) => {
    console.log(props.authReducer)
    return (
        <>
        {props.authReducer &&  <div>
            <Nav user={props.user}/> 
            <Divider appearance="subtle"/>
        </div>}
        {!props.authReducer && <Login/>}
        </>
    )
}

export default connect(mapStatesToProps)(Dashboard)