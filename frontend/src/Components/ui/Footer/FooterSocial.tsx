import React from 'react'
import { FaTelegram, FaViber } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SlSocialVkontakte } from 'react-icons/sl'
function FooterSocial() {
  return (
    <div className="flex mt-4 sm:justify-center sm:mt-0">
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <FaViber />
        <span className="sr-only">Viber</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <SlSocialVkontakte style={{ fontSize: '17px' }} />
        <span className="sr-only">Vkontakte</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <IoLogoWhatsapp style={{ fontSize: '17px' }} />
        <span className="sr-only">Whatsapp</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
      >
        <FaTelegram style={{ fontSize: '17px' }} />
        <span className="sr-only">Telegram</span>
      </a>
    </div>
  )
}

export default FooterSocial
