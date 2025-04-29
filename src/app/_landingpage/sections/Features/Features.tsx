import React, { JSX } from "react";
import { SectionHeader } from "../components";
import { FaArrowRight, FaRegComments } from "react-icons/fa6";
import { BsLightning } from "react-icons/bs";
import { LiaShareSquareSolid } from "react-icons/lia";
import FeatureItem from "./FeatureItem";

type Feature = {
	icon: JSX.Element;
	title: string;
	description: string;
};

const features: Feature[] = [
	{
		icon: <LiaShareSquareSolid size={20} className="text-c_gray-600" />,
		title: "Share team inboxes",
		description:
			"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
	},
	{
		icon: <BsLightning size={20} className="text-c_gray-600" />,
		title: "Deliver instant answers",
		description:
			"An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
	},
	{
		icon: <FaRegComments size={20} className="text-c_gray-600" />,
		title: "Manage your team with reports",
		description:
			"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
	},
];

type Props = {};

const Features = (props: Props) => {
	return (
		<div className="flex flex-col gap-y-16 items-center">
			<SectionHeader
				title="Cutting-edge features for advanced analytics"
				description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
				pill="Features"
			/>
			<div className="px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
				{features.map((feature, index) => (
					<FeatureItem
						key={index}
						icon={feature.icon}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
