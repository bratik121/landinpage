"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import RadialChart from "./RadialChart";
const chartData = [
	{ month: "January", desktop: 186, mobile: 80, tv: 100 },
	{ month: "February", desktop: 305, mobile: 200, tv: 130 },
	{ month: "March", desktop: 237, mobile: 120, tv: 150 },
	{ month: "April", desktop: 73, mobile: 190, tv: 200 },
	{ month: "May", desktop: 209, mobile: 130, tv: 170 },
	{ month: "June", desktop: 214, mobile: 140, tv: 180 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
	tv: {
		label: "TV",
		color: "hsl(var(--chart-3))",
	},
} satisfies ChartConfig;

function Charts() {
	return (
		<Card className="w-[70%] translate-y-[75%] -translate-x-1/2  ">
			<CardHeader className="items-center pb-0">
				<CardTitle>Users over time</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig} className="h-[300px] w-full ">
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line
							dataKey="desktop"
							type="monotone"
							stroke="var(--color-primary-500)"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="mobile"
							type="monotone"
							stroke="var(--color-primary-400)"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="tv"
							type="monotone"
							stroke="var(--color-primary-200)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
				<RadialChart />
			</CardContent>
		</Card>
	);
}

export default Charts;
