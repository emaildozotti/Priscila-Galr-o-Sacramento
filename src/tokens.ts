/**
 * ============================================================
 * DESIGN TOKENS — Priscila Galrão Sacramento | Psicóloga
 * Baseado no Manual da Marca oficial
 *
 * Uso: importe os tokens necessários no componente.
 * Todos os valores espelham as CSS custom properties de design-system.css
 * ============================================================
 */

// ─────────────────────────────────────────────────────────────
// 1. COLORS
// ─────────────────────────────────────────────────────────────
export const colors = {
  // Paleta primária (Manual da Marca)
  gold: '#C4972F',
  goldLight: '#E2BE6E',
  goldLighter: '#F5E7C4',
  goldDark: '#9A7520',

  plum: '#72395E',
  plumLight: '#9B5A82',
  plumLighter: '#C490AD',
  plumDark: '#4E2741',
  plumDeeper: '#2E1428',

  lavender: '#EEE1FF',
  lavenderMid: '#D9C4F5',
  lavenderDeep: '#BFA0DF',
  lavenderMuted: '#F7F2FF',

  white: '#FFFFFF',
  offWhite: '#FAF8FF',
  cream: '#F5F0EA',

  // Semânticos
  bgPrimary: '#FAF8FF',
  bgSecondary: '#F7F2FF',
  bgTertiary: '#EEE1FF',
  bgDark: '#2E1428',
  bgAccent: '#72395E',

  surface: '#FFFFFF',
  surfaceRaised: '#FAF8FF',

  textPrimary: '#2E1428',
  textSecondary: '#72395E',
  textMuted: '#9B5A82',
  textSubtle: '#9B8494',
  textOnDark: '#FFFFFF',
  textGold: '#C4972F',

  borderDefault: 'rgba(114, 57, 94, 0.15)',
  borderStrong: 'rgba(114, 57, 94, 0.30)',
  borderGold: 'rgba(196, 151, 47, 0.35)',
  borderFocus: '#C4972F',

  success: '#4CAF82',
  successBg: '#EDFAF3',
  warning: '#E8A838',
  warningBg: '#FEF6E7',
  error: '#D95555',
  errorBg: '#FDEAEA',
} as const

export type ColorToken = keyof typeof colors


// ─────────────────────────────────────────────────────────────
// 2. TYPOGRAPHY
// ─────────────────────────────────────────────────────────────
export const typography = {
  // Famílias
  fontDisplay: "'Hey Beauty', 'Dancing Script', cursive",
  fontBody: "'Quicksand', 'Nunito', sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",

  // Tamanhos
  text2xs: '0.625rem',   // 10px
  textXs:  '0.75rem',    // 12px
  textSm:  '0.875rem',   // 14px
  textBase:'1rem',        // 16px
  textLg:  '1.125rem',   // 18px
  textXl:  '1.25rem',    // 20px
  text2xl: '1.5rem',     // 24px
  text3xl: '1.875rem',   // 30px
  text4xl: '2.25rem',    // 36px
  text5xl: '3rem',       // 48px
  text6xl: '3.75rem',    // 60px
  text7xl: '4.5rem',     // 72px
  text8xl: '6rem',       // 96px

  // Pesos
  fontLight:    300,
  fontNormal:   400,
  fontMedium:   500,
  fontSemibold: 600,
  fontBold:     700,

  // Altura de linha
  leadingNone:    1,
  leadingTight:   1.25,
  leadingSnug:    1.375,
  leadingNormal:  1.5,
  leadingRelaxed: 1.625,
  leadingLoose:   2,

  // Espaçamento de letras
  trackingTighter: '-0.05em',
  trackingTight:   '-0.025em',
  trackingNormal:  '0em',
  trackingWide:    '0.025em',
  trackingWider:   '0.05em',
  trackingWidest:  '0.1em',
} as const


// ─────────────────────────────────────────────────────────────
// 3. SPACING
// ─────────────────────────────────────────────────────────────
export const spacing = {
  0:     '0',
  px:    '1px',
  0.5:   '0.125rem',   //  2px
  1:     '0.25rem',    //  4px
  1.5:   '0.375rem',   //  6px
  2:     '0.5rem',     //  8px
  2.5:   '0.625rem',   // 10px
  3:     '0.75rem',    // 12px
  3.5:   '0.875rem',   // 14px
  4:     '1rem',       // 16px
  5:     '1.25rem',    // 20px
  6:     '1.5rem',     // 24px
  7:     '1.75rem',    // 28px
  8:     '2rem',       // 32px
  9:     '2.25rem',    // 36px
  10:    '2.5rem',     // 40px
  11:    '2.75rem',    // 44px
  12:    '3rem',       // 48px
  14:    '3.5rem',     // 56px
  16:    '4rem',       // 64px
  18:    '4.5rem',     // 72px
  20:    '5rem',       // 80px
  24:    '6rem',       // 96px
  28:    '7rem',       // 112px
  32:    '8rem',       // 128px
  36:    '9rem',       // 144px
  40:    '10rem',      // 160px
  48:    '12rem',      // 192px
  56:    '14rem',      // 224px
  64:    '16rem',      // 256px
} as const


// ─────────────────────────────────────────────────────────────
// 4. BORDER RADIUS
// ─────────────────────────────────────────────────────────────
export const borderRadius = {
  none:  '0',
  xs:    '2px',
  sm:    '4px',
  md:    '8px',
  lg:    '12px',
  xl:    '16px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '48px',
  full:  '9999px',
} as const


// ─────────────────────────────────────────────────────────────
// 5. SHADOWS
// ─────────────────────────────────────────────────────────────
export const shadows = {
  none:  'none',
  xs:    '0 1px 2px rgba(114, 57, 94, 0.06)',
  sm:    '0 1px 4px rgba(114, 57, 94, 0.08), 0 1px 2px rgba(114, 57, 94, 0.04)',
  md:    '0 4px 12px rgba(114, 57, 94, 0.10), 0 2px 4px rgba(114, 57, 94, 0.06)',
  lg:    '0 8px 24px rgba(114, 57, 94, 0.12), 0 4px 8px rgba(114, 57, 94, 0.06)',
  xl:    '0 16px 40px rgba(114, 57, 94, 0.15), 0 8px 16px rgba(114, 57, 94, 0.08)',
  '2xl': '0 24px 64px rgba(114, 57, 94, 0.18), 0 12px 24px rgba(114, 57, 94, 0.10)',
  inner: 'inset 0 2px 6px rgba(114, 57, 94, 0.08)',

  // Sombras douradas
  goldSm: '0 2px 8px rgba(196, 151, 47, 0.20)',
  goldMd: '0 4px 16px rgba(196, 151, 47, 0.28)',
  goldLg: '0 8px 32px rgba(196, 151, 47, 0.35)',

  modal:  '0 32px 80px rgba(46, 20, 40, 0.35)',
} as const


// ─────────────────────────────────────────────────────────────
// 6. BREAKPOINTS
// ─────────────────────────────────────────────────────────────
export const breakpoints = {
  xs:  480,
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const

/** Gera string de media query min-width */
export const mq = {
  xs:    `@media (min-width: ${breakpoints.xs}px)`,
  sm:    `@media (min-width: ${breakpoints.sm}px)`,
  md:    `@media (min-width: ${breakpoints.md}px)`,
  lg:    `@media (min-width: ${breakpoints.lg}px)`,
  xl:    `@media (min-width: ${breakpoints.xl}px)`,
  '2xl': `@media (min-width: ${breakpoints['2xl']}px)`,
} as const


// ─────────────────────────────────────────────────────────────
// 7. Z-INDEX
// ─────────────────────────────────────────────────────────────
export const zIndex = {
  below:    -1,
  base:      0,
  raised:   10,
  dropdown: 100,
  sticky:   200,
  fixed:    300,
  overlay:  400,
  modal:    500,
  popover:  600,
  toast:    700,
  tooltip:  800,
} as const


// ─────────────────────────────────────────────────────────────
// 8. ANIMATION
// ─────────────────────────────────────────────────────────────
export const animation = {
  duration: {
    instant:  '50ms',
    fast:     '150ms',
    normal:   '300ms',
    slow:     '500ms',
    slower:   '700ms',
    slowest:  '1000ms',
  },
  easing: {
    linear:   'linear',
    default:  'cubic-bezier(0.4, 0, 0.2, 1)',
    in:       'cubic-bezier(0.4, 0, 1, 1)',
    out:      'cubic-bezier(0, 0, 0.2, 1)',
    inOut:    'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce:   'cubic-bezier(0.34, 1.56, 0.64, 1)',
    elastic:  'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth:   'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  },
  transition: {
    fast:    'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal:  'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow:    'all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce:  'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
    color:   'color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const


// ─────────────────────────────────────────────────────────────
// 9. COMPONENT TOKENS
// ─────────────────────────────────────────────────────────────

export const componentTokens = {

  button: {
    // Primário (Dourado)
    primary: {
      bg:          colors.gold,
      bgHover:     colors.goldDark,
      text:        colors.white,
      shadow:      shadows.goldMd,
      shadowHover: shadows.goldLg,
    },
    // Secundário (Plum)
    secondary: {
      bg:          'transparent',
      bgHover:     colors.plum,
      text:        colors.plum,
      textHover:   colors.white,
      border:      colors.plum,
    },
    // Ghost
    ghost: {
      bg:      'transparent',
      bgHover: 'rgba(114, 57, 94, 0.06)',
      text:    colors.plum,
    },
    // Tamanhos
    sizes: {
      sm:  { height: '2rem',    padding: '0 1rem',    fontSize: '0.875rem' },
      md:  { height: '2.75rem', padding: '0 1.5rem',  fontSize: '1rem' },
      lg:  { height: '3.25rem', padding: '0 2rem',    fontSize: '1.125rem' },
      xl:  { height: '3.75rem', padding: '0 2.5rem',  fontSize: '1.25rem' },
    },
    borderRadius: borderRadius.full,
    fontWeight:   typography.fontSemibold,
    tracking:     typography.trackingWide,
  },

  card: {
    bg:           colors.white,
    bgHover:      colors.offWhite,
    border:       colors.borderDefault,
    borderHover:  colors.borderGold,
    borderRadius: borderRadius['2xl'],
    padding:      spacing[8],
    paddingSm:    spacing[6],
    shadow:       shadows.md,
    shadowHover:  shadows.lg,
  },

  input: {
    bg:           colors.white,
    border:       colors.borderStrong,
    borderFocus:  colors.borderFocus,
    borderError:  colors.error,
    text:         colors.textPrimary,
    placeholder:  colors.textSubtle,
    borderRadius: borderRadius.lg,
    height:       '3rem',
    paddingX:     spacing[4],
    shadowFocus:  '0 0 0 3px rgba(196, 151, 47, 0.20)',
  },

  badge: {
    borderRadius: borderRadius.full,
    padding:      `${spacing[1]} ${spacing[3]}`,
    fontSize:     typography.textXs,
    fontWeight:   typography.fontSemibold,
    tracking:     typography.trackingWidest,
    variants: {
      gold:     { bg: colors.goldLighter,      text: colors.goldDark },
      plum:     { bg: 'rgba(114,57,94,0.12)',   text: colors.plum },
      lavender: { bg: colors.lavender,          text: colors.plumDark },
    },
  },

  section: {
    paddingY:   spacing[24],
    paddingYSm: spacing[16],
    gap:        spacing[12],
  },
} as const


// ─────────────────────────────────────────────────────────────
// 10. TOKENS COMO CSS VARIABLES (útil em styled-components / CSS-in-JS)
// ─────────────────────────────────────────────────────────────
/**
 * Uso com CSS-in-JS:
 *   color: ${cssVars.colorGold}
 *   font-family: ${cssVars.fontDisplay}
 */
export const cssVars = {
  // Cores
  colorGold:          'var(--color-gold)',
  colorGoldLight:     'var(--color-gold-light)',
  colorGoldDark:      'var(--color-gold-dark)',
  colorPlum:          'var(--color-plum)',
  colorPlumDark:      'var(--color-plum-dark)',
  colorPlumDeeper:    'var(--color-plum-deeper)',
  colorLavender:      'var(--color-lavender)',
  colorLavenderMuted: 'var(--color-lavender-muted)',
  colorWhite:         'var(--color-white)',
  colorOffWhite:      'var(--color-off-white)',

  colorBgPrimary:     'var(--color-bg-primary)',
  colorBgSecondary:   'var(--color-bg-secondary)',
  colorBgDark:        'var(--color-bg-dark)',
  colorSurface:       'var(--color-surface)',

  colorTextPrimary:   'var(--color-text-primary)',
  colorTextSecondary: 'var(--color-text-secondary)',
  colorTextMuted:     'var(--color-text-muted)',
  colorTextSubtle:    'var(--color-text-subtle)',
  colorTextOnDark:    'var(--color-text-on-dark)',
  colorTextGold:      'var(--color-text-gold)',

  colorBorder:        'var(--color-border)',
  colorBorderStrong:  'var(--color-border-strong)',
  colorBorderGold:    'var(--color-border-gold)',
  colorBorderFocus:   'var(--color-border-focus)',

  // Tipografia
  fontDisplay:        'var(--font-display)',
  fontBody:           'var(--font-body)',

  // Espaçamentos comuns
  space4:  'var(--space-4)',
  space6:  'var(--space-6)',
  space8:  'var(--space-8)',
  space12: 'var(--space-12)',
  space16: 'var(--space-16)',
  space20: 'var(--space-20)',
  space24: 'var(--space-24)',

  // Sombras
  shadowMd:   'var(--shadow-md)',
  shadowLg:   'var(--shadow-lg)',
  shadowGoldMd:'var(--shadow-gold-md)',
  shadowGoldLg:'var(--shadow-gold-lg)',

  // Border radius
  radiusLg:   'var(--radius-lg)',
  radiusXl:   'var(--radius-xl)',
  radius2xl:  'var(--radius-2xl)',
  radiusFull: 'var(--radius-full)',

  // Transições
  transitionFast:   'var(--transition-fast)',
  transitionNormal: 'var(--transition-normal)',
  transitionBounce: 'var(--transition-bounce)',
} as const


// ─────────────────────────────────────────────────────────────
// 11. EXPORT CONSOLIDADO
// ─────────────────────────────────────────────────────────────
const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  mq,
  zIndex,
  animation,
  componentTokens,
  cssVars,
} as const

export default designSystem
