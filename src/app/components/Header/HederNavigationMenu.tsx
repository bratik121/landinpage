"use client";

import * as React from "react";
import womanImg from "@/assets/woman.jpg";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FiBook } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";

const MenuContent = () => {
	return (
		<div className="w-[600px] grid grid-cols-2 gap-4 p-4">
			{/* CardList */}
			<ul className="flex flex-col gap-y-4">
				<li className="flex flex-col gap-y-2 cursor-pointer hover:bg-[#fffff0] p-2 rounded-md transition-all duration-200 ease-in-out">
					<div className="flex items-center gap-x-2 font-medium">
						<FiBook className="text-primary-500 " size={24} />
						<h6 className="text-c_gray-900 text-lg">Blog</h6>
					</div>
					<p className="text-sm text-c_gray-200 pl-8">
						The latest industry news, updates, and insights.
					</p>
				</li>
				<li className="flex flex-col gap-y-2 cursor-pointer hover:bg-[#fffff0] p-2 rounded-md transition-all duration-200 ease-in-out">
					<div className="flex items-center gap-x-2 font-medium">
						<BsStars className="text-primary-500 " size={30} />
						<h6 className="text-c_gray-900 text-lg">Customer Stories</h6>
					</div>
					<p className="text-sm text-c_gray-200 pl-8">
						Learn how our customers are making big changes.
					</p>
				</li>
				<li className="flex flex-col gap-y-2 cursor-pointer hover:bg-[#fffff0] p-2 rounded-md transition-all duration-200 ease-in-out">
					<div className="flex items-center gap-x-2 font-medium">
						<BsPlayCircle className="text-primary-500 " size={24} />
						<h6 className="text-c_gray-900 text-lg">Video Tutorials</h6>
					</div>
					<p className="text-sm text-c_gray-200 pl-8">
						Get up and running with new features and techniques.
					</p>
				</li>
			</ul>
			{/* Update Card */}
			<div className=" flex flex-col gap-y-4 p-4">
				<img src={womanImg.src} alt="" className="rounded-lg " />
				<div className="flex flex-col gap-y-2">
					<h4 className="text-lg font-semibold text-c_gray-900">
						We’ve just released an update!
					</h4>
					<p className="text-sm text-c_gray-200">
						Check out the all-new dashboard view. Pages now load faster.
					</p>
				</div>
				<div className="flex items-center gap-x-2 text-sm font-medium">
					<span className="text-c_gray-200 cursor-pointer hover:underline">
						Dismiss
					</span>
					<span className="text-primary-500 cursor-pointer hover:underline">
						Channelog
					</span>
				</div>
			</div>
		</div>
	);
};

export function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{/* Home */}
				<NavigationMenuItem className="cursor-pointer">
					<NavigationMenuLink>Home</NavigationMenuLink>
				</NavigationMenuItem>

				{/* Products */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="cursor-pointer">
						Products
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<MenuContent />
					</NavigationMenuContent>
				</NavigationMenuItem>

				{/* Resources (con dropdown) */}
				<NavigationMenuItem>
					<NavigationMenuTrigger className="cursor-pointer">
						Resources
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<MenuContent />
					</NavigationMenuContent>
				</NavigationMenuItem>

				{/* Pricing */}
				<NavigationMenuItem>
					<NavigationMenuLink className="cursor-pointer">
						Pricing
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
