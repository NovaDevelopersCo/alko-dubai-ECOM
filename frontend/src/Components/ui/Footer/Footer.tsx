import React from 'react'
import Container from '../Container/Container'
import FooterLinks from './FooterLinks'
import FooterSocial from './FooterSocial'

function Footer() {
  return (
    <footer className="bg-black shadow">
      <Container>
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                {/* <Image></Image> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  Алко-Дубай
                </span>
              </a>
            </div>
            <FooterLinks/>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400">
              © 2024{' '}
              <a
                href="https://www.instagram.com/nova_it_developers/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                className="hover:underline"
              >
                NovaDevCo™
              </a>
              . All Rights Reserved.
            </span>
            <FooterSocial/>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
