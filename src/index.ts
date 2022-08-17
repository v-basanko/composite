import { Branch } from "./branch";

const run = async () => {
    const tree = new Branch();

    for(let year = 1; year <= 10; year++) {
        for(const season of ['Spring', 'Summer', 'Autumn', 'Winter']) {
            switch (season) {
                case 'Spring': tree.blossom(); break;
                case 'Summer': tree.grow(); break;
                case 'Autumn': tree.shedLeaves(); break;
                default: break;
            }
            console.log(`\n${season} ${year}: `);
            tree.print();
        }
    }
}

run();
