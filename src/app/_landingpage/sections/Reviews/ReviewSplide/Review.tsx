import React from "react";
import "./style.css";
import { MdStar } from "react-icons/md";
type Props = {
	name: string;
	rating: number;
	message: string;
	role: string;
	company: string;
	image: string;
};

const Review = ({ company, message, name, rating, role, image }: Props) => {
	return (
		<div className="h-[480px] w-[360px] relative overflow-hidden">
			<img
				src={image}
				alt=""
				className="absolute w-full h-full top-0 left-0 object-cover"
			/>
			{/* Data contianer */}
			<div className="absolute w-full h-full top-0 left-0 p-4 flex items-end">
				<div className="w-full glass cursor-pointer p-4 text-white flex flex-col gap-y-4">
					<div className="message">
						<p>"{message}"</p>
					</div>
					<div className="flex items-center gap-x-1">
						{[...Array(rating)].map((_, index) => (
							<MdStar key={index} size={20} />
						))}
					</div>
					<p className="text-4xl font-medium">{name}</p>
					<div className="flex flex-col gap-y-1">
						<span className="text-lg">{role}</span>
						<span>{company}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
