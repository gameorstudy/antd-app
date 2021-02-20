import { useState } from 'react'
import { Badge, Button, Switch } from 'antd'
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons'

const ButtonGroup = Button.Group

export function Badge8() {
    const [count, setCount] = useState(5)
    const [show, setShow] = useState(true)

    const increase = () => {
        setCount(count + 1)
    }

    const decline = () => {
        setCount(count - 1 < 0 ? 0 : count - 1)
    }

    const random = () => {
        const count = Math.floor(Math.random() * 100)
        setCount(count)
    }

    const onChange = show => {
        setShow(show)
    }

    return (
        <>
            <div>
                <div>
                    <Badge count={count}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <ButtonGroup>
                        <Button onClick={decline}>
                            <MinusOutlined />
                        </Button>
                        <Button onClick={increase}>
                            <PlusOutlined />
                        </Button>
                        <Button onClick={random}>
                            <QuestionOutlined />
                        </Button>
                    </ButtonGroup>
                </div>
                <div style={{ marginTop: 10 }}>
                    <Badge dot={show}>
                        <a href="#" className="head-example" />
                    </Badge>
                    <Switch onChange={onChange} checked={show} />
                </div>
            </div>
        </>
    )
}