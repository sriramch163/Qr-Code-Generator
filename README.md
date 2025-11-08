# QR Code Generator

A simple web application that generates QR codes for product information including ID and price. The project includes both a client-server architecture and a standalone version.

## Features

- Generate QR codes with product ID and price information
- Clean, responsive web interface
- Two deployment options: client-server or standalone
- Download generated QR codes
- Real-time QR code generation

## Project Structure

```
QR-Code-Generator/
├── Client/
│   ├── index.html          # Main client interface
│   ├── script.js           # Client-side JavaScript
│   ├── style.css           # Styling
└── Server/
    ├── app.js              # Express server setup
    ├── controller.js       # Request handlers
    ├── routes.js           # API routes
    ├── service.js          # Business logic
    ├── package.json        # Dependencies
    └── package-lock.json   # Dependency lock file
```

## Quick Start

### Option 1: Standalone Version (Recommended for quick testing)

1. Open `Client/standalone.html` directly in your web browser
2. Enter a Product ID and Price
3. Click "Generate QR Code"
4. Download the generated QR code if needed

### Option 2: Client-Server Setup

#### Prerequisites

- Node.js (v14 or higher)
- npm

#### Installation

1. Clone or download the project
2. Navigate to the Server directory:
   ```bash
   cd Server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

#### Running the Application

1. Start the server:
   ```bash
   node app.js
   ```
   Server will run on `http://localhost:3000`

2. Open `Client/index.html` in your web browser
3. Enter product details and generate QR codes

## Usage

1. **Product ID**: Enter a unique identifier for your product
2. **Price**: Enter the product price (numbers only)
3. **Generate**: Click the button to create your QR code
4. **Download**: Use the download link to save the QR code image

## Dependencies

### Server Dependencies
- `express`: Web framework for Node.js
- `body-parser`: Parse incoming request bodies
- `cors`: Enable Cross-Origin Resource Sharing
- `qrcode`: QR code generation library

### Client Dependencies
- Uses external QR code API service (qrserver.com)
- No additional dependencies required

## API Endpoints

The server provides RESTful endpoints for QR code generation (implementation in progress).

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [ISC License](LICENSE).

## Support

For issues or questions, please create an issue in the project repository.