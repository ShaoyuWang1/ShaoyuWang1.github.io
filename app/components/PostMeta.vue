<script setup lang="ts">
defineProps<{
  name: string
  category: Category | Category[]
  credits?: Credit[]
  authors?: { name: string; affiliation: string; page?: string }[];
  to?: string
  paper_link?: {source: string; link: string}
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <hgroup class="flex flex-col gap-1">
      <h2 v-if="to" class="text-2xl/none">
        <NuxtLink :to="to">{{ name }}</NuxtLink>
      </h2>
      <h1 v-else class="text-2xl/none">{{ name }}</h1>
      
    </hgroup>
    <dl v-if="category">
    <p>Key words: {{ formatCategory(category)}}</p>
   </dl>
    <dl v-if="credits">
      <PostAuthorItem v-for="credit in credits" :credit="credit" />
    </dl>
    
    <dl v-if="authors">
    <div v-for="author in authors" :key="author.name" class="mb-2">
      <dt class="font-bold">
        <template v-if="author.page">
          <!-- 如果 page 存在，将 name 渲染为超链接 -->
          <a :href="author.page" target="_blank" rel="noopener noreferrer">
            {{ author.name }}
          </a>
        </template>
        <template v-else>
          <!-- 如果 page 不存在，直接显示 name -->
          {{ author.name }}
        </template>
      </dt>
      <!-- 显示 affiliation -->
      <dd>{{ author.affiliation }}</dd>
    </div>
  </dl>
  </div>
</template>
