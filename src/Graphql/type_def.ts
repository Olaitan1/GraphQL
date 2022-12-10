import { gql } from 'apollo-server'


const typeDefs = gql`

type Listings  {
    id: ID!
    title: String
    image: String
    address: String
    price: Int
    numOfBeds: Int
    numOfBaths: Int
    rating: Int

}

input createListingInput  {
    title: String!,
    image: String!,
    address: String!,
    price: Int!,
    numOfBeds: Int!,
    numOfBaths: Int!,
    rating: Int!,

}

input UpdateListingInput  {
    title: String
    image: String
    address: String
    price: Int
    numOfBeds: Int
    numOfBaths: Int
    rating: Int

}

type Message{
    message: String
}

type Query = {
    allListings: [Listings!]!
    singleListing(id: ID!): Listings
}

type Mutation = {
    createListing(input: ListingInput!): Listings!
    deleteListing(id: ID!): Message!
    updateListing(input:ListingInput): Listings!
}  
`
export default typeDefs