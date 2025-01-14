import InfoHover from "./infoHover"

interface IStatCard {
	icon?: React.ReactNode
	title: string
	amount: string
}

export default function StatCard({ icon, title, amount }: IStatCard) {
	return (
		<article
			className={`flex-1 px-6 py-6 bg-lightGreyPlus rounded-3xl h-full flex text-dark ${
				icon
					? "min-h-[200px] flex-col"
					: "flex-col-reverse min-h-[130px]"
			}`}
		>
			{icon ? (
				<div className="flex justify-between items-start mb-2">
					<div className="min-h-[28px]">{icon}</div>

					<InfoHover text={title} />
				</div>
			) : null}

			<p className={`text-sm ${icon ? "mb-4" : "mt-4"}`}>{title}</p>

			<div className="flex-1 flex items-end">
				<h3 className="font-bold text-2xl sm:text-4xl md:text-5xl truncate">
					{amount}
				</h3>
			</div>
		</article>
	)
}
