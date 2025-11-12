import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// Import logos
import efLogo from '../../assets/logos-certifications/ef-logo.svg';
import awsLogo from '../../assets/logos-certifications/aws-logo.svg';
import udemyLogo from '../../assets/logos-certifications/udemy-logo.svg';
import scrumMasterBadge from '../../assets/logos-certifications/certiprof-scrum-master-badge.png';
import scrumFoundationBadge from '../../assets/logos-certifications/certiprof-scrum-foundation-badge.png';

const getIssuerLogo = (name: string): string => {
  if (name.includes('EF')) return efLogo;
  if (name.includes('AWS')) return awsLogo;
  if (name.includes('Udemy')) return udemyLogo;
  if (name.includes('Scrum Master')) return scrumMasterBadge;
  if (name.includes('Scrum Foundation')) return scrumFoundationBadge;
  return efLogo; // fallback
};

export const CertificationsGrid = () => {
  const { data } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform data to match component structure
  const certifications = data.certifications.map((cert, index) => ({
    id: index + 1,
    title: cert.name,
    issuer: cert.name,
    logo: getIssuerLogo(cert.name),
    delay: index * 100,
    certificateUrl: cert.certificateUrl
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full min-h-screen py-20 px-8 md:px-[120px] bg-[#161616]"
    >
      {/* Título */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Certifications
        </h2>
        <div className="w-32 h-1 bg-[#d9ff6c] mx-auto"></div>
      </div>

      {/* Grid de certificaciones */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`
              relative group
              bg-[#1a1a1a]
              rounded-2xl p-6
              border border-white/10
              hover:border-[#d9ff6c]/30
              transition-all duration-300
              hover:shadow-lg hover:shadow-[#d9ff6c]/10
              ${isVisible ? 'animate-bounce-in' : 'opacity-0 scale-95'}
            `}
            style={{
              animationDelay: isVisible ? `${cert.delay}ms` : '0ms',
            }}
          >
            <div className="flex items-start gap-4">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2 overflow-hidden">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Título */}
                <h3 className="text-white font-semibold text-lg mb-3 leading-tight">
                  {cert.title}
                </h3>

                {/* View Certificate Link */}
                <a 
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#d9ff6c] hover:text-[#c5e861] font-medium transition-colors duration-200 text-base group/link"
                >
                  View Certificate
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contador de certificaciones */}
      <div className="text-center mt-16">
        <div className="inline-block bg-[#1e1e1e] backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
          <p className="text-white text-lg">
            <span className="text-[#d9ff6c] font-bold text-3xl">{certifications.length}</span>
            {' '}Professional Certifications
          </p>
        </div>
      </div>
    </section>
  );
};
