import { Slider } from 'antd'

function formatter(value) {
    return `${value}%`
}

export function Slider8() {
    return (
        <>
            <Slider tipFormatter={formatter} />
            <Slider tipFormatter={null} />
        </>
    )
}