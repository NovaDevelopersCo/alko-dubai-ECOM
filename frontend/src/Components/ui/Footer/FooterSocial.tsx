import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import Link from 'next/link'

function FooterSocial() {
    return (
        <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
                href="https://t.me/NovaDevelopersCo"
                className="text-gray-500  hover:text-white ms-5"
            >
                <FaTelegram style={{ fontSize: '17px' }} />
                <span className="sr-only">Telegram</span>
            </Link>
        </div>
    )
}

export default FooterSocial
