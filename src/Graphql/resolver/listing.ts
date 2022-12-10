import {Listing, listingType} from '../../model/listingModel';
import { createListing } from './type';
const ListingResolver = {
    Query: {
        allListings: async () =>
        {
            try {
                const listings = await Listing.find();
                return listings;
            } catch (error) {
                console.log(error);
            }
        }
    },

    
    Mutation: {
        createListing: async (_: unknown, args: createListing) =>
        {
            try {
            
                // const { title, image, address, price, numOfBeds, numOfBaths, rating } = input;
                const newListing = {
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numOfBeds: args.input.numOfBeds,
                    numOfBaths: args.input.numOfBaths,
                    rating: args.input.rating
                }
                const listing = await Listing.create(newListing);
                if (!listing) {
                    throw new Error("Listing not created");
                }
                return listing;
            } catch (error) {
                console.log(error);
            
            }
        }
        // updateListing: async (_: any, { input }: { input: listingType }) =>
        // {
        //     const { Listing } = input;
        //     return await Listing.findByIdAndUpdate(Listing, { new: true });
        // }

        //         updateListing: async (_: unknown, { input }: { input: listingType }) =>
        //         {
        //             try {
        //                 const listing = await Listing.findByIdAndUpdate
        //                     (input._id, input, { new: true });
        //             }
        //             catch (error) { 
        //                 console.log(error);

        //             }
        //         singleListing: async (_: unknown, { id }: { id: string }) =>
        //         {
            
        //         }
        //         deleteListing: async (_: unknown, { id }: { id: string }) =>
        //         {
        //             try {
        //                 const listing = await Listing.findByIdAndDelete(id);
        //                 if (!listing) {
        //                     throw new Error("Listing not found");
        //                 }
        //                 return {
        //                     message: "Listing deleted"
        //                 }
        //             } catch (error) {
        //                 console.log(error);
                
        //             }
        //         }
        //     }
        // }
    }

}

export default ListingResolver;