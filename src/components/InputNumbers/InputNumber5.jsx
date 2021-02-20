import { InputNumber } from 'antd'

export function InputNumber5() {
    return (
        <>
            <InputNumber min={1} max={10} defaultValue={3} bordered={false} />
        </>
    )
}