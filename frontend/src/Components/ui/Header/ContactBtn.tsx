'use client'

import { FC, useState, useEffect, useRef } from 'react'

import { FiPhoneCall } from 'react-icons/fi'
import { Modal } from '../Modal/Modal'

const ContactBtn: FC<{ additionalStyles?: string | string[] }> = ({
  additionalStyles, // eslint-disable-line no-unused-vars
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const closeByClick = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setOpen(false)
    }
  }

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      closeByClick(e)
    }

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [open])

  return (
    <>
      <span
        className="dark:text-white hover:bg-gray-50 font-medium rounded-[50%] text-sm px-2 lg:px-2 py-2 lg:py-2 mr-1 focus:outline-none"
        ref={containerRef}
      >
        <label htmlFor="openModal" onClick={(e) => e.stopPropagation}>
          <input
            id="openModal"
            type="checkbox"
            className="hidden"
            onChange={() => setOpen((prev) => !prev)}
          />
          <FiPhoneCall
            style={{ fontSize: '23px', color: '#D32B82', cursor: 'pointer' }}
          />
        </label>
        <Modal active={open} setActive={setOpen} />
      </span>
    </>
  )
}

export default ContactBtn
