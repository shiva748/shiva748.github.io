# Mathura Taxi Service - Static Website

A modern and aesthetic static website for a taxi service based in Mathura, India. The website includes information about the taxi service, tour packages, outstation cabs, and contact details.

## Project Overview

This is a static website built using:
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Bootstrap Icons

The website consists of the following pages:
1. Home (index.html) - Main landing page with service overview
2. Tour Packages (tour-packages.html) - Page displaying various tour packages available
3. Outstation Cabs (outstation-cabs.html) - Page showing different cab options for outstation travel
4. Contact Us (contact.html) - Contact information and form

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Dynamic content loading using JavaScript from JSON files
- Modern and aesthetic UI with animations and hover effects
- Interactive elements like accordions, cards, and modals
- Contact form with client-side validation

## File Structure

```
mathurataxi/
│
├── index.html              # Home page
├── tour-packages.html      # Tour packages page
├── outstation-cabs.html    # Outstation cabs page
├── contact.html            # Contact page
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── js/
│   └── main.js             # Main JavaScript file
│
├── data/
│   ├── tour-packages.json  # Tour packages data
│   └── outstation-cabs.json # Outstation cabs data
│
├── public/
│   └── images/             # Images used in the website
│       ├── taxi-hero.jpg
│       ├── taxi-bg.jpg
│       ├── mathura-vrindavan.jpg
│       ├── agra-taj.jpg
│       └── ...
│
└── README.md               # This file
```

## How to Use

1. Download or clone the repository
2. Open any of the HTML files in a web browser to view the website

No server or build process is required as this is a static website. However, due to browser security restrictions, you may need a local server to properly load the JSON files. You can use any of the following:

- **Visual Studio Code with Live Server extension**
- **Python's built-in HTTP server**:
  ```
  python -m http.server
  ```
- **Node.js's http-server**:
  ```
  npm install -g http-server
  http-server
  ```

## Customization

### Modifying Tour Packages

To modify the tour packages, edit the `data/tour-packages.json` file. The structure is as follows:

```json
[
  {
    "id": 1,
    "name": "Package Name",
    "duration": "Duration",
    "price": Price as number,
    "image": "path/to/image.jpg",
    "description": "Description text",
    "includes": ["Item 1", "Item 2", ...],
    "itinerary": ["Step 1", "Step 2", ...]
  },
  ...
]
```

### Modifying Outstation Cabs

To modify the outstation cab options, edit the `data/outstation-cabs.json` file. The structure is as follows:

```json
[
  {
    "id": 1,
    "type": "Cab Type",
    "name": "Cab Model",
    "capacity": "X passengers",
    "luggage": "Luggage capacity",
    "image": "path/to/image.jpg",
    "features": ["Feature 1", "Feature 2", ...],
    "rates": {
      "per_km": X,
      "driver_allowance_per_day": X,
      "min_km_per_day": X,
      "night_charges": X
    },
    "popular_routes": [
      {
        "from": "Origin",
        "to": "Destination",
        "distance": "X km",
        "estimated_fare": "₹X - ₹Y"
      },
      ...
    ]
  },
  ...
]
```

## Image Requirements

For best results, use images with the following specifications:

- Hero/Banner images: 1920x1080px (16:9 ratio)
- Card images: 600x400px
- Make sure all images are optimized for web (compressed)

## Credits

- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)
- [Google Maps](https://www.google.com/maps)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For inquiries, please contact the developer at [your-email@example.com]. # shiva748.github.io
