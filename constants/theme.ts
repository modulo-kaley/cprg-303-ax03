// ============================================================
// constants/theme.ts
// Plan It — App Theme
//
// HOW TO USE THIS FILE
// --------------------
// 1. Import what you need at the top of your screen file:
//
//      import { colors, spacing, text, radius, forms } from '@/constants/theme';
//
// 2. Use inside StyleSheet.create() — no magic numbers, no hex codes:
//
//      const styles = StyleSheet.create({
//        container: forms.container,        // <-- plug and play
//        input:     forms.input,
//        label:     forms.label,
//        error:     forms.errorText,
//        button:    forms.submitButton,
//        btnText:   forms.submitButtonText,
//      });
//
// That's it. The forms section at the bottom is your fastest path.
// ============================================================




// ─────────────────────────────────────────────────────────────
// COLORS
//
// Every color in the app lives here.
// Named by WHERE they are used, not what they look like.
//
// QUICK REFERENCE:
//   Screen background -----> colors.screenBg
//   Heading text ----------> colors.headingText
//   Body / paragraph text -> colors.bodyText
//   Placeholder text ------> colors.mutedText
//   Input fill ------------> colors.inputBg
//   Input border (idle) ---> colors.border
//   Input border (error) --> colors.inputErrorBorder
//   Input border (focus) --> colors.inputFocusBorder
//   Primary button bg -----> colors.primaryBtnBg
//   Primary button text ---> colors.primaryBtnText
//   Error message ---------> colors.errorText
//   Divider line ----------> colors.divider
// ─────────────────────────────────────────────────────────────

export const colors = {

  // ── Screens & surfaces ──────────────────────────────────────
  screenBg: '#F4F1E2',   // warm off-white — default for every screen
  cardBg:   '#F7F5EC',   // slightly warmer — cards, modals, inner sections
  darkBg:   '#513229',   // deep espresso brown — dark surfaces


  // ── Text ────────────────────────────────────────────────────
  headingText: '#2B2B24', // page titles, section headers, labels above inputs
  bodyText:    '#4A4A40', // regular paragraphs, list items
  mutedText:   '#9E9C91', // placeholders, hints, captions
  textOnDark:  '#F4F1E2', // text sitting on top of darkBg
  errorText:   '#C0392B', // validation error messages


  // ── Input fields ────────────────────────────────────────────
  inputBg:          '#C9C8C0', // gray pill fill
  inputText:        '#2B2B24', // text the user types
  inputPlaceholder: '#9E9C91', // placeholder text ("Enter your name...")
  inputFocusBorder: '#F2C12E', // gold ring when field is active — needs borderWidth: 1
  inputErrorBorder: '#C0392B', // red ring when field fails validation


  // ── Buttons ─────────────────────────────────────────────────
  primaryBtnBg:    '#2B2B24', // filled button background
  primaryBtnText:  '#F4F1E2', // filled button label
  outlineBtnBorder:'#2B2B24', // outline button border
  outlineBtnText:  '#2B2B24', // outline button label
  disabledBtnBg:   '#C9C8C0', // grayed out when form is invalid
  disabledBtnText: '#9E9C91',


  // ── Toggle buttons (Standard / Military Time) ────────────────
  toggleActiveBg:   '#2B2B24', // selected button
  toggleActiveText: '#FFFFFF',
  toggleIdleBg:     'transparent',
  toggleIdleText:   '#2B2B24',
  toggleBorder:     '#2B2B24',


  // ── Tab bar ─────────────────────────────────────────────────
  tabBarBg:      '#FFFFFF',
  tabBarBorder:  '#C9C8C0',
  tabIconActive: '#2B2B24', // currently active tab icon
  tabIconIdle:   '#9E9C91', // all other tab icons


  // ── Accents & feedback ───────────────────────────────────────
  gold:         '#F2C12E', // selected swatches, focus rings
  goldMuted:    '#F5D16B', // pressed / hover state
  success:      '#4CAF50',
  successLight: '#E8F5E9', // success banner background
  error:        '#C0392B',
  errorLight:   '#FDECEA', // error banner background


  // ── Lines & structure ────────────────────────────────────────
  border:  '#C9C8C0', // default border — replaces '#ccc'
  divider: '#E5E3D8', // thin lines between sections


  // ── Background color picker swatches ────────────────────────
  // Use bgPickerOptions (below) to render the picker row.
  swatch: {
    gold:          '#F2C12E',
    luckyDice:     '#F4F1E2',
    somethingBlue: '#D8EBF9',
    theBay:        '#FCE6B7',
    walkingVinnie: '#D7D4B1',
  },

} as const;


// ─────────────────────────────────────────────────────────────
// BACKGROUND COLOR PICKER OPTIONS
//
// Drop straight into a .map() to render the swatch row:
//
//   {bgPickerOptions.map((option) => (
//     <TouchableOpacity
//       key={option.label}
//       style={[forms.colorSwatch, { backgroundColor: option.hex }]}
//     />
//   ))}
// ─────────────────────────────────────────────────────────────

export const bgPickerOptions = [
  { label: 'Gold',           hex: colors.swatch.gold          },
  { label: 'Lucky Dice',     hex: colors.swatch.luckyDice     },
  { label: 'Something Blue', hex: colors.swatch.somethingBlue },
  { label: 'The Bay',        hex: colors.swatch.theBay        },
  { label: 'Walking Vinnie', hex: colors.swatch.walkingVinnie },
] as const;




// ─────────────────────────────────────────────────────────────
// TEXT (typography)
//
// EXAMPLE:
//   title: {
//     fontFamily: text.serif,
//     fontSize:   text.size.heading,  // 28
//     fontWeight: text.weight.bold,
//     color:      colors.headingText,
//   }
//
// COMMON PAIRINGS:
//   Error / caption text  -> text.size.sm    (12)
//   Field labels          -> text.size.label (13)
//   Body / input text     -> text.size.bodyLg (16)
//   Button text           -> text.size.bodyLg (16)
//   Screen title          -> text.size.heading (28)
// ─────────────────────────────────────────────────────────────

export const text = {

  // Font families — swap strings here once custom fonts are loaded via expo-font
  serif:       'Georgia',        // "Your"    — bold display heading
  serifItalic: 'Georgia-Italic', // "Account" — italic display heading
  sans:        'System',         // everything else (platform default)

  size: {
    xs:      11, // tiny captions
    sm:      12, // error messages, small labels
    label:   13, // field labels ("Name", "Email")
    body:    14, // standard body
    bodyLg:  16, // input text, button text
    subhead: 18,
    title:   22,
    heading: 28, // screen titles
    display: 32, // "Your Account" heading
    hero:    40,
  },

  // NOTE: On Android only 'normal' (400) and 'bold' (700) are safe
  // without a custom font loaded.
  weight: {
    regular: '400' as const,
    medium:  '500' as const, // custom font only
    bold:    '700' as const,
  },

} as const;




// ─────────────────────────────────────────────────────────────
// SPACING (4-point grid)
//
// Use these instead of raw numbers to keep gaps consistent.
//
// QUICK REFERENCE:
//   spacing.xs   =  4   tiny gap
//   spacing.sm   =  8   small gap
//   spacing.base =  16  standard padding (reach for this most often)
//   spacing.xl   =  24  section gap
//   spacing.xxl  =  32  large section gap
//
// EXAMPLE:
//   container: {
//     padding:      spacing.base,
//     marginBottom: spacing.xl,
//     gap:          spacing.sm,
//   }
// ─────────────────────────────────────────────────────────────

export const spacing = {
  xxs:  2,
  xs:   4,
  sm:   8,
  md:   12,
  base: 16, // <-- reach for this one first
  lg:   20,
  xl:   24,
  xxl:  32,
  xxxl: 40,
  huge: 56,
} as const;




// ─────────────────────────────────────────────────────────────
// BORDER RADIUS
//
//   radius.pill = fully rounded (inputs, swatches, toggle buttons)
//   radius.sm   = standard card / button corner (replaces: borderRadius: 8)
//   radius.lg   = softer card corners
// ─────────────────────────────────────────────────────────────

export const radius = {
  none: 0,
  xs:   4,
  sm:   8,   // matches the old { borderRadius: 8 } pattern
  md:   12,
  lg:   16,
  xl:   24,
  pill: 999, // fully rounded — the main shape in this design
} as const;




// ─────────────────────────────────────────────────────────────
// SHADOWS
//
// Spread onto any View — works on iOS and Android.
//
// EXAMPLE:
//   card: {
//     backgroundColor: colors.cardBg,
//     borderRadius:    radius.lg,
//     ...shadows.card,
//   }
// ─────────────────────────────────────────────────────────────

export const shadows = {
  none: {},

  subtle: {  // inputs, chips, small elements
    shadowColor:   '#2B2B24',
    shadowOffset:  { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius:  3,
    elevation:     2,
  },

  card: {    // content cards, list items
    shadowColor:   '#2B2B24',
    shadowOffset:  { width: 0, height: 3 },
    shadowOpacity: 0.10,
    shadowRadius:  6,
    elevation:     4,
  },

  modal: {   // modals, bottom sheets, floating elements
    shadowColor:   '#2B2B24',
    shadowOffset:  { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius:  12,
    elevation:     8,
  },
} as const;




// ─────────────────────────────────────────────────────────────
// FORMS  ← your plug-and-play section
//
// These are complete, ready-to-use StyleSheet values.
// Assign them directly — no tweaking required.
//
// FULL FORM EXAMPLE (copy this as your starting point):
//
//   import { forms } from '@/constants/theme';
//
//   const styles = StyleSheet.create({
//     container:  forms.container,
//     title:      forms.title,
//     fieldWrap:  forms.fieldWrap,
//     label:      forms.label,
//     input:      forms.input,
//     inputFocus: forms.inputFocus,
//     inputError: forms.inputError,
//     error:      forms.errorText,
//     button:     forms.submitButton,
//     btnText:    forms.submitButtonText,
//   });
//
// Then in your JSX, combine states like this:
//
//   <TextInput
//     style={[styles.input, hasError && styles.inputError]}
//     ...
//   />
//   {hasError && <Text style={styles.error}>{errorMessage}</Text>}
//
//   <TouchableOpacity
//     style={[styles.button, !isValid && forms.disabledButton]}
//     disabled={!isValid}
//   >
//     <Text style={styles.btnText}>Submit</Text>
//   </TouchableOpacity>
// ─────────────────────────────────────────────────────────────

export const forms = {

  // ── Screen / form wrapper ────────────────────────────────────

  // Centered layout — auth screens (Sign In, Sign Up)
  // Replaces: { flex: 1, padding: 24, justifyContent: 'center' }
  container: {
    flex:            1,
    padding:         spacing.xl,
    justifyContent:  'center'  as const,
    backgroundColor: colors.screenBg,
  },

  // Top-aligned layout — most other screens (Account, Employee Info)
  screenContainer: {
    flex:              1,
    paddingHorizontal: spacing.xl,
    paddingTop:        spacing.xl,
    backgroundColor:   colors.screenBg,
  },


  // ── Heading / title ──────────────────────────────────────────

  // Screen title above a form
  // Replaces: { fontSize: 28, fontWeight: 'bold', marginBottom: 24 }
  title: {
    fontSize:     text.size.heading,
    fontWeight:   text.weight.bold,
    marginBottom: spacing.xl,
    color:        colors.headingText,
  },

  // Subtitle / description line under the title
  subtitle: {
    fontSize:     text.size.body,
    color:        colors.mutedText,
    marginBottom: spacing.xl,
  },


  // ── Field layout ─────────────────────────────────────────────

  // Wrap each label + input + error message in this
  fieldWrap: {
    marginBottom: spacing.base,
  },

  // Small label above each input ("Name", "Email", "Date of Birth")
  // Replaces nothing directly — add this where you had no label style
  label: {
    fontSize:     text.size.label,
    fontWeight:   text.weight.medium,
    color:        colors.headingText,
    marginBottom: spacing.xs,
  },


  // ── Inputs ───────────────────────────────────────────────────

  // Standard bordered input
  // Replaces: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 4 }
  input: {
    borderWidth:     1,
    borderColor:     colors.border,
    borderRadius:    radius.sm,
    padding:         spacing.md,
    fontSize:        text.size.bodyLg,
    color:           colors.inputText,
    backgroundColor: colors.screenBg,
    marginBottom:    spacing.xs,
  },

  // Pill-shaped input — Account screen style (Name, Email, etc.)
  // Replaces nothing specific — this is the Plan It-native input style
  pillInput: {
    backgroundColor:   colors.inputBg,
    borderRadius:      radius.pill,
    paddingHorizontal: spacing.lg,
    paddingVertical:   spacing.md,
    fontSize:          text.size.bodyLg,
    color:             colors.inputText,
    width:             '100%' as const,
    marginBottom:      spacing.xs,
  },

  // Apply ON TOP of input or pillInput when the field is focused
  // Usage: style={[styles.input, isFocused && forms.inputFocus]}
  inputFocus: {
    borderWidth: 1,
    borderColor: colors.inputFocusBorder,
  },

  // Apply ON TOP of input or pillInput when there is a validation error
  // Usage: style={[styles.input, errors.email && forms.inputError]}
  // Replaces: inputError: { borderColor: 'red' }
  inputError: {
    borderWidth: 1,
    borderColor: colors.inputErrorBorder,
  },


  // ── Validation error message ─────────────────────────────────

  // The red message that appears under an invalid field
  // Replaces: { color: 'red', fontSize: 12, marginBottom: 12 }
  errorText: {
    color:        colors.errorText,
    fontSize:     text.size.sm,
    marginBottom: spacing.md,
  },


  // ── Buttons ──────────────────────────────────────────────────

  // Filled primary button — main form submit action
  // Replaces: { backgroundColor: '#...', padding: 16, borderRadius: 8, alignItems: 'center', marginTop: 8 }
  submitButton: {
    backgroundColor: colors.primaryBtnBg,
    padding:         spacing.base,
    borderRadius:    radius.sm,
    alignItems:      'center' as const,
    marginTop:       spacing.sm,
  },

  // Text inside the submit button
  // Replaces: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
  submitButtonText: {
    color:      colors.primaryBtnText,
    fontWeight: text.weight.bold,
    fontSize:   text.size.bodyLg,
  },

  // Disabled state — spread on top of submitButton when form is invalid
  // Usage: style={[forms.submitButton, !isValid && forms.disabledButton]}
  disabledButton: {
    backgroundColor: colors.disabledBtnBg,
  },

  // Text inside a disabled button
  disabledButtonText: {
    color: colors.disabledBtnText,
  },

  // Pill-shaped primary button — Plan It native style
  pillButton: {
    backgroundColor: colors.primaryBtnBg,
    paddingVertical:   spacing.md,
    paddingHorizontal: spacing.xxl,
    borderRadius:      radius.pill,
    alignItems:        'center' as const,
    marginTop:         spacing.sm,
  },

  // Outline (secondary) button — for cancel / back / secondary actions
  outlineButton: {
    borderWidth:  1,
    borderColor:  colors.outlineBtnBorder,
    padding:      spacing.base,
    borderRadius: radius.sm,
    alignItems:   'center' as const,
    marginTop:    spacing.sm,
  },

  outlineButtonText: {
    color:      colors.outlineBtnText,
    fontWeight: text.weight.bold,
    fontSize:   text.size.bodyLg,
  },


  // ── Toggle buttons (Standard / Military Time) ─────────────────

  toggleGroup: {
    flexDirection: 'row' as const,
    gap:           spacing.sm,
    marginBottom:  spacing.base,
  },

  toggleButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical:   spacing.sm,
    borderRadius:      radius.pill,
    borderWidth:       1,
    borderColor:       colors.toggleBorder,
  },

  toggleButtonActive: {
    backgroundColor: colors.toggleActiveBg,
  },

  toggleButtonText: {
    fontSize:   text.size.body,
    color:      colors.toggleIdleText,
  },

  toggleButtonTextActive: {
    color:      colors.toggleActiveText,
    fontWeight: text.weight.bold,
  },


  // ── Color swatch (background picker) ─────────────────────────

  colorSwatch: {
    width:        56,
    height:       32,
    borderRadius: radius.pill,
  },


  // ── Display headings ("Your" / "Account") ─────────────────────

  displayHeading: {
    fontSize:   text.size.display,
    fontFamily: text.serif,
    fontWeight: text.weight.bold,
    color:      colors.headingText,
  },

  displayHeadingItalic: {
    fontSize:   text.size.display,
    fontFamily: text.serifItalic,
    fontWeight: text.weight.regular,
    fontStyle:  'italic' as const,
    color:      colors.headingText,
  },

} as const;




// ─────────────────────────────────────────────────────────────
// DEFAULT EXPORT
//
// Named imports (recommended — only pull in what you use):
//   import { colors, spacing, text, radius, forms } from '@/constants/theme';
//
// Or grab everything at once:
//   import theme from '@/constants/theme';
//   theme.colors.screenBg / theme.forms.input / theme.spacing.base
// ─────────────────────────────────────────────────────────────

const theme = {
  colors,
  bgPickerOptions,
  text,
  spacing,
  radius,
  shadows,
  forms,
};

export default theme;