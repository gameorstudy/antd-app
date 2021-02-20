import { TimePicker } from 'antd'
import moment from 'moment'

function onChange(time, timeString) {
    console.log(time, timeString)
}

export function TimePicker2() {
    return (
        <>
            <TimePicker onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
        </>
    )
}