export function qs(obj: Record<string, string | number | boolean | undefined>) {
	const entries = Object.entries(obj)
		.map(([key, value]) => [key, String(value)])
		.filter(([_, value]) => value !== undefined);

	return entries.length > 0
		? `?${new URLSearchParams(entries).toString()}`
		: "";
}
