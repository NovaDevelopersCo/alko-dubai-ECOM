export const ContactItem = ({
  text,
  strong,
}: {
  text: string
  strong: string
}) => {
  return (
    <div className="flex flex-col gap-[18px] w-[279.24px]">
      <strong className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium">
        {strong}
      </strong>
      <span className="text-13px sm:text-[14px] md:text-[16px] lg:text-[18px] font-montserrat max-w-[279.24px]">
        {text}
      </span>
    </div>
  )
}
