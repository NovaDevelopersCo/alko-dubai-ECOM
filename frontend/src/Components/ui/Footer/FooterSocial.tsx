import Link from 'next/link'
import React from 'react'
import { FaTelegram, FaViber } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SlSocialVkontakte } from 'react-icons/sl'
function FooterSocial() {
    return (
        <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
                href="https://wa.me/qr/A4W3FM672FIRC1"
                className="text-gray-500  hover:text-white ms-5"
            >
                <IoLogoWhatsapp style={{ fontSize: '17px' }} />
                <span className="sr-only">Whatsapp</span>
            </Link>
            <Link
                href="https://t.me/+79254692606"
                className="text-gray-500  hover:text-white ms-5"
            >
                <FaTelegram style={{ fontSize: '17px' }} />
                <span className="sr-only">Telegram</span>
            </Link>
        </div>
    )
}

export default FooterSocial
