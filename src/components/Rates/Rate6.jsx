import { Rate } from 'antd'

export function Rate6() {
    return (
        <>
            <Rate defaultValue={3} />
            <span className="ant-rate-text">allowClear: true</span>
            <br />
            <Rate allowClear={false} defaultValue={3} />
            <span className="ant-rate-text">allowClear: false</span>
        </>
    )
}