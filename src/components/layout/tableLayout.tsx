interface ITableLayout {
	children: React.ReactNode
	thead?: React.ReactNode
}

const TableLayout = ({ children, thead }: ITableLayout) => {
	return (
		<div className="mt-2 overflow-x-auto text-sm">
			<table className="w-full">
				{thead && <thead>{thead}</thead>}
				<tbody>{children}</tbody>
			</table>
		</div>
	)
}

export default TableLayout

export const THead = ({ text }: { text: string }) => {
	return <th className="pr-4 py-6 font-normal">{text}</th>
}

export const TDetail = ({ text }: { text: string }) => {
	return <td className="pr-4 py-5 capitalize">{text}</td>
}
