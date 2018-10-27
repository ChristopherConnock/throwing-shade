<template>
  <a-sphere position="0 {{y}} -5" radius="1.25" color="#EF2D5E"></a-sphere>
</template>

<script>
export default {
    name: 'vue-box',
        props: {
        location: Number
        }
    }
}
</script>