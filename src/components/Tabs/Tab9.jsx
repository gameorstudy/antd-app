import { useState } from 'react'
import { Tabs, Radio, Space } from 'antd'

const { TabPane } = Tabs

export function Tab9() {
    const [tabPosition, setTabPosition] = useState('left')

    return (
        <>
            <Space style={{ marginBottom: 24 }}>
                Tab position:
                <Radio.Group value={tabPosition} onChange={e => setTabPosition(e.target.value)}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space>
            <Tabs tabPosition={tabPosition}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}