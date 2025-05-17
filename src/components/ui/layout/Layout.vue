<script setup>

</script>

<template>
  <div class="flex flex-col size-full">
    <slot name="header"/>
    <div class="flex flex-col h-full flex-1 gap-2">
      <slot />
    </div>
  </div>
</template>
