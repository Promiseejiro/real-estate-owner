"use client"

import React from "react"

interface IActionButton {
	handleClick: () => void
	icon?: React.ReactNode
	text?: string
	iconPosition?: "right" | "left"
	className?: string
}

export default function ActionButton({
	handleClick,
	icon,
	text,
	iconPosition = "right",
	className = "",
}: IActionButton) {
	return (
		<div
			onClick={handleClick}
			className={`text-sm px-4 py-2 flex gap-2 items-center rounded-lg border-[1.5px] border-lightGrey cursor-pointer hover:bg-gray-50 ${
				iconPosition === "left" ? "flex-row-reverse" : ""
			} ${className}`}
		>
			{!!text && <span className="whitespace-nowrap">{text}</span>}
			{icon ? icon : null}
		</div>
	)
}
