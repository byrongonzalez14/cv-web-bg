import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Import certification provider logos
import udemyLogo from '../../assets/logos-certifications/udemy-logo.svg';
import credlyLogo from '../../assets/logos-certifications/certiprof-scrum-master-badge.png';
import efLogo from '../../assets/logos-certifications/ef-logo.svg';
import awsLogo from '../../assets/logos-certifications/aws-logo.svg';

// Import AWS certificate PDF
import awsCertificatePdf from '../../assets/certificacion-aws.pdf';

// Función para obtener el logo del proveedor
const getProviderLogo = (url: string): string | null => {
  if (url.includes('udemy')) return udemyLogo;
  if (url.includes('credly')) return credlyLogo;
  if (url.includes('efset')) return efLogo;
  if (url.includes('assets')) return awsLogo; // AWS certificates
  return null;
};

// Función para obtener la URL correcta del certificado
const getCertificateUrl = (url: string): string => {
  if (url.includes('certificacion-aws.pdf')) return awsCertificatePdf;
  return url;
};

export const EducationCertifications = () => {
  const { language, data } = useLanguage();

  const titles = {
    main: language === 'en' ? 'Education & Certifications' : 'Educación y Certificaciones',
    subtitle: language === 'en' 
      ? 'Continuous learning and professional development'
      : 'Aprendizaje continuo y desarrollo profesional',
    education: language === 'en' ? 'Academic Background' : 'Formación Académica',
    certifications: language === 'en' ? 'Professional Certifications' : 'Certificaciones Profesionales',
    viewCertificate: language === 'en' ? 'View Certificate' : 'Ver Certificado',
  };

  return (
    <section className="w-full bg-[#0d0d0d] px-8 md:px-[120px] py-20">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/20 mb-6">
            <GraduationCap className="w-5 h-5 text-[#d9ff6c]" />
            <span className="text-[#d9ff6c] text-sm font-medium [font-family:'Poppins',Helvetica]">
              {language === 'en' ? 'Learning Journey' : 'Camino de Aprendizaje'}
            </span>
          </div>
          
          {/*
          
          <h2 className="text-5xl md:text-6xl font-bold text-white [font-family:'Slackey',Helvetica] mb-4">
            {titles.main}
          </h2> 

          */}
          <p className="text-white/70 text-lg [font-family:'Poppins',Helvetica] max-w-2xl mx-auto">
            {titles.subtitle}
          </p>
        </div>

        {/* EDUCACIÓN FORMAL */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#d9ff6c]/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-[#d9ff6c]" />
            </div>
            <h3 className="text-3xl font-bold text-white [font-family:'Slackey',Helvetica]">
              {titles.education}
            </h3>
          </div>

          {/* Cards de Educación - Destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] rounded-3xl p-8 border-2 border-[#d9ff6c]/20 hover:border-[#d9ff6c]/50 transition-all duration-300 hover:transform hover:scale-[1.02] group relative overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d9ff6c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Badge de universidad */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/30 mb-4">
                    <GraduationCap className="w-4 h-4 text-[#d9ff6c]" />
                    <span className="text-[#d9ff6c] text-xs font-semibold [font-family:'Poppins',Helvetica]">
                      {language === 'en' ? 'University' : 'Universidad'}
                    </span>
                  </div>

                  {/* Título */}
                  <h4 className="text-2xl font-bold text-white mb-3 [font-family:'Poppins',Helvetica] leading-tight">
                    {edu.degree}
                  </h4>

                  {/* Institución */}
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#d9ff6c] mt-1 flex-shrink-0" />
                    <p className="text-white/80 text-sm [font-family:'Poppins',Helvetica]">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Período */}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm [font-family:'Poppins',Helvetica]">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICACIONES */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#d9ff6c]/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-[#d9ff6c]" />
            </div>
            <h3 className="text-3xl font-bold text-white [font-family:'Slackey',Helvetica]">
              {titles.certifications}
            </h3>
          </div>

          {/* Grid de Certificaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.certifications.map((cert, index) => (
              <a
                key={index}
                href={getCertificateUrl(cert.certificateUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#d9ff6c]/40 transition-all duration-300 hover:transform hover:scale-[1.03] group cursor-pointer"
              >
                {/* Logo del proveedor */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getProviderLogo(cert.certificateUrl) ? (
                      <img 
                        src={getProviderLogo(cert.certificateUrl)!} 
                        alt="Provider logo"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Award className="w-5 h-5 text-[#d9ff6c]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-sm leading-snug mb-2 [font-family:'Poppins',Helvetica] line-clamp-3">
                      {cert.name}
                    </h4>
                  </div>
                </div>

                {/* Link con icono */}
                <div className="flex items-center gap-2 text-[#d9ff6c] text-xs font-medium [font-family:'Poppins',Helvetica] group-hover:gap-3 transition-all">
                  <span>{titles.viewCertificate}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Contador de certificaciones */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-sm [font-family:'Poppins',Helvetica]">
              {data.certifications.length} {language === 'en' ? 'Professional Certifications' : 'Certificaciones Profesionales'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
