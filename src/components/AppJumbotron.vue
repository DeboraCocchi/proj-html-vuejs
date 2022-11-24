<script>
export default {
  name:'AppJumbotron'
}
</script>

<template>
  <div class="dc-bg-jumbo-slider container-fluid mt-5">
    <div class="first-art article">
      <div class="jumbo-article-preview dc-small-cont">
        <span>TODAY'S PICK</span>
        <h2>Food Corner: Top Japanese Restaurants for Sushi</h2>
        <h5>March 25, 2019</h5>
      </div>
    </div>
  
  </div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables.scss' as *;
  .dc-bg-jumbo-slider{
    .article{
    height:76vh;
    width:100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top:22vh;
    &.first-art{
      background-image: url('../assets/jumbotron/single-post-img3.jpg');
    }
    .jumbo-article-preview{
      background-color: white;
      border-radius:10px;
      padding:20px 80px;
      text-align:center;
      position:relative;
      h2{
        font-size:2.8rem;
        font-weight:400;
        margin-top:1.5rem;
      }
      span{
        background-color:$primary-orange;
        color:white;
        font-weight:600;
        text-align:center;
        padding:8px 16px;
        border-radius:8px;
        position:absolute;
        top:-20px;
        left: 50%;
        transform: translateX(-50%);
      }
      h5{
        margin-top:1.5rem;
        color:$primary-lightgrey;
      }
    }
  }
  }
</style>