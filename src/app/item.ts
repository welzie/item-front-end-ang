export class Item {

    name: string;
    price: number;
    description: string;
    newItem: boolean;

    constructor(name: string, price: number, description: string, newItem: boolean) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.newItem = newItem;
    }
}
