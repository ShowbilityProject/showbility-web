import { AnimatePresence, motion } from "motion/react";
import { overlay } from "overlay-kit";
import { useEffect } from "react";

export async function openScheme(scheme: string) {
	location.href = scheme;

	overlay.open(({ isOpen, close, unmount }) => (
		<AppStoreBanner open={isOpen} onClose={close} onExit={unmount} />
	));
}

interface AppStoreBannerProps {
	open: boolean;
	onClose: () => void;
	onExit: () => void;
}

function AppStoreBanner({
	open: isOpen,
	onClose: close,
	onExit: exit,
}: AppStoreBannerProps) {
	useEffect(() => {
		const onVisibilityChange = () => {
			if (document.visibilityState === "hidden") {
				close();
			}
		};

		document.addEventListener("visibilitychange", onVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", onVisibilityChange);
		};
	}, [close]);

	return (
		<AnimatePresence onExitComplete={exit}>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{
						position: "fixed",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						background: "rgba(0,0,0,0.3)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					onClick={close}
				>
					<div style={{ background: "white", padding: 50 }}>
						대충 스토어 가라는 내용
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
