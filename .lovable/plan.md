
# Mr. Wiggles Kumar — Comic Landing Page

## Overview
A single-page, comic-style landing page that feels like a living comic panel — playful, chaotic, and fun. One clear goal: download the comic.

## Visual Design
- **Color palette**: Retro comic colors — bright yellow, red, blue, with off-white paper texture background
- **Style elements**: Thick black outlines, halftone dot patterns (CSS), speech bubbles, comic panel borders with slight rotation/tilt
- **Typography**: Bold comic-style fonts (Bangers from Google Fonts for headings, Comic Neue for body)
- **Background**: Subtle paper texture using CSS noise/pattern
- **Custom cursor**: Comic glove-hand pointer on interactive elements

## Layout & Sections

### Hero Section
- Large, bold title: **"Mr. Wiggles Kumar"** in comic lettering style with slight rotation
- Subtitle: *"A ridiculously chaotic adventure"* in a speech bubble
- Scattered comic sound effects floating around: "BOING!", "OOPS!", "SPLASH!" with slight animations
- Big, unmissable **"Download Comic"** CTA button styled like a comic action burst (starburst shape), with "Free · Issue #1" subtext

### Comic Preview Strip
- 2–3 comic panel placeholders arranged like a tilted comic strip
- Each panel framed with thick black borders, slightly rotated at different angles
- Hover animation: panels scale up slightly and straighten out
- Halftone dot overlay on panels

### Interactions
- **Download button**: On click, triggers a comic "WHAM!" burst animation overlay before initiating download
- **Floating sound effects**: Gentle bobbing/rotating CSS animations on "BOING!", "SPLASH!" text elements
- **Panel hover**: Scale + shadow effect on comic preview panels

### Footer
- Comic panel style footer with:
  - "A comic by Jeevakrishna Vetrivel :)"
  - "To be continued…" in italic comic style
  - Halftone fade-out effect

## Responsiveness
- Mobile: Panels stack vertically, CTA button stays prominent and sticky at bottom on small screens
- Desktop: Panels scattered/tilted layout with more visual chaos

## Pages & Components
- **Index page**: Complete single-page landing
- **ComicPanel**: Reusable tilted panel component
- **SpeechBubble**: Comic speech bubble component
- **WhamOverlay**: Click animation overlay component
- **SoundEffect**: Floating animated text component
