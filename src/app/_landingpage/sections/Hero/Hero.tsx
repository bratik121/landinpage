"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import React from "react";
import { SlQuestion } from "react-icons/sl";
import Charts from "./Charts/Charts";

// Animaciones base
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 100 },
	},
};

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="w-full bg-primary-700 text-white rounded-lg p-4 flex flex-col items-center justify-center gap-y-6 relative pt-8 pb-32"
		>
			{/* Sección de texto */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="flex flex-col items-center justify-center gap-y-8 text-center w-[60%]"
			>
				<motion.h1 variants={itemVariants} className="text-8xl">
					Grow your users. Smarter.
				</motion.h1>

				<motion.p variants={itemVariants} className="text-xl">
					Powerful, self-serve product and growth analytics to help you convert,
					engage, and retain more users. Trusted by over 4,000 startups.
				</motion.p>
			</motion.div>

			{/* Sección de formulario */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ delay: 0.4 }}
				className="flex flex-col gap-y-4"
			>
				<div className="flex items-center gap-x-2">
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ type: "spring", stiffness: 50 }}
					>
						<Input
							className="bg-white text-black ring-0! w-[335px]"
							icon={<SlQuestion className="text-c_gray-200" size={20} />}
						/>
					</motion.div>

					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
					>
						<Button variant="default">Get started</Button>
					</motion.div>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className="text-sm"
				>
					We care about your data in our{" "}
					<span className="underline cursor-pointer">privacy policy</span>.
				</motion.p>
			</motion.div>

			{/* Gráficos */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8, type: "spring" }}
				className="absolute bottom-0 w-full left-1/2"
			>
				<Charts />
			</motion.div>
		</motion.div>
	);
};

export default Hero;
