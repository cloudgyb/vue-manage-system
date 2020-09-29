<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card></el-card>
      </el-col>
    </el-row>
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
