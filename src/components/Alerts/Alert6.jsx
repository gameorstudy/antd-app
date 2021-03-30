import { Alert } from 'antd'

export function Alert6() {
    return (
        <>
            <Alert message="Warning text" banner />
            <br />
            <Alert
                message="Very long warning text warning text text text text text text text text text text text text text text text text"
                banner
                closable
            />
            <br />
            <Alert showIcon={false} message="warning text without icon" banner />
            <br />
            <Alert type="error" message="Error text" banner />
        </>
    )
}