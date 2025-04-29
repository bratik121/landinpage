import CountUp from "@/components/reactbits/CountUp";
import React from "react";

type Props = {
	value: number;
	description: string;
	nomenclature?: string;
};

const KPI = ({ description, nomenclature, value }: Props) => {
	return (
		<div className="flex flex-col gap-y-4 items-center text-center ">
			<div className="text-5xl text-primary-500 font-medium flex items-center gap-x-1">
				<CountUp to={value} />
				{nomenclature && <span>{nomenclature}</span>}
			</div>
			<p className="text-c_gray-900 font-medium text-lg">{description}</p>
		</div>
	);
};

export default KPI;
