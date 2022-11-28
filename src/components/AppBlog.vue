<script>
import {store} from '../data/store.js'
export default {
  name:'AppBlog',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
<section class="farm-to-table">
  <div class="dc-big-cont">
    <div class="container-fluid p-0">
      <!-- farm to table -->
      <div class="row justify-content-between">
        <div class="col-8 p-3 custom-cont text-left">
          <h4>FARM TO TABLE</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur officiis ducimus quis amet laudantium natus.</p>
        </div>
        <div class="col-3 offset-1">
          <a href="#" class="orange-btn">read our blog <i class="fa-solid fa-book-open-reader"></i></a>
        </div>
      </div>

      
       <div class="row p-0">
         <!-- colonna a sx con articoli -->
        <div class="col-8 articles">
              <div class="main-article">
                <img :src="store.articlesImgPath+store.articles[0].image" :alt="store.articles[0].title">
                <div class="dc-art-body">
                  <h3>{{store.articles[0].title}}</h3>
                  <p>By {{store.articles[0].author}} | {{store.articles[0].date}}</p>
                  <p>{{store.articles[0].content}}</p>
                  <div class="links d-flex justify-content-between">
                    <a href="#" class="orangy">learn more ></a>
                    <span><i class="fa-regular fa-comments"></i> 0</span>
                  </div>
                  
                </div>
              </div>
              <div class="thumb-blog mt-4">
                <div class="container-fluid">
                  <div class="row p-0 justify-content-between">
                    <div class="thumb-art mb-4 text-center" v-for="(art, index) in store.articles.slice(1,7)" :key="index">
                      <div class="thumb-head">
                        <img :src="store.articlesImgPath+art.image" :alt="art.title">
                         <div class="cover-on-hover">
                          <span><i class="fa-solid fa-link"></i></span>
                          <h5>{{art.title}}</h5>
                        </div>
                      </div>
                      
                      <div class="art-body d-flex flex-column justify-content-center p-3">
                        <h4>{{art.title}}</h4>
                        <p>By {{art.author}} | {{art.date}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="read-more orangy">
                LOAD MORE POSTS
              </div>
        </div>
        <!-- colonna a dx miscellanea -->
        <aside class="col-4 d-flex flex-column justify-content-between miscellanea">
            <div class="d-flex align-items-center justify-content-center ad-bg clickable">
              <img src="../assets/graphics/ad-bg.jpg" alt="ad-bg">
              <span class="text-center">VIEW OUR<br> LATEST <br>RECIPES</span>
            </div>
            <div class="singapore">
              <img src="../assets/recs-arts/singapore.jpg" alt="singapore">
              <span class="black">City guide: Singapore</span>
              <span class="orange clickable orange-btn"><i class="fa-solid fa-earth-asia"></i> VIEW ALL CITY GUIDES</span>
            </div>
            <div class="search d-flex mt-2">
              <span class="mag-glass"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="search" class="form-control" id="chearchThroughSite" placeholder="Search...">
            </div>
            <div class="follow-us mb-3">
              <h5>Follow Us</h5>
              <div class="socials d-flex mt-3">
                <span class="social-media">
                  <a href="#" class="orangy"><i class="fa-brands fa-facebook-f"></i></a>
                </span>
                <span class="social-media">
                  <a href="#" class="orangy"><i class="fa-brands fa-instagram"></i></a>
                </span>
                <span class="social-media">
                  <a href="#" class="orangy"><i class="fa-brands fa-twitter"></i></a>
                </span>
                <span class="social-media">
                  <a href="#" class="orangy"><i class="fa-brands fa-youtube"></i></a>
                </span>
                <span class="social-media">
                  <a href="#" class="orangy"><i class="fa-brands fa-pinterest"></i></a>
                </span>
              </div>
            </div>
            <div class="recent-posts mb-3">
              <div class="selection d-flex align-items-center mb-5">
                <div class="popular">Popular</div>
                <div class="recent">Recent</div>
              </div>
              <div class="circle-mini-articles d-flex align-items-center mb-3 mt-3 pe-1 clickable"   v-for="(art, index) in store.articles.slice(0,3)" :key="index">
                <div class="circle">
                  <img :src="store.articlesImgPath+art.image" :alt="art.title">
                  </div>
                <div class="mini-art-body d-flex flex-column">
                  <span>{{art.title}}</span>
                  <span>{{art.date}}</span>
                </div>
              </div>
            </div>
            <div class="tweets mb-4">
              <div class="d-flex justify-content-between head-sect px-4 pt-4 ">
                <p><strong>Tweets</strong> <span>by <a href="#">Theme_Fusion</a></span></p>
                <span><i class="fa-solid fa-circle-info"></i></span>
              </div>
              <div class="container-fluid px-3">
                <div class="row">
                  <div class="col-2 p-2 text-center">
                    <img src="../assets/graphics/theme-fusion.png" alt="theme-fusion">
                  </div>
                  <div class="col-10 mb-3">
                    <h6>Theme Fusion</h6>
                    <span>@Theme_Fusion</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ipsum eum distinctio voluptatum sunt aperiam temporibus? Fuga adipisci doloribus amet facilis laudantium illo quisquam reiciendis beatae ea quidem eius maxime.</p>
                    <img src="../assets/graphics/wp-engine.jpeg" alt="">
                    <div class="d-flex justify-content-between">
                      <span><i class="fa-regular fa-heart me-2"></i>
                      <i class="fa-solid fa-right-from-bracket"></i></span>
                      <span>21h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </aside>
      </div>
    </div> 
  </div>
</section>
  
</template>

<style lang="scss" scoped>

  @use '../styles/partials/variables.scss' as *;
  
  

  .dc-big-cont{
    margin:50px auto;
    padding:0;
    .custom-cont{
      color:$primary-darkgrey;
      h4{
        font-family: "Catamaran", Arial, Helvetica, sans-serif;
        font-weight:bold;
      }
      
    }
      
    .col-3.offset-1{
      text-align:end;
      padding:0;
      & .orange-btn:hover{
        background-color: rgba($primary-orange, .75);
        color:$primary-darkgrey;}
      a{
        text-transform:uppercase;
        background-color: $primary-orange;
        color:white;
        padding:10px 20px;
        font-size:90%;
        position:relative;
        top:10px;
        right:10px;
        }
    }
    & .main-article{
      & .dc-art-body{
      color:$primary-darkgrey;
      background-color: white;
      padding:30px;
      &>h3{
        font-size:1.4rem;
        }
      &>p:first-of-type{
          line-height:1rem;
          font-weight:300;
          &::after{
          content:'';
          width:100%;
          font-weight:300;
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
      a{
        color:$primary-darkgrey;
      }
    }
    }
    & .read-more{
      color:$primary-darkgrey;
      background-color:rgb(233,233,225);
      text-align:center;
      width:100%;
      height:3rem;
      padding:1rem;
      line-height:1rem;
      font-weight:500;
      &:hover{
        cursor:pointer;
      }
    }
    & .thumb-art{
      background-color: white;
        padding:0;
        width:48%;
        & .thumb-head{
          position:relative;
          &:hover div.cover-on-hover{
          opacity:1;
          transition-delay: 0.1s;
        }
        }
      & p{
        color:$primary-lightgrey;
        
      }
      }
    
  }

  aside.miscellanea{
    .ad-bg{
      position:relative;
      img{
      width:100%;
      object-fit:cover;
      }
      span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size:120%;
    }
    }
    .singapore{
      position:relative;
      img{
        height:110%;
        object-fit:cover;
      }
      &>span.orange{
      position:relative;
      text-align:center;
      height:40px;
      padding:8px 0;
      display:inline-block;
      color:white;
      background-color: $primary-orange;
      width:100%;
      left:0;
        &:hover{
        background-color: rgba($primary-orange, .75);
        color:$primary-darkgrey;}
      &::after{
        content:'';
        width:100%;
        border:1px solid $primary-lightlightgrey;
        display:block;
        margin-top:30px;
        margin-bottom:3rem;
      }
      }
      &>span.black{
      position:absolute;
      display:inline-block;
      font-size: 120%;
      font-weight: 500;
      padding: 8px;
      background-color: rgba(0,0,0,0.7);
      color:white;
      width:70%;
      left:0;
      bottom:2rem;
      }
    }
    .search{
      color:$primary-lightgrey;
      padding:4rem 0 2rem;
      & span{
        border-bottom-left-radius: 0.375rem;
        border-top-left-radius:  0.375rem;;
        background-color: white;
        padding:8px 15px;
        border-top:1px solid $primary-lightlightgrey;
        border-left:1px solid $primary-lightlightgrey;
        border-bottom:1px solid $primary-lightlightgrey;
      }
      & input{
        width:95%;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        border-top:1px solid $primary-lightlightgrey;
        border-right:1px solid $primary-lightlightgrey;
        border-bottom:1px solid $primary-lightlightgrey;
        border-left:none;
      }
    }
    .follow-us{
      & > h5{
        color:$primary-orange;
      }
      & span{
        border-radius:0.375rem;
        display:inline-block;
        width: 2.5rem;
        height: 2.5rem;
        font-size:1.1rem;
        text-align: center;
        border:1px solid rgba(84, 78, 71, 0.279);
        background-color:rgb(233,233,226);
        padding:0.5rem;
        margin-right:1rem;
        & a[data-v-a518d8a7]{
          color:rgb(84,78,71);
        }
      }
    }
    .recent-posts{
      .selection{
        width:100%;
        height:3.5rem;
        & > div{
          height:100%;
          width:50%;
          text-align:center;
          font-family: "Vidaloka", serif;
          font-size:120%;
          color:$primary-darkgrey;
          border:1px solid rgba(84, 78, 71, 0.279);
          align-items: center;
          justify-content: center;
          display:flex;
          &:hover{
            cursor:pointer;
          }
        }
        &>.popular{
            background-color:white;
            border-right:none;
          }
      }
    }
    .circle-mini-articles{
      .circle{
        width:25%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-right:1rem;
          img{
          object-fit:cover;
          height:3.5rem;
          width:3.5rem;
          border-radius:50%;
          object-position: center;
        }
      }
      .mini-art-body{
        width:75%;
        display:flex;
        align-items:flex-start;
        &>span:first-of-type{
          line-height:1rem;
        }
        &>span:last-of-type{
          font-size:80%;
          color:$primary-lightgrey;
        }
      }
    }
    .tweets{
      background-color: white;
      & span:first-of-type{
        font-size:80%;
      }
      & i{
        color:$primary-lightgrey;
      }
      .col-2>img{
        width:60%;
        margin-left:.5rem;
      }
      .col-10{
        padding:0 1rem 1rem 0;
        h6{
        font-family: "Catamaran", Arial, Helvetica, sans-serif;
        font-weight:500;
        margin:0;
        }
        span{
          font-size:80%;
          color:$primary-lightgrey;
          margin-bottom:1.5rem;
        }
        p{
          margin-top:1.2rem;
          font-weight:300;
          line-height:1rem;
        }
      }
      
    }
  }

</style>