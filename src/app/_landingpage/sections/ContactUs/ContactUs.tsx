import React from "react";
import contacUsImg from "@/assets/landing/contac-us/contact-us.jpg";
import { Button } from "@/components/ui/button";

type Props = {};

const ContactUs = (props: Props) => {
	return (
		<div className="flex flex-col items-center  ">
			<div className="w-[80%] rounded-lg bg-primary-700 flex overflow-hidden max-h-[400px] text-white ">
				{/* Info */}
				<div className="w-[70%] flex flex-col justify-center gap-y-6 min-h-full  p-8 ">
					{/* Title */}
					<div className="flex flex-col gap-y-4">
						<h3 className="text-4xl text-white font-medium">Give us a shot</h3>
						<p className="text-c_gray-100 text-lg">
							{" "}
							Join over 4,000+ startups already growing with Untitled.
						</p>
					</div>
					{/* Buttons */}
					<div className="flex items-center gap-x-2">
						<Button variant="ghost" className="bg-white">
							Learn more
						</Button>
						<Button variant="default">Get started</Button>
					</div>
				</div>
				{/* Img */}
				<img
					src={contacUsImg.src}
					alt=""
					className="w-[30%] h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default ContactUs;
