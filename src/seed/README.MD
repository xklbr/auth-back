# Seed

Run the seed to delete and create all database information such as users, products and images.

1. You need to have the fill information ready in the Seed module data folder.
2. Make sure all the fields, match your entities.
3. Make a get request on a rest client to the apiUrl/seed end-point.

> Create as many **users** and **products** as you need by duplicating the objects that represent them.

Examples:

**Products**

```TypeScript
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
type ValidCategory = 'Category_1' | 'Category_2' | 'Category_3';
type ValidGender = 'men' | 'women' | 'kid' | 'unisex';

interface SeedProductsData {
  products: SeedProduct[];
}

export const seedProductsData: SeedProductsData = {
  products: [
    {
      title: 'Title product',
      description: 'Description',
      images: ['image_1.jpg', 'image_2.png'],
      stock: 10,
      price: 100,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      category: 'Category',
      gender: ['unisex'],
    },
  ]
}
```

**Users**

```TypeScript
interface seedUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  roles?: string[];
}

interface SeedUsersData {
  users: seedUser[];
}

export const seedUsersData: SeedUsersData = {
  users: [
    {
      name: 'Name',
      lastname: 'Lastname',
      email: 'email@example.com',
      password: 'YourSecurePassword',
      roles: ['Admin', 'User'],
    },
  ]
}
```
