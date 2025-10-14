/**
 * Typography Styles
 *
 * Centralized typography system for the EventEase application.
 * Uses BBH Sans Bogle for headings and Rubik for body text.
 *
 * Font Families:
 * - BBH Sans Bogle: Headings (h1, h2, h3)
 * - Rubik: Body text and captions
 *
 * Heading Sizes:
 * - h1: 24px (Main titles)
 * - h2: 18px (Section titles)
 * - h3: 14px (Subsection titles)
 *
 * Usage:
 * import { typography } from '../styles/typography';
 * <Text style={typography.h1}>Title</Text>
 */

import { StyleSheet } from 'react-native';

export const typography = StyleSheet.create({
  // Heading 1 - Main titles (24px)
  h1: {
    fontFamily: 'BBHSansBogle-Regular',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: 0.5,
  },

  // Heading 2 - Section titles (18px)
  h2: {
    fontFamily: 'BBHSansBogle-Regular',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.3,
  },

  // Heading 3 - Subsection titles (14px)
  h3: {
    fontFamily: 'BBHSansBogle-Regular',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: 0.2,
  },

  // Body text - Regular
  body: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.15,
  },

  // Body text - Medium
  bodyMedium: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.15,
  },

  // Body text - Bold
  bodyBold: {
    fontFamily: 'Rubik-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.15,
  },

  // Body text - Small
  bodySmall: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  // Caption text
  caption: {
    fontFamily: 'Rubik-Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0.4,
  },
});
