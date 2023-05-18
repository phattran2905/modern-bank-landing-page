import { useState } from "react";
import styles from "./style";
import { Navbar } from "./components";
import Hero from "./components/Hero";

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
					<div>1</div>
					<div>2</div>
					<div>3</div>
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
