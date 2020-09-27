<template>
  <div>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // let api = 'https://suggest.video.iqiyi.com/?platform=11&rltnum=1&key='
    let api = '/home/getData'
    this.$http.get(api).then(resp => {
      console.log(resp.data)
    })
  }
}
</script>

<style lang="scss" scoped></style>
