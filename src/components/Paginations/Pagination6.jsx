import { Pagination } from 'antd'

function itemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <a>Previous</a>
    }

    if (type === 'next') {
        return <a>Next</a>
    }
    return originalElement
}

export function Pagination6() {
    return (
        <>
            <Pagination total={500} itemRender={itemRender} />
        </>
    )
}