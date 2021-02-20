import { TimePicker } from 'antd'
import moment from 'moment'

export function TimePicker8() {
    return (
        <>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
        </>
    )
}