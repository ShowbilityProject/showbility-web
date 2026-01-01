import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { openScheme } from "@/utils/openScheme";
import { qs } from "@/utils/qs";

export const Route = createFileRoute("/posts/$postId")({
	component: RouteComponent,
	loader: async ({ context: { queryClient }, params: { postId } }) => {
		// You can fetch post data here using the postId if needed
		return { postId };
	},
});

function RouteComponent() {
	const params = Route.useParams();

	const scheme = `showbility://post${qs({ postId: params.postId })}`;

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

	return (
		<div>
			<div>{scheme}</div>
			<button type="button" onClick={() => openScheme(scheme)}>
				open
			</button>

			<div>{isFocused ? "Focused" : "Not Focused"}</div>
		</div>
	);
}
