<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1 slide--megamenu">
        <nuxt-link to="/creative-lab">
          <span>創意實驗室</span>
        </nuxt-link>
      </li>

      <li class="lavel-1 slide--megamenu">
        <nuxt-link to="/">
          <span>遊牧社群</span>
        </nuxt-link>
      </li>

      <li class="lavel-1 slide--megamenu">
        <nuxt-link to="/">
          <span>數位專案</span>
        </nuxt-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <nuxt-link to="/">
          <span>聯絡我們</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.mega__list {
  display: flex;
  li {
    flex-basis: 25%;
  }
}
</style>
