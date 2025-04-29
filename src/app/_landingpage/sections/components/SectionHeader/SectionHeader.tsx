import { Pill } from "@/app/components/common";
import React from "react";

type Props = {
	title: string;
	description: string;
	pill?: string;
};

const SectionHeader = ({ title, description, pill }: Props) => {
	return (
		<div className=" flex flex-col items-center gap-y-4">
			{pill && <Pill label="Integrations" />}
			<h2 className="text-3xl text-c_gray-900 font-medium">{title}</h2>
			<p className="text-c_gray-200 w-[65%] text-center">{description}</p>
		</div>
	);
};

export default SectionHeader;
