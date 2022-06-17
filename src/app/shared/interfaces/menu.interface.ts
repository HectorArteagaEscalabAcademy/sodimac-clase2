export interface Menu {
    title: string;
    route: string;
    items: Item[];
}

export interface Item {
    id:    string;
    route: string;
    name:  string;
}
