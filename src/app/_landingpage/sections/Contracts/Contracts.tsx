"use client";
import { Button } from "@/components/ui/button";
import contractImg1 from "@/assets/landing/contracts/Image.png";
import contractImg2 from "@/assets/landing/contracts/Image-1.png";
import contractImg3 from "@/assets/landing/contracts/Image-2.png";
import contractImg4 from "@/assets/landing/contracts/Image-3.png";
import contractImg5 from "@/assets/landing/contracts/Image-4.png";
import React from "react";
import { motion } from "framer-motion";

const Contracts = () => {
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

	const textVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120 },
		},
	};

	const imageVariants = (delay: number) => ({
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 150,
				delay: delay,
			},
		},
	});

	return (
		<motion.div
			className="w-full flex justify-center"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
		>
			<div className="flex w-[80%] items-center justify-between">
				{/* Sección de texto */}
				<motion.div
					className="flex flex-col gap-y-8"
					variants={containerVariants}
				>
					<motion.div
						className="flex flex-col gap-y-2 text-c_gray-900 text-4xl font-medium"
						variants={containerVariants}
					>
						<motion.h3 variants={textVariants}>
							No long-term contracts.
						</motion.h3>
						<motion.h4 variants={textVariants}>No catches.</motion.h4>
					</motion.div>

					<motion.p className="text-c_gray-200" variants={textVariants}>
						Start your 30-day free trial today.
					</motion.p>

					<motion.div
						className="flex items-center gap-x-4"
						variants={containerVariants}
					>
						<motion.div
							variants={textVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Button variant="outline" className="text-c_gray-200">
								Learn more
							</Button>
						</motion.div>
						<motion.div
							variants={textVariants}
							whileHover={{ scale: 1.05 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<Button variant="default">Get started</Button>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* Galería de imágenes */}
				<motion.div
					className="flex flex-col items-center gap-y-4"
					variants={containerVariants}
				>
					<div className="flex items-end gap-x-4">
						<motion.img
							src={contractImg2.src}
							alt="contract-2"
							variants={imageVariants(0.2)}
							whileHover={{ y: -10 }}
							className="cursor-pointer"
						/>
						<motion.img
							src={contractImg1.src}
							alt="contract-1"
							variants={imageVariants(0.4)}
							whileHover={{ y: -10 }}
							className="cursor-pointer"
						/>
					</div>
					<div className="flex items-start gap-x-4">
						<motion.img
							src={contractImg3.src}
							alt="contract-3"
							variants={imageVariants(0.3)}
							whileHover={{ y: -10 }}
							className="cursor-pointer"
						/>
						<motion.img
							src={contractImg4.src}
							alt="contract-4"
							variants={imageVariants(0.5)}
							whileHover={{ y: -10 }}
							className="cursor-pointer"
						/>
						<motion.img
							src={contractImg5.src}
							alt="contract-5"
							variants={imageVariants(0.7)}
							whileHover={{ y: -10 }}
							className="cursor-pointer"
						/>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};
export default Contracts;
