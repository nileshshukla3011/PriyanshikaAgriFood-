export const siteConfig = {
  name: 'Priyanshika Agri Foods',
  description: 'Premium Agricultural Products for a Sustainable Future',
  url: 'https://priyanshikaagrifoods.com',
  ogImage: '/assets/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/priyanshikaagri',
    facebook: 'https://facebook.com/priyanshikaagrifoods',
    instagram: 'https://instagram.com/priyanshikaagrifoods'
  }
};

export function generateMetadata({ params }) {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: ['agriculture', 'organic', 'sustainable', 'farming', 'food', 'products'],
    authors: [{ name: 'Priyanshika Agri Foods' }],
    creator: 'Priyanshika Agri Foods',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@priyanshikaagri'
    },
    robots: {
      index: true,
      follow: true
    }
  };
}