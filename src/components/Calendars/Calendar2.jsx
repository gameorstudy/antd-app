import { Calendar } from 'antd'

function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'))
}

export function Calendar2() {
    return (
        <>
            <Calendar onPanelChange={onPanelChange} />
        </>
    )
}