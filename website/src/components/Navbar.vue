<template>
  <section class="main-navbar-section">
    <div class="container">
      <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="vnbItemClicked">
        <!-- Custom Slot - Uncomment to use -->
        <!-- <template v-slot:custom-section>
            <div class="custom-section-content">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
        </template>-->
      </vue-navigation-bar>
    </div>
  </section>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("../assets/nrko-logo.png"),
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: require("../assets/collapse-menu-dark.png"),
        collapseButtonImageClose: require("../assets/times.png"),
        showBrandImageInMobilePopup: false,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsLeft: [
          {
            type: "link",
            text: "Home",
            path: "./"
          },
          {
            type: "link",
            text: "Maps",
            subMenuOptions: [
              {
                type: "link",
                text: "Tamaulipas",
                path: "./Tam"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Michoacán",
                path: "./mich"
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Drug Trafficking Map Archive",
                path: "./map-archive"
              }
            ]
          }
        ],
        menuOptionsRight: [
          {
            type: "button",
            text: "Blog",
            path: "./blog",
            class: "button-purple"
          },
          {
            type: "button",
            text: "Press Feed",
            path: "./press-feed"
          }
        ]
      }
    };
  },
  methods: {
    vnbItemClicked(text) {
      if (text === "Maps") {
        alert("'Maps' was selected.");
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../node_modules/vue-navigation-bar/dist/vue-navigation-bar.css";
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

// Custom Navbar Styles

.vnb__brand-image-wrapper__link__image {
  max-height: 75px;
}

// Link styles
.vnb__menu-options__option__link {
  font-size: 1.1rem;
}

.vnb__menu-options__option__button {
  font-size: 1.1rem;
  padding: 15px;
}

.vnb-button {
  background-color: #4b4b4b;
  &:hover {
    background: darken(#4b4b4b, 10%);
  }
}

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.code-text {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.main-content-section {
  padding: 45px 0;
  background: #eee;
  height: 95vh;
}

//
// vue-navigation-bar customization below
//

.main-navbar-section {
  background: #fff;
}

.vnb {
  font-family: "Montserrat", sans-serif;

  .button-purple {
    background: #7d5fff;

    &:hover {
      background: darken(#7d5fff, 10%);
    }
  }

  &__menu-options {
    &__option {
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }

  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }

  .custom-section-content {
    width: 100%;

    @media (min-width: 568px) {
      width: 50%;
    }

    @media (min-width: 992px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 20%;
    }
  }
}
</style>