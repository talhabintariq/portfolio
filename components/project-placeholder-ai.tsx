export function ProjectPlaceholderAI() {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-md overflow-hidden relative">
      {/* Chat bubbles pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* User message bubble - top right */}
        <rect
          x="220"
          y="20"
          width="140"
          height="40"
          rx="20"
          className="fill-primary/40"
        />
        <circle cx="250" cy="40" r="3" className="fill-primary/60" />
        <circle cx="265" cy="40" r="3" className="fill-primary/60" />
        <circle cx="280" cy="40" r="3" className="fill-primary/60" />

        {/* AI response bubble - left side */}
        <rect
          x="40"
          y="75"
          width="180"
          height="50"
          rx="25"
          className="fill-primary/30"
        />
        <line
          x1="60"
          y1="92"
          x2="190"
          y2="92"
          className="stroke-primary/50"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="105"
          x2="160"
          y2="105"
          className="stroke-primary/50"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* User message bubble - bottom right */}
        <rect
          x="200"
          y="140"
          width="160"
          height="35"
          rx="17.5"
          className="fill-primary/35"
        />
        <line
          x1="220"
          y1="157"
          x2="330"
          y2="157"
          className="stroke-primary/55"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Decorative dots suggesting more conversation */}
        <circle cx="80" cy="155" r="4" className="fill-primary/20" />
        <circle cx="95" cy="155" r="4" className="fill-primary/20" />
        <circle cx="110" cy="155" r="4" className="fill-primary/20" />

        {/* Network nodes suggesting AI graph */}
        <circle cx="350" cy="160" r="6" className="fill-primary/25" />
        <circle cx="370" cy="175" r="5" className="fill-primary/20" />
        <circle cx="330" cy="180" r="4" className="fill-primary/15" />
        <line
          x1="350"
          y1="160"
          x2="370"
          y2="175"
          className="stroke-primary/20"
          strokeWidth="1.5"
        />
        <line
          x1="350"
          y1="160"
          x2="330"
          y2="180"
          className="stroke-primary/20"
          strokeWidth="1.5"
        />
      </svg>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
    </div>
  );
}
