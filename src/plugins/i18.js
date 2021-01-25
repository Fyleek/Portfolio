import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'fr': {
        //Language
            language: 'FR',
        // Nav Bar
            about: 'à propos',
            studies: 'études',
            work: 'mes travaux',
        // Main part
            welcome: 'Bienvenue sur ma page.',
            under_welcome: 'J\'ai fait quelques projets.',
        // About part
            about_title: 'Plus sur moi',
                about_txt_1 : 'J\'aime crée des projets pendant mon temps libre et me documenter sur les nouvelles technologies quand j\'ai du temps libre. Je suis curieux de voir comment les choses fonctionnent. Vous êtes libre de télécharger ou voir mon github !',
                about_txt_2 : 'à la recherce d\'une entreprise pour m\'acceuillir durant mes 2 prochaines années de master',
        // Studies part
            studies_title: 'Mes études',
                studies_school_1: '....................................................................................................',
                studies_school_2: '....................................................................................................',
                studies_school_3: '....................................................................................................',
                studies_school_txt_1: '....................................................................................................',
                studies_school_txt_2: '....................................................................................................',
                studies_school_txt_3: '....................................................................................................',
        // Work part
            work_title: 'Mes projets',
            work_techno_title: 'Technologies Utilisées',
            // TESSI Batch
                batch_description: 'Ce projet avait pour but de faire du rétro engineering pour passer du langage NSDK à du PL/SQL.\n' +
                    'Il est la base qui va permettre de faire toutes les vérifications au sein de la base de données avant l’exécution des algorithmes des autres développeurs.\n',
            // DG Ventilation Analysis
                ventilation_name : 'Ventilation',
                ventilation_description: 'La problématique de ce projet était d’éviter la saisie manuelle de centaines de lignes et de calculs à la main.' +
                    ' Pour cela les information présente dans un fichier csv (Excel)' +
                    ' était convertie et mise en relation aux valeurs de la base de données pour pouvoir spécifier pour chaque personne,' +
                    ' chaque catégorie de produits et chaque catégorie de travail quel montant en fonction des heures cela avait-il couté, pour aider la comptabilité.',
            // ANHOD Hypotheca
                hypotheca_description: 'Le site se faisant vieux et n’étant pas dynamique, il a fallu mettre en place une nouvelle architecture,' +
                    ' utiliser un langage de programmation plus moderne et maintenu pour rendre l’expérience utilisateur meilleur ainsi' +
                    ' que de mettre à jour le back-end pour optimiser les requêtes et la base de données.',
            // ANHOD Télé-Règlement
                tele_description: 'Comme pour le projet Hypotheca, le site n’étant plus d’actualité en therme de langage, d’optimisation et de design,' +
                    ' la partie front et back furent donc entièrement refaite tout en y ajoutant des fonctionnalités.',
            // PERSONNAL PortFolio
                portfolio_description: 'Suite à mon expérience dans l’entreprise Anhod, j’ai décidé de changer entièrement le langage de programmation,' +
                    ' le design et le contenue de mon Portfolio (ancienne fait avec Mobirise) pour le rendre plus dynamique, responsive et moderne.',
            // ANHOD App
                app_description: '....................................................................................................',
        // Contact part
            contact_title: 'Vous pouvez me contacter via ...',
    },
    'en': {
        //Language
            language: 'EN',
        // Nav Bar
            about: 'About',
            studies: 'Studies',
            work: 'Work',
        // Main part
            welcome: 'Welcome to my page.',
            under_welcome: 'I make some project.',
        // About part
            about_title: 'More about myself',
                about_txt_2 : 'Looking for a company to welcome me during these 2 years of master.',
        about_txt_1 : 'I enjoy building projects in my free time and learn about new technologies when I have time. I\'m curious to see how things work. You are free to download or see my github !',
        // Studies part
            studies_title: 'My studies',
                studies_school_1: '....................................................................................................',
                studies_school_2: '....................................................................................................',
                studies_school_3: '....................................................................................................',
                studies_school_txt_1: '....................................................................................................',
                studies_school_txt_2: '....................................................................................................',
                studies_school_txt_3: '....................................................................................................',
        // Work part
            work_title: 'My work',
            work_techno_title: 'Technologies Used',
            // TESSI Batch
                batch_description: 'The goal of this project was to reverse engineer to move from NSDK language to PL / SQL.\n' +
                    'It is the basis that will allow all the checks to be made within the database before executing the algorithms of other developers.',
            // DG Ventilation Analysis
                ventilation_name : 'Ventilation',
                ventilation_description: 'The problem with this project was to avoid the manual entry of hundreds of lines and calculations by hand.' +
                    ' For this the information present in a csv file (Excel) was converted and linked to the values of the database to be able to specify for each person,' +
                    ' each category of products and each category of work what amount according to the hours that had- it cost, to help accounting.',
            // ANHOD Hypotheca
                hypotheca_description: 'The site getting old and not being dynamic, it was necessary to set up a new architecture,' +
                    ' to use a more modern and maintained programming language to make the user experience better as well as to update the back-end to optimize queries and the database.',
            // ANHOD Télé-Règlement
                tele_description: '\n' +
                    'As for the Hypotheca project, the site is no longer up-to-date in terms of language, optimization and design,' +
                    ' the front and back part were therefore completely redone while adding features.',
            // PERSONNAL PortFolio
                portfolio_description: 'Following my experience in the Anhod company, I decided to completely change the programming language,' +
                    ' the design and the content of my Portfolio (formerly done with Mobirise) to make it more dynamic, responsive and modern.',
            // ANHOD App
                app_description: '....................................................................................................',
        // Contact part
        contact_title: 'You can contact me through...',
    }
};

const i18n = new VueI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;