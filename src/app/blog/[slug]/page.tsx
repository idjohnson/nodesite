import fs from "fs";
import Tag from "@/app/components/common/Tag";
import getPostMetadata from "@/app/libs/Metadata/getPostMetadata";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { AiOutlineCaretLeft } from "react-icons/ai";

const getPostContent = (slug: string) => {
	const folder = "content/posts";
	const file = `${folder}/${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult;
};

export const generateStaticParams = async () => {
	const posts = getPostMetadata();
	return posts.map((post) => ({
		slug: post.slug,
	}));
};

const PostPage = (props: any) => {
	const slug = props.params.slug;
	const post = getPostContent(slug);
	const tempDate = new Date(post.data.date);
	const date = tempDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="mb-0 text-zinc-400 flex flex-col gap-4 pb-4">
			<Link
				href="/blog"
				className="flex items-center hover:underline underline-offset-4"
			>
				<AiOutlineCaretLeft size={20} />
				go back
			</Link>
			<div className="pb-2 border-b border-theme-600">
				<div className="mb-0 text-zinc-100 py-4 text-5xl font-bold">
					{post.data.title}
				</div>
				<div className="flex justify-between">
					<div className="text-2xl">
						{/* {post.data.tags.map((tag: any) =>
              <Tag tagString={tag} className={"bg-red"} />
            )} */}
					</div>
					<div className="text-base">{date}</div>
				</div>
			</div>
			<div className="bp-4">
				<Markdown
					options={{ forceBlock: true, wrapper: "article" }}
					className="text-base prose text-justify dark:prose-invert lg:text-lg prose-indigo"
				>
					{post.content}
				</Markdown>
			</div>
		</div>
	);
};

export default PostPage;
