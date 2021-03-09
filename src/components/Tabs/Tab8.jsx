import { useState } from 'react'
import { Tabs, Radio } from 'antd'

const { TabPane } = Tabs

export function Tab8() {
    const [size, setSize] = useState('small')

    return (
        <>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)} style={{ marginBottom: 16 }}>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
            <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
                <TabPane tab="Tab 1" key="1">
                    Content of tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of tab 3
                </TabPane>
            </Tabs>
            <Tabs defaultActiveKey="1" type="card" size={size}>
                <TabPane tab="Card Tab 1" key="1">
                    Content of card tab 1
                </TabPane>
                <TabPane tab='Card Tab 2' key="2">
                    Content of card tab 2
                </TabPane>
                <TabPane tab='Card Tab 3' key="3">
                    Content of card tab 3
                </TabPane>
            </Tabs>
        </>
    )
}