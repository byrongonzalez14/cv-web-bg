import { useState } from 'react';
import { MessageCircle, Send, User, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ContactCTA = () => {
  const { language, data } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const texts = {
    title: language === 'en' ? "Let's Work Together" : 'Trabajemos Juntos',
    subtitle: language === 'en' 
      ? "Have a project in mind? Let's discuss how I can help you achieve your goals."
      : '¿Tienes un proyecto en mente? Conversemos sobre cómo puedo ayudarte a alcanzar tus objetivos.',
    namePlaceholder: language === 'en' ? 'Your name' : 'Tu nombre',
    emailPlaceholder: language === 'en' ? 'Your email' : 'Tu correo',
    messagePlaceholder: language === 'en' 
      ? 'Tell me about your project...' 
      : 'Cuéntame sobre tu proyecto...',
    button: language === 'en' ? 'Send Message' : 'Enviar Mensaje',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    const whatsappMessage = `Hola! Soy ${name}%0A%0AEmail: ${email}%0A%0AMensaje: ${message}`;
    const phoneNumber = data.personalInfo.contact.phone.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Limpiar formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="w-full bg-[#0d0d0d] px-6 lg:px-[120px] py-20">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado izquierdo - Texto */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d9ff6c]/10 rounded-full border border-[#d9ff6c]/20">
              <MessageCircle className="w-5 h-5 text-[#d9ff6c]" />
              <span className="text-[#d9ff6c] text-sm font-medium [font-family:'Poppins',Helvetica]">
                {language === 'en' ? 'Get In Touch' : 'Contáctame'}
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white [font-family:'Slackey',Helvetica] leading-tight">
              {texts.title}
            </h2>
            
            <p className="text-white/70 text-lg leading-relaxed [font-family:'Poppins',Helvetica]">
              {texts.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-[#d9ff6c] [font-family:'Slackey',Helvetica]">
                  6+
                </p>
                <p className="text-white/60 text-sm [font-family:'Poppins',Helvetica]">
                  {language === 'en' ? 'Years Experience' : 'Años de Experiencia'}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-[#d9ff6c] [font-family:'Slackey',Helvetica]">
                  50+
                </p>
                <p className="text-white/60 text-sm [font-family:'Poppins',Helvetica]">
                  {language === 'en' ? 'Projects Completed' : 'Proyectos Completados'}
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="bg-[#1a1a1a] rounded-3xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Campo Nombre */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium [font-family:'Poppins',Helvetica] flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {texts.namePlaceholder}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder={texts.namePlaceholder}
                  className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d9ff6c]/50 transition-colors [font-family:'Poppins',Helvetica]"
                />
              </div>

              {/* Campo Email */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium [font-family:'Poppins',Helvetica] flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {texts.emailPlaceholder}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder={texts.emailPlaceholder}
                  className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d9ff6c]/50 transition-colors [font-family:'Poppins',Helvetica]"
                />
              </div>

              {/* Campo Mensaje */}
              <div className="space-y-2">
                <label className="text-white/80 text-sm font-medium [font-family:'Poppins',Helvetica] flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {language === 'en' ? 'Message' : 'Mensaje'}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder={texts.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#161616] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#d9ff6c]/50 transition-colors resize-none [font-family:'Poppins',Helvetica]"
                />
              </div>

              {/* Botón Submit */}
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#d9ff6c] hover:bg-[#c5e861] rounded-xl font-semibold text-[#161616] transition-all duration-300 flex items-center justify-center gap-2 group [font-family:'Poppins',Helvetica] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                {texts.button}
              </button>

              {/* Nota WhatsApp */}
              <p className="text-white/40 text-xs text-center [font-family:'Poppins',Helvetica]">
                {language === 'en' 
                  ? 'You will be redirected to WhatsApp to complete the conversation'
                  : 'Serás redirigido a WhatsApp para completar la conversación'}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
