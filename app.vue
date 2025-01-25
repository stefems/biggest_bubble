<script setup lang="ts">
const options = {
  method: 'POST',
  body: {
    inflate: true,
    currentSize: 0
  }
}

const { data } = await useFetch('/api/bubble', options)

console.log('initial options: ', options)

const inflateBubble = () => {
  options.body.inflate = true;
  $fetch('/api/bubble', options)
  console.log('inflate options: ', options)
  console.log('inflate data: ', data)
}
const popBubble = () => {
  options.body.inflate = false;
  $fetch('/api/bubble', options)
  console.log('pop options: ', options)
  console.log('inflate data: ', data)
}


</script>

<template>
  <div>
    <pre>{{ data }}</pre>
    <button @click="inflateBubble">Size: {{ data?.currentSize }}</button>
  </div>
  <div>
    <button @click="popBubble">POP!</button>
  </div>
</template>
