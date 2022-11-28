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
      content:'Porro rerum dicta accusamus? Magni expedita obcaecati alias temporibus. Ab libero vel odio pariatur neque, officia sunt optio nobis tempora quidem omnis?'
    },
    {
      title:'Why These Toasts with Tea are My New Favourite',
      date:'October 22nd, 2022',
      author:'admin',
      image:'fi-toasts.jpg',
      content:'Nesciunt perspiciatis facilis tenetur, eum error molestias quibusdam eius eos distinctio accusantium. Sit, eligendi? Dolorem, corrupti totam? Labore vel corrupti earum id? Lorem ipsum dolor sit amet consectetur, adipisicing elit...'
    },
    {
      title:'Meal Prep: Korean Bibimbap with Kimchi',
      date:'November 3rd, 2022',
      author:'admin',
      image:'korean.jpg',
      content:'Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque atque eligendi labore similique distinctio voluptates.Lorem ipsum dolor sit amet consectetur, adipisicing elit!'
    },
    {
      title:'Exploring Street Food in Bangkok',
      date:'October 10th, 2022',
      author:'admin',
      image:'street-food.jpg',
      content:'Similique aspernatur dolor neque cupiditate, earum maxime facere facilis sapiente quibusdam quaerat! Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
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
      content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam sed, eveniet tenetur optio harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque.',
      id:0
    },
    {
      title:'Healthy Breakfast Ideas: Fruit Porridge',
      categories: 'Bakery, Featured, Healthy, Latest Recipes, Staff Picks',
      image:'mixed-fruits.jpg',
      content:'Porro rerum dicta accusamus? Magni expedita obcaecati alias temporibus. Ab libero vel odio pariatur neque, officia sunt optio nobis tempora quidem omnis?Repellendus corrupti ex nulla voluptatem doloribus consequuntur molestiae tenetur aspernatur incidunt quidem,',
      id:1
    },
    {
      title:'Tasty Breakfast: Fruity, Sweet and Nutrient',
      categories: 'Bakery, Healthy, Latest Recipes, Staff Picks, Breakfast',
      image:'sweet-breakfast.jpg',
      content:'Repellendus corrupti ex nulla voluptatem doloribus consequuntur molestiae tenetur aspernatur incidunt quidem, dignissimos cum vitae dolor temporibus esse? Ut dolore soluta asperiores.',
      id:2
    },
    {
      title:'Making the Original Italian Gelato: Fresh and Simple',
      categories: 'Sweets, Healthy, Latest Recipes, Staff Picks',
      image:'gelato.jpg',
      content:'Odio perferendis explicabo ab illum. Provident similique possimus, harum ex incidunt explicabo dolor perferendis fuga odit temporibus beatae quas exercitationem maiores eligendi.',
      id:3
    },
    {
      title:'Summer Drinks: 10 Simple Recipes for a Taste of Freshness',
      categories: 'Drinks, Healthy, Simple, Latest Recipes, Staff Picks',
      image:'summer-drink.jpg',
      content:'Dignissimos qui officiis consequuntur tempora cupiditate maxime delectus eveniet in provident porro! Lorem ipsum dolor sit amet consectetur adipisicing elit doloremque atque eligendi.',
      id:4
    },
    {
      title:'All Supernutrients in Vegetables: The Ultimate Guide',
      categories: 'Lunch, Summer, Healthy, Light, Latest Recipes, Staff Picks',
      image:'nutrition.jpeg',
      content:'Temporibus numquam harum neque ab reprehenderit repellendus non aut velit laboriosam! Optio harum fuga reprehenderit quam incidunt iusto voluptate architecto. Magni expedita obcaecati alias temporibus.',
      id:5
    },
    {
      title:'The Ultimate Recipe for a Perfect Cosmopolitan',
      categories: 'Drink, Summer, Alcoholic Recipes, Staff Picks',
      image:'cosmopolitan.jpg',
      content:'Laboriosam, amet qui iste aperiam sed nobis quos consectetur voluptas veniam saepe harum fuga reprehenderit quam incidunt iusto voluptate architecto amet doloremque.',
      id:6
    },
    {
      title:'The Magic Power of Fruits: All About Strawberries',
      categories: 'Breakfast, Healthy, Latest Recipes, Staff Picks',
      image:'fruits.jpg',
      content:'Dolore dignissimos labore ipsam eius suscipit pariatur, tempore voluptates. Praesentium, pariatur sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita obcaecati alias temporibus.',
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