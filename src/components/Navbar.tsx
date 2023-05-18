import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

type Props = {};
function Navbar({}: Props) {
	const [active, setActive] = useState("Home");
	const [toggled, setToggled] = useState(false);

	return (
		<nav className="w-full py-6 flex justify-between items-center">
			<img
				className="w-[124px] h-[32px]"
				src={logo}
				alt="hoobank logo"
			/>

			<ul className="list-none justify-end items-center sm:flex hidden flex-1">
				{navLinks.map((navLink, index) => (
					<li
						key={navLink.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							index === navLinks.length - 1 ? "mr-0" : "mr-10"
						} ${active === navLink.title ? "text-white" : "text-dimWhite"}`}
						onClick={() => setActive(navLink.title)}
					>
						<a href={`#${navLink.id}`}>{navLink.title}</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<button onClick={() => setToggled(!toggled)}>
					<img
						src={toggled ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
					/>
				</button>

				<div
					className={`${
						toggled ? "flex" : "hidden"
					} p-6 absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl bg-black-gradient sidebar`}
				>
					<ul className="list-none flex flex-col  justify-end items-center flex-1">
						{navLinks.map((navLink, index) => (
							<li
								key={navLink.id}
								className={`font-poppins font-medium cursor-pointer text-[16px]  ${
									index === navLinks.length - 1 ? "mb-0" : "mb-4"
								} ${active === navLink.title ? "text-white" : "text-dimWhite"}`}
								onClick={() => setActive(navLink.title)}
							>
								<a href={`#${navLink.id}`}>{navLink.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
