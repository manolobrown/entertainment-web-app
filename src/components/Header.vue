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
            <HomeIcon />
          </template>
          <template #heading>Home</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <MovieIcon />
          </template>
          <template #heading>Movies</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <TVIcon />
          </template>
          <template #heading>TV Series</template>
        </HeaderItem>

        <HeaderItem>
          <template #icon>
            <BookMarkIcon />
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
  display: flex;
  align-items: center;
}
.header {
  background-color: var(--semi-dark-blue);
  justify-content: space-between;
  padding: rem(18) rem(16);
  margin-block-end: rem(24);
}
nav {
  column-gap: rem(24);
  path {
    transition: fill 150ms ease-in-out;
  }
  svg {
    cursor: pointer;
    @media (hover: hover) {
      &:hover path {
        fill: var(--white);
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
  .header-wrap {
    padding-left: rem(18);
    padding-right: rem(18);
    padding-top: rem(18);
  }
  .header {
    border-radius: rem(10);
  }
  .avatar img {
    max-height: rem(32);
  }
}
</style>
