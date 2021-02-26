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
                about_txt_1 : 'J\'aime créer des projets et me documenter sur les nouvelles technologies pendant mon temps libre. Je suis curieux de voir comment les choses fonctionnent. Vous êtes libre de télécharger ou voir mon github !',
                about_txt_2 : 'Je recherce une entreprise pour m\'acceuillir durant mes 2 prochaines années de master',
        // Studies part
            studies_title: 'Mes études',
                studies_school_1: 'Lycée Pierre Paul Riquet',
                studies_school_2: 'Lycée Ozenne',
                studies_school_3: 'IPI',
                studies_school_txt_1_1: 'BAC STIDD',
                studies_school_txt_1_2: '(Sciences et Technologies de L\'industrie et du Développement Durable) Option. SIN (Système D\'information et Numérique)',
                studies_school_txt_1_3: 'Mention Assez Bien',
                studies_school_txt_2_1: 'BTS SIO (Services Informatiques aux Organisations)',
                studies_school_txt_2_2: 'Option. SLAM (Solutions Logicielles et Applications Métier)',
                studies_school_txt_2_3: '',
                studies_school_txt_3_1: 'Titre Certifié Concepteur Developpeur D\'Applications Numeriques.',
                studies_school_txt_3_2: 'RNCP Niveau 6',
        // Work part
            work_title: 'Mes projets',
            work_techno_title: 'Technologies Utilisées',
            // TESSI Batch
                batch_description: 'Dans ce projet l\'objectif était de faire du rétro-enguneering de NSDK à du PL/SQL.\r' +
                    'La partie que j\'ai développé était le tronc commun qui permettrait de vérifier pour n\'import quelle fonction, les entrées,' +
                    ' les sorties ainsi que la concordance des données au sein de la base et de ces appels',
            // DG Ventilation Analysis
                ventilation_description: 'La ventilation analytique sur deux axes (Marque / Métier) prenant trop de temps à saisir, il fallait trouver un moyen d\'automatiser la génération d\'écritures.' +
                    'A partir d\'un fichier Excel en CSV, j\'ai mis en place des procédures stockées SQL ainsi qu\'un applicatif en C# d\'analyse des informations pour générer un fichier d\'implémentation' +
                    ' des ventilations analytiques dans le logiciel (CEGID Business Place)',
            // ANHOD Hypotheca
                hypotheca_description: 'Mettre en place un nouveau design et du dynamisme sur un ancien site web, tel était le but de cette mission.' +
                    'En utilisant une nouvelle architecture ainsi q\'un nouveau langage de programmation (VueJS), j\'ai atteint cet objectif.' +
                    'J\'ai également mis à jour le back-end en l\'optimisant et en mettant à disposition des clients de nouvelles fonctionnalités.' +
                    'Ce travail a rendu le site plus moderne, plus dynamique et l\'expérience utilisateur est conforme au standard du moment en terme d\'interface' ,
            // ANHOD Télé-Règlement
                tele_description: 'Le projet partant du même objectif que hypotheca, j\'ai donc pensé à un nouveau design ainsi que de nouvelles fonctionnalités pour pour le site de recouvrement.' +
                    'J\'ai donc travaillé sur la partie Front & Back du site',
            // PERSONNAL PortFolio
                portfolio_description: 'Suite à mon expérience dans l’entreprise Anhod, j’ai décidé de changer entièrement le langage de programmation,' +
                    ' le design et le contenue de mon Portfolio (ancienne fait avec Mobirise) pour le rendre plus dynamique, responsive et moderne.',
            // ANHOD App
                app_description: 'Pour le moment le projet est encore en phase de conception/rélfexion nous cherchons quelles solutions pouvons-nous mettre en place pour nos clients.',
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
                studies_school_1: 'Pierre Paul Riquet High School',
                studies_school_2: 'Ozenne High School',
                studies_school_3: 'IPI',
                studies_school_txt_1_1: 'High School Diploma STISD',
                studies_school_txt_1_2: '(Science and Technology of Industry and Sustainable Development) Option. IDS (Information and Digital System)',
                studies_school_txt_1_3: 'Pretty Good awarded. CEC 4',
                studies_school_txt_2_1: 'Advanced Technician\'s Certificate ISO (IT Services to Organizations)',
                studies_school_txt_2_2: 'Option. SSBA (Software Solutions and Business Applications)',
                studies_school_txt_2_3: 'CEC 5',
                studies_school_txt_3_1: 'Bachelor\'s degree Designer Developer Of Digital Applications.',
                studies_school_txt_3_2: 'CEC 6',
        // Work part
            work_title: 'My work',
            work_techno_title: 'Technologies Used',
            // TESSI Batch
                batch_description: 'In this project the objective was to retro-enguneering from NSDK to PL / SQL.' +
                    ' The part that I developed was the common core which would make it possible to check for any function, the inputs,' +
                    ' the outputs as well as the concordance of the data within the base and these calls',
            // DG Ventilation Analysis
                ventilation_description: 'The analytical breakdown on two axes (Brand / Business) taking too long to enter, I had to find a way to automate the generation of entries.' +
                    '\n' +
                    'From an Excel file in CSV, I set up SQL stored procedures and an application in C # for information analysis,' +
                    'to generate an implementation file for the analytical breakdowns in the software (CEGID Business Place)',
            // ANHOD Hypotheca
                hypotheca_description: 'Implementing a new design and dynamism on an old website, that was the goal of this mission. By using a new architecture as well as a new programming language (VueJS),' +
                    'I achieved this goal. \n' +
                    'I also updated the back end by optimizing it and making new features available to customers.' +
                    ' This work has made the site more modern, more dynamic and the user experience conforms to the current standard in terms of interface.',
            // ANHOD Télé-Règlement
                tele_description: 'Following my experience in the Anhod company,' +
                    ' I decided to completely change the programming language, the design and the content of my Portfolio (formerly done with Mobirise) to make it more dynamic, responsive and modern.',
            // PERSONNAL PortFolio
                portfolio_description: 'The project started from the same objective as hypotheca, ' +
                    'so I thought of a new design as well as new functionalities for the  recovery site, so I worked on the Front & Back part of the site',
            // ANHOD App
                app_description: 'For the moment the project is still in the design / reflection phase we are looking for what solutions can we put in place for our clients.',
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