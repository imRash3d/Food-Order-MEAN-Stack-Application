export class Restaurant {
    $key:string;
    image:string;
    name:string;
    address:string;
    food_item:FoodItem[]
}


export class FoodMenu {
    food_name:string;
    description:string;
    price:string;
    quantity:number;
}

export class FoodItem {
    name:string;
    food_menu:FoodMenu[]
}