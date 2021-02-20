import { TimePicker } from 'antd'
import moment from 'moment'

const format = 'HH:mm'

export function TimePicker4() {
    return (
        <>
            <TimePicker defaultValue={moment('12:08', format)} format={format} />
        </>
    )
}