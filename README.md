# Solidar - High-End Solidarity Platform

A modern, responsive web application for community crowdfunding and solidarity initiatives, built with HTML, CSS (Tailwind), and JavaScript.

## Features

- **Campaign Discovery**: Browse verified community campaigns with detailed information
- **Campaign Details**: In-depth view of projects with progress tracking, timelines, and testimonials
- **Mobile Money Integration**: Seamless contribution flow with MTN MoMo and Airtel Money
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern UI**: Dark theme with Material Design-inspired components

## Pages

### 1. Home Feed (`index.html`)
- Campaign grid with verified badges
- Funding progress indicators
- Spotlight campaigns with bento-style layout
- Bottom navigation and floating action button

### 2. Campaign Detail (`campaign.html`)
- Hero images and campaign information
- Real-time progress tracking
- Trust timeline showing project milestones
- Video testimonials from community members
- Detailed mission and impact information

### 3. Contribution Flow (`contribute.html`)
- Two-step payment process
- Amount selection with quick options
- Mobile money provider selection
- Secure payment confirmation

## Technology Stack

- **HTML5**: Semantic markup and structure
- **Tailwind CSS**: Utility-first styling with custom design system
- **Vanilla JavaScript**: Interactive functionality and state management
- **Google Fonts**: Manrope (headlines) and Inter (body text)
- **Material Symbols**: Consistent iconography

## Design System

The application uses a comprehensive design system with:

- **Color Palette**: Dark theme with primary emerald green (#5ADF82)
- **Typography**: Manrope for headlines, Inter for body text
- **Components**: Cards, buttons, progress bars, modals
- **Spacing**: Consistent 4px grid system
- **Animations**: Smooth transitions and micro-interactions

## File Structure

```
solidar/
|-- index.html              # Home feed with campaign listings
|-- campaign.html           # Campaign detail page
|-- contribute.html         # Contribution modal/flow
|-- js/
|   |-- app.js             # Home feed functionality
|   |-- campaign.js        # Campaign detail logic
|   |-- contribute.js      # Contribution flow
|-- README.md              # This file
```

## Getting Started

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process required - runs directly in the browser

## Campaign Data

The application includes sample campaigns for:
- Solar Power for Bugesera Village
- Tea Cooperative Modernization
- Clean Water Initiative

Each campaign includes:
- Progress tracking and funding goals
- Trust timeline with project milestones
- Community testimonials
- Detailed impact metrics

## Mobile Money Integration

The contribution flow supports:
- **MTN MoMo**: Primary payment provider
- **Airtel Money**: Alternative payment option
- **Amount Selection**: Quick presets and custom amounts
- **Security**: Verified payment flow with confirmation

## Responsive Features

- Mobile-first design approach
- Touch-friendly interactions
- Optimized images and loading
- Smooth scrolling and transitions
- Bottom navigation for mobile usability

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript for full functionality

## Contributing

This is a demonstration project showcasing modern web development techniques with a focus on:
- Clean, semantic HTML
- Efficient CSS with Tailwind
- Interactive JavaScript without frameworks
- Accessibility and user experience

## License

This project is for demonstration purposes. Feel free to use and modify for your own projects.
