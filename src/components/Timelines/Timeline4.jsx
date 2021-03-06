import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

export function Timeline4() {
    return (
        <>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                    Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>Network problems being solving 2015-09-01</Timeline.Item>
            </Timeline>
        </>
    )
}