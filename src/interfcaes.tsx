export interface Products {
  Products: {
    status: number;
    results: number;
    data: {
      _id: string;
      name: string;
      image: string;
      price: number;
      stock: number;
    }[];
  };
}
[];

export interface onlyProduct {
  _id: string;
  type: string;
  name: string;
  price: number;
  image: string;
  stock: number;
}

export interface Cart {
  Carts: {
    status: string;
    results: number;
    data: {
      _id: string;
      data: onlyProduct[];
    }[];
    id: string;
  };
}

export interface onlyCart {
  Cart: {
    status: string;
    results: number;
    data: {
      _id: string;
      data: onlyProduct;
    };
    id: string;
  };
}

export interface CheckOut {
  message: string;
  result: number;
  data: {
    _id: string;
    user: {
      _id: string;
      userName: string;
      actor: string;
      Email: string;
      Password: string;
      image: string;
    };
    cart: onlyProduct[];
  }[];
}

export interface Profile {
  _id: string;
  userName: string;
  Email: string;
}
