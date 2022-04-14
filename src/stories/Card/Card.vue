<template>
  <v-card class="rounded-lg d-flex justify-space-between pl-3 card-container-wrapper">
    <v-card class="card-content-text pb-2 rounded-0 no-shadow">
      <v-card-title class="text-h4 font-weight-bold px-0" v-text="display.title"></v-card-title>
      <v-card-text class="rounded-sm px-2 align-center py-1 flex w-fit-content"
        :style="{ color: highlightTextColor, backgroundColor: highlightBlurColor }">
        {{ display.timeFomatter(new Date(data.begin_at)) }} - {{ display.timeFomatter(new Date(data.end_at)) }}
      </v-card-text>
      <div class="card-content-img-mb">
        <v-img :src="data.cover"></v-img>
      </div>
      <v-card-text class="font-weight-bold px-0 mt-2 black--text" v-text="display.content"></v-card-text>
      <v-card class="ic-group rounded-0 no-shadow">
        <v-card-text class="d-flex px-0 py-1">
          <v-icon :color="highlightBgColor">mdi-map-marker</v-icon> <span class="ml-2">{{
            data._embedded.address.zip
          }}
            {{ data._embedded.address.city }}</span>
        </v-card-text>
        <v-card-text class="d-flex px-0 py-1">
          <v-icon :color="highlightBgColor">mdi-video-box</v-icon> <span class="ml-2">{{ display.webinarText }}</span>
        </v-card-text>
      </v-card>


      <v-chip class="white--text web-link mt-2" :style="{ backgroundColor: highlightBgColor }">
        <a :href="data.web_url" target="_blank" rel="noopener noreferrer" class="white--text text-decoration-none">{{ display.webText }}</a>
      </v-chip>
    </v-card>

    <v-card class="card-content-img rounded-0 no-shadow">
      <v-img :src="data.cover"></v-img>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'custom-card',
  props: {
    highlightTextColor: {
      type: String,
      default: "#9e2ab3",
      required: false
    },
    highlightBgColor: {
      type: String,
      default: "#9e2ab3",
      required: false
    },
    highlightBlurColor: {
      type: String,
      default: "#ebc8ef",
      required: false
    },
    display: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
    }
  }
};
</script>

<style scoped>
.card-content-text {
  width: 45%;
  padding-right: 0.5rem
}

.card-content-img {
  width: 55%
}

.w-fit-content {
  width: fit-content
}
.card-container-wrapper{
  max-width: 1000px;
}
.no-shadow{
  box-shadow: none !important;
}
@media screen and (max-width: 959px) {
  .card-container-wrapper {
    flex-direction: column;
  }

  .card-content-text {
    width: 100%
  }

  .card-content-img {
    width: 100%;
    display: none
  }

  .card-content-img-mb {
    display: block;
    margin-top: 8px
  }

  .web-link {
    width: 100%;
    display: flex;
    justify-content: center
  }

  .ic-group {
    display: flex
  }
}

@media screen and (min-width: 960px) {
  .card-container-wrapper {
    flex-direction: row;
  }

  .card-content-img-mb {
    display: none;
  }
}
</style>