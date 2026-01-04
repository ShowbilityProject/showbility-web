import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/install")({
	loader() {
		throw redirect({
			href: "https://apps.apple.com/kr/app/%EC%87%BC%EB%B9%8C%EB%A6%AC%ED%8B%B0/id1592880243",
		});
	},
});
