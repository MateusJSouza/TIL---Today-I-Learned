interface CircleIconProps {
  checked: boolean;
  onClick: () => void;
}

export function CircleIcon({ checked, onClick }: CircleIconProps) {
  return (
    <button
      onClick={onClick}
    >
      {!checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <circle cx="12" cy="12" r="12" stroke="#393A4B" />
        </svg>
      )}

      {checked && (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1" />
          <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_267)" />
          <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2" />
          <defs>
            <linearGradient id="paint0_linear_0_267" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
              <stop stop-color="#55DDFF" />
              <stop offset="1" stop-color="#C058F3" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </button>
  )
}
