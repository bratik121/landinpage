import React from "react";
import ReviewSplide from "./ReviewSplide/ReviewSplide";
import { Button } from "@/components/ui/button";

const Reviews = () => {
	return (
		<div className="">
			<div className="flex flex-col gap-y-2 w-full">
				<div className="flex items-center w-full justify-between">
					<h3 className="text-3xl font-medium text-c_gray-900">
						Don’t just take our word for it
					</h3>
					<div className="flex items-center gap-x-2">
						<Button variant="outline" className="text-c_gray-200">
							Our customers
						</Button>
						<Button variant="default">Create account</Button>
					</div>
				</div>
				<p className="text-c_gray-200">
					Hear from some of our amazing customers who are automating their
					finances.
				</p>
			</div>
			<div className="mt-8">
				<ReviewSplide />
			</div>
		</div>
	);
};

export default Reviews;
