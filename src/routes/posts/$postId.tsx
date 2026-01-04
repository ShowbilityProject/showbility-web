import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import classNames from "classnames";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { postQuery } from "@/data/demo.posts";
import { bg } from "@/styles/bg.css";
import { height100 } from "@/styles/common.css";
import { flex } from "@/styles/flex.css";
import { openScheme } from "@/utils/openScheme";
import { qs } from "@/utils/qs";

export const Route = createFileRoute("/posts/$postId")({
	component: RouteComponent,
	head: () => ({
		meta: [{ name: "theme-color", content: "#ff0000" }],
	}),
	loader: async ({ context: { queryClient }, params: { postId } }) => {
		// You can fetch post data here using the postId if needed
		await queryClient.ensureQueryData(postQuery(postId));
		return { postId };
	},
});

function RouteComponent() {
	const { postId } = Route.useParams();

	const { data: post } = useSuspenseQuery(postQuery(postId));

	const scheme = `showbility://post${qs({ postId })}`;

	const [isFocused, setIsFocused] = useState(true);

	useEffect(() => {
		const onFocus = () => setIsFocused(true);
		const onBlur = () => setIsFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		const onVisibilityChange = () => {};
		document.addEventListener("visibilitychange", onVisibilityChange);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	}, []);

	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref);

	return (
		<div className={classNames(height100)}>
			<div className={flex.y}>
				{post.images.map((image) => (
					<img
						key={image.key}
						src={image.url}
						alt=""
						style={{ width: "100%", aspectRatio: image.width / image.height }}
					/>
				))}
			</div>

			<motion.div
				style={{
					position: "sticky",
					bottom: 0,
					padding: 16,
					paddingTop: 200,
					marginTop: -200,
				}}
				animate={{
					opacity: isInView ? 0 : 1,
					background: "linear-gradient(to top, #000000, rgba(0, 0, 0, 0))",
					color: "white",
				}}
			>
				<div>{post.title}</div>
				<button type="button" onClick={() => openScheme(scheme)}>
					open
				</button>

				<div>{isInView ? "In View" : "Not In View"}</div>
			</motion.div>
			<div ref={ref} />
			<div>{post.description}</div>
		</div>
	);
}
