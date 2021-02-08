import { DatePicker, Space } from 'antd'

const { RangePicker } = DatePicker

export function DatePicker8() {
    return <>
        <Space direction="vertical" size={12}>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="year" />
        </Space>
    </>
}