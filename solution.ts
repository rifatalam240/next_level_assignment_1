const formatValue = (
  value: string | number | boolean
): number | boolean | string => {
  if (typeof value === "number") {
    return 10 * value;
  } else if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    return !value;
  }
  throw new Error("Invalid type");
};

const getLength = (value: string | any[]): number => {
  if (typeof value === "string") {
    const res = value.length;
    return res;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("invalid type");
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = { title: string; rating: number };
const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => {
    return (
      typeof item.rating === "number" &&
      item.rating <= 5 &&
      item.rating >= 4 &&
      item.rating >= 0
    );
  });
};

type Users = { id: number; name: string; email: string; isActive: boolean };
const filterActiveUsers = (activeUser: Users[]): Users[] => {
  return activeUser.filter((user) => {
    return typeof user.isActive === "boolean" && user.isActive === true;
  });
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  const available = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
};

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const newarr: T[] = [];

  for (const item of arr1) {
    let found = false;
    for (const val of newarr) {
      if (item === val) {
        found = true;
        break;
      }
    }
    if (!found) newarr.push(item);
  }

  for (const item of arr2) {
    let found = false;
    for (const val of newarr) {
      if (item === val) {
        found = true;
        break;
      }
    }
    if (!found) newarr.push(item);
  }

  return newarr;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map((product) => {
      const total = product.price * product.quantity;
      if (product.discount) {
        return total * (1 - product.discount / 100);
      }
      return total;
    })
    .reduce((sum, productTotal) => sum + productTotal, 0);
};
