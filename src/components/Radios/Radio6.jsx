import { Radio } from 'antd'

export function Radio6() {
    const onChange = e => {
        console.log(`radio checked:${e.target.value}`)
    }

    return (
        <>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b" disabled>Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
            <Radio.Group disabled onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
            </Radio.Group>
        </>
    )
}