import React from "react";
import { SectionHeader } from "../components";
import KPI from "./Kpi";

type Props = {};

const stats = [
	{
		value: 400,
		nomenclature: "+",
		description: "Projects completed",
	},
	{
		value: 600,
		nomenclature: "%",
		description: "Return on investment",
	},
	{
		value: 10_000,
		nomenclature: "k",
		description: "Global downloads",
	},
];

const Stats = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-16 items-center">
			<SectionHeader
				title="Unleash the full power of data"
				description="Everything you need to convert, engage, and retain more users."
			/>
			{/* Kpis */}
			<div className="flex flex-col md:flex-row items-center gap-x-10">
				{stats.map((stat, index) => (
					<KPI
						key={index}
						value={stat.value}
						nomenclature={stat.nomenclature}
						description={stat.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Stats;
