import clsx from 'clsx'
import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { BurgerContext } from '@/Components/context/AppContext'
import { useAppDispatch } from '@/lib/hooks'
import { setSearch } from '@/lib/features/filter/filter'
import { Switch } from '../Switch/Switch'
import { CatalogLinks } from '../Catalog/CatalogLinks'

interface NavLink {
    name: string
    href: string
}

const Links: NavLink[] = [
    {
        name: 'Главная',
        href: '/',
    },
    {
        name: 'Магазин',
        href: '/store',
    },
    {
        name: 'Доставка и оплата',
        href: '/delivery',
    },
    {
        name: 'О компании',
        href: '/company',
    },
    {
        name: 'Контакты',
        href: '/contact',
    },
]

const HeaderLinks: FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext)
    const dispatch = useAppDispatch()
    const menuRef = useRef<HTMLDivElement | null>(null)

    const [catalog, setCatalog] = useState(false)
    const [menu, setMenu] = useState(true)

    const handleCatalog = () => {
        setMenu(false)
        setCatalog(true)
    }
    const handleMenu = () => {
        setCatalog(false)
        setMenu(true)
    }

    const underlineClasses = clsx(
        'absolute',
        'h-0.5',
        'bg-customPink',
        'bottom-0',
        'left-0',
        'w-0',
        'group-hover:w-full',
        'transition-all',
        'duration-300',
    )

    const navClasses = clsx(
        'ease-in-out duration-300',
        'bg-[#fff] fixed top-0 left-0 h-screen lg:w-[auto] md:w-[40%] sm:w-[50%] w-[65%] flex p-[20px_40px]',
        'lg:bg-transparent lg:relative lg:h-auto lg:w-auto lg:order-2 lg:max-w-auto lg:block lg:translate-x-0 z-[35] flex-col',
        isBurgerOpen
            ? 'translate-x-0 customMenuShadow'
            : '-translate-x-[130%] ',
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if (menuRef.current && !menuRef.current.contains(target)) {
                setIsBurgerOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef, setIsBurgerOpen])
    return (
        <div className={navClasses} id="mobile-menu-2" ref={menuRef}>
            <span className="flex lg:hidden -ml-[40px] -mt-[20px] -mr-[40px]">
                <Switch
                    openMenu={menu}
                    handleMenu={handleMenu}
                    openCatalog={catalog}
                    handleCatalog={handleCatalog}
                />
            </span>
            {menu && (
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:gap-[0px] gap-[13px]">
                    {Links.map((link, index) => (
                        <li className="relative group" key={index}>
                            <a
                                href={link.href}
                                className="block text-customBlack lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                                aria-current="page"
                                onClick={() => {
                                    setIsBurgerOpen(false)
                                    dispatch(setSearch(''))
                                }}
                            >
                                {link.name}
                            </a>
                            <span
                                className={clsx(
                                    !isBurgerOpen && underlineClasses,
                                )}
                            ></span>
                        </li>
                    ))}
                </ul>
            )}
            {catalog && <CatalogLinks />}
        </div>
    )
}

export default HeaderLinks
