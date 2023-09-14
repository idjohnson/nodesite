import NavBar from "@/app/components/Navbar";
import "../globals.css";

export const metadata = {
	title: "Create NextJS App",
	description: "Generated by create next app",
};

// <!-- use http://caius.github.io/github_id/ -->
const page = () => {
	return (
		<div className="flex flex-col gap-2 justify-center">
			<h2 className="mb-0 text-zinc-100 font-bold">and</h2>
			<p className="mb-0 text-zinc-400 font-semibold leading-none">
				.... fun here .....
			</p>
		</div>
	);
};

export default page;
