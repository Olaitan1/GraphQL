export interface Listing {
  title: string;
  image: string;
  address: string;
  price: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export interface createListing {
    input: Listing;
}