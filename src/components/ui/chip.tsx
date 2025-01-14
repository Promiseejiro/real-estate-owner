const Chip = ({
	variant,
	label,
	className,
}: {
	variant: "success" | "failed" | "pending";
	label: string;
	className?: string;
}) => {
	const variantStyles = {
		success: "bg-[#00B05026] text-[#00B050]",
		pending: "bg-[#FDDDB34D] text-[#F79009]",
		failed: "",
	};

	return (
		<span
			className={`${variantStyles[variant]} font-medium px-[10px] py-1 text-xs rounded-md ${className}`}
		>
			{label}
		</span>
	);
};

export default Chip;
