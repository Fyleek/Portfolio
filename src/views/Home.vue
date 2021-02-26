<template>
  <div class="home">
    <v-img
      dark
      max-height="500px"
      src="https://www.vodjo.com/wp-content/uploads/2019/06/header-home.jpg"
    >
      <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
              >{{ $t('welcome') }}</div>
              <div
                :class="{'headline': $vuetify.breakpoint.smAndUp, 'subtitle-1': $vuetify.breakpoint.smAndDown}"
              >{{ $t('under_welcome') }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5">
      <!-- ABOUT -->
      <v-layout wrap>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="about">{{ $t('about_title') }}</div>
        </v-flex>
        <v-flex xs12 mt-5>
          <div class="body-1">{{ $t('about_txt_1') }}</div>
          <div
            class="body-1 mt-3"
          >{{ $t('about_txt_2') }}</div>
        </v-flex>
      </v-layout>
      <!-- MY STUDIES -->
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="studies">{{ $t('studies_title') }}</div>
        </v-flex>
        <v-timeline
            :align-top="alignTop"
            :reverse="reverse"
        >
          <v-timeline-item
              :icon="icon ? 'mdi-school' : ''"
              :icon-color=" iconColor ? 'light' : ''"
              color="blue"
          >
            <span slot="opposite">2017 - 2018</span>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{$t('studies_school_1')}}.<br>Saint-Orens</v-card-title>
              <v-card-text>
                {{$t('studies_school_txt_1_1')}}  <br>{{$t('studies_school_txt_1_2')}} <br>{{$t('studies_school_txt_1_3')}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
              :icon="icon ? 'mdi-certificate-outline' : ''"
              :icon-color=" iconColor ? 'light' : ''"
              color="blue"
          >
            <span slot="opposite">2018 - 2020</span>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{$t('studies_school_2')}}. Toulouse</v-card-title>
              <v-card-text>
                {{$t('studies_school_txt_2_1')}} <br>{{$t('studies_school_txt_2_2')}} <br>{{$t('studies_school_txt_2_3')}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
              :icon="icon ? 'mdi-book' : ''"
              :icon-color=" iconColor ? 'light' : ''"
              color="blue"
          >
            <span slot="opposite">2020 - 2021</span>
            <v-card class="elevation-2">
              <v-card-title class="headline">{{$t('studies_school_3')}}. Toulouse</v-card-title>
              <v-card-text>
                {{$t('studies_school_txt_3_1')}} <br>{{$t('studies_school_txt_3_2')}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-layout>
      <!-- MY WORK -->
      <v-layout wrap my-5>
        <v-flex xs12>
          <div class="display-1 font-weight-bold" id="portfolio">{{ $t('work_title') }}</div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <v-layout wrap>
            <template v-for="(app, i) in apps">
              <v-flex :key="i" xs12 sm6 md4>
                <p-portfolio-app :app="app" />
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
      <!-- CONTACT -->
      <v-layout wrap my-5>
        <v-flex xs12 mb-5>
          <div class="display-1 font-weight-bold" id="contact">{{ $t('contact_title') }}</div>
        </v-flex>
        <template v-for="(contact, i) in contactLinks">
          <v-flex sm6 md4 xs12 :key="i">
            <p-contact-info :contact="contact" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import PPortfolioApp from "@/components/PPortfolioApp.vue";
import PContactInfo from "@/components/PContactInfo.vue";

export default {
  name: "home",
  components: {
    PPortfolioApp,
    PContactInfo
  },
  data() {
    return {
      languages: [
        { flag: 'fr', language: 'fr'},
        { flag: 'gb', language: 'en'}
      ],
      alignTop: true,
      icon: true,
      iconColor: true,
      reverse: true,
      apps: [
        {
          name: "Tessi",
          price: "COMING SOON",
          logo: "tessi.png",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "https://www.tessi.eu/fr/"
            },
            /*{
              name: "link",
              icon: "mdi-github",
              link: "https://github.com/fyleek/"
            }*/
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "PL/SQL",
              icon: "mdi-database",
              link: ""
            },
            {
              name: "NSDK",
              icon: "mdi-arrow-all",
              link: ""
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        },
        {
          name: "DG Diffusion",
          price: "COMING SOON",
          logo: "dg.jpg",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "https://www.dgdiffusion.com/qui-sommes-nous/"
            },
            /*{
              name: "link",
              icon: "mdi-github",
              link: "https://github.com/fyleek/"
            }*/
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "C#",
              icon: "mdi-microsoft-visual-studio",
              link: ""
            },
            {
              name: "SQL",
              icon: "mdi-database",
              link: ""
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        },
        {
          name: "Hypotheca",
          price: "LIVE",
          logo: "anhod.png",
          platforms: [
            {
              name: "link",
              icon: "mdi-web",
              link: "https://hypotheca.fr"
            }
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: ""
            },
            {
              name: "NodeJS",
              icon: "mdi-nodejs",
              link: ""
            },
            {
              name: "PHP",
              icon: "mdi-language-php",
              link: ""
            },
            {
              name: "SQL",
              icon: "mdi-database",
              link: ""
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        },
        {
          name: "Télé-Règlement",
          price: "LIVE",
          logo: "anhod.png",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "https://telereglement.fr"
            }
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: ""
            },
            {
              name: "NodeJS",
              icon: "mdi-nodejs",
              link: ""
            },
            {
              name: "PHP",
              icon: "mdi-language-php",
              link: ""
            },
            {
              name: "SQL",
              icon: "mdi-database",
              link: ""
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        },
        {
          name: "PortFolio",
          price: "LIVE",
          logo: "od.jpg",
          platforms: [
            {
              name: "web",
              icon: "mdi-web",
              link: "https://www.oscar-decloquement.fr"
            }
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "VueJS",
              icon: "mdi-vuejs",
              link: ""
            },
            {
              name: "Vuetify",
              icon: "mdi-vuetify",
              link: ""
            },
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        },
        {
          name: "Anhod App",
          price: "COMING SOON",
          logo: "anhod.png",
          platforms: [
            {
              name: "web",
              icon: "mdi-apple",
              link: ""
            },
            {
              name: "web",
              icon: "mdi-android",
              link: ""
            }
          ],
          description:
            ".......................................................................................................................................................................",
          technologies: [
            {
              name: "XCode",
              icon: "mdi-apple-ios",
              link: ""
            },
            {
              name: "Android Studio",
              icon: "mdi-android-debug-bridge",
              link: "https://vuetifyjs.com/"
            }
          ],
          code: {
            name: "github",
            icon: "mdi-github",
            link: ""
          }
        }
      ],
      contactLinks: [
        {
          name: "Email",
          value: "odecloquement@gmail.com",
          link: "mailto:odecloquement@gmail.com",
          icon: "mdi-email"
        },
        {
          name: "LinkedIn",
          value: "Decloquement Oscar",
          link: "https://www.linkedin.com/in/oscar-decloquement/",
          icon: "mdi-linkedin"
        },
        {
          name: "Github",
          value: "Decloquement Oscar",
          link: "https://github.com/fyleek/",
          icon: "mdi-github"
        },
      ]
    };
  },
};
</script>
<style scoped>
button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>
