<template>
  <v-app-bar flat absolute color="transparent" dark height="120px">
    <v-layout justify-center>
      <v-container>
        <v-layout>
          <div
            :class="{'display-1 font-weight-bold': $vuetify.breakpoint.smAndUp,'title font-weight-bold': $vuetify.breakpoint.smAndDown, }"
          >Oscar D.</div>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-right">
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#about',options )"
              text
            >{{ $t('about') }}</v-btn>
            <v-btn
                :x-small="$vuetify.breakpoint.smAndDown"
                @click="$vuetify.goTo('#studies',options )"
                text
            >{{ $t('studies') }}</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#portfolio',options )"
              text
            >{{ $t('work') }}</v-btn>
            <v-btn
              :x-small="$vuetify.breakpoint.smAndDown"
              @click="$vuetify.goTo('#contact',options )"
              text
            >Contact</v-btn>
              <v-menu
                  transition="slide-y-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      :x-small="$vuetify.breakpoint.smAndDown"
                      text
                      v-bind="attrs"
                      v-on="on"
                  >
                    <a v-if="$t('language') == 'EN'"><flag style="font-size: 100%" iso="gb" v-bind:squared=false /><a style="color: white"> English</a></a>
                    <a v-if="$t('language') == 'FR'"><flag style="font-size: 100%" iso="fr" v-bind:squared=false /><a style="color: white"> Français</a></a>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                      v-for="(item, i) in languages"
                      :key="i"
                  >
                    <v-list-item-title>
                      <a v-if="i == 0" @click="changeLocale('fr')"><flag style="font-size: 100%" iso="fr" v-bind:squared=false /> {{ item.title }}</a>
                      <a v-if="i == 1" @click="changeLocale('en')"><flag style="font-size: 100%" iso="gb" v-bind:squared=false /> {{ item.title }}</a>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-layout>
  </v-app-bar>
</template>

<script>
import i18n from "../plugins/i18";

export default {
  data() {
    return{
      languages: [
        { flag: 'fr', language: 'fr', title: 'Français' },
        { flag: 'en', language: 'en', title: 'English' }
      ],
      options: {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      },
    };
  },
  methods: {
    changeLocale(locale){
      i18n.locale = locale;
    }
  }
};
</script>

<style>
</style>