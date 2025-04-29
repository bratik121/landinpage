import { Button } from "@/components/ui/button";
import contractImg1 from "@/assets/landing/contracts/Image.png";
import contractImg2 from "@/assets/landing/contracts/Image-1.png";
import contractImg3 from "@/assets/landing/contracts/Image-2.png";
import contractImg4 from "@/assets/landing/contracts/Image-3.png";
import contractImg5 from "@/assets/landing/contracts/Image-4.png";
import React from "react";

type Props = {};

const Contracts = (props: Props) => {
	return (
		<div className="w-full flex justify-center">
			<div className="flex w-[80%]  items-center justify-between">
				<div className="flex flex-col gap-y-8">
					<div className="flex flex-col gap-y-2 text-c_gray-900 text-4xl font-medium">
						<h3>No long-term contracts.</h3>
						<h4>No catches.</h4>
					</div>
					<p className="text-c_gray-200">Start your 30-day free trial today.</p>
					<div className="flex items-center gap-x-4">
						<Button variant="outline" className="text-c_gray-200">
							Learn more
						</Button>
						<Button variant="default">Get started</Button>{" "}
					</div>
				</div>
				{/* Gallery */}
				<div className="flex flex-col items-center gap-y-4">
					<div className="flex items-end gap-x-4">
						<img src={contractImg2.src} alt="contract-2" />
						<img src={contractImg1.src} alt="contract-1" />
					</div>
					<div className="flex items-start gap-x-4">
						<img src={contractImg3.src} alt="contract-3" />
						<img src={contractImg4.src} alt="contract-4" />
						<img src={contractImg5.src} alt="contract-5" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contracts;
