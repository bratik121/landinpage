"use client";
import React, { JSX } from "react";
import { SectionHeader } from "../components";
import { FaRegComments } from "react-icons/fa6";
import { BsLightning } from "react-icons/bs";
import { LiaShareSquareSolid } from "react-icons/lia";
import FeatureItem from "./FeatureItem";
import { motion } from "framer-motion";

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

const Features = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120, damping: 12 },
		},
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			className="flex flex-col gap-y-16 items-center"
		>
			<SectionHeader
				title="Cutting-edge features for advanced analytics"
				description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
				pill="Features"
			/>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="px-16 grid grid-cols-1 md:grid-cols-3 gap-16"
			>
				{features.map((feature, index) => (
					<motion.div key={index} variants={itemVariants}>
						<FeatureItem
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Features;
