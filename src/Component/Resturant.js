import React, {useState} from 'react';
import "./style.css";
// import "./public/images";
import Menu from './menuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';
const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem=(catagory)=>{
        if (catagory === 'All'){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>{
                return curElem.catagory === catagory;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList } />
            <MenuCard menuData={menuData}/>
            
        </>
    )
}

export default Resturant
