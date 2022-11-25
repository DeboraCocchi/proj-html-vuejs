<script>
export default {
  name:'AppBlog'
}
</script>

<template>
  <div class="dc-big-cont">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-8 custom-cont text-left">
          <h4>CULINARY COLLECTION</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officiis ducimus quis amet laudantium natus.</p>
        </div>
        <div class="col-4 text-right">
          <a href="#">learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;

.dc-big-cont{
  margin:50px auto;
  .custom-cont{
    width:30%;
    color:$primary-darkgrey;
    h4{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:bold;
  }}
  a{
      text-transform:uppercase;
      background-color: $primary-orange;
      color:white;
      padding:10px 20px;
      font-size:90%;
      }
}
  
  

  
</style>