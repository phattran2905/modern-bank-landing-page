import { quotes } from "../assets";

type Props = {
	content: string;
	title: string;
	name: string;
	img: string;
};

function FeedBackCard({ content, title, name, img }: Props) {
	return (
		<div className="flex flex-1 justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
			<img
				src={quotes}
				alt={"double_quotes"}
				className="w-[42px] h-[27px] object-contain"
			/>
			<p className="font-poppins text-[18px] font-normal leading-[32px] text-white my-10">
				{content}
			</p>

      <div className="flex flex-row ">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-[20px] font-semibold leading-[32px] text-white">{name}</h4>
          <p className="font-poppins text-[16px] font-normal leading-[24px] text-dimWhite">{title}</p>
        </div>
      </div>
		</div>
	);
}
export default FeedBackCard;
