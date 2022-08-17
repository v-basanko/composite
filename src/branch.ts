import { ILeaf, Leaf } from "./leaf";
import { getRandom } from "./helpers";

export interface ITree {
    grow: () => void;
    shedLeaves: () => void;
    blossom: ()=> void;
    print: ()=>void;
    toJSON: ()=>any;
}

export class Branch implements ITree{
    branches: Array<ITree> = [];
    leafs: Array<ILeaf> = [];

    grow() {
        this.branches.forEach(branch=>branch.grow());
        this.leafs.forEach(leaf=>leaf.grow());
    }

    shedLeaves() {
        this.leafs = [];
        this.branches.forEach(branch=>branch.shedLeaves());
    }

    blossom() {
        for(let index = 2; index < getRandom(1, 20); index++) {
            if(getRandom(1, 10) > 7) {
                const branch = new Branch();
                branch.blossom();
                this.addBranch(branch);
            } else {
                this.addLeaf(new Leaf());
            }
        }
    }

    print() {
        console.log(JSON.stringify(this));
    }

    toJSON() {
        const result:any = {
            branches: this.branches
        };
        if(this.leafs.length) {
            result.leafs = this.leafs;
        }
        return result;
    }

    private addBranch(node:ITree):void {
        this.branches.push(node);
    }

    private addLeaf(leaf:ILeaf):void {
        this.leafs.push(leaf);
    }
}
