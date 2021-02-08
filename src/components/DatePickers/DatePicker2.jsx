import { DatePicker, Space } from 'antd'

function onChange(date, dateString) {
    console.log(date, dateString)
}

export function DatePicker2() {
    return (
        <>
            <Space direction="vertical">
                <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" />
            </Space>
        </>
    )
}