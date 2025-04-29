import React from "react";
import { Header } from "../components";
import Hero from "./sections/Hero/Hero";
import Integrations from "./sections/lntegrations/Integrations";
import Stats from "./sections/Stats/Stats";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="w-full px-32 ">
			<Header />
			<div className="flex flex-col gap-y-32">
				<Hero />
				<Integrations />
				<Stats />
			</div>
		</div>
	);
};

export default LandingPage;
