import React, { useEffect } from 'react'
import { Avatar, Caption1, Subtitle2, Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow } from '@fluentui/react-components'
import { connect } from 'react-redux'
import { useStyles } from './Leaderboard.style'
import { isNil } from 'lodash'
import { useNavigate } from 'react-router-dom'

const mapStatesToProps = ({userReducer, authReducer}) => {
    const users = Object.keys(userReducer).sort((a, b) => {
        return (Object.keys(userReducer[b].answers).length + userReducer[b].questions.length) - (Object.keys(userReducer[a].answers).length + userReducer[a].questions.length)
    })
    return {
        users,
        userReducer,
        authReducer
    }
}

const columns = [
  { columnKey: "users", label: "Users" },
  { columnKey: "answered", label: "Answered" },
  { columnKey: "created", label: "Created" },

]
const Leaderboard = ({users, userReducer, authReducer}) => {
  const styles = useStyles()
  const navigate = useNavigate()

  useEffect(() => {
    if (isNil(authReducer)) {
        navigate('/login')
      }
  }, [navigate, authReducer])

  return (
    <Table className={styles.table}>
        <TableHeader>
            <TableRow>
                {columns.map((column) => (
                    <TableHeaderCell key={column.columnKey}>
                        {column.label}
                    </TableHeaderCell>
                ))}
            </TableRow>
        </TableHeader>
        <TableBody>
            {users.map((user) => (
                <TableRow key={user}>
                    <TableCell>
                        <TableCellLayout media={<Avatar image={{src: `${userReducer[user].avatarURL}`}}/>}>
                            <div className={styles.title}>
                                <Subtitle2>{userReducer[user].name}</Subtitle2>
                                <Caption1>{userReducer[user].id}</Caption1>
                            </div>
                        </TableCellLayout>
                    </TableCell>
                    <TableCell>
                        <TableCellLayout>
                            <Caption1>{Object.keys(userReducer[user].answers).length}</Caption1>
                        </TableCellLayout>
                    </TableCell>
                    <TableCell>
                        <TableCellLayout>
                            <Caption1>{userReducer[user].questions.length}</Caption1>
                        </TableCellLayout>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default connect(mapStatesToProps)(Leaderboard)
