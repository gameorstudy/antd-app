import { useState } from 'react'
import { Select } from 'antd'

const { Option } = Select

const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
    Zhejiang: ['Hangzhou', 'Ninbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}

export function Select6() {
    const [cities, setCities] = useState(cityData[provinceData[0]])
    const [secondCity, SetSecondCity] = useState(cityData[provinceData[0]][0])

    const handleProvinceChange = value => {
        setCities(cityData[value])
        SetSecondCity(cityData[value][0])
    }

    const onSecondCityChange = value => {
        SetSecondCity(value)
    }

    return (
        <>
            <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                {provinceData.map(province => (
                    <Option key={province}>{province}</Option>
                ))}
            </Select>
            <Select style={{ width: 120 }} value={secondCity} onChange={onSecondCityChange}>
                {cities.map(city => (
                    <Option key={city}>{city}</Option>
                ))}
            </Select>
        </>
    )
}