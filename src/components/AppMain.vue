<script>
import {store} from '../data/store.js';

export default {
  name:'AppMain',
  data(){
    return{
      store,
      currentIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = store.recipes[index].id;
    }
  }
}
</script>

<template>
<section class="pop-recipes">
  <div class="custom-cont text-center">
    <h4>POPULAR RECIPES</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officiis ducimus quis amet laudantium natus.

     
    </p>
  </div>
  <div class="dc-big-cont p-0">
    <div class="container-fluid p-0">
      <div class="row pop-recs-row p-0">
        <!-- main recipe in lettura (col sx) -->
        <div class="col-6 left">
            <div class="dc-recipe-head">
              <img :src="store.articlesImgPath+store.recipes[currentIndex].image" :alt="store.recipes[currentIndex].title">
            </div>
        
            <div class="dc-recipe-body">
              <h3>{{store.recipes[currentIndex].title}}</h3>
              <p>{{store.recipes[currentIndex].categories}}</p>
              <p>{{store.recipes[currentIndex].content}}</p>
              <a href="#" class="orange-btn">learn more</a>
            </div>
        </div>
        <!-- raccolta miniature (colonna dx) -->
        <div class="col-6 right dc-recs-miniatures d-flex flex-wrap">
          <div class="thumb-recipe clickable" v-for="(recipe, index) in store.recipes" :key="index"
          @click="changeIndex(index)">
            <img :src="store.articlesImgPath+recipe.image" :alt="recipe.title">
          
            <div class="cover-on-hover">
              <span><i class="fa-solid fa-link"></i></span>
              <h5>{{recipe.title}}</h5>
            </div>
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
    <div class="dc-icon clickable d-flex flex-column align-items-center" v-for="(icon, index) in store.icons" :key="index">
      <img :src="'/graphics/'+icon.path" :alt="icon.name">
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
          .dc-recipe-head{
            height:60%;
            width:100%;
            &>img{
            width:100%;
            height:100%;
            object-fit: cover;
          }
          }
        
        .dc-recipe-body{
          color:$primary-darkgrey;
          background-color: white;
          padding:2rem 1rem;
          height:40%;
          & > .orange-btn:hover{
            background-color: rgba($primary-orange, .75);
            color:$primary-darkgrey;
          }
          
          &>h3{
            font-size:1.5em;
          }
          &>p:first-of-type{
            line-height:.8rem;
            font-weight:300;
            &::after{
            content:'';
            width:98%;
            margin:1rem auto;
            border:1px solid rgba(227, 225, 225, 0.72);
            display:block;
            }}
          &>p:last-of-type{
            font-size:1rem;
            line-height:1.6rem;
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
        padding:0.5em 0.5em;
        position:relative;
        transition: all .3s ease-in-out;
        &:hover div.cover-on-hover{
          opacity:1;
          transition-delay: 0.1s;
        }
        &>img{
          height:100%;
          width:100%;
          object-fit:cover;
        }
        .cover-on-hover{
          height:calc(100% - 1em);
          width:calc(100% - 1em);
          top:0.5em;
          left:0.5em;
          padding:1em;
          font-size:70%;
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
      transition: all .3s ease-in-out;
      &:hover{
        transform: scale(105%);
      }
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