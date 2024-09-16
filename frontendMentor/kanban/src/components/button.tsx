import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
	base: "rounded-full font-bold transition-colors text-sm",
	variants: {
		variant: {
			primary: "bg-main-purple hover:bg-main-purple-hover text-white",
			secondary:
				"bg-main-purple/10 hover:bg-main-purple/25 text-main-purple dark:bg-white/10 dark:hover:bg-white/20 dark:text-white",
			destructive: "bg-main-red hover:bg-main-red-hover text-white",
		},
		size: {
			small: "px-4 py-1 text-sm",
			large: "px-6 py-2",
		},
	},
	defaultVariants: {
		size: "large",
	},
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof button> & {
		children: React.ReactNode;
	};

export function Button({
	variant,
	size,
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			className={twMerge(button({ variant, size }), className)}
			{...props}
		>
			{children}
		</button>
	);
}
