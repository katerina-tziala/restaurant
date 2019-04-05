"use strict";
const appParams = {
  mapBox: {
    leaflet_tile_layer_link: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}",
    leaflet_params: {
        mapboxToken: "pk.eyJ1Ijoia2F0ZXJpbmF0emlhbGEiLCJhIjoiY2pwenNqdHF3MGU5MDQ4bzRudGdlanZ6eCJ9.kGbzX08otPecWpIvfKU3ZA",
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    },
    cssFile: {
      type: "text/css",
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css",
      integrity: "sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==",
      crossorigin: " "
    },
    jsFile: {
      type: "application/javascript",
      src: "https://unpkg.com/leaflet@1.3.1/dist/leafle.js",
      integrity: "sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==",
      crossorigin: " ",
      charset: "utf-8"
    }
  },
  cssClasses: {
    hidden: "hidden",
    spinClass: "spin",
    displayMap: "displaymap",
    disableMapButton: "disabled",
    displayNotification: "display_notification"
  },
  noResultsFetchingMessages: {
     restaurants: `<span>No results matching your criteria!</span><span>Please try again!</span><i>Hint: Search with a different combination of neighborhoods and cuisines!</i>`,
     reviews: `<span>No reviews yet!</span>`
  },
  notifications: {
    clear: { title: "", message: "", type:""},
    map_failure: {
      title: "Ooops!",
      message: "Map wasn't loaded successfully! Please try again.",
      type: "map_failure"
    }
  }

};