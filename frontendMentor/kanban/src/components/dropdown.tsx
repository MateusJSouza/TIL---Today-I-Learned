import React from "react";
import * as Select from "@radix-ui/react-select";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../contexts/theme";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const trigger = tv({
	base: "w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 flex items-center justify-between",
});

const content = tv({
	base: "overflow-hidden rounded-md shadow-lg",
});

const item = tv({
	base: "relative flex items-center px-8 py-2 text-sm leading-none select-none outline-none",
});

type DropdownProps = {
	options: string[];
	onSelect: (option: string) => void;
	placeholder?: string;
	className?: string;
};

export function Dropdown({
	options,
	onSelect,
	placeholder = "Select an option",
	className,
}: DropdownProps) {
	const { darkMode } = useTheme();

	const themeClasses = darkMode
		? "bg-dark-grey border-lines-dark text-white focus:ring-main-purple"
		: "bg-white border-medium-grey text-black focus:ring-main-purple";

	return (
		<Select.Root onValueChange={onSelect}>
			<Select.Trigger className={twMerge(trigger(), themeClasses, className)}>
				<Select.Value placeholder={placeholder} />
				<Select.Icon>
					<ChevronDownIcon />
				</Select.Icon>
			</Select.Trigger>

			<Select.Portal>
				<Select.Content className={content()}>
					<Select.ScrollUpButton>
						<ChevronUpIcon />
					</Select.ScrollUpButton>
					<Select.Viewport>
						{options.map((option) => (
							<Select.Item key={option} value={option} className={item()}>
								<Select.ItemText>{option}</Select.ItemText>
							</Select.Item>
						))}
					</Select.Viewport>
					<Select.ScrollDownButton>
						<ChevronDownIcon />
					</Select.ScrollDownButton>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
}
