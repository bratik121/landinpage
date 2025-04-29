import React from "react";
import { Header } from "../components";
import Hero from "./sections/Hero/Hero";

type Props = {};

const LandingPage = (props: Props) => {
	return (
		<div className="w-full px-32 flex flex-col gap-y-8">
			<Header />
			<Hero />
		</div>
	);
};

export default LandingPage;
