# COMP2110 Week 09

For this week's task, I implemented accessibility features for a "Quote of the Day" application.

## Accessibility Features:

### 1. Live Status Announcements
- Added an aria-live="polite" region that announces status changes to screen reader users
- Implemented status messages that inform users when:
    - A quote is being loaded
    - A quote has successfully loaded
    - Loading a quote has failed
    - A quote has been cleared

### 2. Custom Keyboard-Accessible Button
- Created a custom button using a div element with:
    - `role="button"` to ensure proper semantics for assistive technologies
    - `tabindex="0"` to make it keyboard-focusable
    - `aria-label` to provide a clear purpose for screen reader users
    - Event handlers for both mouse clicks and keyboard interactions (Enter/Space)
    - Visual focus indicators and hover states
    - `aria-disabled` state during loading operations

### 3. Accessible Modal Dialog
- Implemented a modal dialog with proper ARIA attributes:
    - `role="dialog"` to identify the element as a dialog
    - `aria-modal="true"` to indicate it's a modal dialog
    - `aria-labelledby` to connect the modal with its heading
- Focus management:
    - Focus automatically moves into the modal when opened
    - Focus is trapped inside the modal while open (preventing tabbing outside)
    - Focus returns to the triggering element when closed
- Keyboard controls:
    - Modal can be closed with the Escape key
    - Tab navigation is properly managed within the modal
- Status announcements:
    - Screen readers are informed when the modal is opened and closed

### 4. Accessible Listbox with Keyboard Navigation
- Created a listbox to display and navigate between quotes:
    - `role="listbox"` on the container for proper semantic structure
    - `role="option"` on each list item for accessibility
    - `aria-selected` state to indicate the currently selected option
- Implemented keyboard navigation:
    - Arrow Up/Down keys to navigate between options
    - Home/End keys to jump to first/last options
- Focus management:
    - Visual focus indicators for keyboard users
    - Focus automatically moves to newly added quotes
- Status announcements:
    - Screen readers are informed about position in the list (e.g., "Quote 2 of 5")

These implementations follow WCAG guidelines for:
- Making dynamic content changes perceivable (1.3.1 Info and Relationships)
- Ensuring keyboard accessibility (2.1.1 Keyboard)
- Providing proper names and roles for UI elements (4.1.2 Name, Role, Value)
- Managing focus (2.4.3 Focus Order)
- Supporting alternative interaction methods (2.1.1 Keyboard)
- Making lists and custom controls accessible (4.1.2 Name, Role, Value)

## Mobile Usability Analysis

I evaluated the BBC News website (bbc.com/news) for this mobile usability analysis.

### Display Differences Across Devices

When scaling the browser window or using responsive design mode with different device sizes:
- On desktop, the site displays a 3-column layout with top stories, secondary stories, and a sidebar
- On tablet, it shifts to a 2-column layout, with the sidebar content moved below
- On mobile, it uses a single-column layout with a prioritized content stack

The key differences include:
- Navigation transforms from a horizontal menu bar on desktop to a hamburger menu on mobile
- Image sizes decrease proportionally on smaller screens
- Font sizes adjust to maintain readability across devices
- Touch targets (buttons, links) enlarge on mobile for easier interaction

### Design Approach

The BBC News site primarily follows a **responsive design approach**:
- It uses fluid grids that adapt to screen size
- Content reflows based on viewport width
- CSS media queries trigger layout changes at specific breakpoints
- Images scale proportionally with CSS

### Thumb Accessibility

On mobile:
- Approximately 70% of interactive elements are within the thumb zone
- The main navigation hamburger menu is positioned in the top-left corner, requiring stretching for right-handed users
- Some footer links fall outside the comfortable thumb reach
- No complex gestures are required; the site relies on basic tap interactions

### F-Shape Pattern Evaluation

The site effectively leverages the F-pattern by:
- Placing the BBC logo and main navigation at the top
- Using strong horizontal headline elements for top stories
- Positioning key content in the upper portion of the page
- Aligning text and images along the left edge
- Using descending importance as users scroll down

### Compliance with Mobile Design Principles

1. **Know Your Users**: ✓
    - Content is categorized by interest (news, sports, entertainment)
    - Offers personalization options for frequent readers

2. **Understand Context of Use**: ✓
    - Loads quickly on mobile networks
    - Provides easily scannable headlines for on-the-go reading
    - Offers offline reading capability in the app

3. **Follow the Rule of Thumb(s)**: ⚠️
    - Most primary actions are within thumb range
    - Could improve by relocating the search button from top-right to bottom

4. **Put Content First**: ✓
    - Minimizes ads and distractions on mobile
    - Prioritizes headlines and images
    - Reduces navigation elements to focus on content

5. **Stay on (Touch) Target**: ✓
    - Interactive elements are appropriately sized (≥10mm)
    - Sufficient spacing between clickable elements
    - Visual feedback on tap

6. **Echo Real-world Gestures and Movement**: ⚠️
    - Limited use of intuitive gestures like swipe for galleries
    - Could implement more natural gestures for navigation between stories

7. **Use Progressive Disclosure**: ✓
    - Article snippets expand to full articles
    - Category navigation reveals subcategories on demand
    - "Read more" options for longer content

### Recommended Improvements

To achieve optimal mobile design, the BBC News site should:
- Relocate the hamburger menu to the bottom for better thumb access
- Implement swipe gestures to navigate between top stories
- Add a floating action button for quick access to common actions
- Enhance visual feedback for touch interactions
- Increase spacing between some clickable elements in dense lists
- Consider a bottom navigation bar for primary sections instead of hiding in hamburger menu


### Extra task

## Responsive Navigation Bar Implementation

I've implemented a responsive navigation bar using HTML, CSS with Flexbox, and JavaScript for a COMP2110 course page. The navigation bar adapts to different screen sizes, providing an optimal user experience across desktop, tablet, and mobile devices.

### Features Implemented:

1. **Responsive Design**
    - Desktop view: Full horizontal navigation with dropdown menus
    - Tablet view: Hybrid design with hamburger menu and visible buttons
    - Mobile view: Compact hamburger menu with vertical expansion

2. **Flexbox Layout**
    - Used CSS Flexbox for flexible, responsive positioning
    - Implemented proper alignment and ordering of elements across different screen sizes
    - Created smooth transitions between layout modes

3. **Interactive Elements**
    - Dropdown submenus for "Cores" and "Assignments" sections
    - Toggle functionality for mobile menu expansion/collapse
    - Hover effects for improved user feedback

4. **Accessibility Features**
    - Keyboard navigation support (Enter/Space to activate dropdowns)
    - Semantic HTML structure with appropriate elements
    - Added `tabindex` attributes to ensure keyboard accessibility
    - Icon changes to indicate menu states (hamburger to close icon)

5. **Visual Styling**
    - Consistent color scheme with the unit branding
    - Clear visual hierarchy between main and submenu items
    - Visual feedback on hover and active states

### Responsive Breakpoints:

- **Mobile** (below 700px):
    - Vertical stacked menu behind hamburger icon
    - Full-width menu items when expanded
    - Sequential ordering of elements

- **Tablet** (700px - 960px):
    - Hamburger menu for main navigation items
    - Login/Signup buttons visible in header
    - Improved button styling and positioning

- **Desktop** (above 960px):
    - Horizontal menu bar with all items visible
    - Dropdown menus for submenu items
    - Optimized spacing and layout

This implementation follows best practices for responsive web design, ensuring the navigation works effectively across all device sizes while maintaining accessibility and usability.