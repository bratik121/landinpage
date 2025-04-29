import React from "react";
import { Header } from "../components";
import Hero from "./sections/Hero/Hero";
import Integrations from "./sections/lntegrations/Integrations";
import Stats from "./sections/Stats/Stats";
import Features from "./sections/Features/Features";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contracts from "./sections/Contracts/Contracts";
import FAQ from "./sections/FAQ/FAQ";
import ContactUs from "./sections/ContactUs/ContactUs";
import Reviews from "./sections/Reviews/Reviews";

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
				<Contracts />
				<FAQ />
				<Reviews />
				<ContactUs />
			</div>
		</div>
	);
};

export default LandingPage;
