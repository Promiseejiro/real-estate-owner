"use client"

import ModalBackdrop from "./modalBackdrop"
import Spinner from "./spinner"

export default function LoaderView({
	backgroundDark = true,
}: {
	backgroundDark?: boolean
}) {
	return (
		<ModalBackdrop>
			<div
				className={`h-full grid place-items-center modal-bg-inner-opacity-animation ${
					backgroundDark ? "bg-transparentDark" : "bg-transparent"
				}`}
			>
				<div className="rounded-lg grid justify-center items-center bg-white">
					<Spinner size={70} />
				</div>
			</div>
		</ModalBackdrop>
	)
}
