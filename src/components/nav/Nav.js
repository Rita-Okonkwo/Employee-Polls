import { Text, Avatar, Tab, TabList, Button } from "@fluentui/react-components"
import { useStyles } from "./Nav.style"
import { logOutUser } from "../../actions/authedUser"
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux"

const Nav = (props) => {
    const styles = useStyles()
    const navigate = useNavigate()

    const handleClick = () => {
        props.dispatch(logOutUser())
        navigate('/login')
    }

    return (
        <div className={styles.navContainer}>
            <TabList appearance="transparent" className={styles.tab}>
                <Tab value="home">Home</Tab>
                <Tab value="leaderboard">Leaderboard</Tab>
                <Tab value='new'>New</Tab>
            </TabList>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <Avatar image={{src: `${props.user.avatarURL}`}}/>
                    <Text>{props.user.id}</Text>
                </div>
                <Button appearance="transparent" onClick={handleClick}>Logout</Button>
            </div>
        </div>
    )
}
export default connect()(Nav)