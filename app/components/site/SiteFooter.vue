<script setup lang="ts">
const socialMediaItems = [

  {
    name: 'ins',
    title: 'Instagram',
    url: 'https://www.instagram.com/windsky_wang',
  },
  {
    name: 'wb',
    title: 'Weibo',
    url: 'https://m.weibo.cn/u/6476136828',
  },
  {name: 'blog',
  title: "Personal Blog",
  url: "https://www.vvindsky.xyz"
  }
]

const showQrCode = ref(false)
const toggleQrCode = () => {
  showQrCode.value = !showQrCode.value
}
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (showQrCode.value && !(e.target as HTMLElement).closest('#QrCode, #QrCodeToggler')) {
      showQrCode.value = false
    }
  })
  document.addEventListener('scroll', (e) => {
    if (showQrCode.value) {
      showQrCode.value = false
    }
  })
})
</script>

<template>
  <footer
    class="relative z-10 pb-4 pt-6 sm:absolute sm:bottom-0 lg:py-8 sm:[@media(min-height:480px)]:fixed"
  >
    <div class="transition-opacity" :class="{ 'opacity-0': showQrCode }">
      <h2 class="mb-2 text-3xl">contact</h2>
      <SiteFooterAddress />
    </div>
    <SiteFooterQrCode id="QrCode" :show="showQrCode" />
    <ul class="flex gap-2">
      <li v-for="{ name, title, url } in socialMediaItems">
        <NuxtLink
          :to="url"
          :title="title"
          target="_blank"
          data-umami-event="Social Media"
          :data-umami-event-content="`Social Media: ${title}`"
        >
          {{ name }}
        </NuxtLink>
      </li>
      <li>
        <!-- <button
          id="QrCodeToggler"
          title="WeChat"
          :aria-expanded="showQrCode"
          @click="toggleQrCode"
          data-umami-event="Social Media"
          data-umami-event-content="Social Media: WeChat"
        >
          wx
        </button> -->
      </li>
    </ul>
  </footer>
</template>
