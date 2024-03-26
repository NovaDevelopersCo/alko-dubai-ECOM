import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

export const Modal = ({
    active,
    setActive,
}: {
    active: boolean
    setActive: (a: boolean) => void
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleClose = () => {
        if (inputRef.current) inputRef.current.checked = false
    }

    const [isMenuOpen, setIsMenuOpen] = useState(active)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMenuOpen(active)
        }, 100) // Установите желаемую задержку

        return () => clearTimeout(timeout) // Очищаем таймер при размонтировании компонента
    }, [active])

    return (
        <>
            {isMenuOpen && (
                <div
                    className={`
            ${active ? 'opacity-1 scale-100' : 'opacity-0 scale-75'}
            relative transition-all duration-500 select-none
          `}
                    onClick={() => setActive(false)}
                >
                    <div
                        className="p-[18px_17px] border border-customPink flex justify-center rounded-[10px] gap-1 absolute -right-[15px] top-[15px] bg-[#fff]"
                        onClick={(e) => {
                            e.stopPropagation() // Остановка распространения события
                            handleClose() // Закрытие модального окна
                        }}
                    >
                        <Image
                            width={10.5}
                            height={12.5}
                            src="/triangle.svg"
                            alt="triangle"
                            className="absolute right-[20px] -top-[9px]"
                        />
                        <Link
                            href="https://t.me/+79254692606"
                            onClick={() => setActive(false)}
                        >
                            <FaTelegram className="w-[32px] h-[32px] text-[#3F9FD9]" />
                        </Link>
                        <Link
                            href="https://wa.me/qr/A4W3FM672FIRC1"
                            onClick={() => setActive(false)}
                        >
                            <FaWhatsapp className="w-[32px] h-[32px] text-[#49C252]" />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
