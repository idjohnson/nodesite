import "../globals.css";
import NavBar from "@/app/components/Navbar";

import PostPreview from "@/app/components/preview/PostPreview";
import UnderLine from "@/app/components/common/UnderLine";
import getPostMetadata from "@/app/libs/Metadata/getPostMetadata";
import PageWrapper from "@/app/providers/PageWrapper";

const page = () => {
	const postMetadata = getPostMetadata();

	const postPreviews = postMetadata.map((post) => (
		<PostPreview {...post} key={post.slug} />
	));

	return (
		<PageWrapper>
			<main className="flex flex-col gap-2">
				<h1 className="mb-0 text-zinc-100 font-bold">Blogs 📚</h1>
				<p className="mb-0 text-zinc-400 font-semibold leading-none">
					All the blogs that I have written can be found here, mostly I&apos;ll
					try to put here all the cool tips and triks in frontend development
					and my learnings and experiments or rather anything which seems cool
					to me
				</p>
				<UnderLine />
				<div className="flex flex-col gap-2">{postPreviews}</div>
			</main>
		</PageWrapper>
	);
};

export default page;
