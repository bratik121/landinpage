import { Pill } from "@/app/components";
import React from "react";
import IntegrationGrid from "./IntegrationGrid/IntegrationGrid";

type Props = {};

const Integrations = (props: Props) => {
	return (
		<div className="mt-[26rem] flex flex-col items-center gap-y-16">
			{/* Header */}
			<div className=" flex flex-col items-center gap-y-4">
				<Pill label="Integrations" />
				<h2 className="text-3xl text-c_gray-900 font-medium">
					Get more value from your tools
				</h2>
				<p className="text-c_gray-200 w-[65%] text-center">
					Connect your tools, connect your teams. With over 100 apps already
					available in our directory, your team’s favourite tools are just a
					click away.
				</p>
			</div>
			<IntegrationGrid />
		</div>
	);
};

export default Integrations;
