import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': 'Hire Me',

    // Hero
    'hero.greeting': "Hi, I'm",
    'hero.name': 'Oussama Tabzioui',
    'hero.available': 'Available for new projects',
    'hero.subtitle': 'Software Developer · Desktop, Mobile & Backend',
    'hero.description': 'I design and ship commercial desktop apps, mobile/PWA products and AI-powered tools — from prototype to production.',
    'hero.projects': 'View Projects',
    'hero.cv': 'Download CV',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.title': 'About Me',
    'about.content': 'Independent software developer based in Casablanca, Morocco. I design and ship commercial products across the stack — Electron + React desktop suites (Maktabaty Pro, Clinic OS), mobile/PWA apps (NourHuda) and AI-integrated tools (Tracker). From the TemplateFlow prototype engine to offline-first, self-hosted software used in real environments, I focus on clean architecture, performance and practical impact.',
    'about.stat.years': 'Years of Experience',
    'about.stat.apps': 'Products Shipped',
    'about.stat.tech': 'Technologies',
    'about.stat.langs': 'Languages',

    // Skills
    'skills.title': 'Skills & Technologies',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks',
    'skills.ai': 'AI/ML & Data',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools & DevOps',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.view': 'View Details',
    'projects.github': 'GitHub',
    'projects.demo': 'Live Demo',
    'projects.all': 'View All Projects',

    // Projects page
    'projects.allPage.title': 'All Projects',
    'projects.allPage.subtitle': 'A collection of my products — from commercial desktop suites to open-source mobile and AI apps.',
    'projects.tech': 'Technologies Used',
    'projects.code': 'View Code',
    'projects.live': 'Live Demo',
    'projects.back': 'Back to Portfolio',
    'projects.filter.all': 'All',
    'projects.filter.commercial': 'Commercial',
    'projects.filter.opensource': 'Open Source',
    'projects.filter.prototype': 'Prototype',
    'projects.filter.completed': 'Completed',
    'projects.filter.inprogress': 'In Progress',

    // Project badges
    'projects.badge.commercial': 'Commercial',
    'projects.badge.opensource': 'Open Source',
    'projects.badge.prototype': 'Prototype',
    'projects.badge.completed': 'Completed',
    'projects.badge.inprogress': 'In Progress',

    // Project data
    'projects.maktabaty.title': 'Maktabaty Pro',
    'projects.maktabaty.description': 'Commercial library-management suite — Electron + React, runs on any computer.',
    'projects.maktabaty.long': 'A large, feature-rich commercial desktop suite for complete library (maktabaty) management, built with Electron and React and running on any computer (Windows, macOS, Linux). Ships with a custom templating language with logic (for/if constructs and dynamic fields), advanced PDF generation and tools, and document automation that cuts document turnaround time by up to 60%. Fully trilingual (Arabic/English/French) with RTL/LTR support and offline-first local storage for full data sovereignty.',
    'projects.clinic.title': 'Clinic OS',
    'projects.clinic.description': 'Commercial clinic-management app — Electron + React with self-hosted servers.',
    'projects.clinic.long': 'A new commercial clinic management application built on the same Electron + React stack as Maktabaty Pro. Covers patient records, appointment scheduling, consultations and reporting in one offline-capable desktop interface. Ships with self-hosted servers only, so sensitive medical data stays on the clinic\u2019s own infrastructure for maximum privacy and compliance.',
    'projects.templateflow.title': 'TemplateFlow',
    'projects.templateflow.description': 'Prototype document engine — the foundation of Maktabaty Pro and Clinic OS.',
    'projects.templateflow.long': 'Originally a prototype: a custom template engine for dynamic document generation — logical for/if constructs, dynamic fields, PDF generation and automation — designed as a reusable base layer. It became the foundation for several products built afterwards, including Maktabaty Pro and Clinic OS, all sharing the same Electron + React core with trilingual RTL/LTR interfaces and offline-first local storage.',
    'projects.nourhuda.title': 'NourHuda',
    'projects.nourhuda.description': 'Open-source Azan & Quran app (المصحف المحمدي) with tafsir — mobile & PWA.',
    'projects.nourhuda.long': 'An open-source mobile app and progressive web app (PWA) that combines azan (adhan) prayer times with the Quran in the Mushaf of Muhammad (المصحف المحمدي), including tafsir and full reading features. Runs natively on mobile and on any other device through the PWA, offline-capable for a complete prayer and reading experience. Open source and designed to be easily extended by the community.',
    'projects.tracker.title': 'Tracker',
    'projects.tracker.description': 'Open-source AI productivity app — Django, React & Tauri.',
    'projects.tracker.long': 'A full-stack productivity application with AI: built with Django, React and Tauri, integrating scikit-learn models for real-time productivity analytics and session tracking. Includes multi-window monitoring, a Chromium browser extension and a focus-analytics dashboard delivering personalized efficiency insights. Open source, and also available as a ready-to-use licensed product.',
    'projects.library.title': 'Library Manager',
    'projects.library.description': 'Django REST + React borrowing system with student and admin dashboards.',
    'projects.library.long': 'A complete library management system built with Django REST and React. Covers book catalog management, borrowing workflow, member portal and an admin dashboard with analytics. Modern responsive UI with Tailwind CSS, PostgreSQL backend and optimized REST endpoints (search latency reduced by 35%), plus JWT authentication and role-based access control.',
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.description': 'Pure PHP + MySQL e-commerce platform (internship @ GenerationNT).',
    'projects.ecommerce.long': 'A complete e-commerce solution built during my internship at GenerationNT with pure PHP and MySQL — shopping cart, product management, session handling and a comprehensive admin dashboard, with optimized queries and hardened business logic and security.',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.self.title': 'Software Developer — Self-Employed',
    'experience.self.period': 'Jul 2024 – Present',
    'experience.self.type': 'Independent',
    'experience.self.description': 'Designing and shipping commercial products end-to-end: Maktabaty Pro (library-management suite), Clinic OS (clinic management), NourHuda (mobile/PWA Quran & Azan) and Tracker (AI productivity). From the TemplateFlow prototype engine to offline-first, self-hosted desktop software deployed in real environments.',
    'experience.intern.title': 'Full-Stack Developer Intern',
    'experience.intern.period': 'Sep 2024 – Dec 2024',
    'experience.intern.type': 'Internship',
    'experience.intern.description': 'Built a complete e-commerce platform with pure PHP and MySQL — shopping cart, product management and admin dashboard. Optimized SQL queries and strengthened security for business logic and user sessions at GenerationNT, Meknès.',

    // Education
    'education.title': 'Education',
    'education.university.degree': 'Bachelor\u2019s — Mathematics & Computer Science (SMI)',
    'education.university.school': 'Moulay Ismail University, Meknès',
    'education.university.period': '2021 – 2025',
    'education.highschool.degree': 'Baccalauréat — Mathematical Sciences A',
    'education.highschool.school': 'Tariq High School, Khénifra',
    'education.highschool.period': '2021',
    'education.status.completed': 'Completed',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.connect': 'Let\u2019s Connect',
    'contact.cta': 'Working on a product, a website or a desktop app? Let\u2019s talk — I turn ideas into reliable software.',
    'contact.message': 'Send a Message',
    'contact.funfact': '💡 Fun fact: this portfolio has a Konami-code easter egg — try it!',

    // Footer
    'footer.text': 'Built with React & Tailwind.',
    'footer.back': 'Back to Top',

    // CV page
    'cv.download': 'Download as PDF',
    'cv.hint': 'In the print dialog, choose "Save as PDF" as the destination.',
  },
  fr: {
    // Navigation
    'nav.about': 'À Propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'nav.cta': 'Engagez-moi',

    // Hero
    'hero.greeting': 'Salut, je suis',
    'hero.name': 'Oussama Tabzioui',
    'hero.available': 'Disponible pour de nouveaux projets',
    'hero.subtitle': 'Développeur Logiciel · Desktop, Mobile & Backend',
    'hero.description': 'Je conçois et livre des applications desktop commerciales, des produits mobile/PWA et des outils alimentés par l\u2019IA — du prototype à la production.',
    'hero.projects': 'Voir les projets',
    'hero.cv': 'Télécharger le CV',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.scroll': 'Faites défiler pour explorer',

    // About
    'about.title': 'À Propos de Moi',
    'about.content': 'Développeur logiciel indépendant basé à Casablanca, au Maroc. Je conçois et livre des produits commerciaux sur toute la pile — suites desktop Electron + React (Maktabaty Pro, Clinic OS), applications mobile/PWA (NourHuda) et outils intégrant l\u2019IA (Tracker). Du moteur prototype TemplateFlow aux logiciels desktop hors ligne et auto-hébergés utilisés en environnement réel, je privilégie une architecture propre, la performance et un impact concret.',
    'about.stat.years': 'Années d\u2019expérience',
    'about.stat.apps': 'Produits livrés',
    'about.stat.tech': 'Technologies',
    'about.stat.langs': 'Langues',

    // Skills
    'skills.title': 'Compétences & Technologies',
    'skills.languages': 'Langages',
    'skills.frameworks': 'Frameworks',
    'skills.ai': 'IA/ML & Données',
    'skills.databases': 'Bases de données',
    'skills.tools': 'Outils & DevOps',

    // Projects
    'projects.title': 'Projets Phares',
    'projects.view': 'Voir les détails',
    'projects.github': 'GitHub',
    'projects.demo': 'Démo en direct',
    'projects.all': 'Voir tous les projets',

    // Projects page
    'projects.allPage.title': 'Tous les projets',
    'projects.allPage.subtitle': 'Une collection de mes produits — des suites desktop commerciales aux applications mobiles et IA open source.',
    'projects.tech': 'Technologies utilisées',
    'projects.code': 'Voir le code',
    'projects.live': 'Démo en direct',
    'projects.back': 'Retour au portfolio',
    'projects.filter.all': 'Tous',
    'projects.filter.commercial': 'Commerciaux',
    'projects.filter.opensource': 'Open Source',
    'projects.filter.prototype': 'Prototype',
    'projects.filter.completed': 'Terminés',
    'projects.filter.inprogress': 'En cours',

    // Project badges
    'projects.badge.commercial': 'Commercial',
    'projects.badge.opensource': 'Open Source',
    'projects.badge.prototype': 'Prototype',
    'projects.badge.completed': 'Terminé',
    'projects.badge.inprogress': 'En cours',

    // Project data
    'projects.maktabaty.title': 'Maktabaty Pro',
    'projects.maktabaty.description': 'Suite commerciale de gestion de bibliothèque — Electron + React, fonctionne sur tout ordinateur.',
    'projects.maktabaty.long': 'Une suite desktop commerciale complète pour la gestion des bibliothèques (maktabaty), construite avec Electron et React et fonctionnant sur tout ordinateur (Windows, macOS, Linux). Elle embarque un langage de templating personnalisé avec logique (instructions for/if et champs dynamiques), une génération avancée de PDF et outils, ainsi qu\u2019une automatisation réduisant jusqu\u2019à 60% du temps de traitement des documents. Entièrement trilingue (arabe/anglais/français) avec support RTL/LTR et stockage local hors ligne pour une souveraineté totale des données.',
    'projects.clinic.title': 'Clinic OS',
    'projects.clinic.description': 'Application commerciale de gestion de clinique — Electron + React avec serveurs auto-hébergés.',
    'projects.clinic.long': 'Une nouvelle application commerciale de gestion de clinique construite sur la même pile Electron + React que Maktabaty Pro. Couvre les dossiers patients, la planification des rendez-vous, les consultations et les rapports dans une interface desktop utilisable hors ligne. Livrée avec des serveurs exclusivement auto-hébergés, pour que les données médicales sensibles restent sur l\u2019infrastructure de la clinique, garantissant confidentialité et conformité maximales.',
    'projects.templateflow.title': 'TemplateFlow',
    'projects.templateflow.description': 'Moteur de documents prototype — la fondation de Maktabaty Pro et Clinic OS.',
    'projects.templateflow.long': 'À l\u2019origine un prototype : un moteur de templates personnalisé pour la génération dynamique de documents — instructions logiques for/if, champs dynamiques, génération PDF et automatisation — conçu comme une couche de base réutilisable. Devenu la fondation de plusieurs produits développés ensuite, dont Maktabaty Pro et Clinic OS, partageant le même socle Electron + React avec interfaces trilingues RTL/LTR et stockage local hors ligne.',
    'projects.nourhuda.title': 'NourHuda',
    'projects.nourhuda.description': 'Application Azan & Coran open source (المصحف المحمدي) avec tafsir — mobile & PWA.',
    'projects.nourhuda.long': 'Une application mobile et une progressive web app (PWA) open source qui combinent les horaires de prière (adhan) avec le Coran du Mushaf de Muhammad (المصحف المحمدي), incluant le tafsir et des fonctions de lecture complètes. Fonctionne nativement sur mobile et sur tout autre appareil via la PWA, utilisable hors ligne pour une expérience de prière et de lecture complète. Open source, conçue pour être facilement étendue par la communauté.',
    'projects.tracker.title': 'Tracker',
    'projects.tracker.description': 'Application de productivité IA open source — Django, React & Tauri.',
    'projects.tracker.long': 'Une application de productivité full-stack avec IA : construite avec Django, React et Tauri, intégrant des modèles scikit-learn pour l\u2019analyse de productivité en temps réel et le suivi de sessions. Comprend une surveillance multi-fenêtres, une extension Chromium et un tableau de bord d\u2019analyse de la concentration fournissant des informations d\u2019efficacité personnalisées. Open source, également disponible en tant que produit sous licence prêt à l\u2019emploi.',
    'projects.library.title': 'Gestionnaire de bibliothèque',
    'projects.library.description': 'Système d\u2019emprunt Django REST + React avec tableaux de bord étudiants et admin.',
    'projects.library.long': 'Un système complet de gestion de bibliothèque construit avec Django REST et React. Couvre la gestion du catalogue de livres, le workflow d\u2019emprunt, le portail membre et un tableau de bord admin avec analyses. Interface responsive moderne avec Tailwind CSS, backend PostgreSQL et endpoints REST optimisés (latence de recherche réduite de 35%), plus authentification JWT et contrôle d\u2019accès par rôles.',
    'projects.ecommerce.title': 'Plateforme E-Commerce',
    'projects.ecommerce.description': 'Plateforme e-commerce PHP pur + MySQL (stage @ GenerationNT).',
    'projects.ecommerce.long': 'Une solution e-commerce complète construite pendant mon stage chez GenerationNT avec PHP pur et MySQL — panier d\u2019achat, gestion des produits, gestion des sessions et tableau de bord administrateur complet, avec requêtes optimisées et logique métier et sécurité renforcées.',

    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.self.title': 'Développeur Logiciel — Indépendant',
    'experience.self.period': 'Juil 2024 – Présent',
    'experience.self.type': 'Indépendant',
    'experience.self.description': 'Conception et livraison de produits commerciaux de bout en bout : Maktabaty Pro (gestion de bibliothèque), Clinic OS (gestion de clinique), NourHuda (mobile/PWA Coran & Adhan) et Tracker (productivité IA). Du moteur prototype TemplateFlow aux logiciels desktop hors ligne et auto-hébergés déployés en environnement réel.',
    'experience.intern.title': 'Développeur Full-Stack (Stage)',
    'experience.intern.period': 'Sept 2024 – Déc 2024',
    'experience.intern.type': 'Stage',
    'experience.intern.description': 'Construction d\u2019une plateforme e-commerce complète en PHP pur et MySQL — panier, gestion des produits et tableau de bord admin. Optimisation des requêtes SQL et renforcement de la sécurité pour la logique métier et les sessions utilisateur chez GenerationNT, Meknès.',

    // Education
    'education.title': 'Formation',
    'education.university.degree': 'Licence — Mathématiques & Informatique (SMI)',
    'education.university.school': 'Université Moulay Ismail, Meknès',
    'education.university.period': '2021 – 2025',
    'education.highschool.degree': 'Baccalauréat — Sciences Mathématiques A',
    'education.highschool.school': 'Lycée Tariq, Khénifra',
    'education.highschool.period': '2021',
    'education.status.completed': 'Terminé',

    // Contact
    'contact.title': 'Restons en Contact',
    'contact.info': 'Coordonnées',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.connect': 'Connectons-nous',
    'contact.cta': 'Vous travaillez sur un produit, un site web ou une application desktop ? Parlons-en — je transforme les idées en logiciels fiables.',
    'contact.message': 'Envoyer un message',
    'contact.funfact': '💡 Le saviez-vous : ce portfolio cache un easter egg Konami — essayez-le !',

    // Footer
    'footer.text': 'Conçu avec React & Tailwind.',
    'footer.back': 'Retour en haut',

    // CV page
    'cv.download': 'Télécharger en PDF',
    'cv.hint': 'Dans la boîte de dialogue d’impression, choisissez « Enregistrer en PDF » comme destination.',
  },
  ar: {
    // Navigation
    'nav.about': 'نبذة',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.experience': 'الخبرة',
    'nav.contact': 'التواصل',
    'nav.cta': 'وظّفني',

    // Hero
    'hero.greeting': 'مرحبا، أنا',
    'hero.name': 'أسامة طبزيوي',
    'hero.available': 'متاح لمشاريع جديدة',
    'hero.subtitle': 'مطور برمجيات · سطح المكتب والجوال والخوادم',
    'hero.description': 'أصمم وأطلق تطبيقات سطح مكتب تجارية ومنتجات جوال/PWA وأدوات مدعومة بالذكاء الاصطناعي — من النموذج الأولي إلى الإنتاج.',
    'hero.projects': 'عرض المشاريع',
    'hero.cv': 'تحميل السيرة الذاتية',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.scroll': 'مرّر للاستكشاف',

    // About
    'about.title': 'نبذة عني',
    'about.content': 'مطور برمجيات مستقل من الدار البيضاء، المغرب. أصمم وأطلق منتجات تجارية عبر كامل التقنية — مجموعات سطح مكتب Electron + React (Maktabaty Pro، Clinic OS)، تطبيقات جوال/PWA (NourHuda)، وأدوات ذكاء اصطناعي (Tracker). من محرك TemplateFlow الأولي إلى برمجيات سطح مكتب تعمل دون اتصال ومستضافة ذاتياً تُستخدم في بيئات حقيقية، أركز على المعمارية النظيفة والأداء والتأثير العملي.',
    'about.stat.years': 'سنوات الخبرة',
    'about.stat.apps': 'منتجات أُطلقت',
    'about.stat.tech': 'تقنيات',
    'about.stat.langs': 'لغات',

    // Skills
    'skills.title': 'المهارات والتقنيات',
    'skills.languages': 'اللغات',
    'skills.frameworks': 'الأطر',
    'skills.ai': 'الذكاء الاصطناعي والبيانات',
    'skills.databases': 'قواعد البيانات',
    'skills.tools': 'الأدوات و DevOps',

    // Projects
    'projects.title': 'المشاريع المميزة',
    'projects.view': 'عرض التفاصيل',
    'projects.github': 'GitHub',
    'projects.demo': 'عرض مباشر',
    'projects.all': 'عرض كل المشاريع',

    // Projects page
    'projects.allPage.title': 'كل المشاريع',
    'projects.allPage.subtitle': 'مجموعة من منتجاتي — من مجموعات سطح المكتب التجارية إلى تطبيقات الجوال والذكاء الاصطناعي مفتوحة المصدر.',
    'projects.tech': 'التقنيات المستخدمة',
    'projects.code': 'عرض الكود',
    'projects.live': 'عرض مباشر',
    'projects.back': 'العودة إلى الملف',
    'projects.filter.all': 'الكل',
    'projects.filter.commercial': 'تجارية',
    'projects.filter.opensource': 'مفتوحة المصدر',
    'projects.filter.prototype': 'نموذج أولي',
    'projects.filter.completed': 'منجزة',
    'projects.filter.inprogress': 'قيد التطوير',

    // Project badges
    'projects.badge.commercial': 'تجارية',
    'projects.badge.opensource': 'مفتوحة المصدر',
    'projects.badge.prototype': 'نموذج أولي',
    'projects.badge.completed': 'منجز',
    'projects.badge.inprogress': 'قيد التطوير',

    // Project data
    'projects.maktabaty.title': 'Maktabaty Pro',
    'projects.maktabaty.description': 'مجموعة إدارة مكتبات تجارية — Electron + React، تعمل على أي جهاز.',
    'projects.maktabaty.long': 'مجموعة سطح مكتب تجارية شاملة لإدارة المكتبات (maktabaty)، مبنية بـ Electron و React وتعمل على أي جهاز (ويندوز، ماك، لينكس). تشمل لغة قوالب مخصصة بالمنطق (عبارات for/if وحقول ديناميكية)، وتوليداً متقدماً للـ PDF وأدواته، وأتمتة للمستندات تقلّل زمن الإنجاز حتى 60%. ثلاثية اللغات بالكامل (عربية/إنجليزية/فرنسية) مع دعم RTL/LTR وتخزين محلي دون اتصال لسيادة كاملة على البيانات.',
    'projects.clinic.title': 'Clinic OS',
    'projects.clinic.description': 'تطبيق إدارة عيادات تجاري — Electron + React مع خوادم مستضافة ذاتياً.',
    'projects.clinic.long': 'تطبيق تجاري جديد لإدارة العيادات مبني على نفس تقنية Electron + React المستخدمة في Maktabaty Pro. يغطي سجلات المرضى وجدولة المواعيد والاستشارات والتقارير في واجهة سطح مكتب تعمل دون اتصال. يُسلَّم بخوادم مستضافة ذاتياً فقط، لتبقى البيانات الطبية الحساسة على بنية العيادة الخاصة لضمان أقصى درجات الخصوصية والامتثال.',
    'projects.templateflow.title': 'TemplateFlow',
    'projects.templateflow.description': 'محرك مستندات نموذج أولي — أساس Maktabaty Pro و Clinic OS.',
    'projects.templateflow.long': 'في الأصل نموذج أولي: محرك قوالب مخصص لتوليد المستندات ديناميكياً — بنيات منطقية for/if، حقول ديناميكية، توليد PDF وأتمتة — صُمم كطبقة أساس قابلة لإعادة الاستخدام. أصبح الأساس لعدة منتجات طُوّرت لاحقاً، منها Maktabaty Pro و Clinic OS، جميعها تشترك في نواة Electron + React مع واجهات ثلاثية اللغات RTL/LTR وتخزين محلي دون اتصال.',
    'projects.nourhuda.title': 'NourHuda',
    'projects.nourhuda.description': 'تطبيق أذان وقرآن مفتوح المصدر (المصحف المحمدي) مع التفسير — جوال و PWA.',
    'projects.nourhuda.long': 'تطبيق جوال وتطبيق ويب تقدمي (PWA) مفتوح المصدر يجمع مواقيت الصلاة (الأذان) مع القرآن في المصحف المحمدي، بما في ذلك التفسير ووظائف قراءة كاملة. يعمل أصلياً على الجوال وعلى أي جهاز آخر عبر الـ PWA، مع إمكانية الاستخدام دون اتصال لتجربة صلاة وقراءة كاملة. مفتوح المصدر ومصمم ليكون قابلاً للتوسعة بسهولة من المجتمع.',
    'projects.tracker.title': 'Tracker',
    'projects.tracker.description': 'تطبيق إنتاجية بالذكاء الاصطناعي مفتوح المصدر — Django و React و Tauri.',
    'projects.tracker.long': 'تطبيق إنتاجية كامل التقنية مدعوم بالذكاء الاصطناعي: مبني بـ Django و React و Tauri، ويدمج نماذج scikit-learn لتحليل الإنتاجية في الوقت الفعلي وتتبع الجلسات. يشمل مراقبة متعددة النوافذ وإضافة متصفح Chromium ولوحة تحكم لتحليل التركيز توفر رؤى كفاءة مخصصة. مفتوح المصدر، ومتاح أيضاً كمنتج مرخّص جاهز للاستخدام.',
    'projects.library.title': 'مدير المكتبة',
    'projects.library.description': 'نظام استعارة Django REST + React مع لوحات طلاب وإدارة.',
    'projects.library.long': 'نظام إدارة مكتبات شامل مبني بـ Django REST و React. يغطي إدارة فهرس الكتب وسير عمل الاستعارة وبوابة الأعضاء ولوحة إدارة مع تحليلات. واجهة حديثة متجاوبة بـ Tailwind CSS، خادم PostgreSQL ونقاط REST محسّنة (تقليل زمن البحث 35%)، مع مصادقة JWT وتحكم بالوصول قائم على الأدوار.',
    'projects.ecommerce.title': 'منصة التجارة الإلكترونية',
    'projects.ecommerce.description': 'منصة تجارة إلكترونية بـ PHP خام + MySQL (تدريب @ GenerationNT).',
    'projects.ecommerce.long': 'حل تجارة إلكترونية كامل بُني خلال تدريبي في GenerationNT بـ PHP خام و MySQL — عربة تسوق وإدارة منتجات وإدارة جلسات ولوحة إدارة شاملة، مع استعلامات محسّنة ومنطق أعمال وأمان معزّز.',

    // Experience
    'experience.title': 'الخبرة المهنية',
    'experience.self.title': 'مطور برمجيات — مستقل',
    'experience.self.period': 'يوليو 2024 – الآن',
    'experience.self.type': 'مستقل',
    'experience.self.description': 'تصميم وإطلاق منتجات تجارية من البداية إلى النهاية: Maktabaty Pro (إدارة المكتبات)، Clinic OS (إدارة العيادات)، NourHuda (جوال/PWA قرآن وأذان) و Tracker (إنتاجية بالذكاء الاصطناعي). من محرك TemplateFlow الأولي إلى برمجيات سطح مكتب تعمل دون اتصال ومستضافة ذاتياً في بيئات حقيقية.',
    'experience.intern.title': 'متدرب مطور متكامل',
    'experience.intern.period': 'سبتمبر 2024 – ديسمبر 2024',
    'experience.intern.type': 'تدريب',
    'experience.intern.description': 'بناء منصة تجارة إلكترونية كاملة بـ PHP خام و MySQL — عربة التسوق وإدارة المنتجات ولوحة الإدارة. تحسين استعلامات SQL وتقوية الأمان لمنطق الأعمال وجلسات المستخدم لدى GenerationNT، مكناس.',

    // Education
    'education.title': 'التعليم',
    'education.university.degree': 'إجازة — الرياضيات والمعلوماتية (SMI)',
    'education.university.school': 'جامعة مولاي إسماعيل، مكناس',
    'education.university.period': '2021 – 2025',
    'education.highschool.degree': 'بكالوريا — علوم رياضية أ',
    'education.highschool.school': 'ثانوية طارق، خنيفرة',
    'education.highschool.period': '2021',
    'education.status.completed': 'مكتمل',

    // Contact
    'contact.title': 'تواصل معي',
    'contact.info': 'معلومات التواصل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.location': 'الموقع',
    'contact.connect': 'لنتواصل',
    'contact.cta': 'تعمل على منتج أو موقع أو تطبيق سطح مكتب؟ لنتحدث — أحوّل الأفكار إلى برمجيات موثوقة.',
    'contact.message': 'إرسال رسالة',
    'contact.funfact': '💡 معلومة: هذا الملف يحتوي على بيضة كونامي — جرّبها!',

    // Footer
    'footer.text': 'بُني بـ React و Tailwind.',
    'footer.back': 'العودة إلى الأعلى',

    // CV page
    'cv.download': 'تحميل PDF',
    'cv.hint': 'في نافذة الطباعة، اختر "حفظ كـ PDF" كوجهة.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && ['en', 'fr', 'ar'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
