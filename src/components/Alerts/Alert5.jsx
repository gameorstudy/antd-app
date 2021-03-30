import { Alert } from 'antd'

export function Alert5() {
    return (
        <>
            <Alert message="Success Tips" type="success" showIcon />
            <Alert message="Infomational Notes" type="info" showIcon />
            <Alert message="Warning" type="warning" showIcon closable />
            <Alert message="Error" type="error" showIcon />
            <Alert
                message="Success Tips"
                description="Detailed description and advice about success copywriting."
                type="success"
                showIcon
            />
            <Alert
                message="Infomational Notes"
                description="Addititonal description and information about copywriting."
                type="info"
                showIcon
            />
            <Alert
                message="Warning"
                description="This is a warning notice about copywriting."
                type="warning"
                showIcon
                closable
            />
                <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        </>
    )
}