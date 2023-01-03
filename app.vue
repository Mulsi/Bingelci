<template>
  <div class="home">
    <h1>Welcome to your Nuxt + Sanity eCommerce</h1>
    <div class="pages">
      <div class="container">
        <div v-for="page in pages" class="post-item" :key="page._id">
          <h2>{{ page.name }}</h2>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import sanity from "./src/client";

export default defineNuxtComponent({
  async asyncData() {
    const query = `*[_type == "page"]`;
    const pages = await sanity.fetch(query);
    return { pages };
  },
});
</script>