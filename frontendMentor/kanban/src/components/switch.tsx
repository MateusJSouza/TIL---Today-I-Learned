import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "../contexts/theme";

export function Switch() {
	const { darkMode, toggleTheme } = useTheme();

	return (
		<div className="flex items-center justify-center bg-light-grey dark:bg-very-dark-grey py-4 rounded-md">
			<Sun size={20} className="mr-4 text-medium-grey" />
			<button
				type="button"
				onClick={toggleTheme}
				className="w-10 h-5 bg-main-purple rounded-full relative"
			>
				<div
					className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
						darkMode ? "translate-x-5" : "translate-x-1"
					}`}
				/>
			</button>
			<MoonStar size={20} className="ml-4 text-medium-grey" />
		</div>
	);
}
