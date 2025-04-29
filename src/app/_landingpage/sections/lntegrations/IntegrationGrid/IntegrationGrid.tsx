import React from "react";
import IntegrationItem from "./IntegrationItem";
import dropBoxImg from "@/assets/landing/integrations/dropbox.png";
import jiraImg from "@/assets/landing/integrations/jira.png";
import notionImg from "@/assets/landing/integrations/notion.png";
import slackImg from "@/assets/landing/integrations/slack.png";
import gDriveImg from "@/assets/landing/integrations/g-drive.png";
import intercomImg from "@/assets/landing/integrations/intercom.png";

type Integration = {
	img: string;
	title: string;
	description: string;
};

const integrations: Integration[] = [
	{
		img: notionImg.src,
		title: "Notion integration",
		description:
			"Work faster and smarter by integrating directly with Notion, right in the app.",
	},
	{
		img: slackImg.src,
		title: "Slack integration",
		description:
			"Work faster and smarter by integrating directly with Slack, right in the app.",
	},
	{
		img: gDriveImg.src,
		title: "Google Drive integration",
		description:
			"Work faster and smarter by integrating directly with Google Drive, right in the app.",
	},
	{
		img: intercomImg.src,
		title: "Intercom integration",
		description:
			"Work faster and smarter by integrating directly with Intercom, right in the app.",
	},
	{
		img: jiraImg.src,
		title: "Jira integration",
		description:
			"Work faster and smarter by integrating directly with Jira, right in the app.",
	},
	{
		img: dropBoxImg.src,
		title: "Dropbox integration",
		description:
			"Work faster and smarter by integrating directly with Dropbox, right in the app.",
	},
];

type Props = {};

const IntegrationGrid = (props: Props) => {
	return (
		<div className="px-16 grid grid-cols-1 md:grid-cols-3 gap-16">
			{integrations.map((integration, index) => (
				<IntegrationItem
					key={index}
					img={integration.img}
					title={integration.title}
					description={integration.description}
				/>
			))}
		</div>
	);
};

export default IntegrationGrid;
