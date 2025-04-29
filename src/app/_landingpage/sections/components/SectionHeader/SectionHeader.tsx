"use client";
import { Pill } from "@/app/components/common";
import { motion } from "framer-motion";
import React from "react";

type Props = {
	title: string;
	description: string;
	pill?: string;
};

const SectionHeader = ({ title, description, pill }: Props) => {
	// Variantes de animación
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120, damping: 10 },
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			variants={containerVariants}
			className="flex flex-col items-center gap-y-4"
		>
			{pill && (
				<motion.div variants={itemVariants}>
					<Pill label={pill} />
				</motion.div>
			)}

			<motion.h2
				variants={itemVariants}
				className="text-3xl text-c_gray-900 font-medium"
			>
				{title}
			</motion.h2>

			<motion.p
				variants={itemVariants}
				className="text-c_gray-200 w-[65%] text-center"
				transition={{ delay: 0.2 }}
			>
				{description}
			</motion.p>
		</motion.div>
	);
};

export default SectionHeader;
