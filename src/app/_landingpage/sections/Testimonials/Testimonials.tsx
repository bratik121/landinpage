"use client";
import React from "react";
import { MdStar } from "react-icons/md";

import testimonial1Img from "@/assets/landing/testimonials/testi1.jpg";
import testimonial2Img from "@/assets/landing/testimonials/testi2.png";
import testimonial3Img from "@/assets/landing/testimonials/testi3.png";

type Props = {};

export type Testimonial = {
	name: string;
	role: string;
	company: string;
	message: string;
	image: string;
	rating: number; // rango esperado: 1 a 5
};

export const mockTestimonials: Testimonial[] = [
	{
		name: "Renee Wells",
		role: "Product Designer",
		company: "Quotient",
		message:
			"Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
		image: testimonial1Img.src,
		rating: 5,
	},
	{
		name: "Carlos Herrera",
		role: "Frontend Engineer",
		company: "NovaTech",
		message:
			"Using this platform has made our workflow 10x smoother. It's intuitive, fast, and reliable.",
		image: testimonial2Img.src,
		rating: 5,
	},
	{
		name: "Lucía Mendes",
		role: "Marketing Lead",
		company: "Creativa",
		message:
			"The insights and analytics we get are exactly what we needed to scale our campaigns.",
		image: testimonial3Img.src,
		rating: 4,
	},
];

const Testimonials = (props: Props) => {
	const [testimonials, setTestimonials] =
		React.useState<Testimonial[]>(mockTestimonials);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const handleNext = () => {
		if (selectedIndex < testimonials.length - 1) {
			setSelectedIndex(selectedIndex + 1);
		} else {
			setSelectedIndex(0);
		}
	};

	return (
		<div className="flex flex-col items-center  ">
			<div className="w-[80%] rounded-lg bg-primary-700 flex overflow-hidden max-h-[400px] text-white ">
				{/* Img */}
				<img
					src={testimonials[selectedIndex].image}
					alt=""
					className="w-[30%] h-full object-cover"
				/>
				{/* Info */}
				<div className="w-[70%] flex flex-col gap-y-8 min-h-full  p-8 justify-between">
					{/* Stars */}
					<div className="flex items-center gap-x-1">
						{[...Array(testimonials[selectedIndex].rating)].map((_, index) => (
							<MdStar key={index} className="text-yellow-400" size={20} />
						))}
					</div>

					<p className="text-4xl cursor-pointer" onClick={handleNext}>
						{testimonials[selectedIndex].message}
					</p>
					{/* Name and Role */}
					<div className="flex flex-col gap-y-4">
						{/* Name */}
						<div className="flex items-center gap-x-2">
							<div className="h-1 w-4 bg-white"></div>
							<span className="text-xl">
								{testimonials[selectedIndex].name}{" "}
							</span>
						</div>

						{/* Role */}
						<p className="text-c_gray-100">
							{testimonials[selectedIndex].role},{" "}
							{testimonials[selectedIndex].company}
						</p>
					</div>

					{/* Controller */}
					<div className="flex items-center gap-x-2">
						{testimonials.map((_, index) => {
							console.log(index, selectedIndex);
							return (
								<div
									key={_.name}
									className={`size-2 rounded-full cursor-pointer ${
										selectedIndex === index ? "bg-white" : "bg-gray-400"
									}`}
									onClick={() => setSelectedIndex(index)}
								></div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
