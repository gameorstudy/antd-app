import React from 'react'
import { Slider, Switch } from 'antd'

export class Slider2 extends React.Component {
    state = {
        disabled: false
    }

    handleDisabledChange = disabled => {
        this.setState({ disabled })
    }

    render() {
        const { disabled } = this.state
        return (
            <>
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size="small" checked={disabled} onClick={this.handleDisabledChange} />
            </>
        )
    }
}