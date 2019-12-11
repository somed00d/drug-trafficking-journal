<template>
  <div id="container">
    <div class="uk-text-center">
      <h2>Tamaulipas</h2>
      <hr />
    </div>
    <div uk-grid id="mapbox" class="uk-flex-center uk-grid-divider">
      <div class="uk-width-3-4@m uk-flex-last map">
        <l-map
          style="width: 100%; height: 700px;"
          :zoom="zoom"
          :center="center"
        >
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        </l-map>
      </div>
      <div class="uk-width-1-4@m uk-flex-first">
        <p class="uk-text-lead uk-text-center timeline">Timeline</p>
      </div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "tam",
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      center: [23.74174, -99.14599],
      zoom: 8,
      url:
        "https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2hrZWZhbGFzIiwiYSI6ImNrNDB5dWNyZjAzM20zbW4wczgwbGN1NncifQ.sAfx5Vt0Toa35srnDb2sPQ",
      maxZoom: 18,
      attribution:
        '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    };
  },
  methods: {}
};
</script>

<style lang="sass">
#mapbox
  height: 700px
</style>
