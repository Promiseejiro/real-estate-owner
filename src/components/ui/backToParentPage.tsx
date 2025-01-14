"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { BsArrowLeftShort } from "react-icons/bs"

const BackToParentPage: React.FC<{ title: string; link?: string }> = ({
	title,
	link,
}) => {
	const router = useRouter()

	return (
		<button
			className="flex items-center gap-1 relative -left-[5px] mb-2"
			onClick={() => (link ? router.push(link) : router.back())}
		>
			<BsArrowLeftShort size={26} className="text-grey" />
			<span className="text-grey">Back to {title}</span>
		</button>
	)
}

export default BackToParentPage
