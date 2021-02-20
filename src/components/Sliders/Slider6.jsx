import React from 'react'
import { Slider, Switch } from 'antd'

export class Slider6 extends React.Component {
    state = {
        reverse: true
    }

    handleReverseChange = reverse => {
        this.setState({ reverse })
    }

    render() {
        const { reverse } = this.state
        return (
            <> 
                <Slider defaultValue={30} reverse={reverse} />
                <Slider range defaultValue={[20, 50]} reverse={reverse} />
                Reversed: <Switch size="small" checked={reverse} onChange={this.handleReverseChange} />
            </>
        )
    }
}