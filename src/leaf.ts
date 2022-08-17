import { getRandom } from "./helpers";

export interface ILeaf {
    size: number;
    grow: ()=>void;
}

export class Leaf implements ILeaf {
    size: number;

    constructor() {
        this.size = 1;
    }

    grow() {
        this.size+=getRandom(1, 4);
    }
}
