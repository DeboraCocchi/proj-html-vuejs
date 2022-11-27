import {reactive} from 'vue'

export const store = reactive ({
  articlesImgPath:'/recs-arts/',
  articles:[
    {
      title:'Food Corner: Top Japanese Restaurants for Sushi',
      date:'November 24th, 2022',
      author:'admin',
      image:'japanese.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.'
    },
    {
      title:'Roundup: My New Favourite Recipes For Healthy Living',
      date:'November 15th, 2022',
      author:'admin',
      image:'roundup.jpg',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum dicta accusamus? Magni expedita obcaecati alias temporibus. Ab libero vel odio pariatur neque, officia sunt optio nobis tempora quidem omnis?'
    },
    {
      title:'Why These Toasts with Tea are My New Favourite',
      date:'October 22nd, 2022',
      author:'admin',
      image:'fi-toasts.jpg',
      content:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perspiciatis facilis tenetur, eum error molestias quibusdam eius eos distinctio accusantium. Sit, eligendi? Dolorem, corrupti totam? Labore vel corrupti earum id?'
    },
    {
      title:'Meal Prep: Korean Bibimbap with Kimchi',
      date:'November 3rd, 2022',
      author:'admin',
      image:'korean.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.'
    },
    {
      title:'Exploring Street Food in Bangkok',
      date:'October 10th, 2022',
      author:'admin',
      image:'street-food.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.'
    },
    {
      title:'Organic Choices for Healthier Living',
      date:'October 4th, 2022',
      author:'admin',
      image:'organic-breakfast.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.'
    },
    {
      title:'5 Waterside Restaurants in Istanbul for Special Events',
      date:'September 21st, 2022',
      author:'admin',
      image:'water-side.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.'
    },

  ],
  recipes:[
    {
      title:'Lunch Favourite with Salad, Naan and Beans',
      categories: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks',
      image:'yogurt-naan.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:0
    },
    {
      title:'Healthy Breakfast Ideas: Fruit Porridge',
      categories: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks',
      image:'mixed-fruits.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:1
    },
    {
      title:'Tasty Breakfast: Fruity and Sweet',
      categories: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks, Breakfast',
      image:'sweet-breakfast.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:2
    },
    {
      title:'Making the Original Italian Gelato: Fresh and Simple',
      categories: 'Sweets, Healthy, Latest Recipes, Staff Picks',
      image:'gelato.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:3
    },
    {
      title:'Summer Drinks: 10 Simple Recipes for a Taste of Freshness',
      categories: 'Drinks, Featured, Healthy, Simple, Freshness, Latest Recipes, Staff Picks',
      image:'summer-drink.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:4
    },
    {
      title:'Supernutrients in Vegetables',
      categories: 'Lunch, Summer, Healthy, Light, Latest Recipes, Staff Picks',
      image:'nutrition.jpeg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:5
    },
    {
      title:'The Ultimate Recipe for a Perfect Cosmopolitan',
      categories: 'Drink, Summer, Alcoholic Recipes, Latest Recipes, Staff Picks',
      image:'cosmopolitan.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:6
    },
    {
      title:'The Magic Power of Fruits: All About Strawberries',
      categories: 'Breakfast, Fruits, Healthy, Light, Latest Recipes, Staff Picks',
      image:'fruits.jpg',
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.',
      id:7
    }
    
  ],
  icons:[
    {
      path:'drinks-recipes.png',
      name:'drinks'
    },
    {
      path:'soups-recipes.png',
      name:'soups'
    },
    {
      path:'baking-recipes.png',
      name:'bakery'
    },
    {
      path:'dinner-recipes.png',
      name:'dinner'
    },
    {
      path:'healthy-recipes.png',
      name:'healthy'
    },
    {
      path:'staff-picks.png',
      name:'staff picks'
    },
    {
      path:'premium-recipes.png',
      name:'appetisers'
    },
    {
      path:'quick-easy-recipes.png',
      name:'quick & easy'
    },
  ]
})