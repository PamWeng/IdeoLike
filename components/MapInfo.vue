<template>
  <div
    class="bg_image--34 ptb--130 ptb-md--80 ptb-sm--80"
    :style="{
      backgroundImage: `url(${useAssetUrl('/img/goodIdea/IMG_5939.jpg')})`,
    }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 col-md-12 col-12">
          <div class="on-page-call-content">
            <div class="call-content text-center text-sm-start">
              <h2 class="heading heading-h2 text-white">Find Us</h2>
            </div>
            <div class="call-btn mt--60 mt_md--40 mt_sm--40">
              <nuxt-link
                to="/contact-us-modern"
                class="brook-btn bk-btn-white text-theme btn-sd-size btn-rounded"
                >Contact now</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-12 mt_md--40 mt_sm--40">
          <div class="onepage-contact-inner bg_color--1">
            <div class="page-address-inner">
              <!-- Start Single Address -->
              <div class="address-content">
                <h5 class="heading heading-h5 font-20">Visit our studio at</h5>
                <div class="address mt--10">
                  <p class="bk_pra font-16 line-height-1-87">
                    2005 Stokes Isle Apt. 896, <br />
                    Vacaville 10010, USA
                  </p>
                </div>
              </div>

              <!-- Start Single Address -->
              <div class="address-content bk-hover mt--50 mt_lg--20">
                <h5 class="heading heading-h5 font-20">Message us</h5>
                <div class="address mt--10">
                  <p class="bk_pra font-16 line-height-1-87">
                    <a class="color-dark" href="mailto:info@yourdomain.com"
                      >info@yourdomain.com</a
                    >
                  </p>
                  <p class="bk_pra font-16 line-height-1-87">
                    <a class="color-dark" href="tel:(+68)120034509"
                      >(+68) 120034509</a
                    >
                  </p>
                </div>
              </div>

              <!-- Start Single Address -->
              <div class="address-content mt--50 mt_lg--20">
                <div class="social-share social--transparent">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a href="https://dribbble.com/" target="_blank">
                    <i class="fab fa-dribbble"></i>
                  </a>
                  <a href="https://www.pinterest.com/" target="_blank">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="googlemap">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss"></style>
