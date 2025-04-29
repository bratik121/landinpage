"use client";
import { motion } from "framer-motion";
import React from "react";
import contacUsImg from "@/assets/landing/contac-us/contact-us.jpg";
import { Button } from "@/components/ui/button";

type Props = {};

const ContactUs = (props: Props) => {
	const containerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", stiffness: 120 },
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: { type: "spring", stiffness: 100, delay: 0.4 },
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="flex flex-col items-center"
		>
			<div className="w-[80%] rounded-lg bg-primary-700 flex overflow-hidden max-h-[400px] text-white">
				{/* Info */}
				<motion.div
					className="w-[70%] flex flex-col justify-center gap-y-6 min-h-full p-8"
					variants={containerVariants}
				>
					{/* Title Section */}
					<motion.div
						className="flex flex-col gap-y-4"
						variants={containerVariants}
					>
						<motion.h3
							variants={itemVariants}
							className="text-4xl text-white font-medium"
						>
							Give us a shot
						</motion.h3>
						<motion.p
							variants={itemVariants}
							className="text-c_gray-100 text-lg"
							transition={{ delay: 0.2 }}
						>
							Join over 4,000+ startups already growing with Untitled.
						</motion.p>
					</motion.div>

					{/* Buttons */}
					<motion.div
						className="flex items-center gap-x-2"
						variants={containerVariants}
					>
						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Button variant="ghost" className="bg-white">
								Learn more
							</Button>
						</motion.div>
						<motion.div
							variants={itemVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", delay: 0.1 }}
						>
							<Button variant="default">Get started</Button>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Imagen */}
				<motion.img
					src={contacUsImg.src}
					alt="Contact us"
					className="w-[30%] h-full object-cover"
					variants={imageVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				/>
			</div>
		</motion.div>
	);
};

export default ContactUs;
