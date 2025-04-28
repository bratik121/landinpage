import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Untitled Ui",
	description: "Landing page hecha por brii 🧡",
	icons: {
		icon: "/favicon-16x16.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
