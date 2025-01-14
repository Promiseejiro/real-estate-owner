"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { IoIosArrowBack } from "react-icons/io";

const HeadingWithBackButton = ({
	title,
	horizontalPadding,
	rightComponent
}: {
	title: string;
	horizontalPadding?: boolean;
	rightComponent?: ReactNode
}) => {
	const router = useRouter();

	return (
		<div
			className={`h-[60px] ${
				horizontalPadding ? "px-4" : ""
			} gap-4 flex items-center`}
		>
			<button onClick={router.back}>
				<IoIosArrowBack size={22} />
			</button>
			<h3 className="text-base capitalize">{title}</h3>

			<div className="ml-auto">
				{rightComponent}
			</div>
		</div>
	);
};

export default HeadingWithBackButton;
