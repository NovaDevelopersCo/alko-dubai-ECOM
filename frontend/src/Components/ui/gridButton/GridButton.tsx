import React from 'react';
import './gridBut.css'
const GridButton2 =({active, onclick}:{active:number,onclick:()=>void})=> {
    return <svg className={active===2? 'grid-active':''} onClick={onclick} width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="14" height="14" stroke="#878787"/>
        <rect x="0.5" y="18.5" width="14" height="14" stroke="#878787"/>
        <rect x="18.5" y="18.5" width="14" height="14" stroke="#878787"/>
        <rect x="18.5" y="0.5" width="14" height="14" stroke="#878787"/>
    </svg>
}
const GridButton3 = ({active, onclick}:{active:number,onclick:()=>void}) => {
    return <svg className={active===3? 'grid-active':''} onClick={onclick} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#878787"/>
        <rect y="12" width="10" height="10" fill="#878787"/>
        <rect y="24" width="10" height="10" fill="#878787"/>
        <rect x="12" y="12" width="10" height="10" fill="#878787"/>
        <rect x="24" y="12" width="10" height="10" fill="#878787"/>
        <rect x="12" y="24" width="10" height="10" fill="#878787"/>
        <rect x="24" y="24" width="10" height="10" fill="#878787"/>
        <rect x="12" width="10" height="10" fill="#878787"/>
        <rect x="24" width="10" height="10" fill="#878787"/>
    </svg>

};
const GridButton4 = ({active, onclick}:{active:number,onclick:()=>void}) => {

    return <svg className={active===4? 'grid-active':''} onClick={onclick} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="7" height="7" fill="#878787"/>
        <rect y="9" width="7" height="7" fill="#878787"/>
        <rect y="18" width="7" height="7" fill="#878787"/>
        <rect y="27" width="7" height="7" fill="#878787"/>
        <rect x="9" y="9" width="7" height="7" fill="#878787"/>
        <rect x="18" y="9" width="7" height="7" fill="#878787"/>
        <rect x="27" y="9" width="7" height="7" fill="#878787"/>
        <rect x="9" y="18" width="7" height="7" fill="#878787"/>
        <rect x="9" y="27" width="7" height="7" fill="#878787"/>
        <rect x="18" y="18" width="7" height="7" fill="#878787"/>
        <rect x="27" y="18" width="7" height="7" fill="#878787"/>
        <rect x="18" y="27" width="7" height="7" fill="#878787"/>
        <rect x="27" y="27" width="7" height="7" fill="#878787"/>
        <rect x="9" width="7" height="7" fill="#878787"/>
        <rect x="18" width="7" height="7" fill="#878787"/>
        <rect x="27" width="7" height="7" fill="#878787"/>
    </svg>

};
const GridButton = ({gridCount, index, onclick}:{gridCount:number, index:number, onclick:()=>void}) => {

    switch (index)
    {
        case 2:return <GridButton2 active={gridCount} onclick={onclick}/>
        case 3:return <GridButton3 active={gridCount} onclick={onclick}/>
        case 4:return <GridButton4 active={gridCount} onclick={onclick}/>
        default: return <GridButton4 active={gridCount} onclick={onclick}/>
    }
};
export default GridButton;