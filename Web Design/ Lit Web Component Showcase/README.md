# COMP2110 Week 06

This week I've been working with Web Components using the Lit library. I've created custom components:

1. A page header component that:
    - Uses the Lit library for efficient rendering
    - Accepts customizable properties (title and logo)
    - Features enhanced CSS styling with gradients, shadows, and hover effects
    - Demonstrates the component lifecycle and property system

2. A page footer component that:
    - Displays copyright information with the current year
    - Uses a year property initialized in the constructor
    - Uses consistent styling with the header component
    - Accepts a customizable name property
    - Demonstrates the use of HTML entities in Lit templates

3. A Star Wars movie component that:
    - Fetches data from the Star Wars API (SWAPI)
    - Uses component lifecycle methods to trigger API requests
    - Handles loading states and error conditions
    - Demonstrates fetching and rendering external data
    - Implements responsive updates when properties change
    - Includes an interactive film selector with real-time updates
    - Formats the opening crawl text in a Star Wars-inspired style
    - Uses event listeners for handling user interaction
    - Demonstrates property reactivity with automatic re-renders

The components demonstrate modern web component development techniques using the Lit library,
with responsive styling and customizable properties that can be set via HTML attributes.
The Star Wars component shows how to integrate external API data into web components using
the fetch API and component lifecycle methods.