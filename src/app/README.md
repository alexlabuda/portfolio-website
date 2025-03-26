# Portfolio Website Theme System

## Color System

The website uses a consistent color system defined in `globals.css` and configured in `tailwind.config.js`. The color variables are accessible through Tailwind utility classes.

### Primary Colors (Deep Purple)

The primary color palette is based on deep purple (#6750A4) and is used for:
- Primary UI elements
- Buttons
- Focus states
- Links
- Accents on cards and UI components

### Accent Colors (Soft Pink)

The accent color palette is based on soft pink (#FFD8E4) and is used for:
- Call-to-action elements
- Highlighting important information
- Secondary accents
- Special buttons or UI elements that need to stand out

### Surface Colors

- Pale Lavender (#E8DEF8) - Card backgrounds, surface areas
- Background Gradient - from pale periwinkle (#E3DFFA) to peachy-pink (#FFD2CB)

## Using Colors in Components

### Utility Classes

Use Tailwind utility classes that reference the theme colors:

```jsx
<div className="bg-primary-500">Primary background</div>
<div className="text-accent-600">Accent text</div>
```

### Button Utilities

Pre-defined button classes are available:

```jsx
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>
<button className="btn-accent">Accent Button</button>
```

### Dark Mode Support

The theme supports dark mode with the `dark:` prefix in Tailwind classes:

```jsx
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-800 dark:text-gray-200">
    This text adapts to dark mode
  </p>
</div>
```

## Theme Testing

Visit the `/theme-test` route to see all UI elements with the current theme applied. 

## How to Use the New Colors in Your Components

Here are some examples of how to use the new colors:

### For Primary Elements
```jsx
<button className="btn-primary">Submit</button>
<h2 className="text-primary-600">Projects</h2>
<div className="rounded-md border border-primary-200 bg-white">
  <div className="h-2 bg-primary-600 rounded-t-md"></div>
  <div className="p-4">Card content</div>
</div>
```

### For Accent Elements
```jsx
// Accent button
<button className="btn-accent">Contact Me</button>

// Highlight text
<span className="text-accent-600">Featured</span>

// Card with accent
<div className="border border-accent-200 rounded-md p-4">
  <span className="text-accent-700">Special announcement</span>
</div>
```

### For Gradient Backgrounds
```jsx
// After adding the gradient to tailwind.config.js
<section className="bg-gradient-primary min-h-screen">
  {/* Content */}
</section>

// Or directly with CSS
<section className="bg-[linear-gradient(to_bottom_right,#e3dffa,#ffd2cb)]">
  {/* Content */}
</section>
```

This color palette creates a cohesive, modern look that would be perfect for a data scientist's portfolio, balancing professionalism with a distinctive and memorable aesthetic. 