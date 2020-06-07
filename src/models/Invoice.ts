import { Inventory } from "./Inventory";

export class Invoice {

    invoice_id: number;
    username: string;
    total_cost: number;
    date_ordered: Date;
    items: Inventory[];

    constructor (invoice_id: number, username: string, total_cost: number, date_ordered: Date, items: Inventory[]) {
        
        this.invoice_id = invoice_id;
        this.username = username;
        this.total_cost = total_cost;
        this.date_ordered = date_ordered;
        this.items = items;
    }
}