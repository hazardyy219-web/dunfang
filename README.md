# Ningbo Dunfang Precision Machinery Co., Ltd. Official Website

This is a complete外贸独立站 project for Ningbo Dunfang Precision Machinery Co., Ltd. built with Node.js + Express + EJS + Tailwind CSS.

## Project Structure

```
├── app.js                 # Main entry file
├── package.json           # Project dependencies
├── routes/                # Route definitions
│   └── index.js           # Main route file
├── views/                 # EJS templates
│   ├── layout.ejs         # Main layout template
│   ├── index.ejs          # Home page
│   ├── about.ejs          # About us page
│   ├── products.ejs       # Products list page
│   ├── product-detail.ejs # Product detail page
│   ├── services.ejs       # Services page
│   ├── contact.ejs        # Contact page
│   ├── news.ejs           # News list page
│   ├── news-detail.ejs    # News detail page
│   └── 404.ejs            # 404 error page
└── public/                # Static files
    └── images/            # Image files
```

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. **Clone the repository** (or use the provided files)
   ```bash
   cd c:\Users\Administrator\Desktop\dun
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Access the website**
   Open your browser and go to `http://localhost:3000`

## Development

### Running in Development Mode
To run the server with nodemon for automatic restarting during development:

```bash
npm run dev
```

## How to Modify Content

### 1. Company Information
- **Home page**: Edit `views/index.ejs`
- **About us page**: Edit `views/about.ejs`
- **Contact information**: Edit `views/contact.ejs` and `views/layout.ejs` (footer section)

### 2. Products
- **Product list**: Edit `views/products.ejs`
- **Product details**: Edit `views/product-detail.ejs`
- To add new products, create a new product detail page and update the routes in `routes/index.js`

### 3. News
- **News list**: Edit `views/news.ejs`
- **News details**: Edit `views/news-detail.ejs`
- To add new news, create a new news detail page and update the routes in `routes/index.js`

### 4. Images
- Replace placeholder images in the views with your actual images
- Add your images to the `public/images/` directory
- Update image paths in the EJS files

### 5. SEO Settings
- Update meta tags in each EJS file
- Update page titles and descriptions

### 6. Styling
- Customize Tailwind CSS classes in the EJS files
- Add custom CSS in the `<style>` tag in `views/layout.ejs`

## Features

- **Responsive design**: Mobile-friendly layout that adapts to different screen sizes
- **SEO optimized**: Proper meta tags and page structure
- **Fast loading**: Image lazy loading and optimized code
- **Professional design**: Modern, clean interface suitable for B2B外贸 clients
- **Multi-language support**: Ready for English and Chinese (additional languages can be added)
- **Contact form**: Functional contact form for inquiries

## Technical Stack

- **Backend**: Node.js + Express
- **Template Engine**: EJS
- **Frontend**: HTML5 + CSS3 + JavaScript
- **Styling**: Tailwind CSS
- **Static Resources**: picsum.photos (placeholder images), YouTube (placeholder videos)

## Support

For any questions or issues, please contact:

- Email: info@dunfangprecision.com
- Phone: +86 574-8888-8888
- WhatsApp: +86 138-8888-8888
