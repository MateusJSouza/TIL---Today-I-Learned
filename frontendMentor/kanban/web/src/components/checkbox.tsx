import React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../contexts/theme";
import { CheckIcon } from "lucide-react";

const checkbox = tv({
	base: "w-5 h-5 rounded border-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
});

type CheckboxProps = {
	label: string;
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
	className?: string;
};

export function Checkbox({
	label,
	checked,
	onCheckedChange,
	className,
}: CheckboxProps) {
	const { darkMode } = useTheme();

	const themeClasses = darkMode
		? "bg-dark-grey border-lines-dark text-white focus:ring-main-purple"
		: "bg-white border-medium-grey text-black focus:ring-main-purple";

	return (
		<div className="flex items-center space-x-2">
			<RadixCheckbox.Root
				checked={checked}
				onCheckedChange={onCheckedChange}
				className={twMerge(checkbox(), themeClasses, className)}
				id={label}
			>
				<RadixCheckbox.Indicator>
					<CheckIcon />
				</RadixCheckbox.Indicator>
			</RadixCheckbox.Root>
			<label
				htmlFor={label}
				className={`${darkMode ? "text-white" : "text-black"} cursor-pointer`}
			>
				{label}
			</label>
		</div>
	);
}
