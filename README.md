# React Website Project

A modern, responsive React website built from scratch with Webpack, featuring a beautiful UI and modern development practices.

## 🚀 Features

- **Modern React 18** with hooks and functional components
- **Responsive Design** that works on all devices
- **Webpack 5** for bundling and development
- **Babel** for JavaScript transpilation
- **CSS Modules** for component styling
- **Hot Reload** for fast development
- **Production Ready** build configuration

## 📁 Project Structure

```
react-website/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── Features.js     # Features section
│   │   ├── Footer.js       # Footer component
│   │   └── *.css          # Component styles
│   ├── App.js             # Main App component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   └── index.css          # Base styles
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Webpack configuration
└── README.md             # This file
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production build will be created in the `dist/` folder

## 🎨 Components

### Header
- Responsive navigation with mobile menu
- Smooth hover effects
- Fixed positioning with backdrop blur

### Hero Section
- Eye-catching gradient background
- Animated floating card
- Call-to-action buttons
- Statistics display

### Features Section
- Grid layout with feature cards
- Hover animations
- Icon-based design
- Responsive grid

### Footer
- Multi-column layout
- Social links
- Legal information
- Responsive design

## 🎯 Available Scripts

- `npm start` - Start development server with hot reload
- `npm run dev` - Alternative development command
- `npm run build` - Create production build

## 🔧 Customization

### Adding New Components
1. Create a new component file in `src/components/`
2. Import and use it in `App.js`
3. Add corresponding CSS file for styling

### Styling
- Global styles: `src/index.css` and `src/App.css`
- Component styles: Individual CSS files in `src/components/`
- Uses modern CSS features like flexbox, grid, and CSS variables

### Configuration
- Webpack configuration: `webpack.config.js`
- Babel configuration: Built into webpack config
- Development server: Configured in webpack config

## 🌟 Technologies Used

- **React 18** - UI library
- **Webpack 5** - Module bundler
- **Babel** - JavaScript compiler
- **CSS3** - Modern styling
- **HTML5** - Semantic markup

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy Coding! 🎉**
