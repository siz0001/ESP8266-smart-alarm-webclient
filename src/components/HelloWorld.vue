<template>
  <v-container fill-height>
    <v-card class="mx-auto" flat width="400">

      <v-card-text class="indigo--text text-center text-h2 font-italic font-weight-bold">
      
        <strong>  {{ distance.distance }}  </strong>
          <v-progress-linear
      color="deep-purple"
      :buffer-value="peak"
      :value="distance.distance"
      stream
    ></v-progress-linear>
      </v-card-text>
      
        <v-card  outlined height="200" class="d-flex mx-auto align-center">
          <v-scroll-x-transition>
          <v-img transtion="v-scroll-y-transition" v-if="isPlaying" max-width="100" src="@/assets/walking.svg" class="mx-auto"> </v-img>
          </v-scroll-x-transition>
        </v-card>        
      <!--
      <v-card>
        <v-card-text>
          데이터 업뎃이 안될경우 송신기 접속 아이피를 바꿔보세요.
          <v-select
            :items="items"
            v-model="selected"
            label="아이피 끝자리 선택"
            @change="changeIp(selected)"
          ></v-select>
        </v-card-text>
        
      </v-card>
      -->
      <v-card-actions>
          <v-btn @click="play" depressed color="purple" dark>
            <v-icon> mdi-speaker </v-icon>
            작동 테스트
          </v-btn>
          <v-spacer></v-spacer>
          <v-chip color="deep-purple" dark class="ma-2">
            기준거리 : {{this.peak}} cm
          </v-chip>          
          <v-btn v-if="peak<100" icon @click="peak=peak+10" depressed color="pink" class="pa-0">
            <v-icon large>mdi-arrow-up-bold-circle-outline</v-icon>            
          </v-btn>
          <v-btn v-else icon  depressed color="pink" class="pa-0">
            <v-icon large>mdi-arrow-up-bold-circle-outline</v-icon>            
          </v-btn>

          <v-btn  v-if="peak>0" icon @click="peak=peak-10" depressed color="pink" class="pa-0">
            <v-icon large>mdi-arrow-down-bold-circle-outline</v-icon>
            
          </v-btn>
          <v-btn  v-else icon depressed color="pink" class="pa-0">
            <v-icon large>mdi-arrow-down-bold-circle-outline</v-icon>
            
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { useSound } from "@vueuse/sound";
import trumpetSfx from "@/assets/3.mp3";

export default {
  data: () => ({
    intervalId: null,
    items: ["31", "32", "33", "34", "35", "36", "37", "38"],
    selected: null,
    peak:30
  }),
  async created() {
    await this.getDistance();
    this.onLoad();
  },
  computed: {
    ...mapState(["distance"]),
  },
  methods: {
    ...mapActions(["getDistance"]),
    ...mapMutations(["changeIp"]),
    onLoad() {
      this.intervalId = setInterval(() => {
        this.getDistance();
        if (this.distance.distance > this.peak) {
          if (!this.isPlaying) {
            this.play();
          }
        }
      }, 100);
    },
  },

  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  setup() {
    const { play, stop, isPlaying } = useSound(trumpetSfx);

    return {
      play,
      stop,
      isPlaying,
    };
  },
};
</script>
