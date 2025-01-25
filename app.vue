<script setup lang="ts">
const { options } = {
  method: 'POST',
  body: {
    test: 1,
  }
}

const { data } = await useFetch('/api/bubble', options)

</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
