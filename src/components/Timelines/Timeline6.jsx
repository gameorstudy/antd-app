import { Timeline } from 'antd'

export function Timeline6() {
    return (
        <>
            <Timeline>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item color="red">
                    <p>Solve initial network problem 1</p>
                    <p>Solve initial network problem 2</p>
                    <p>Solve initial network problem 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Technial testing 1</p>
                    <p>Technial testing 2</p>
                    <p>Technial testing 3 2015-09-01</p>
                </Timeline.Item>
                <Timeline.Item color="gray">
                    <p>Technical testing 1</p>
                    <p>Technical testing 2</p>
                    <p>Technical testing 3</p>
                </Timeline.Item>
            </Timeline>
        </>
    )
}