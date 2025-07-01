<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li class="menu-item-has-children">
          <nuxt-link to="/creative-lab">創意實驗室</nuxt-link>
          <ul class="sub-menu">
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">Coding Training Camp</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>Web Camp</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>Backend Camp</span></nuxt-link>
                </li>
              </ul> -->
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">未來餐食</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>共餐活動</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>創意廚房workshop</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>Kitchen collab</span></nuxt-link>
                </li>
              </ul> -->
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">永續學堂</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>UN2.0</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>SDGs</span></nuxt-link>
                </li>
              </ul> -->
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">小村共育</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>Intro</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>Events</span></nuxt-link>
                </li>
              </ul> -->
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/nomad-community">遊牧社群</nuxt-link>
          <!-- <ul class="sub-menu">
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">Tainan Nomad Hub</nuxt-link>
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">數位遊牧簽證</nuxt-link>
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">Events</nuxt-link>
            </li>
          </ul> -->
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/programming-projects">數位專案</nuxt-link>
          <ul class="sub-menu">
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">技術類活動</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>GDG</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>各種松們</span></nuxt-link>
                </li>
              </ul> -->
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">數位轉型專案</nuxt-link>
              <!-- <ul class="sub-menu">
                <li>
                  <nuxt-link to="/"><span>公私協力</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>傳統產業</span></nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/"><span>其他產業</span></nuxt-link>
                </li>
              </ul> -->
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">合作夥伴</nuxt-link>
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/">空間介紹</nuxt-link>
          <ul class="sub-menu">
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">Co-working space</nuxt-link>
            </li>
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">共享廚房</nuxt-link>
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">親子友善</nuxt-link>
            </li>
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">其他</nuxt-link>
            </li>
          </ul>
        </li>

        <li class="menu-item-has-children">
          <nuxt-link to="/">Join Us</nuxt-link>
          <ul class="sub-menu">
            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">創作者招募</nuxt-link>
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">活動提案</nuxt-link>
            </li>

            <li class="mega--title menu-item-has-children">
              <nuxt-link to="/">聯絡我們</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MobileNavMenu",
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
  },
};
</script>

<style lang="scss">
.offcanvas-navigation {
  ul {
    li {
      &.menu-item-has-children {
        &.mega--title > {
          a {
            font-weight: 500;
          }
        }
        .sub-menu {
          height: 0;
          opacity: 0;
          transition: 0.3s;
          visibility: hidden;
        }
        &.active > {
          .sub-menu {
            height: 100%;
            opacity: 1;
            visibility: visible;
          }
        }
      }
      a {
        color: $white;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 0;
        display: block;
        &:hover {
          color: $color-20;
        }
      }
    }
  }

  ul {
    &.sub-menu {
      margin-left: 15px;
      transition: 0.4s;
      li {
        a {
          color: $white;
          font-weight: 400;
          &:hover {
            color: $theme-color;
          }
        }
        .sub-menu {
          li {
            a {
              font-size: 13px;
              padding: 5px 0;
            }
          }
        }
      }
    }
    li {
      &.menu-item-has-children {
        position: relative;
        display: block;
        a {
          display: inline-block;
        }

        &.active > {
          .menu-expand {
            background-color: rgba($white, 0.2);
            i {
              &:before {
                transform: rotate(0);
              }
            }
          }
        }

        .menu-expand {
          top: 5px;
          right: 0;
          width: 35px;
          height: 35px;
          cursor: pointer;
          line-height: 35px;
          position: absolute;
          text-align: center;
          background-color: rgba($white, 0.1);
          &:hover {
            background-color: rgba($white, 0.2);
          }

          i {
            display: block;
            border-bottom: 1px solid #ffffff;
            position: relative;
            width: 10px;
            text-align: center;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            &:before {
              width: 100%;
              content: "";
              border-bottom: 1px solid $white;
              display: block;
              position: absolute;
              top: 0;
              transform: rotate(90deg);
              transition: 0.4s;
            }
          }
        }
      }
    }
  }
}
.popup-mobile-menu .inner {
  max-width: 100%;
  width: 100%;
}
</style>
