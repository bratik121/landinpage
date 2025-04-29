import React from "react";

type Props = { label: string };

const Pill = ({ label }: Props) => {
	return (
		<div className=" px-2.5 py-1 text-primary-600 rounded-xl border border-c_gray-100">
			{label}
		</div>
	);
};

export default Pill;
