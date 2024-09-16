import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../contexts/theme";

const input = tv({
	base: "w-full px-4 py-2 rounded border focus:outline-none focus:ring-2",
	variants: {
		error: {
			true: "border-main-red",
			false: "",
		},
	},
	defaultVariants: {
		error: false,
	},
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof input> & {
		error?: string;
	};

export function Input({ error, className, ...props }: InputProps) {
	const { darkMode } = useTheme();

	const themeClasses = darkMode
		? "bg-dark-grey border-lines-dark text-white focus:ring-main-purple"
		: "bg-white border-medium-grey text-black focus:ring-main-purple";

	return (
		<div>
			<input
				className={twMerge(input({ error: !!error }), themeClasses, className)}
				{...props}
			/>
			{error && <p className="mt-1 text-sm text-main-red">{error}</p>}
		</div>
	);
}
