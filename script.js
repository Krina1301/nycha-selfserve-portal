const translations = {
  en: { eyebrow: 'NYCHA online services', heading: 'How can we help you today?', lede: 'Access your housing services, find information, and stay connected with NYCHA—all in one place.', getStarted: 'Get started', browseServices: 'Browse services', noticeTitle: 'Important information', noticeText: 'NYCHA will never ask you for your password by email or text. Keep your account information safe.', learnMore: 'Learn more about staying safe', findYourPath: 'Find your path', roleHeading: 'What best describes you?', roleSubheading: 'Choose an option to find the services and information you need.', tenant: 'I am a NYCHA resident', tenantDesc: 'Manage your tenancy, rent, repairs, and household information.', viewResident: 'View resident services →', applicant: 'I am a housing applicant', applicantDesc: 'Check your application, update your information, or learn about eligibility.', viewApplicant: 'View applicant services →', section8: 'I am a Section 8 participant', section8Desc: 'Access voucher services, recertification, and housing search resources.', viewSection8: 'View Section 8 services →', visitor: 'I am new to NYCHA', visitorDesc: 'Explore programs, find answers, and learn how to apply for housing.', learnAbout: 'Learn about NYCHA →', popularTasks: 'Popular tasks', actionsHeading: 'Get things done online', allServices: 'View all services →', login: 'Log in to MyNYCHA', loginDesc: 'Manage your account and services', checkStatus: 'Check application status', statusDesc: 'View your application information', requestRepair: 'Request a repair', repairDesc: 'Report and track a work order', payRent: 'Pay rent', rentDesc: 'Make a secure online payment', needHelp: 'Need help?', helpHeading: 'You are not alone.', helpText: 'Get support online or connect with a NYCHA representative. We are here to help you access the services you need.', callUs: 'Call NYCHA', visitHelp: 'Visit the Help Center', faq: 'Frequently asked questions and guides', footerResources: 'Resources', contact: 'Contact us', privacy: 'Privacy and security', accessibility: 'Accessibility', footerConnect: 'Connect with us', updates: 'Get NYCHA updates' },
  es: { eyebrow: 'Servicios en línea de NYCHA', heading: '¿Cómo podemos ayudarle hoy?', lede: 'Acceda a sus servicios de vivienda, encuentre información y manténgase conectado con NYCHA—todo en un solo lugar.', getStarted: 'Comenzar', browseServices: 'Ver servicios', noticeTitle: 'Información importante', noticeText: 'NYCHA nunca le pedirá su contraseña por correo electrónico o mensaje de texto. Mantenga segura la información de su cuenta.', learnMore: 'Más información sobre seguridad', findYourPath: 'Encuentre su camino', roleHeading: '¿Cuál opción le describe mejor?', roleSubheading: 'Elija una opción para encontrar los servicios y la información que necesita.', tenant: 'Soy residente de NYCHA', applicant: 'Soy solicitante de vivienda', section8: 'Participo en la Sección 8', visitor: 'Soy nuevo en NYCHA', popularTasks: 'Tareas populares', actionsHeading: 'Haga sus trámites en línea', needHelp: '¿Necesita ayuda?', helpHeading: 'No está solo.', callUs: 'Llame a NYCHA', visitHelp: 'Visite el Centro de ayuda', footerResources: 'Recursos', footerConnect: 'Conéctese con nosotros' }
};
const languageSelect = document.querySelector('#language-select');
const originalLanguage = document.documentElement.lang;
function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (dictionary[element.dataset.i18n]) element.textContent = dictionary[element.dataset.i18n];
  });
  if (language !== 'en') {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      if (!dictionary[element.dataset.i18n] && translations.en[element.dataset.i18n]) element.textContent = translations.en[element.dataset.i18n];
    });
  }
}
languageSelect.addEventListener('change', (event) => setLanguage(event.target.value));
document.querySelector('#contrast-toggle').addEventListener('click', (event) => {
  const enabled = document.body.classList.toggle('high-contrast');
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.textContent = enabled ? 'Standard contrast' : 'High contrast';
});
document.querySelector('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('#current-year').textContent = new Date().getFullYear();
