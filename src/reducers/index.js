const initialState = {
  mainCourse: [
    {
      id: 482788,
      title: "Garlicky Pasta with Swiss Chard and Beans",
      readyInMinutes: 35,
      servings: 4,
      image: "Garlicky-Pasta-with-Swiss-Chard-and-Beans-482788.jpg",
      imageUrls: ["Garlicky-Pasta-with-Swiss-Chard-and-Beans-482788.jpg"]
    },
    {
      id: 729352,
      title: "Italian Sausage Stew with White Beans and Kale",
      readyInMinutes: 20,
      servings: 4,
      image: "italian-sausage-stew-with-white-beans-and-kale-729352.jpg",
      imageUrls: ["italian-sausage-stew-with-white-beans-and-kale-729352.jpg"]
    },
    {
      id: 695646,
      title: "Steak & Potato Kebabs with Creamy Cilantro Sauce for Two",
      readyInMinutes: 40,
      servings: 2,
      image:
        "steak-potato-kebabs-with-creamy-cilantro-sauce-for-two-695646.jpg",
      imageUrls: [
        "steak-potato-kebabs-with-creamy-cilantro-sauce-for-two-695646.jpg"
      ]
    },
    {
      id: 510624,
      title: "Lemon Pesto Zucchini Sandwich",
      readyInMinutes: 27,
      servings: 1,
      image: "Lemon-Pesto-Zucchini-Sandwich-510624.jpg",
      imageUrls: ["Lemon-Pesto-Zucchini-Sandwich-510624.jpg"]
    },
    {
      id: 551452,
      title:
        "Beef Liver with Fig, Bacon and Caramelized Onion Compote [or the ultimate beef liver ]",
      readyInMinutes: 45,
      servings: 2,
      image:
        "Beef-Liver-with-Fig--Bacon-and-Caramelized-Onion-Compote-[or-the-ultimate-beef-liver-]-551452.png",
      imageUrls: [
        "Beef-Liver-with-Fig--Bacon-and-Caramelized-Onion-Compote-[or-the-ultimate-beef-liver-]-551452.png"
      ]
    },
    {
      id: 482574,
      title: "Slow Cooker Vegetarian Chili with Butternut Squash",
      readyInMinutes: 250,
      servings: 4,
      image: "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg",
      imageUrls: [
        "Slow-Cooker-Vegetarian-Chili-with-Butternut-Squash-482574.jpg"
      ]
    }
  ],
  salad: [
    {
      id: 616564,
      title: "Chinese Chop Salad + Peanut Sesame Dressing",
      readyInMinutes: 15,
      servings: 5,
      image: "Chinese-Chop-Salad-+-Peanut-Sesame-Dressing-616564.jpg",
      imageUrls: ["Chinese-Chop-Salad-+-Peanut-Sesame-Dressing-616564.jpg"]
    },
    {
      id: 723984,
      title: "Cabbage Salad with Peanuts",
      readyInMinutes: 15,
      servings: 2,
      image: "cabbage-salad-with-peanuts-723984.jpg",
      imageUrls: ["cabbage-salad-with-peanuts-723984.jpg"]
    },
    {
      id: 809898,
      title:
        "Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette",
      readyInMinutes: 25,
      servings: 4,
      image:
        "strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-809898.jpg",
      imageUrls: [
        "strawberry-mango-chopped-spinach-quinoa-salad-with-sesame-lime-vinaigrette-809898.jpg"
      ]
    },
    {
      id: 494212,
      title: "CSA Salad",
      readyInMinutes: 10,
      servings: 2,
      image: "CSA-Salad-494212.jpg",
      imageUrls: ["CSA-Salad-494212.jpg"]
    },
    {
      id: 695798,
      title: "Spinach Salad with Avocado-Ranch Dressing",
      readyInMinutes: 20,
      servings: 4,
      image: "spinach-salad-with-avocado-ranch-dressing-695798.jpg",
      imageUrls: ["spinach-salad-with-avocado-ranch-dressing-695798.jpg"]
    },
    {
      id: 558652,
      title: "Broccoli Slaw Chicken Salad",
      readyInMinutes: 7,
      servings: 1,
      image: "Broccoli-Slaw-Chicken-Salad-558652.jpg",
      imageUrls: ["Broccoli-Slaw-Chicken-Salad-558652.jpg"]
    }
  ],
  coctails: [
    {
      id: 729431,
      title: "Immune Booster Sweet Green Smoothie",
      readyInMinutes: 5,
      servings: 5,
      image: "immune-booster-sweet-green-smoothie-729431.jpg",
      imageUrls: ["immune-booster-sweet-green-smoothie-729431.jpg"]
    },
    {
      id: 999164,
      title: "Basil Vodka Gimlet aka Băsil Dazzle",
      readyInMinutes: 5,
      servings: 1,
      image: "basil-vodka-gimlet-aka-bsil-dazzle-999164.jpg",
      imageUrls: ["basil-vodka-gimlet-aka-bsil-dazzle-999164.jpg"]
    },
    {
      id: 481598,
      title: "Orange Creamsicle Smoothie",
      readyInMinutes: 5,
      servings: 1,
      image: "Orange-Creamsicle-Smoothie-481598.jpg",
      imageUrls: ["Orange-Creamsicle-Smoothie-481598.jpg"]
    },
    {
      id: 247179,
      title: "Chai",
      readyInMinutes: 30,
      servings: 1,
      image: "Chai-247179.jpg",
      imageUrls: ["Chai-247179.jpg"]
    },
    {
      id: 1130209,
      title: "My Favorite Green Smoothie",
      readyInMinutes: 5,
      servings: 1,
      image: "my-favorite-green-smoothie-1130209.jpg",
      imageUrls: ["my-favorite-green-smoothie-1130209.jpg"]
    },
    {
      id: 716252,
      title: "Milky Watermelon Drink",
      readyInMinutes: 45,
      servings: 1,
      image: "milky-watermelon-drink-716252.jpg",
      imageUrls: ["milky-watermelon-drink-716252.jpg"]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
