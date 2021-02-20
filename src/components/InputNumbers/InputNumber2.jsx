import { InputNumber } from 'antd'

function onChange(value) {
    console.log('changed', value)
}

export function InputNumber2() {
    return (
        <>
            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </>
    )
}