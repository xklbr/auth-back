interface SeedProduct {
  title: string;
  description: string;
  price: number;
  stock: number;
  sizes: ValidSizes[];
  category: ValidCategory;
  gender: ValidGender[];
  images: string[];
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
type ValidCategory =
  | 'Clothing'
  | 'Shoes'
  | 'Baby'
  | 'Garden'
  | 'Books'
  | 'Grocery'
  | 'Computers'
  | 'Outdoors'
  | 'Toys'
  | 'Games'
  | 'Movies'
  | 'Beauty'
  | 'Health'
  | 'Kids'
  | 'Sports'
  | 'Music'
  | 'Electronics'
  | 'Jewelery'
  | 'Automotive'
  | 'Tools'
  | 'Industrial';
type ValidGender = 'men' | 'women' | 'kid' | 'unisex';

interface SeedProductsData {
  products: SeedProduct[];
}

export const seedProductsData: SeedProductsData = {
  products: [
    {
      title: 'Sleek Fresh Car',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      stock: 7,
      price: 75,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Grocery',
      gender: ['men'],
    },
    {
      title: 'Awesome Plastic Shoes',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      stock: 5,
      price: 200,
      sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
      category: 'Baby',
      gender: ['men'],
    },
    {
      title: 'Handcrafted Plastic Fish',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      category: 'Electronics',
      gender: ['men'],
    },
    {
      title: 'Ergonomic Steel Fish',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      stock: 50,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L'],
      category: 'Clothing',
      gender: ['men'],
    },
    {
      title: 'Rustic Plastic Pizza',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      stock: 50,
      price: 40,
      sizes: ['M', 'L', 'XL', 'XXL'],
      category: 'Shoes',
      gender: ['men'],
    },
    {
      title: 'Handmade Soft Cheese',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      stock: 0,
      price: 35,
      sizes: ['M', 'L', 'XL', 'XXL'],
      category: 'Baby',
      gender: ['men'],
    },
    {
      title: 'Small Rubber Cheese',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      stock: 15,
      price: 35,
      sizes: ['S', 'M', 'L', 'XL'],
      category: 'Garden',
      gender: ['men'],
    },
    {
      title: 'Tasty Rubber Towels',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      stock: 17,
      price: 35,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      category: 'Baby',
      gender: ['men'],
    },
    {
      title: 'Rustic Plastic Salad',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      stock: 12,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      category: 'Books',
      gender: ['men'],
    },
    {
      title: 'Intelligent Plastic Keyboard',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XS', 'S'],
      category: 'Grocery',
      gender: ['men'],
    },
    {
      title: 'Intelligent Metal Chips',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
      stock: 2,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      category: 'Computers',
      gender: ['men'],
    },
    {
      title: 'Gorgeous Soft Salad',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      stock: 82,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Outdoors',
      gender: ['men'],
    },
    {
      title: 'Handmade Fresh Table',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
      stock: 24,
      price: 35,
      sizes: ['XL', 'XXL'],
      category: 'Toys',
      gender: ['men'],
    },
    {
      title: 'Ergonomic Fresh Cheese',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      stock: 5,
      price: 30,
      sizes: ['XS', 'S', 'XXL'],
      category: 'Garden',
      gender: ['men'],
    },
    {
      title: 'Unbranded Frozen Hat',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['7654399-00-A_0_2000.jpg', '7654399-00-A_1.jpg'],
      stock: 150,
      price: 30,
      sizes: ['M', 'L'],
      category: 'Games',
      gender: ['men'],
    },
    {
      title: 'Small Granite Chair',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['7652410-00-A_0.jpg', '7652410-00-A_1_2000.jpg'],
      stock: 10,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Computers',
      gender: ['men'],
    },
    {
      title: 'Intelligent Soft Pants',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['8764600-00-A_0_2000.jpg', '8764600-00-A_2.jpg'],
      stock: 34,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L'],
      category: 'Movies',
      gender: ['men'],
    },
    {
      title: 'Rustic Steel Fish',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['8764813-00-A_0_2000.jpg', '8764813-00-A_1.jpg'],
      stock: 15,
      price: 40,
      sizes: ['XL', 'XXL'],
      category: 'Beauty',
      gender: ['men'],
    },
    {
      title: 'Tasty Steel Keyboard',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8529198-00-A_0_2000.jpg', '8529198-00-A_1.jpg'],
      stock: 12,
      price: 40,
      sizes: ['XS', 'XXL'],
      category: 'Toys',
      gender: ['men'],
    },
    {
      title: 'Awesome Rubber Computer',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 10,
      price: 115,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Health',
      gender: ['men'],
    },
    {
      title: 'Unbranded Soft Hat',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['1740051-00-A_0_2000.jpg', '1740051-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Shoes',
      gender: ['unisex'],
    },
    {
      title: 'Incredible Concrete Ball',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1741111-00-A_0_2000.jpg', '1741111-00-A_1.jpg'],
      stock: 100,
      price: 85,
      sizes: ['XS', 'L', 'XL', 'XXL'],
      category: 'Kids',
      gender: ['men'],
    },
    {
      title: 'Ergonomic Plastic Cheese',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1740140-00-A_0_2000.jpg', '1740140-00-A_1.jpg'],
      stock: 7,
      price: 85,
      sizes: ['XS', 'S', 'M'],
      category: 'Shoes',
      gender: ['men'],
    },
    {
      title: 'Fantastic Granite Keyboard',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740145-00-A_2_2000.jpg', '1740145-00-A_1.jpg'],
      stock: 15,
      price: 85,
      sizes: ['XS', 'S', 'M', 'L'],
      category: 'Games',
      gender: ['men'],
    },
    {
      title: 'Rustic Steel Keyboard',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8529107-00-A_0_2000.jpg', '8529107-00-A_1.jpg'],
      stock: 15,
      price: 70,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      category: 'Sports',
      gender: ['unisex'],
    },
    {
      title: 'Small Wooden Table',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['7654420-00-A_0_2000.jpg', '7654420-00-A_1_2000.jpg'],
      stock: 13,
      price: 60,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Garden',
      gender: ['unisex'],
    },
    {
      title: 'Intelligent Frozen Soap',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1657932-00-A_0_2000.jpg', '1657932-00-A_1.jpg'],
      stock: 11,
      price: 30,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Clothing',
      gender: ['unisex'],
    },
    {
      title: 'Gorgeous Metal Pizza',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740417-00-A_0_2000.jpg', '1740417-00-A_1.jpg'],
      stock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Music',
      gender: ['unisex'],
    },
    {
      title: 'Awesome Steel Chair',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740535-00-A_0_2000.jpg', '1740535-00-A_1.jpg'],
      stock: 85,
      price: 225,
      sizes: ['XS', 'S', 'M'],
      category: 'Outdoors',
      gender: ['women'],
    },
    {
      title: 'Fantastic Plastic Car',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1740226-00-A_0_2000.jpg', '1740226-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'XXL'],
      category: 'Electronics',
      gender: ['women'],
    },
    {
      title: 'Awesome Steel Pizza',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740260-00-A_0_2000.jpg', '1740260-00-A_1.jpg'],
      stock: 9,
      price: 110,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Garden',
      gender: ['women'],
    },
    {
      title: 'Handcrafted Frozen Tuna',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['1740290-00-A_0_2000.jpg', '1740290-00-A_1.jpg'],
      stock: 10,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Books',
      gender: ['women'],
    },
    {
      title: 'Handmade Plastic Table',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1741441-00-A_0_2000.jpg', '1741441-00-A_1.jpg'],
      stock: 0,
      price: 40,
      sizes: ['XS', 'S'],
      category: 'Baby',
      gender: ['women'],
    },
    {
      title: 'Gorgeous Frozen Shirt',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8765090-00-A_0_2000.jpg', '8765090-00-A_1.jpg'],
      stock: 30,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Outdoors',
      gender: ['women'],
    },
    {
      title: 'Sleek Concrete Salad',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['8765100-00-A_0_2000.jpg', '8765100-00-A_1.jpg'],
      stock: 16,
      price: 40,
      sizes: ['XS', 'S', 'L', 'XL', 'XXL'],
      category: 'Garden',
      gender: ['women'],
    },
    {
      title: 'Sleek Concrete Tuna',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8765120-00-A_0_2000.jpg', '8765120-00-A_1.jpg'],
      stock: 18,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Books',
      gender: ['women'],
    },
    {
      title: 'Incredible Fresh Shirt',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8765115-00-A_0_2000.jpg', '8765115-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XL', 'XXL'],
      category: 'Health',
      gender: ['women'],
    },
    {
      title: 'Small Cotton Fish',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
      stock: 16,
      price: 35,
      sizes: ['S', 'M'],
      category: 'Jewelery',
      gender: ['women'],
    },
    {
      title: 'Ergonomic Frozen Towels',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Toys',
      gender: ['women'],
    },
    {
      title: 'Gorgeous Granite Salad',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['5645680-00-A_0_2000.jpg', '5645680-00-A_3.jpg'],
      stock: 3,
      price: 90,
      sizes: ['M', 'L', 'XL', 'XXL'],
      category: 'Shoes',
      gender: ['women'],
    },
    {
      title: 'Licensed Fresh Salad',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1740270-00-A_0_2000.jpg', '1740270-00-A_1.jpg'],
      stock: 162,
      price: 100,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Sports',
      gender: ['women'],
    },
    {
      title: 'Awesome Wooden Chair',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1742694-00-A_1_2000.jpg', '1742694-00-A_3.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Practical Metal Fish',
      description:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      images: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
      stock: 0,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      category: 'Beauty',
      gender: ['kid'],
    },
    {
      title: 'Unbranded Concrete Hat',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
      stock: 10,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      category: 'Baby',
      gender: ['kid'],
    },
    {
      title: 'Awesome Cotton Keyboard',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Movies',
      gender: ['kid'],
    },
    {
      title: 'Small Fresh Table',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['7652465-00-A_0_2000.jpg', '7652465-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Music',
      gender: ['kid'],
    },
    {
      title: 'Intelligent Granite Chips',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['100042307_0_2000.jpg', '100042307_alt_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Electronics',
      gender: ['kid'],
    },
    {
      title: 'Refined Frozen Bike',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1473809-00-A_1_2000.jpg', '1473809-00-A_alt.jpg'],
      stock: 16,
      price: 25,
      sizes: ['XS', 'S'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Licensed Soft Towels',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['8529387-00-A_0_2000.jpg', '8529387-00-A_1.jpg'],
      stock: 0,
      price: 30,
      sizes: ['XS', 'S'],
      category: 'Grocery',
      gender: ['kid'],
    },
    {
      title: 'Sleek Granite Hat',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1473834-00-A_2_2000.jpg', '1473829-00-A_2_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S'],
      category: 'Grocery',
      gender: ['kid'],
    },
    {
      title: 'Intelligent Soft Tuna',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1742702-00-A_0_2000.jpg', '1742702-00-A_1.jpg'],
      stock: 10,
      price: 65,
      sizes: ['XS', 'S', 'M'],
      category: 'Computers',
      gender: ['kid'],
    },
    {
      title: 'Gorgeous Soft Car',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Computers',
      gender: ['kid'],
    },
    {
      title: 'Sleek Cotton Computer',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      stock: 10,
      price: 171,
      sizes: ['XS', 'S', 'M'],
      category: 'Grocery',
      gender: ['kid'],
    },
    {
      title: 'Incredible Fresh Soap',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      stock: 10,
      price: 308,
      sizes: ['XS', 'S', 'M'],
      category: 'Toys',
      gender: ['kid'],
    },
    {
      title: 'Rustic Plastic Bike',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      stock: 10,
      price: 630,
      sizes: ['XS', 'S', 'M'],
      category: 'Beauty',
      gender: ['kid'],
    },
    {
      title: 'Ergonomic Steel Hat',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      stock: 10,
      price: 964,
      sizes: ['XS', 'S', 'M'],
      category: 'Clothing',
      gender: ['kid'],
    },
    {
      title: 'Small Soft Ball',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      stock: 10,
      price: 193,
      sizes: ['XS', 'S', 'M'],
      category: 'Kids',
      gender: ['kid'],
    },
    {
      title: 'Incredible Wooden Chips',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
      stock: 10,
      price: 602,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Small Steel Ball',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      category: 'Tools',
      gender: ['kid'],
    },
    {
      title: 'Gorgeous Wooden Chicken',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      stock: 10,
      price: 998,
      sizes: ['XS', 'S', 'M'],
      category: 'Baby',
      gender: ['kid'],
    },
    {
      title: 'Licensed Granite Bacon',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
      stock: 10,
      price: 22,
      sizes: ['XS', 'S', 'M'],
      category: 'Movies',
      gender: ['kid'],
    },
    {
      title: 'Generic Soft Shoes',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      stock: 10,
      price: 756,
      sizes: ['XS', 'S', 'M'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Ergonomic Metal Pizza',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 142,
      sizes: ['XS', 'S', 'M'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Fantastic Fresh Keyboard',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 593,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Licensed Cotton Gloves',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 758,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Incredible Fresh Hat',
      description:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 628,
      sizes: ['XS', 'S', 'M'],
      category: 'Books',
      gender: ['kid'],
    },
    {
      title: 'Tasty Granite Car',
      description:
        'Boston"s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 170,
      sizes: ['XS', 'S', 'M'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Rustic Plastic Chips',
      description:
        'Boston"s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 648,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Handcrafted Concrete Shirt',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 6,
      sizes: ['XS', 'S', 'M'],
      category: 'Industrial',
      gender: ['kid'],
    },
    {
      title: 'Generic Wooden Computer',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      stock: 10,
      price: 784,
      sizes: ['XS', 'S', 'M'],
      category: 'Sports',
      gender: ['kid'],
    },
    {
      title: 'Generic Soft Hat',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      stock: 10,
      price: 362,
      sizes: ['XS', 'S', 'M'],
      category: 'Games',
      gender: ['kid'],
    },
    {
      title: 'Rustic Wooden Salad',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      stock: 10,
      price: 318,
      sizes: ['XS', 'S', 'M'],
      category: 'Music',
      gender: ['kid'],
    },
    {
      title: 'Practical Steel Gloves',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      stock: 10,
      price: 744,
      sizes: ['XS', 'S', 'M'],
      category: 'Books',
      gender: ['kid'],
    },
    {
      title: 'Gorgeous Fresh Salad',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      stock: 10,
      price: 380,
      sizes: ['XS', 'S', 'M'],
      category: 'Beauty',
      gender: ['kid'],
    },
    {
      title: 'Rustic Rubber Gloves',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      stock: 10,
      price: 987,
      sizes: ['XS', 'S', 'M'],
      category: 'Kids',
      gender: ['kid'],
    },
    {
      title: 'Handcrafted Granite Chips',
      description:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      images: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      stock: 10,
      price: 655,
      sizes: ['XS', 'S', 'M'],
      category: 'Health',
      gender: ['kid'],
    },
    {
      title: 'Generic Rubber Table',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      stock: 10,
      price: 139,
      sizes: ['XS', 'S', 'M'],
      category: 'Beauty',
      gender: ['kid'],
    },
    {
      title: 'Practical Rubber Computer',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      stock: 10,
      price: 627,
      sizes: ['XS', 'S', 'M'],
      category: 'Industrial',
      gender: ['kid'],
    },
    {
      title: 'Fantastic Granite Cheese',
      description:
        'Boston"s most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles',
      images: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
      stock: 10,
      price: 361,
      sizes: ['XS', 'S', 'M'],
      category: 'Clothing',
      gender: ['kid'],
    },
    {
      title: 'Ergonomic Cotton Keyboard',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
      stock: 10,
      price: 235,
      sizes: ['XS', 'S', 'M'],
      category: 'Toys',
      gender: ['kid'],
    },
    {
      title: 'Awesome Granite Tuna',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      stock: 10,
      price: 324,
      sizes: ['XS', 'S', 'M'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Intelligent Concrete Shirt',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
      stock: 10,
      price: 127,
      sizes: ['XS', 'S', 'M'],
      category: 'Toys',
      gender: ['kid'],
    },
    {
      title: 'Refined Steel Pants',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      stock: 10,
      price: 39,
      sizes: ['XS', 'S', 'M'],
      category: 'Grocery',
      gender: ['kid'],
    },
    {
      title: 'Handmade Frozen Chicken',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['7654399-00-A_0_2000.jpg', '7654399-00-A_1.jpg'],
      stock: 10,
      price: 173,
      sizes: ['XS', 'S', 'M'],
      category: 'Industrial',
      gender: ['kid'],
    },
    {
      title: 'Fantastic Frozen Towels',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: ['7652410-00-A_0.jpg', '7652410-00-A_1_2000.jpg'],
      stock: 10,
      price: 120,
      sizes: ['XS', 'S', 'M'],
      category: 'Industrial',
      gender: ['kid'],
    },
    {
      title: 'Sleek Wooden Shirt',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['8764600-00-A_0_2000.jpg', '8764600-00-A_2.jpg'],
      stock: 10,
      price: 301,
      sizes: ['XS', 'S', 'M'],
      category: 'Baby',
      gender: ['kid'],
    },
    {
      title: 'Tasty Concrete Cheese',
      description:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      images: ['8764813-00-A_0_2000.jpg', '8764813-00-A_1.jpg'],
      stock: 10,
      price: 946,
      sizes: ['XS', 'S', 'M'],
      category: 'Music',
      gender: ['kid'],
    },
    {
      title: 'Awesome Granite Salad',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['8529198-00-A_0_2000.jpg', '8529198-00-A_1.jpg'],
      stock: 10,
      price: 443,
      sizes: ['XS', 'S', 'M'],
      category: 'Automotive',
      gender: ['kid'],
    },
    {
      title: 'Rustic Fresh Chicken',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 10,
      price: 413,
      sizes: ['XS', 'S', 'M'],
      category: 'Grocery',
      gender: ['kid'],
    },
    {
      title: 'Licensed Wooden Shoes',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 189,
      price: 340,
      sizes: ['XS', 'S', 'M'],
      category: 'Tools',
      gender: ['kid'],
    },
    {
      title: 'Intelligent Wooden Mouse',
      description:
        'The Football Is Good For Training And Recreational Purposes',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 300,
      price: 403,
      sizes: ['XS', 'S', 'M'],
      category: 'Toys',
      gender: ['kid'],
    },
    {
      title: 'Ergonomic Cotton Tuna',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 322,
      price: 143,
      sizes: ['XS', 'S', 'M'],
      category: 'Shoes',
      gender: ['kid'],
    },
    {
      title: 'Incredible Concrete Towels',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 351,
      price: 279,
      sizes: ['XS', 'S', 'M'],
      category: 'Electronics',
      gender: ['kid'],
    },
    {
      title: 'Tasty Rubber Table',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 703,
      price: 384,
      sizes: ['XS', 'S', 'M'],
      category: 'Electronics',
      gender: ['kid'],
    },
    {
      title: 'Small Wooden Fish',
      description:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 432,
      price: 949,
      sizes: ['XS', 'S', 'M'],
      category: 'Baby',
      gender: ['kid'],
    },
    {
      title: 'Intelligent Cotton Keyboard',
      description:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 995,
      price: 330,
      sizes: ['XS', 'S', 'M'],
      category: 'Kids',
      gender: ['kid'],
    },
    {
      title: 'Licensed Plastic Cheese',
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 308,
      price: 714,
      sizes: ['XS', 'S', 'M'],
      category: 'Games',
      gender: ['kid'],
    },
    {
      title: 'Tasty Fresh Shirt',
      description:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 244,
      price: 703,
      sizes: ['XS', 'S', 'M'],
      category: 'Toys',
      gender: ['kid'],
    },
    {
      title: 'Generic Steel Chair',
      description:
        'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 583,
      price: 40,
      sizes: ['XS', 'S', 'M'],
      category: 'Jewelery',
      gender: ['kid'],
    },
    {
      title: 'Awesome Concrete Tuna',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      images: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 624,
      price: 252,
      sizes: ['XS', 'S', 'M'],
      category: 'Clothing',
      gender: ['kid'],
    },
  ],
};
