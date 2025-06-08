# Skip Size Selector

A responsive React application for selecting skip sizes with modern UI/UX design.

## 🚀 Live Demo

[View Live Demo](https://codesandbox.io/p/github/burakzaferozcan/rem-waste-task/main?import=true&workspaceId=ws_2Q7HuD4L5cPGjpqEpM3Vvv)

## Features

- **Responsive Design**: Works on desktop and mobile
- **Modern UI**: Clean card-based interface with animations
- **Real-time Data**: Fetches skip data from WeWantWaste API
- **Interactive Selection**: Click to select/deselect skips
- **Loading States**: Skeleton animations during data fetch
- **Price Calculation**: Automatic VAT calculation and formatting

## Tech Stack

- React
- CSS3 (Grid & Flexbox)
- Fetch API for data retrieval

## Getting Started

```bash
# Clone and install
git clone https://github.com/burakzaferozcan/rem-waste-task
cd rem-waste-task
npm install

# Run development server
npm run dev
```

## Design Approach

**Original Challenge**: Redesign the skip selection page from wewantwaste.co.uk

**Key Improvements**:

- Card-based layout instead of list view
- Professional color scheme with CSS variables
- Mobile-first responsive design
- Smooth hover effects and transitions
- Fixed bottom bar with selection summary
- Enhanced loading experience with skeletons

## Component Structure

```
src/
├── App.jsx                 # Main app with state management
├── App.css                 # All styles
└── components/
    ├── BottomBar.jsx       # Fixed bottom navigation
    ├── Card.jsx            # Individual skip card
    ├── CardList.jsx        # Skip cards container
    └── CardSkeleton.jsx    # Loading placeholder
```

## API Integration

Data source: `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
