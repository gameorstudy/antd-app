import { DatePicker, Space } from 'antd'

const { RangePicker } = DatePicker

export function DatePicker11() {
    return (
        <>
            <Space direction="vertical" size={12}>
                <DatePicker renderExtraFooter={() => 'extra footer'} />
                <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
                <RangePicker renderExtraFooter={() => 'extra footer'} />
                <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
                <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
            </Space>
        </>
    )
}