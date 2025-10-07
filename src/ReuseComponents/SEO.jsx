import { Helmet } from "@dr.pogodin/react-helmet";

export default function SEO({ 
  title, 
  description, 
  image, 
  type = "website", 
  canonicalUrl 
}) {
  // Dynamically get URL or fallback to your domain if SSR
  const currentUrl = canonicalUrl || 
    (typeof window !== "undefined" 
      ? window.location.href 
      : "http://localhost:5173/");

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta 
        name="twitter:card" 
        content={image ? "summary_large_image" : "summary"} 
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:url" content={currentUrl} />
    </Helmet>
  );
}
