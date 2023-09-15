"use client";
import { motion } from "framer-motion";
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 30 }}
		>
			{children}
		</motion.div>
	);
};

export default PageWrapper;
