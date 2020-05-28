export class Inventory {

    item_id: number;
    item_name: string;
    details: string;
    cost: number;
    category: string;
    item_image: string;

    constructor (item_id: number, item_name: string, details: string, cost: number, category: string, item_image: string) {
        
        this.item_id = item_id;
        this.item_name = item_name;
        this.details = details;
        this.cost = cost;
        this.category = category;
        this.item_image = item_image;
    }
}