import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import MenuCard from './MenuCard'

const uniqueList = [...new Set(Menu.map((item) => {
    return item.category
})), "All"]
console.log(uniqueList)

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniqueList)

    const filterItem = (category) => {
        if (category === "All") {
            return setMenuData(Menu)
        }
        const updatedList = Menu.filter((item) => {
            return item.category === category
        })
        setMenuData(updatedList)
    }
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {menuList.map((item) => {
                        return <button className="btn-group__item" onClick={() => filterItem(item)}>{item}</button>
                    })}

                </div>
            </nav>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant


