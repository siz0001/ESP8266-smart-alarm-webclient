<template>
  <v-app >
    <v-app-bar app flat>
      <v-img
        alt="Vuetify Name"
        contain
        max-width="100"
        src="@/assets/penthouselogo.png"
      />

      <v-app-bar-title class="indigo--text" > 
        <strong>Check Alarm
          </strong>  </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
