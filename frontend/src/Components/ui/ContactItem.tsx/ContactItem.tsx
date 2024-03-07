export const ContactItem = ({
  text,
  strong,
}: {
  text: string
  strong: string
}) => {
  return (
    <div className="flex flex-col gap-[18px]">
      <strong className="text-[22px] font-medium">{strong}</strong>
      <span className="text-18px font-montserrat max-w-[279.24px]">{text}</span>
    </div>
  )
}
