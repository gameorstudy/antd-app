import { Space, Card } from 'antd'

export function Space3() {
    return (
        <>
            <Space direction="vertical">
                <Card title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Card" style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
        </>
    )
}