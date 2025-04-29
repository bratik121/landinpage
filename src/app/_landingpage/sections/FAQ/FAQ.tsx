"use client";
import React, { useState } from "react";
import { SectionHeader } from "../components";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaMinus, FaPlus } from "react-icons/fa6";

type QAItem = {
	question: string;
	answer: string;
};

const faqData: QAItem[] = [
	{
		question: "Is there a free trial available?",
		answer:
			"Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
	},
	{
		question: "Can I change my plan later?",
		answer:
			"Yes, you can change your plan at any time. Just go to your account settings and select the plan you want.",
	},
	{
		question: "What is your cancellation policy?",
		answer:
			"You can cancel your subscription at any time. If you cancel before the end of your billing cycle, you will not be charged for the next cycle.",
	},
	{
		question: "Can other info be added to an invoice?",
		answer:
			"Yes, you can add custom fields to your invoices. Just go to the invoice settings and select the fields you want to include.",
	},
	{
		question: "How does billing work?",
		answer:
			"We bill you monthly or annually, depending on the plan you choose. You can pay by credit card or bank transfer.",
	},
	{
		question: "How do I change my account email?",
		answer:
			"You can change your account email in the account settings. Just go to the email section and enter your new email address.",
	},
];

const QACollapsible = ({ question, answer }: QAItem) => {
	const [open, setOpen] = useState(false);

	return (
		<Collapsible
			open={open}
			onOpenChange={setOpen}
			className="w-full py-4 border-b last:border-b-0 "
		>
			<CollapsibleTrigger className="group cursor-pointer  w-full flex items-center justify-between gap-4">
				<h3 className="text-lg font-semibold">{question}</h3>

				<div className="p-1 rounded-full border border-c_gray-200 text-c_gray-200 transition-colors">
					{open ? (
						<FaMinus className="size-3 " />
					) : (
						<FaPlus className="size-3 " />
					)}
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent className="mt-4 text-gray-600 data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
				<div className="pb-4">
					<p className="leading-relaxed">{answer}</p>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
};

const FAQ = () => {
	return (
		<div className="flex flex-col items-center gap-y-12 max-w-3xl mx-auto px-4">
			<SectionHeader
				title="Frequently asked questions"
				description="Everything you need to know about the product and billing."
			/>

			<div className=" w-[770px] border-t">
				{faqData.map((item, index) => (
					<QACollapsible
						key={index}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQ;
