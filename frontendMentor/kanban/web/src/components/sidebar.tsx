import { EyeOff, Table, Eye } from "lucide-react";
import { useTheme } from "../contexts/theme";
import { Switch } from "./switch";

type SidebarProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
	const { darkMode } = useTheme();

	if (!isOpen) {
		return (
			<button
				type="button"
				onClick={onToggle}
				className="fixed left-0 bottom-8 bg-main-purple hover:bg-main-purple-hover text-white p-4 rounded-r-full"
			>
				<Eye size={20} />
			</button>
		);
	}

	return (
		<aside className="w-[300px] bg-white dark:bg-dark-grey p-4 flex flex-col h-full dark:border-r-black/50">
			<p className="text-sm text-medium-grey mb-4">ALL BOARDS (3)</p>

			<nav className="flex-grow">
				<a
					href="/"
					className="flex items-center py-2 px-4 bg-main-purple rounded-r-full mb-2 text-white"
				>
					<Table size={20} className="mr-3" />
					Platform Launch
				</a>
				<a
					href="/"
					className="flex items-center py-2 px-4 text-medium-grey hover:bg-main-purple/10 hover:text-main-purple rounded-r-full mb-2"
				>
					<Table size={20} className="mr-3" />
					Marketing Plan
				</a>
				<a
					href="/"
					className="flex items-center py-2 px-4 text-medium-grey hover:bg-main-purple/10 hover:text-main-purple rounded-r-full mb-2"
				>
					<Table size={20} className="mr-3" />
					Roadmap
				</a>
				<a
					href="/"
					className="flex items-center py-2 px-4 text-main-purple hover:bg-main-purple/10 rounded-r-full"
				>
					<Table size={20} className="mr-3" />+ Create New Board
				</a>
			</nav>

			<div className="mt-auto">
				<Switch />
				<button
					type="button"
					onClick={onToggle}
					className="flex items-center text-medium-grey text-base mt-5 hover:text-main-purple"
				>
					<EyeOff size={18} className="mr-2" />
					Hide Sidebar
				</button>
			</div>
		</aside>
	);
}
