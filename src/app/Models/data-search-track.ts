import {Artist} from "./Artist";
import { Album } from './album';
import {Track} from "./track";

export class DataSearchTrack {

    id: number;
    data: Track[];
    total: number;
    album: number;
    next: string;
}
