import React from 'react'
import { Tag, Button } from 'antd'

export class Tag4 extends React.Component {
    state = {
        visible: true,
    }

    render() {
        return (
            <>
                <Tag
                    closable
                    visible={this.state.visible}
                    onClose={() => this.setState({ visible: false})}
                >
                    Movies
                </Tag>
                <br />
                <Button size="small" onClick={() => this.setState({ visible: !this.state.visible})}>
                    Toggle
                </Button>
            </>
        )
    }
}