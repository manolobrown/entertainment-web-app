<script setup>
import HeaderItem from "./HeaderItem.vue";
import LogoIcon from "./icons/IconLogo.vue";
import HomeIcon from "./icons/IconNavHome.vue";
import MovieIcon from "./icons/IconNavMovies.vue";
import TVIcon from "./icons/IconNavTVSeries.vue";
import BookMarkIcon from "./icons/IconNavBookmark.vue";
</script>

<template>
  <div class="header-wrap">
    <div class="header">
      <HeaderItem>
        <template #icon>
          <LogoIcon />
        </template>
        <template #heading>Logo</template>
      </HeaderItem>
      <nav>
        <HeaderItem>
          <template #icon>
            <router-link to="/">
              <HomeIcon />
            </router-link>
          </template>
          <template #heading>Home</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <router-link to="/movies">
              <MovieIcon />
            </router-link>
          </template>
          <template #heading>Movies</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <router-link to="/tv-series">
              <TVIcon />
            </router-link>
          </template>
          <template #heading>TV Series</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <router-link to="/bookmarked">
              <BookMarkIcon />
            </router-link>
          </template>
          <template #heading>Bookmarks</template>
        </HeaderItem>
      </nav>
      <div class="avatar">
        <img src="@/assets/thumbnails/image-avatar.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "@/assets/scss/util" as *;
.header,
nav {
  align-items: center;
  &,
  * {
    display: flex;
  }
}
.header {
  background-color: var(--semi-dark-blue);
  justify-content: space-between;
  padding: rem(16);
  margin-block-end: rem(24);
}
nav {
  column-gap: rem(24);
  path {
    transition: fill 150ms ease-in-out;
  }
  .router-link-active svg path {
    fill: var(--white);
  }
  svg {
    cursor: pointer;
    @media (hover: hover) {
      &:hover path {
        fill: var(--red);
      }
    }
  }
}
.avatar img {
  border-radius: 50%;
  border: 1px solid var(--white);
  max-height: rem(24);
}
@include breakpoint(medium) {
  .header {
    border-radius: rem(10);
    padding: rem(24);
  }
  .avatar img {
    max-height: rem(32);
  }
}
@include breakpoint(large) {
  .header,
  nav {
    flex-direction: column;
  }
  .header {
    height: 100vh;
    max-height: rem(960);
    justify-content: flex-start;
    row-gap: rem(75);
    padding: rem(35) rem(32);
    border-radius: rem(20);
  }
  nav {
    row-gap: rem(40);
  }
  .avatar {
    margin-top: auto;
  }
}
</style>
