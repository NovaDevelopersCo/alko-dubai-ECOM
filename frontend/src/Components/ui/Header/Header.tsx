'use client'
import React, { useContext } from 'react'
import Container from '../Container/Container'
import { ShoppingCartOutlined } from '@ant-design/icons'
import HeaderLinks from './HeaderLinks'
import Search from '../Search/Search'
import Image from 'next/image'
import Link from 'next/link'
import BurgerBtn from './BurgerBtn'
import { BurgerContext } from '@/Components/context/AppContext'
import ContactBtn from './ContactBtn'

function Header() {
  const [isBurgerOpen] = useContext(BurgerContext)
  React.useEffect(() => {
    if (isBurgerOpen) {
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
    return () => {
      document.body.classList.remove('fixed')
    }
  }, [isBurgerOpen])
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 py-2.5 shadow z-10">
        <Container>
          <div className="flex justify-between items-center mx-auto max-w-screen-2xl">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={35} height={35} />
              </Link>
              <HeaderLinks />
              <span className="flex ml-5 items-center lg:hidden">
                <BurgerBtn />
              </span>
            </div>
            <div className="flex items-center lg:order-2">
              <Search />
              <ContactBtn />
              <a
                href="#"
                className="dark:text-white hover:bg-gray-50 font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none"
              >
                <ShoppingCartOutlined
                  style={{ fontSize: '23px', color: '#D32B82' }}
                />
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
