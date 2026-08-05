import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: t('contact.email'),
      value: 'OussamaTabzioui09@gmail.com',
      href: 'mailto:OussamaTabzioui09@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: t('contact.phone'),
      value: '+212 774 368 063',
      href: 'tel:+212774368063'
    },
    {
      icon: <MapPin size={20} />,
      label: t('contact.location'),
      value: 'Casablanca, Morocco',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/OussamaTabDev'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/OussamaTabDev'
    },
    {
      icon: <Globe size={20} />,
      label: 'Website',
      href: 'https://oussamatabdev.github.io/oussama-tabzioui/'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('contact.title')} subtitle={t('contact.cta')} />

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('contact.info')}
              </h3>

              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="card p-4 flex items-center gap-4 card-hover group block"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                    {item.icon}
                  </span>
                  <span>
                    <p className="text-text-muted text-sm">{item.label}</p>
                    <p className="text-text-primary font-medium">{item.value}</p>
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t('contact.connect')}
              </h3>

              <div className="card p-6 card-hover">
                <div className="flex gap-3 mb-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-card-border bg-card-bg text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all group"
                      title={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>

                <a href="mailto:OussamaTabzioui09@gmail.com" className="btn-primary w-full">
                  {t('contact.message')}
                </a>
              </div>

              <div className="card p-4 text-center">
                <p className="text-text-secondary-muted text-sm">{t('contact.funfact')}</p>
                <p className="text-xs text-text-secondary-muted mt-1">↑↑↓↓←→←→BA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
