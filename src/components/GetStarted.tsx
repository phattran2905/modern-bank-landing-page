import { arrowUp } from "../assets";

type Props = {};
function GetStarted({}: Props) {
	return (
		<div className="flex flex-row justify-center items-center w-[140px] h-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]">
			<div className="bg-primary w-[100%] h-[100%] rounded-full flex flex-col justify-center items-center">
				<div className="flex flex-row justify-center items-start">
					<p className="font-poppins font-medium text-[18px] leading-[23px]">
						<span className="text-gradient">Get</span>
					</p>
					<img
						src={arrowUp}
						alt="arrowUp"
						className="w-[23px] h-[23px] object-contain"
					/>
				</div>

				<p className="font-poppins font-medium text-[18px] leading-[23px]">
					<span className="text-gradient">Started</span>
				</p>
			</div>
		</div>
	);
}
export default GetStarted;
