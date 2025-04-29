"use client";
import { TrendingUp } from "lucide-react";
import { Label, LabelList, RadialBar, RadialBarChart } from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ browser: "", visitors: 210, fill: "var(--color-primary-200)" },
	{ browser: "", visitors: 275, fill: "var(--color-primary-400)" },
	{ browser: "", visitors: 300, fill: "var(--color-primary-500)" },
	{ browser: "", visitors: 330, fill: "transparent" },
];
const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	chrome: {
		label: "Chrome",
		color: "hsl(var(--chart-1))",
	},
	safari: {
		label: "Safari",
		color: "hsl(var(--chart-2))",
	},
} satisfies ChartConfig;

function RadialChart() {
	return (
		<Card className="flex flex-col border-0  shadow-none absolute top-0 right-0 w-[300px] translate-x-1/2 translate-y-1/2 ">
			<CardHeader className="items-center pb-0"></CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<RadialBarChart
						data={chartData}
						startAngle={90}
						endAngle={-270}
						innerRadius={70}
						outerRadius={150}
						barSize={15}
					>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel nameKey="browser" />}
						/>
						<RadialBar dataKey="visitors" background cornerRadius={10}>
							<LabelList
								position="insideStart"
								dataKey="browser"
								className="fill-white capitalize mix-blend-luminosity"
								fontSize={11}
							/>
						</RadialBar>
						<text
							x="50%"
							y="50%"
							textAnchor="middle"
							dominantBaseline="middle"
							className=""
						>
							<tspan
								x="50%"
								dy="-0.2em"
								className="text text-c_gray-200 text-lg"
							>
								Active Users
							</tspan>
							<tspan
								x="50%"
								dy="1.2em"
								className="text-2xl text-c_gray-900 font-medium"
							>
								1,000
							</tspan>
						</text>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}

export default RadialChart;
