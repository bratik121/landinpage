import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { SlQuestion } from "react-icons/sl";
import Charts from "./Charts";

type Props = {};

const Hero = (props: Props) => {
	return (
		<div className="w-full bg-primary-700 text-white rounded-lg p-4 flex flex-col items-center justify-center gap-y-6 relative pt-8 pb-32 ">
			<div className=" flex flex-col items-center justify-center gap-y-8 text-center w-[60%] ">
				<h1 className="text-8xl">Grow your users. Smarter.</h1>
				<p className="text-xl">
					Powerful, self-serve product and growth analytics to help you convert,
					engage, and retain more users. Trusted by over 4,000 startups.
				</p>
			</div>
			<div className="flex flex-col gap-y-4">
				{/*Input and button  */}
				<div className="flex items-center gap-x-2">
					<Input
						className="bg-white text-black ring-0! w-[335px]"
						icon={<SlQuestion className="text-c_gray-200" size={20} />}
					/>
					<Button variant="default">Get started</Button>
				</div>
				<p className="text-sm ">
					We care about your data in our{" "}
					<span className="underline cursor-pointer">privacy policy</span>.
				</p>
			</div>
			<div className="absolute bottom-0 w-full left-1/2">
				<Charts />
			</div>
		</div>
	);
};

export default Hero;
