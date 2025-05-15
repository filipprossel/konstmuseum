import { ArtWork } from "./artwork.model";

export interface Review {
    review_id: number;
    Art: ArtWork
    grade: number;
    review: String;
}