import React from 'react'
import Container from '../Container/Container'
import { ShoppingCartOutlined } from '@ant-design/icons'
import HeaderLinks from './HeaderLinks'
import { IoIosMenu } from 'react-icons/io'
import Search from '../Search/Search'
import { FiPhoneCall } from 'react-icons/fi'

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 py-2.5 shadow">
        <Container>
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
            <HeaderLinks />
            <a href="/#" className="flex items-center">
              {/* <Image></Image> */}
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <IoIosMenu style={{ fontSize: '30px', color: '#D32B82' }} />
              </button>
            </a>
            <div className="flex items-center lg:order-2">
              <Search></Search>

              <a
                href="#"
                className=" dark:text-white hover:bg-gray-50  font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none"
              >
                <FiPhoneCall style={{ fontSize: '23px', color: '#D32B82' }} />
              </a>
              <a
                href="#"
                className=" dark:text-white hover:bg-gray-50  font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none"
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
