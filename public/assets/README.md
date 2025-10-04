# Assets Folder Structure

This folder contains all static assets used in the React website.

## 📁 Folder Structure

```
src/assets/
├── images/          # Image files (PNG, JPG, JPEG, GIF, SVG)
│   └── LOGO.jpeg    # Main logo file
├── fonts/           # Font files (TTF, WOFF, WOFF2)
├── icons/           # Icon files (SVG, PNG)
└── videos/          # Video files (MP4, WebM, OGG)
```

## 🖼️ Images

### LOGO.jpeg
- **Location**: `src/assets/images/LOGO.jpeg`
- **Usage**: Main logo displayed in the header
- **Import**: `import logoImage from '../assets/images/LOGO.jpeg';`
- **Styling**: 40x40px with rounded corners

## 📝 Usage Examples

### Importing Images
```javascript
import logoImage from '../assets/images/LOGO.jpeg';
import heroImage from '../assets/images/hero-bg.jpg';
```

### Using in JSX
```jsx
<img src={logoImage} alt="Company Logo" className="logo-image" />
```

### Using as Background
```jsx
<div 
  style={{ backgroundImage: `url(${heroImage})` }}
  className="hero-section"
>
  Content here
</div>
```

## 🎨 Best Practices

1. **File Naming**: Use lowercase with hyphens (e.g., `hero-image.jpg`)
2. **Optimization**: Compress images before adding to the project
3. **Formats**: 
   - Use JPEG for photos
   - Use PNG for graphics with transparency
   - Use SVG for scalable icons
4. **Sizing**: Optimize images for web (consider responsive sizes)

## 🔧 Webpack Configuration

Images are handled by webpack's `asset/resource` loader:
- Automatically optimizes and bundles images
- Generates unique filenames for caching
- Supports: PNG, SVG, JPG, JPEG, GIF

## 📱 Responsive Images

For responsive images, consider using:
- Multiple sizes for different screen densities
- WebP format for better compression
- Lazy loading for performance
