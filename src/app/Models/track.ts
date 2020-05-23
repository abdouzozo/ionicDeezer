import {Artist} from "./Artist";
import {Album} from "./album";

export class Track {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    contributors: any[];
    artist: Artist;
    album: Album;
    type: string;
}
