<script setup lang="ts">
const { resolve } = useRouter()
const path = (id: string) => {
  for (const section of ['works', 'typefaces', 'dash']) {
    const { isValidPost } = useQuery(section, id)
    if (isValidPost) {
      return `${resolve(section).path}/${id}`
    }
  }
  return ''
}

const posts = useCarouselPosts()
const postIndex = ref(0)
useIntervalFn(() => {
  postIndex.value = (postIndex.value + 1) % posts.length
}, 6000)
</script>

<template>
  <div class="relative min-h-screen bg-black text-gray-200 flex items-center justify-center">
    <ClientOnly>
      <Transition>
        <div
          class="absolute top-0 flex flex-col  py-4 lg:py-8"
        >
          <!-- 名字 -->
          <h1 class="text-4xl font-bold mb-4">Shaoyu Wang</h1>
          <!-- 个人简介 -->
          <p class="text-lg max-w-3xl leading-7">
            A passionate researcher and data engineer with a background in
            <span class="font-semibold text-gray-100">computer science</span> and
            <span class="font-semibold text-gray-100">operations management</span>.
            I specialize in building heuristic algorithms in solving relevance problem in
<span class="font-semibold italic text-gray-100">Operations Management</span> and
<span class="font-semibold italic text-gray-100">Revenue Management</span>.
          </p>

          <!-- 兴趣与特长 -->
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">About Me</h2>
            <ul class="space-y-2">

                <li>🎓 Currently Ph.D. Candidate at <span class="font-semibold">CUHK(SZ)</span>.</li>
                <li>💻 Passionate about approximation algorithms. I'm currently interested in the application of LLM in OM </li>
                <li>🏀 Basketball enthusiast, playing center.</li>
                <li>📚 Avid reader and tech explorer.</li>
                <li>🌍 Open to collaborations and learning from diverse perspectives.</li>
            </ul>
          </div>

          <!-- 联系方式 -->
          <div class="mt-8">
            <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p class="text-lg">
              Feel free to connect with me:
              <NuxtLink  to="shaoyuwang@link.cuhk.edu.cn" class="text-blue-400 underline">shaoyuwang@link.cuhk.edu.cn</NuxtLink>
            </p>
          </div>
        </div>
      </Transition>
      <template #fallback>
        <p class="text-center text-gray-400">Loading content…</p>
      </template>
    </ClientOnly>
  </div>
</template>


<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-[2s];
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

:deep(img) {
  @apply min-h-[max(50vh,200px)] object-cover sm:h-full;
}
</style>
