<template>
    <div>
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<script setup lang="ts">

const route = useRoute()
useHead({
    meta: [{ property: 'og:title', content: `EAZYCAR - ${route.meta.title}` }]
})

</script>