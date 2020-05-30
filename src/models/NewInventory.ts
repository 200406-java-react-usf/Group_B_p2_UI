export class NewInventory {

    item_name: string;
    details: string;
    cost: number;
    category: string;
    item_image: string;

    constructor (item_name: string, details: string, cost: number, category: string, item_image: string) {
        
        this.item_name = item_name;
        this.details = details;
        this.cost = cost;
        this.category = category;
        this.item_image = item_image;
    }
}