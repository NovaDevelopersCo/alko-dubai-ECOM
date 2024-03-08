export const ContactItem = ({
  text,
  strong,
}: {
  text: string
  strong: string
}) => {
  return (
    <div className="flex flex-col gap-[18px] w-[279.24px]">
      <strong className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[22px] font-medium">
        {strong}
      </strong>
      <span className="text-15px sm:text-[16px] md:text-[17px] lg:text-[18px] font-montserrat max-w-[279.24px]">
        {text}
      </span>
    </div>
  )
}
