'use client'

import clsx from 'clsx'

import { FC, useState } from 'react'

import { FiPhoneCall } from 'react-icons/fi'
import { Modal } from '../Modal/Modal'

// import Modal from '@/Components/ui/Modal/Modal'

const ContactBtn: FC<{ additionalStyles?: string | string[] }> = ({
  additionalStyles,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span className="dark:text-white hover:bg-gray-50 font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={clsx(additionalStyles)}
        >
          <FiPhoneCall style={{ fontSize: '23px', color: '#D32B82' }} />
        </button>
      </span>
      <Modal active={open} setActive={setOpen} />
    </>
  )
}

export default ContactBtn
