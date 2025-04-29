"use client";
import React from "react";
import Review from "./Review";
import review1Img from "@/assets/landing/testimonials/testi1.jpg";
import review2Img from "@/assets/landing/testimonials/testi2.png";
import review3Img from "@/assets/landing/testimonials/testi3.png";
import review4Img from "@/assets/landing/testimonials/testi4.png";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type Props = {};

export type Review = {
	name: string;
	rating: number;
	message: string;
	role: string;
	company: string;
	image: string;
};

export const reviews: Review[] = [
	{
		name: "Alisa Hester",
		rating: 5,
		message: "The results have been outstanding. Highly recommended.",
		role: "PM, Hourglass",
		company: "Web Design Agency",
		image: review1Img.src,
	},
	{
		name: "Rich Wilson",
		rating: 5,
		message: "We’ve really sped up our workflow using Untitled.",
		role: "COO, Command+R",
		company: "Web Development Agency",
		image: review2Img.src,
	},
	{
		name: "Annie Stanley",
		rating: 5,
		message: "Clean interface and fast results. Love it.",
		role: "Designer, Catalog",
		company: "UX Agency",
		image: review3Img.src,
	},
	{
		name: "Johnny Price",
		rating: 5,
		message: "Simple, efficient and reliable for our daily work.",
		role: "PM, Sisyphus",
		company: "Machine Learning Lab",
		image: review4Img.src,
	},
];
const ReviewSplide = (props: Props) => {
	return (
		<Splide
			hasTrack={false}
			options={{
				arrows: false,
				gap: "1rem",
				type: "loop",
				autoplay: true,
				pagination: false,
				perPage: 4,
				pauseOnHover: true,
				interval: 5000,
			}}
		>
			<SplideTrack>
				{reviews.map((review, index) => (
					<SplideSlide key={index} className=" flex justify-center">
						<Review {...review} />
					</SplideSlide>
				))}
			</SplideTrack>
		</Splide>
	);
};

export default ReviewSplide;
