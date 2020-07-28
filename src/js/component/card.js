import React, { Component } from "react";

//create your first component
export class Card extends Component {
	constructor() {
		super();
		this.cardTitles = [
			{
				title: "What",
				message:
					"Vacation season is here.  Grab the family.... let's go!",
				imgUrl:
					"https://www.planetware.com/photos-large/JAM/jamaica-port-antonio-winnifred-beach.jpg",
				button: "Read More"
			},
			{
				title: "Where",
				message: "Tropical paradise",
				imgUrl:
					"https://www.vacationexpress.com/media/images/destination-pages/jamaica/dest-hdr-mbj.jpg",
				button: "More pictures"
			},
			{
				title: "When",
				message: "Summer 2020",
				imgUrl:
					"https://www.miltonps.org/application/files/8015/7021/3773/calendar.jpg",
				button: "See available dates"
			},
			{
				title: "Tips",
				message:
					"You will need: sun-glasses, bathing suits,cool clothing and camera.",
				imgUrl:
					"https://ecommerceguide.com/wp-content/uploads/2015/11/ecommerce-checklist.jpg",
				button: "COVID-19 Guidelines"
			}
		];
	}

	render() {
		const cardList = this.cardTitles.map(function(hand, index) {
			return (
				<div
					className="card m-1"
					key={index}
					style={{ width: "18rem" }}>
					<img src={hand.imgUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{hand.title}</h5>
						<p className="card-text">{hand.message}</p>
						<a href="#" className="btn btn-primary">
							{hand.button}
						</a>
					</div>
				</div>
			);
		});
		return <div className="d-flex justify-content-center">{cardList}</div>;
	}
}
