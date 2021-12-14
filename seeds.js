const ingredients = [
  "Beet",
  "Pork",
  "Chicken",
  "Duck",
  "Rabbit",
  "Carrot",
  "Broccoli",
  "Aspargus",
  "Cauliflower",
  "Corn",
  "Cucumber",
  "Eggplant",
  "Green Pepper",
  "Lettuce",
  "Mushrooms",
  "Onios",
  "Potato",
  "Pumpkin",
  "Red Pepper",
  "Tomato",
  "Beetrrot",
  "Brussel Sprouts",
  "Peas",
  "Zucchini",
  "Artichoke",
  "Beans",
  "Soybeans",
  "Chickpeas",
  "Penuts",
  "Lentils",
  "Lupins",
  "Mesquite",
  "Carob",
  "Tamarind",
  "Alfalfa",
  "Clover",
  "Banana",
  "Apples",
  "Strawberries",
  "Grapes",
  "Oranges",
  "Watermelon",
  "Blueberries",
  "Lemons",
  "Peach",
  "Avocado",
  "Pineapple",
  "Cherries",
  "Cantaloupe",
  "Pears",
  "Limes",
  "Plums",
  "Nectarines",
];
const type = [
  "Hot main",
  "Cold main",
  "Breakfast",
  "Dinner",
  "Lunch",
  "Desert",
  "Cocktail",
  "Brunch",
  "Pasta",
  "Pizza",
  "Burger",
  "Vegetarian",
  "Vegan",
];
const cousine = [
  "American",
  "Chinese",
  "Thay",
  "Italian",
  "Spanish",
  "Brazilian",
  "Japanese",
  "Turkish",
  "Others",
];
const servings = () => {
    const servings = Math.floor(Math.random() * 10);
    return servings
} 

const prepTime = () => {
    const prepTime = Math.floor(Math.random() * 5) + " hours";
    return prepTime
}

const image = [
  "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
  "https://www.recipetineats.com/wp-content/uploads/2020/04/Lentil-Curry_9-SQ.jpg",
  "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
  "https://d1yfn1dfres2va.cloudfront.net/001/28/45/2845d12e0d472d55f5fd0366c2150d98_640m.jpg",
  "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg",
  "https://www.greenpeace.org/static/planet4-eu-unit-stateless/2020/03/1788f703-gp0strmec_web_size_with_credit_line.jpg",
  "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
  "https://thekitchencommunity.org/wp-content/uploads/2021/02/43-Foods-That-Start-With-E-1200x675.jpg",
  "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
  "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
  "https://ychef.files.bbci.co.uk/976x549/p09wrjyz.jpg",
  "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/07/03/USATODAY/usatsports/fortune-cookie-foreign-foods-actually-american.jpg",
  "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
  "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg",
];
const dishName = [
  "Cheeseburger",
  "Reuben sandwich",
  "Hot dogs",
  "Philly cheese steak",
  "Nachos",
  "Chicago-style pizza",
  "Delmonicos steak",
  "Paella Valenciana",
  "Patatas bravas",
  "Gazpacho",
  "Pimientos de Padron",
  "Fideuà",
  "Bangers and Mash",
  "Full English Breakfast",
  "Sunday Roast",
  "Toad in the Hole",
  "Shepherds Pie/Cottage Pie",
  "Steak and Kidney Pie",
];
const preparation =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.";
const howToCook =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.";
const chef = ["61b7ccf2714d1d00842a4f62", "61b7d67bf4810c042f5d644c", "61b90d1d62e02b0ec72a2f24", "61b90d3862e02b0ec72a2f25", "61b90d5662e02b0ec72a2f26"]

const createRecipeId = () => {
    const recipeId = []
    for(let i=0; i < 24; i++){
        recipeId.push(Math.floor(Math.random()*9))
        } return recipeId.join();
}

const createRecipesData = () => {
    const recipeData = []
    for(let i=0; i<40; i++){
        recipeData.push(
            `
            {
                "_id": {
                  "$oid": "${createRecipeId()}"
                },
                "image": "${image[Math.floor(Math.random()*image.length)]}",
                "dishName": "${dishName[Math.floor(Math.random()*dishName.length)]}",
                "cousine": "${cousine[Math.floor(Math.random()*cousine.length)]}",
                "type": "${type[Math.floor(Math.random()*type.length)]}",
                "ingredients": "${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]} - ${ingredients[Math.floor(Math.random()*ingredients.length)]}",
                "prepTime": "${prepTime()}",
                "preparation": "${preparation}",
                "howToCook": "${howToCook}",
                "servings": "${servings()}",
                "chef": {
                  "$oid": "${chef[Math.floor(Math.random()*chef.length)]}"
                },
                "createdAt": {
                  "$date": "2021-12-14T20:32:31.996Z"
                },
                "updatedAt": {
                  "$date": "2021-12-14T20:32:31.996Z"
                },
                "__v": 0
              }
              `
        )
    } return recipeData;
}

console.log(createRecipesData())
// eslint-disable-next-line no-unused-expressions

const recipes = [
                  {
                      "_id": {
                        "$oid": "758601607330850570457734"
                      },
                      "image": "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
                      "dishName": "Fideuà",
                      "cousine": "Thay",
                      "type": "Cold main",
                      "ingredients": "Carrot - Aspargus - Red Pepper - Oranges - Limes - Lemons - Pineapple",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "424462778228213161245677"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Full English Breakfast",
                      "cousine": "Brazilian",
                      "type": "Cocktail",
                      "ingredients": "Lentils - Nectarines - Alfalfa - Mushrooms - Onios - Zucchini - Rabbit",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "4",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "417030607874817353330772"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Full English Breakfast",
                      "cousine": "Thay",
                      "type": "Pizza",
                      "ingredients": "Avocado - Lemons - Artichoke - Eggplant - Aspargus - Chicken - Cherries",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "5",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "768862065124302327172806"
                      },
                      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg",
                      "dishName": "Reuben sandwich",
                      "cousine": "Chinese",
                      "type": "Cocktail",
                      "ingredients": "Tamarind - Onios - Broccoli - Red Pepper - Beans - Pork - Cucumber",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "8",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "884621504081456233836373"
                      },
                      "image": "https://d1yfn1dfres2va.cloudfront.net/001/28/45/2845d12e0d472d55f5fd0366c2150d98_640m.jpg",
                      "dishName": "Gazpacho",
                      "cousine": "Italian",
                      "type": "Brunch",
                      "ingredients": "Beetrrot - Lettuce - Avocado - Carob - Chickpeas - Cantaloupe - Tomato",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "076122057054321417748527"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Delmonicos steak",
                      "cousine": "Chinese",
                      "type": "Brunch",
                      "ingredients": "Pineapple - Alfalfa - Cucumber - Grapes - Strawberries - Pineapple - Cherries",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "4",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "438662110705578137116354"
                      },
                      "image": "https://www.greenpeace.org/static/planet4-eu-unit-stateless/2020/03/1788f703-gp0strmec_web_size_with_credit_line.jpg",
                      "dishName": "Philly cheese steak",
                      "cousine": "Spanish",
                      "type": "Cocktail",
                      "ingredients": "Beetrrot - Lentils - Strawberries - Lentils - Apples - Pumpkin - Tomato",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "5",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "258827775887541880074636"
                      },
                      "image": "https://www.recipetineats.com/wp-content/uploads/2020/04/Lentil-Curry_9-SQ.jpg",
                      "dishName": "Patatas bravas",
                      "cousine": "American",
                      "type": "Breakfast",
                      "ingredients": "Peach - Limes - Aspargus - Banana - Rabbit - Tamarind - Clover",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "0",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "556505662651106127331453"
                      },
                      "image": "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
                      "dishName": "Patatas bravas",
                      "cousine": "Spanish",
                      "type": "Hot main",
                      "ingredients": "Brussel Sprouts - Pears - Brussel Sprouts - Red Pepper - Broccoli - Cucumber - Green Pepper",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "0",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "573882266127463622382443"
                      },
                      "image": "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
                      "dishName": "Pimientos de Padron",
                      "cousine": "Thay",
                      "type": "Burger",
                      "ingredients": "Avocado - Plums - Mushrooms - Tomato - Brussel Sprouts - Tamarind - Lemons",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "2",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "041145842228172412554184"
                      },
                      "image": "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
                      "dishName": "Reuben sandwich",
                      "cousine": "Others",
                      "type": "Desert",
                      "ingredients": "Cucumber - Beans - Beet - Grapes - Soybeans - Broccoli - Limes",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "4",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "412062128068285636817102"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Cheeseburger",
                      "cousine": "American",
                      "type": "Brunch",
                      "ingredients": "Carob - Grapes - Aspargus - Aspargus - Green Pepper - Eggplant - Cherries",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "4",
                      "chef": {
                        "$oid": "61b90d1d62e02b0ec72a2f24"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "612454676403467621044427"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Philly cheese steak",
                      "cousine": "Others",
                      "type": "Cold main",
                      "ingredients": "Pears - Cherries - Tamarind - Carob - Avocado - Grapes - Lettuce",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "0",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "248802026360605862013774"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Philly cheese steak",
                      "cousine": "Turkish",
                      "type": "Burger",
                      "ingredients": "Tomato - Corn - Limes - Artichoke - Mushrooms - Soybeans - Pork",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "9",
                      "chef": {
                        "$oid": "61b90d1d62e02b0ec72a2f24"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "424534403053848345152022"
                      },
                      "image": "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
                      "dishName": "Gazpacho",
                      "cousine": "Thay",
                      "type": "Burger",
                      "ingredients": "Tamarind - Rabbit - Cauliflower - Clover - Plums - Grapes - Corn",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "133481337823367613443223"
                      },
                      "image": "https://ychef.files.bbci.co.uk/976x549/p09wrjyz.jpg",
                      "dishName": "Delmonicos steak",
                      "cousine": "Thay",
                      "type": "Lunch",
                      "ingredients": "Lemons - Mesquite - Cucumber - Peach - Watermelon - Peach - Potato",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "750678748856554364028344"
                      },
                      "image": "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg",
                      "dishName": "Pimientos de Padron",
                      "cousine": "Spanish",
                      "type": "Desert",
                      "ingredients": "Peach - Cauliflower - Apples - Lentils - Watermelon - Beans - Lentils",
                      "prepTime": "1 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "142538441884806310481071"
                      },
                      "image": "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/07/03/USATODAY/usatsports/fortune-cookie-foreign-foods-actually-american.jpg",
                      "dishName": "Fideuà",
                      "cousine": "Turkish",
                      "type": "Burger",
                      "ingredients": "Avocado - Beans - Beet - Cucumber - Alfalfa - Lemons - Alfalfa",
                      "prepTime": "1 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "9",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "138466520464140151115460"
                      },
                      "image": "https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg",
                      "dishName": "Delmonicos steak",
                      "cousine": "Thay",
                      "type": "Lunch",
                      "ingredients": "Grapes - Lentils - Cauliflower - Banana - Onios - Limes - Brussel Sprouts",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "5",
                      "chef": {
                        "$oid": "61b90d1d62e02b0ec72a2f24"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "867605325735405602228752"
                      },
                      "image": "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/07/03/USATODAY/usatsports/fortune-cookie-foreign-foods-actually-american.jpg",
                      "dishName": "Sunday Roast",
                      "cousine": "Italian",
                      "type": "Vegetarian",
                      "ingredients": "Beetrrot - Nectarines - Grapes - Alfalfa - Tomato - Penuts - Chicken",
                      "prepTime": "1 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "0",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "581144227740014176881638"
                      },
                      "image": "http://upload.wikimedia.org/wikipedia/commons/c/c7/Spinach_pizza.jpg",
                      "dishName": "Full English Breakfast",
                      "cousine": "Italian",
                      "type": "Vegan",
                      "ingredients": "Grapes - Lettuce - Beet - Potato - Watermelon - Beans - Red Pepper",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "2",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "233586672767843280367336"
                      },
                      "image": "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
                      "dishName": "Pimientos de Padron",
                      "cousine": "Brazilian",
                      "type": "Brunch",
                      "ingredients": "Peas - Watermelon - Pumpkin - Limes - Broccoli - Nectarines - Cantaloupe",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "3",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "274454401348648208830785"
                      },
                      "image": "https://ychef.files.bbci.co.uk/976x549/p09wrjyz.jpg",
                      "dishName": "Fideuà",
                      "cousine": "Others",
                      "type": "Brunch",
                      "ingredients": "Pineapple - Red Pepper - Tomato - Aspargus - Chickpeas - Pears - Strawberries",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "504155775180004746353884"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Full English Breakfast",
                      "cousine": "Others",
                      "type": "Desert",
                      "ingredients": "Cauliflower - Avocado - Beetrrot - Pineapple - Watermelon - Watermelon - Oranges",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "651205281202056810868360"
                      },
                      "image": "https://thekitchencommunity.org/wp-content/uploads/2021/03/43-Foods-That-Start-With-D-1200x900.jpg",
                      "dishName": "Chicago-style pizza",
                      "cousine": "Thay",
                      "type": "Vegetarian",
                      "ingredients": "Beetrrot - Banana - Brussel Sprouts - Carob - Mesquite - Red Pepper - Clover",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "6",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "303317650316684874412730"
                      },
                      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg",
                      "dishName": "Philly cheese steak",
                      "cousine": "Brazilian",
                      "type": "Pasta",
                      "ingredients": "Grapes - Beetrrot - Cantaloupe - Pork - Tomato - Grapes - Carrot",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "8",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "675344314741875211418321"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Chicago-style pizza",
                      "cousine": "Spanish",
                      "type": "Burger",
                      "ingredients": "Limes - Duck - Lentils - Artichoke - Corn - Artichoke - Brussel Sprouts",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "5",
                      "chef": {
                        "$oid": "61b90d1d62e02b0ec72a2f24"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "444022864422534464238786"
                      },
                      "image": "https://d1yfn1dfres2va.cloudfront.net/001/28/45/2845d12e0d472d55f5fd0366c2150d98_640m.jpg",
                      "dishName": "Fideuà",
                      "cousine": "Spanish",
                      "type": "Brunch",
                      "ingredients": "Lettuce - Cucumber - Eggplant - Clover - Avocado - Strawberries - Potato",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "9",
                      "chef": {
                        "$oid": "61b90d1d62e02b0ec72a2f24"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "532020500623657842664462"
                      },
                      "image": "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Sausage-and-mushroom-ragu-203c7d4.jpg",
                      "dishName": "Bangers and Mash",
                      "cousine": "Spanish",
                      "type": "Burger",
                      "ingredients": "Mesquite - Beans - Tomato - Mesquite - Tamarind - Nectarines - Beetrrot",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "545741711647147426475542"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Full English Breakfast",
                      "cousine": "Turkish",
                      "type": "Breakfast",
                      "ingredients": "Rabbit - Chicken - Strawberries - Red Pepper - Broccoli - Strawberries - Beet",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "3",
                      "chef": {
                        "$oid": "61b90d5662e02b0ec72a2f26"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "036004754625788374688821"
                      },
                      "image": "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg",
                      "dishName": "Fideuà",
                      "cousine": "Turkish",
                      "type": "Brunch",
                      "ingredients": "Lupins - Mushrooms - Potato - Oranges - Cucumber - Nectarines - Green Pepper",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "887664785820657682586322"
                      },
                      "image": "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg",
                      "dishName": "Reuben sandwich",
                      "cousine": "Chinese",
                      "type": "Vegan",
                      "ingredients": "Apples - Beetrrot - Red Pepper - Plums - Cherries - Beet - Oranges",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "3",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "318778806538503271362178"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Hot dogs",
                      "cousine": "Brazilian",
                      "type": "Vegetarian",
                      "ingredients": "Brussel Sprouts - Pears - Grapes - Watermelon - Apples - Duck - Clover",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "8",
                      "chef": {
                        "$oid": "61b90d3862e02b0ec72a2f25"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "537104257650781044463040"
                      },
                      "image": "http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg",
                      "dishName": "Reuben sandwich",
                      "cousine": "Italian",
                      "type": "Vegetarian",
                      "ingredients": "Potato - Mushrooms - Lentils - Mesquite - Pork - Banana - Carob",
                      "prepTime": "4 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "422022701635532328111521"
                      },
                      "image": "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cd73787b2187a1f0790/portada.jpg",
                      "dishName": "Shepherds Pie/Cottage Pie",
                      "cousine": "Thay",
                      "type": "Pizza",
                      "ingredients": "Cherries - Watermelon - Brussel Sprouts - Penuts - Duck - Duck - Beetrrot",
                      "prepTime": "0 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "557460636664425776182732"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Paella Valenciana",
                      "cousine": "American",
                      "type": "Dinner",
                      "ingredients": "Penuts - Cauliflower - Corn - Peach - Lentils - Tamarind - Duck",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "1",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "645372330066535016053136"
                      },
                      "image": "https://d1yfn1dfres2va.cloudfront.net/001/28/45/2845d12e0d472d55f5fd0366c2150d98_640m.jpg",
                      "dishName": "Sunday Roast",
                      "cousine": "American",
                      "type": "Pasta",
                      "ingredients": "Blueberries - Nectarines - Penuts - Beans - Tomato - Plums - Potato",
                      "prepTime": "1 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "163373307822010625710822"
                      },
                      "image": "https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/07/03/USATODAY/usatsports/fortune-cookie-foreign-foods-actually-american.jpg",
                      "dishName": "Delmonicos steak",
                      "cousine": "Italian",
                      "type": "Hot main",
                      "ingredients": "Green Pepper - Potato - Pumpkin - Red Pepper - Green Pepper - Watermelon - Banana",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "8",
                      "chef": {
                        "$oid": "61b7d67bf4810c042f5d644c"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "256382052552008462573081"
                      },
                      "image": "https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg",
                      "dishName": "Bangers and Mash",
                      "cousine": "Brazilian",
                      "type": "Vegetarian",
                      "ingredients": "Cauliflower - Mushrooms - Eggplant - Beet - Cherries - Cucumber - Oranges",
                      "prepTime": "2 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "7",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
                    ,
    
                  {
                      "_id": {
                        "$oid": "026368102111415454750777"
                      },
                      "image": "https://thekitchencommunity.org/wp-content/uploads/2021/02/43-Foods-That-Start-With-E-1200x675.jpg",
                      "dishName": "Gazpacho",
                      "cousine": "American",
                      "type": "Breakfast",
                      "ingredients": "Zucchini - Duck - Mushrooms - Banana - Peach - Watermelon - Beetrrot",
                      "prepTime": "3 hours",
                      "preparation": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "howToCook": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati voluptatibus, voluptatem perferendis dolorem nostrum, excepturi minima quibusdam maiores aspernatur sapiente culpa rem temporibus maxime iure doloremque? Accusantium, earum omnis. Eaque.",
                      "servings": "6",
                      "chef": {
                        "$oid": "61b7ccf2714d1d00842a4f62"
                      },
                      "createdAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "updatedAt": {
                        "$date": "2021-12-14T20:32:31.996Z"
                      },
                      "__v": 0
                    }
  ]