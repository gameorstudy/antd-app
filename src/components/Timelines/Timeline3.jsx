import { useState } from 'react'
import { Timeline, Button } from 'antd'

export function Timeline3() {
    const [reverse, setReverse] = useState(false)

    const handleClick = () => {
        setReverse(!reverse)
    }

    return (
        <>
            <div>
                <Timeline pending="Recording..." reverse={reverse}>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                </Timeline>
                <Button type="primary" style={{ marginTop: 16 }} onClick={handleClick}>
                    Toggle Reverse
                </Button>
            </div>
        </>
    )
}