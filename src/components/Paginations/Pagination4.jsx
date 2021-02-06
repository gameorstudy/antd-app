import { Pagination } from 'antd'

function onChange(pageNumber) {
    console.log('Page', pageNumber)
}

export function Pagination4() {
    return (
        <>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        </>
    )
}