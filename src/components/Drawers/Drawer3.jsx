import React from 'react'
import { Drawer, Button, Radio, Space } from 'antd'

export class Drawer3 extends React.Component {
    state = {visible: false, placement: 'left'}

    showDrawer = () => {
        this.setState({
            visible: true,
        })
    }

    onClose = () => {
        this.setState({visible: false})
    }

    onChange = e => {
        this.setState({
            placement: e.target.value,
        })
    }

    render() {
        const { placement, visible } = this.state
        return (
            <>
                <Space>
                    <Radio.Group defaultValue={placement} onChange={this.onChange}>
                        <Radio value="top">top</Radio>
                        <Radio value="right">right</Radio>
                        <Radio value="bottom">bottom</Radio>
                        <Radio value="left">left</Radio>
                    </Radio.Group>
                    <Button type="primary" onClick={this.showDrawer}>
                        Open
                    </Button>
                </Space>
                <Drawer
                    title="Basic Drawer"
                    placement={placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    key={placement}
                >
                    <p>Some content...</p>
                    <p>Some content...</p>
                    <p>Some content...</p>
                </Drawer>
            </>
        )
    }
}