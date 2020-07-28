import React from "react";
import { Navbar } from "./navbar";
import { Jombotron } from "./jombotron";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jombotron />
			<Card />
			<Footer />
		</div>
	);
}
