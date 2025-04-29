import React from "react";
import logo from "@/assets/logo.png";
import appleLogo from "@/assets/Apple_logo.png";
import googleLogo from "@/assets/Google_Play_logo.png";
type Props = {};

const headers: string[] = [
	"Product",
	"Company",
	"Resources",
	"Social",
	"Legal",
];

const links: { label: string; tag?: string }[][] = [
	[
		{ label: "Overview" },
		{ label: "Features" },
		{ label: "Solutions", tag: "New" },
		{ label: "Tutorials" },
		{ label: "Pricing" },
		{ label: "Releases" },
	],

	[
		{ label: "About us" },
		{ label: "Careers" },
		{ label: "Press" },
		{ label: "News" },
		{ label: "Media kit" },
		{ label: "Contact" },
	],

	[
		{ label: "Blog" },
		{ label: "Newsletter" },
		{ label: "Events" },
		{ label: "Help centre" },
		{ label: "Tutorials" },
		{ label: "Support" },
	],

	[
		{ label: "Twitter" },
		{ label: "LinkedIn" },
		{ label: "Facebook" },
		{ label: "GitHub" },
		{ label: "AngelList" },
		{ label: "Dribbble" },
	],

	[
		{ label: "Terms" },
		{ label: "Privacy" },
		{ label: "Cookies" },
		{ label: "Licenses" },
		{ label: "Settings" },
		{ label: "Contact" },
	],
];
const Footer = (props: Props) => {
	return (
		<div className="flex flex-col items-center gap-y-8">
			<div className="w-full flex">
				<div className="w-[75%] flex flex-col gap-y-4">
					<div className="w-full grid grid-cols-5">
						{headers.map((header, index) => (
							<div className="text-c_gray-900 font-medium" key={header}>
								{header}
							</div>
						))}
					</div>
					<div className="w-full grid grid-cols-5">
						{links.map((link, index) => (
							<ul className="flex flex-col gap-y-2" key={index}>
								{link.map((item) => (
									<li
										className="flex gap-x-2 items-center text-primary-500"
										key={item.label}
									>
										<span className=" hover:underline cursor-pointer hover:text-primary-400">
											{item.label}
										</span>
										{item.tag && (
											<div className="py-1 px-2 border border-primary-500 rounded-xl text-xs ">
												{item.tag}
											</div>
										)}
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
				<div className="w-[25%] flex flex-col gap-y-4 items-center text-left">
					<div className="flex flex-col gap-y-2">
						<div className="text-c_gray-900 font-medium">Get the app</div>
						<button className="bg-black text-white flex p-2 rounded-lg items-center cursor-pointer gap-x-2">
							<img src={appleLogo.src} alt="Apple" />
							<div className="flex flex-col items-start">
								<span className="text-xs">Download on the</span>
								<span className="text-sm font-medium">AppStore</span>
							</div>
						</button>
						<button className="bg-black text-white flex p-2 rounded-lg items-center cursor-pointer gap-x-2">
							<img
								src={googleLogo.src}
								className="h-[23px] object-scale-down"
								alt="Apple"
							/>
							<div className="flex flex-col items-start">
								<span className="text-xs">GET IT ON</span>
								<span className="text-sm font-medium">Google Play</span>
							</div>
						</button>
					</div>
				</div>
			</div>
			{/* Footer End */}
			<div className="w-full flex items-center justify-between py-4 border-t border-c_gray-50">
				<div className="flex items-center gap-x-2">
					<img src={logo.src} alt="Logo" />
					<h1 className="text-2xl font-medium">Untitle UI</h1>
				</div>

				<p className="text-c_gray-300">
					© 2077 Untitled UI. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
