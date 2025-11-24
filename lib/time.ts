export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSeconds = Math.round(diffMs / 1000);
  const intervals: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ];

  for (const [unit, secondsInUnit] of intervals) {
    const delta = diffSeconds / secondsInUnit;
    if (Math.abs(delta) >= 1) {
      return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
        Math.round(delta),
        unit,
      );
    }
  }

  return "just now";
}
