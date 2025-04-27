import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Untitled Ui",
	description: "Landing page hecha por brii 🧡",
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
