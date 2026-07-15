// Metric values shown in the /executive-network hero panel.
//
// VERIFICATION: `combinedYears` (the "100+ Years" card) is an illustrative
// figure and MUST be confirmed by the business before launch. Calculate it as
// the sum of each network leader's years of executive and functional leadership
// experience (not total career years), then round down to a conservative
// "100+"-style figure. Update the value here as the network grows.
// Do NOT expose this calculation note publicly.

export interface HeroMetric {
  value: string;
  label: string;
  description: string;
  /** True when the value is not yet business-verified (see note above). */
  requiresVerification?: boolean;
}

export const NETWORK_METRICS: HeroMetric[] = [
  {
    // Newline forces "Years" onto a second line in the card.
    value: '100+\nYears',
    label: 'Combined Executive Experience',
    description: 'Leadership experience across complex operating environments.',
    requiresVerification: true,
  },
  {
    value: 'VP to C-Suite',
    // Newline forces "Leaders" onto a second line in the card.
    label: 'Proven Operating\nLeaders',
    description: 'Executives who have held meaningful functional and enterprise responsibility.',
  },
];
