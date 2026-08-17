// Monochrome glow accents — kept subtle and dosed.
// Names preserved for backwards compatibility with existing imports.
import type { CSSProperties } from 'react';

/** Active / highlighted element — soft white glow. */
export const neonBlanc: CSSProperties = {
  textShadow: '0 0 12px rgba(255, 255, 255, 0.45)',
};

/** Stronger accent glow for the brand / key titles. */
export const neonPurple: CSSProperties = {
  textShadow: '0 0 18px rgba(255, 255, 255, 0.55)',
};

/** Very subtle glow, for hover or secondary emphasis. */
export const neonSubtle: CSSProperties = {
  textShadow: '0 0 8px rgba(255, 255, 255, 0.25)',
};
