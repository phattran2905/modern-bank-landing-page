import { useState } from "react";
import styles from "./style";

function App() {
	return (
		<div className="bg-primary w-full">
			<div className={`${styles.flexRowCenter} `}>
				<div className={`flex justify-between items-center `}>Navbar</div>
			</div>

			<div className={`${styles.flexRowCenter}`}>
				<div className={`flex`}>Hero</div>
			</div>

			<div className={`${styles.flexRowCenter}`}>
        <div className={`${styles.flexRowCenter}`}>
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
