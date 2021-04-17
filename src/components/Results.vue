<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }} (mounted)</p>
  <p class="rank">{{ rank }} (computed)</p>
</template>

<script>
export default {
  props: ['score'],
  data() {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 250) return (this.rank = 'Nunja Fingers')
    if (this.score < 400) return (this.rank = 'Rapid Reflexex')
    return (this.rank = 'Snail pace...')
  },
  computed: {
    computedRank() {
      if (this.score < 250) return 'Nunja Fingers'
      if (this.score < 400) return 'Rapid Reflexex'
      return 'Snail pace...'
    }
  }
}
</script>

<style>
.rank {
  font-size: 1.4rem;
  color: #0faf87;
  font-weight: bold;
}
</style>
