<script>
import {store} from '../data/store.js';

export default {
  name:'AppMain',
  data(){
    return{
      store,
      currentIndex:0
    }
  }
}
</script>

<template>
<section class="pop-recipes">
  <div class="custom-cont text-center">
    <h4>POPULAR RECIPES</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officiis ducimus quis amet laudantium natus.</p>
  </div>
  <div class="dc-big-cont p-0">
    <div class="container-fluid p-0">
      <div class="row p-0">
        <!-- main recipe in lettura (col sx) -->
        <div class="col-6 left">
            <img :src="store.articlesImgPath+store.recipes[0].image" :alt="store.recipes[0].title">
            <div class="dc-recipe-body">
              <h3>{{store.recipes[0].title}}</h3>
              <p>{{store.recipes[0].categories}}</p>
              <p>{{store.recipes[0].content}}</p>
              <a href="#">learn more</a>
            </div>
        </div>
        <!-- raccolta miniature (colonna dx) -->
        <div class="col-6 right dc-recs-miniatures d-flex flex-wrap">
          <div class="thumb-recipe" v-for="(recipe, index) in store.recipes" :key="index">
            <img :src="store.articlesImgPath+recipe.image" :alt="recipe.title">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="culinary-coll">
  <div class="custom-cont text-center">
    <h4>CULINARY COLLECTION</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officiis ducimus quis amet laudantium natus.</p>
  </div>
  <div class="dc-big-cont p-0 icons d-flex flex-wrap justify-content-between mb-4">
    <div class="dc-icon d-flex flex-column align-items-center" v-for="(icon, index) in store.icons" :key="index">
      <!-- <img :src="'../assets/graphics/'+icon.path" :alt="icon.name"> -->
      <img src="../assets/graphics/drinks-recipes.png" :alt="icon.name">
      <span>{{icon.name}}</span>
    </div>
  </div>
</section>
</template>


<style lang="scss" scoped>
  @use '../styles/partials/variables.scss' as *;

  .custom-cont{
    width:30%;
    margin:50px auto;
    color:$primary-darkgrey;
  }

  section.pop-recipes{
    & h4{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:bold;
    }
    & .col-6.left{
        background-color: white;
        margin:0.5em 0 0.5em;
        padding:0;
        height:100%;
        &>img{
          width:100%;
          height:70%;
          object-fit: cover;
        }
        .dc-recipe-body{
          color:$primary-darkgrey;
          background-color: white;
          padding:2rem 1rem;
          
          &>h3{
            font-size:1.5em;
          }
          &>p:first-of-type{
            line-height:1rem;
            font-weight:300;
            &::after{
            content:'';
            width:98%;
            margin:1rem auto;
            border:1px solid rgba(227, 225, 225, 0.72);
            display:block;
            }}
          &>p:last-of-type{
            font-size:1.1rem;
            line-height:2rem;
            font-weight:300;
            margin-bottom:1.8rem;
          }
          &>a{
            color:white;
            text-transform:uppercase;
            background-color: $primary-orange;
            padding:10px 20px;
            font-size:90%;
          }
      }
      }
    & .col-6.right{
      justify-content: end;
      padding-left:1em;
      .thumb-recipe{
        width:50%;
        height:calc(100% / 4);
        padding:0.5em 1em;
        &>img{
          height:100%;
          width:100%;
          object-fit:cover;
        }
      }
      }
  }
  
  section.culinary-coll{
    & h4{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:bold;
    }
    & .dc-icon{
    background-color: white;
    width:calc(100% / 4 - 30px);
    padding:5px 15px 8px;
    margin-bottom:15px;
      &>span{
      text-transform: uppercase;
      font-size:90%;
      }
      &>img{
        width:50%;
        display:block;
        height:auto;
      }
      & h4{
      font-family: "Catamaran", Arial, Helvetica, sans-serif;
      font-weight:bold;
      }
    }
  }
  
</style>