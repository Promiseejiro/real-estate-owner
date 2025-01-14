import { MdInfoOutline } from "react-icons/md"

interface IInfoHover {
	text: string
	iconStyles?: string
}

const InfoHover = ({ text, iconStyles = "" }: IInfoHover) => {
	return (
		<div className="relative group">
			<MdInfoOutline
				size={16}
				className={`text-gray-400 ${iconStyles}`}
			/>

			<div className="group-hover:block hidden text-[0.75rem] absolute top-6 right-0 bg-[#3C3C43] text-lightGreyPlus rounded-lg py-2 px-[6px] w-max max-w-[180px]">
				<p>{text}</p>
			</div>
		</div>
	)
}

export default InfoHover
