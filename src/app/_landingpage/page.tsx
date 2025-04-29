import React from "react";
import { Header } from "../components";
import Hero from "./sections/Hero/Hero";
import Integrations from "./sections/lntegrations/Integrations";
import Stats from "./sections/Stats/Stats";
import Features from "./sections/Features/Features";
import Testimonials from "./sections/Testimonials/Testimonials";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="w-full max-w-screen overflow-x-hidden px-32 ">
			<Header />
			<div className="flex flex-col gap-y-32 w-full">
				<Hero />
				<Integrations />
				<Stats />
				<Features />
				<Testimonials />
			</div>
		</div>
	);
};

export default LandingPage;
