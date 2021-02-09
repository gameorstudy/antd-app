import { Input } from 'antd'

const { Search } = Input

export function Input6() {
    return (
        <>
            <Search placeholder="input search loading default" loading />
            <br />
            <br />
            <Search placeholder="input search loading with enterbutton" enterButton loading />
            <br />
            <br />
            <Search placeholder="input search text" enterButton="Search" size="large" loading />
        </>
    )
}