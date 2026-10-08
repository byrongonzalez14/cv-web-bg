/** How far the curved edge bulges ahead of the curtain, in % of the height. */
const BULGE = 46;

/**
 * Shape of the curtain in a 100x100 box.
 * `cover` 0→1 raises it from the bottom until it fills the box, its top edge
 * arching ahead; `leave` 0→1 lifts its bottom edge off, sagging behind.
 */
export function curvePath(cover: number, leave: number) {
  const top = 100 * (1 - cover);
  const topCurve = top - BULGE * Math.sin(Math.PI * cover);
  const bottom = 100 * (1 - leave);
  const bottomCurve = bottom + BULGE * Math.sin(Math.PI * leave);
  return `M0 ${top} Q50 ${topCurve} 100 ${top} L100 ${bottom} Q50 ${bottomCurve} 0 ${bottom} Z`;
}

/**
 * Full-bleed curtains, one per color, that the parent animates with
 * `curvePath`. They start collapsed below the box.
 */
export function CurveSwipe({
  colors,
  className,
}: {
  colors: string[];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {colors.map((color, index) => (
        <path key={index} data-curtain="" d={curvePath(0, 0)} fill={color} />
      ))}
    </svg>
  );
}
