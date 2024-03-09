'use client'

import clsx from 'clsx'

import { FC, useContext } from 'react'

import { ModalContext } from '@/Components/context/AppContext'
import { FiPhoneCall } from 'react-icons/fi';

const ContactBtn: FC<{ additionalStyles?: string | string[] }> = ({
  additionalStyles,
}) => {
  const [visible, setVisible] = useContext(ModalContext)
  return (
    <span className="dark:text-white hover:bg-gray-50 font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none">
      <button
        className={clsx(additionalStyles)}
        onClick={() => {
          setVisible(true)
          document.body.classList.add('fixed')
        }}
      >
        <FiPhoneCall style={{ fontSize: '23px', color: '#D32B82' }} />
      </button>
    </span>
  )
}

export default ContactBtn
