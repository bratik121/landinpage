import React from "react";
import { Header } from "../components";
import Hero from "./sections/Hero/Hero";
import Integrations from "./sections/lntegrations/Integrations";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="w-full px-32 flex flex-col gap-y-8">
			<Header />
			<Hero />
			<Integrations />
		</div>
	);
};

export default LandingPage;
