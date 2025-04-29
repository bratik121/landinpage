import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
	img: string;
	title: string;
	description: string;
};

const IntegrationItem = ({ title, description, img }: Props) => {
	return (
		<div className="flex flex-col gap-y-4 items-center text-center">
			{/* Logo */}
			<div className="p-4 border border-c_gray-50 flex items-center">
				<img src={img} alt="imgage" />
			</div>
			<h4 className="text-c_gray-900 text-xl font-medium">{title}</h4>
			<p className="text-c_gray-200 w-[80%]">{description}</p>
			<p className="text-primary-500 hover:text-primary-200 flex items-center gap-x-2 cursor-pointer">
				<span>View integration</span>
				<FaArrowRight size={12} />
			</p>
		</div>
	);
};

export default IntegrationItem;
