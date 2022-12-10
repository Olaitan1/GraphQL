import mongoose, { Schema } from "mongoose";




export interface listingType
{
    _id: string,
    title: string,
    image: string,
    address: string,
    price: number,
    numsOfBeds: number,
    numsOfbaths: number,
    rating: number
}

const listingSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    numsOfBeds: { type: Number, required: true },
    numsOfbaths: { type: Number, required: true },
    rating: { type: Number, required: true },
}, {
    timestamps: true
    }
)

export const Listing = mongoose.model<listingType>('Listing', listingSchema)