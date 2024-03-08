import React from 'react'
import { Slider, Switch } from 'antd'

export default function Catalog() {
    return (
        <div className="w-80 pl-2 flex justify-center flex-col">
            <p>Цена</p>
            <div className="w-52">
                <Slider range step={100} max={12000} />
            </div>
        </div>
    )
}
