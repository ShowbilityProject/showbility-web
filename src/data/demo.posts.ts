import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";

const getPost = createServerFn({
	method: "GET",
}).handler(async () => ({
	title: "unsoiled",
	description:
		"‹unsoiled›는 가설로만 존재했던 평행우주의 존재를 발견하였다. 그 결과, 현재 이 글을 읽는 당신이 살아가고 있는 '현재의 지구'가 바로 무한한 지구를 만들어 내는 기점이라는 사실을 알아내었다. 왜 '현재의 지구'가 시작점이 되었는지는 알 수 없지만, 그것은 아마 운이 좋았기 때문일 것이다. 그러나 우리는 이러한 사실을 깨닫지 못한 채 현재의 지구와 평행우주 속 무한한 지구에게 영향을 미치고 있었던 것이다. 이러한 상황 속 당신은 오늘 저녁에 주문한 음식의 포장 용기가 어떻게 처분되는지에 관심을 두거나, 일회용으로 사용하고 버린 많은 쓰레기들에 대해 진심으로 후회했던 적이 있는가? 이러한 사실을 알게 되었을 때 당신은 어떤 선택을 할 것인가. 무한한 우주를 함께하는 이 여정에서, ‹unsoiled›의 'Delusion Project' 를 통한 당신의 선택이, 그리고 우리의 선택이 옳은 곳으로 향하기를 바라며, 더 나은 미래로 나아가는 연료로 사용되기를 바란다.",
	category: "other",
	tags: ["졸작", "편집디지인", "웹디지인", "영상디자인"],
	id: 444,
	author: {
		handle: "test",
		nickname: "테스트",
		profileImage: null,
		isMe: false,
	},
	images: [
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/056afa64-505c-4b44-9d77-3d86b8e09f53.jpg",
			key: "migrated/056afa64-505c-4b44-9d77-3d86b8e09f53.jpg",
			width: 1000,
			height: 667,
			blurhash: "L77_NKM^Vr%$yZMwRO%g9Fr;M_V?",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/bc5d1219-5da8-4190-a234-0f2ac7e97ca3.jpg",
			key: "migrated/bc5d1219-5da8-4190-a234-0f2ac7e97ca3.jpg",
			width: 1000,
			height: 563,
			blurhash: "LNKBH]?bNFI.0J9F9FMxD%D%xu%M",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/c12f4dcf-5471-42d2-b882-8eac5ef6a3c9.jpg",
			key: "migrated/c12f4dcf-5471-42d2-b882-8eac5ef6a3c9.jpg",
			width: 667,
			height: 1000,
			blurhash: "LHG+RIH=s+-:9ERVM{%ME001M|x]",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/70ccda29-c257-4e38-8fcb-267f66b380d4.jpg",
			key: "migrated/70ccda29-c257-4e38-8fcb-267f66b380d4.jpg",
			width: 1000,
			height: 797,
			blurhash: "LOG]8q4Txu-=%hIUM_xuIT-;%MWB",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/c7f203c7-f818-46a5-9959-6325d539c981.jpg",
			key: "migrated/c7f203c7-f818-46a5-9959-6325d539c981.jpg",
			width: 749,
			height: 1000,
			blurhash: "LJB:Hj0fV?xbIr$%S$WA0g-oogWB",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/d0e4ffa3-5e22-461b-bc36-ded79adbe0a9.jpg",
			key: "migrated/d0e4ffa3-5e22-461b-bc36-ded79adbe0a9.jpg",
			width: 749,
			height: 1000,
			blurhash: "LbEp4zM_ITWB01axt7t7-pofRkay",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/1e8ea531-541e-4988-8af2-a359d45d067d.png",
			key: "migrated/1e8ea531-541e-4988-8af2-a359d45d067d.png",
			width: 1000,
			height: 625,
			blurhash: "L58z$2xU0eD%?wt6-VRPMxR.%M%M",
		},
		{
			url: "https://showbility-storage-dev-x71jd.sevalla.storage/migrated/ea467d6c-6532-4ba3-ba7c-751a917fdec9.png",
			key: "migrated/ea467d6c-6532-4ba3-ba7c-751a917fdec9.png",
			width: 1000,
			height: 625,
			blurhash: "LB9jv0t74nof-;RjIUWB00t7-;WB",
		},
	],
	likeCount: 0,
	commentCount: 0,
	createdAt: "2024-02-14T06:39:21.941583Z",
	updatedAt: "2024-02-14T06:39:21.941620Z",
	isLiked: false,
}));

export const postQuery = (postId: string) =>
	queryOptions({
		queryKey: ["demo-post", postId],
		queryFn: getPost,
	});
