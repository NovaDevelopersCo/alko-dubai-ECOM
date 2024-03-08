import { FaTelegram } from 'react-icons/fa'
import Container from '@/Components/ui/Container/Container'
import { GoogleMap } from '@/Components/ui/Map/GoogleMap'
import { ContactItem } from '@/Components/ui/ContactItem/ContactItem'

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
                text="Building No.3, Jewellery & Gemplex, — Dubai — United Arab Emirates"
                strong="Адрес"
              />
              <ContactItem text="Ежедневно и Круглосуточно " strong="График" />
            </div>
            <div className="flex flex-start gap-[20px] sm:gap-[50px] md:gap-[150px] lg:gap-[300px] flex-wrap">
              <ContactItem text="+7 964 382 22 29" strong="Телефон" />
              <div className="flex flex-col gap-[18px] w-[279.24px]">
                <strong className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">
                  Написать нам :
                </strong>
                <span>
                  <a href="#" className="flex gap-[6px] items-center">
                    <FaTelegram className="w-[42px] h-[42px] text-[#3F9FD9]" />
                    <img
                      className="w-[50px] h-[50px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt={'Whatsapp'}
                    />
                  </a>
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
