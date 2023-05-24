import { Body1, Button, Caption1, Dropdown, Label, Title1, Option } from "@fluentui/react-components"
import { useStyles } from "./Login.style"

const Login = () => {
    const styles = useStyles()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        //TODO: redirect to home page
    }
    return (
        <div className={styles.rootContainer}>
            <Title1 className={styles.title1}>Employee Polls</Title1>
            <div className={styles.formContainers}>
                <Label id='select-user' required ><Body1>Please select a user</Body1></Label>
                <form method='post' onSubmit={handleSubmit}>
                    <div>
                        <Dropdown aria-labelledby='select-user' placeholder="-">
                            <Option><Caption1>Test</Caption1></Option>
                        </Dropdown>
                    </div>
                    <Button type='submit' className={styles.button}>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Login