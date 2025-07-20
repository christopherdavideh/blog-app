export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christopher David Erazo Herrera",
    jobTitle: "Software Developer",
    description:
      "Software Developer especializado en React, Angular, Java SpringBoot, C# .NET y desarrollo móvil",
    url: "https://christopherdavideh.com",
    image: "https://christopherdavideh.com/og-image.jpg",
    sameAs: [
      "https://github.com/christopherdavideh",
      "https://www.linkedin.com/in/christopherdavideh/",
      "https://twitter.com/christopdavideh",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressCountry: "CO",
    },
    knowsAbout: [
      "React",
      "Angular",
      "Java SpringBoot",
      "C# .NET",
      "Flutter",
      "Xamarin",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "Organization",
      name: "Desarrollo de Software",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
