import ListingResolver from "./resolver/listing";

// const resolvers = [ListingResolver];


// export default resolvers;

export default {
    Query: {
        ...ListingResolver.Query
    },
    Mutation: {
        ...ListingResolver.Mutation
    }
}
