import React from "react";
import logo from "@/assets/logo.png";

import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./HederNavigationMenu";

const Header = () => {
	return (
		<div className="w-full flex items-center justify-between py-4 ">
			<div className="flex items-center gap-x-8">
				<div className="flex items-center gap-x-2">
					<img src={logo.src} alt="Logo" />
					<h1 className="text-2xl font-medium">Untitle UI</h1>
				</div>
				<NavigationMenuDemo />
			</div>
			{/* Buttons */}
			<div className="flex items-center gap-x-2">
				<Button variant="ghost" className="text-c_gray-200">
					Login
				</Button>
				<Button variant="default">Sign up</Button>
			</div>
		</div>
	);
};

export default Header;
