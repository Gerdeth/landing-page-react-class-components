import React, { Component } from "react";

//create your first component
export class Navbar extends Component {
	render() {
		return (
			<div className="text-center mt-5">
				<nav className="navbar navbar-expand-lg bg-dark text-white">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-item nav-link" href="#">
								Features
							</a>
							<a className="nav-item nav-link" href="#">
								Pricing
							</a>
							<a
								className="nav-item nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								Disabled
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
