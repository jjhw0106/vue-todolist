<template>
  <header>
    <h1>{{ this.$store.state.headerMsg }}</h1>
  </header>
</template>

<script>
export default {
  
}
</script>

// scoped = 해당 태그 안에서만 적용, 컴포넌트 안에서만 유효하게 만듦
<style scoped>
  h1 {
    color: #2f3b52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>