<script setup>
import HeaderItem from "./HeaderItem.vue";
import LogoIcon from "./icons/IconLogo.vue";
import HomeIcon from "./icons/IconNavHome.vue";
import MovieIcon from "./icons/IconNavMovies.vue";
import TVIcon from "./icons/IconNavTVSeries.vue";
import BookMarkIcon from "./icons/IconNavBookmark.vue";
</script>

<template>
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
</template>
