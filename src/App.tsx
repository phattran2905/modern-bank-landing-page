import { useState } from "react";
import styles from "./style";
import { Navbar } from "./components";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Business from "./components/Business";
import Billing from "./components/Billing";

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
					<div>Testimonials</div>
					<div>brands</div>
					<div>CTA</div>
					<div>Footer</div>
				</div>
			</div>
		</div>
	);
}

export default App;
