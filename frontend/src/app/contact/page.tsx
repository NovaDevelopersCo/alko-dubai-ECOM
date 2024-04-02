import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import Container from '@/Components/ui/Container/Container'
import { GoogleMap } from '@/Components/ui/Map/GoogleMap'
import { ContactItem } from '@/Components/ui/ContactItem/ContactItem'
import Link from 'next/link'

const ContactPage = () => {
    return (
        <div className="mt-[70px]">
            <Container>
                <div className="flex flex-col gap-[66px]">
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
                        О КОМПАНИИ
                    </h2>
                    <div className="flex flex-col gap-[43px] mb-[51px]">
                        <div className="flex flex-start gap-[20px] sm:gap-[50px] md:gap-[150px] lg:gap-[300px] flex-wrap">
                            <ContactItem
                                text="Dubai Marina, Cayan Tower"
                                strong="Адрес"
                            />
                            <ContactItem
                                text="Ежедневно и Круглосуточно "
                                strong="График"
                            />
                        </div>
                        <div className="flex flex-start gap-[20px] sm:gap-[50px] md:gap-[150px] lg:gap-[300px] flex-wrap">
                            <ContactItem
                                text="+7 (925)-469-26-06"
                                strong="Телефон"
                            />
                            <div className="flex flex-col gap-[18px] w-[279.24px]">
                                <strong className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">
                                    Написать нам :
                                </strong>
                                <span className="flex gap-[6px] items-center">
                                    <Link href="https://t.me/+79254692606">
                                        <FaTelegram className="w-[42px] h-[42px] text-[#3F9FD9]" />
                                    </Link>
                                    <Link href="https://wa.me/qr/A4W3FM672FIRC1">
                                        <FaWhatsapp className="w-[45px] h-[45px] text-[#49C252]" />
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <GoogleMap />
        </div>
    )
}
export default ContactPage
