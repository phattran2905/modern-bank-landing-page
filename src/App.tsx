import { useState } from "react";
import styles from "./style";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Testimonial from "./components/Testimonial";
import Clients from "./components/Clients";

function App() {
	return (
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${styles.flexCenter} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div className={`${styles.flexCenter} ${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
          <CardDeal />
          <Testimonial />
					<Clients />
					<div>CTA</div>
					<div>Footer</div>
				</div>
			</div>
		</div>
	);
}

export default App;
