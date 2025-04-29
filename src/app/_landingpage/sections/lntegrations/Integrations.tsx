import { Pill } from "@/app/components";
import React from "react";
import IntegrationGrid from "./IntegrationGrid/IntegrationGrid";
import { SectionHeader } from "../components";

type Props = {};

const Integrations = (props: Props) => {
	return (
		<div className="mt-[18rem] flex flex-col items-center gap-y-16">
			<SectionHeader
				title="Get more value from your tools"
				description="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
				pill="Integrations"
			/>
			<IntegrationGrid />
		</div>
	);
};

export default Integrations;
