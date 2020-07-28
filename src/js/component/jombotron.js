import React, { Component } from "react";

//create your first component
export class Jombotron extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<div className="jumbotron">
					<h1 className="display-4">A Warm Welcome!</h1>
					<p className="lead">
						{
							"Time flies when you are having fun. Let's explore the world together and take lots of pictures."
						}
					</p>
					<hr className="my-4" />

					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						2017-2019 customer pictures
					</a>
				</div>
			</div>
		);
	}
}
