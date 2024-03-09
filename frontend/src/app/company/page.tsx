import Container from '@/Components/ui/Container/Container'
import Image from 'next/image'
import Wine from '@/assets/wine.png'

const CompanyPage = () => {
  return (
    <Container>
      <div className="flex justify-between mb-[35px] sm:mb-[35px] md:mb-[35px] lg:mb-0">
        <div className="flex gap-[35px] flex-col text-Montserrat mt-[60px]">
          <h2 className="text-Literalla text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px]">
            О КОМПАНИИ
          </h2>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-[789px]">
            Как ни странно, 50% туристов отменяют Дубай, как потенциальное место
            для отпуска, из-за распространенного мнения, что там нельзя
            употреблять алкоголь. Так ли это на самом деле? Отчасти, да! Но всё
            не так плохо.
          </p>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-[769px] ">
            Дубай — самый удивительный и самый свободный эмират в ОАЭ.
            Разумеется, мусульманское население хранит верность традициям: не
            употребляет спиртного, соблюдает дресс-код и чтит иные законы
            ислама. Но к туристам здесь более чем лояльны: для них придумывают
            невероятные развлечения, открывают гигантские шоппинг-моллы, строят
            бьющие мировые рекорды достопримечательности — все, чтобы покорять
            сердца и опустошать кошельки. К слабостям иноземцев тоже относятся
            снисходительно, так что с покупкой алкоголя особых проблем не
            возникнет.
          </p>
          <span className="border border-t-customPink w-[120px]"></span>
          <p className="text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] max-w-[661px]">
            Наша компания прекрасно знает потребности наших клиентов и отлично
            знает законодательство ОАЭ. Благодаря этому мы можем осуществить
            доставку любого вида алкогольной продукции в Дубае высочайшего
            качества в кратчайшие сроки со 100% гарантией качества!
          </p>
        </div>
        <div className="hidden md:flex">
          <Image src={Wine} alt="wine" />
        </div>
      </div>
    </Container>
  )
}

export default CompanyPage
