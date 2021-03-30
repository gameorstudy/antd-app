import { Alert } from 'antd'

export function Alert4() {
    return (
        <>
            <Alert message="Success Text" type="success" />
            <Alert message="Info Text" type="info" />
            <Alert message="warning Text" type="warning" />
            <Alert message="Error Text" type="error" />
        </>
    )
}