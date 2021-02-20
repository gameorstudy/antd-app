import { InputNumber } from 'antd'

export function InputNumber6() {
    function onChange(value) {
        console.log('changed', value)
    }

    return (
        <>
            <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
        </>
    )
}