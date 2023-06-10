import { Body1, Button, Dropdown, Label, Title1, Option } from "@fluentui/react-components"
import { useStyles } from "./Login.style"
import { connect } from "react-redux"
import { useState } from "react"
import { setAuthedUser } from "../../actions/authedUser"
import { useNavigate } from "react-router-dom"
import { LoadingBar } from "react-redux-loading-bar"

const mapStatesToProps = ({userReducer}) => {
    const users = Object.keys(userReducer)
    return {
     users
    } 
 }

const Login = (props) => {
    const [selectedOption, setSelectedOption] = useState(undefined)
    const styles = useStyles()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        props.dispatch(setAuthedUser(selectedOption))
        navigate("/")
    }

    const handleSelect = (_event, data) => {
        setSelectedOption(data.optionValue)
    }

    return (
        <>
            <LoadingBar/>
            <div className={styles.rootContainer}>
            <Title1 className={styles.title1}>Employee Polls</Title1>
            <div className={styles.formContainers}>
                <Label id='select-user' required ><Body1>Please select a user</Body1></Label>
                <form method='post' onSubmit={handleSubmit}>
                    {props.users.length !== 0 && <div>
                        <Dropdown aria-labelledby='select-user' placeholder="-" onOptionSelect={handleSelect}>
                            {
                                props.users.map((id) => {
                                    return <Option key={id}>{id}</Option>
                                })
                            }
                        </Dropdown>
                    </div>}
                    {selectedOption && <Button type='submit' className={styles.button}>Submit</Button>}
                </form>
            </div>
        </div>
        </>
    )
}

export default connect(mapStatesToProps)(Login)