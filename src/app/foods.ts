    export let foods =[{
        name: "Sushi",
        image: "https://www.edeka.de/media/01-rezeptbilder/rezeptbilder-q-t/rez-edeka-sushi-variationen-rezept-q-t.jpg?imwidth=960&imdensity=1",
        description: "Lorem, ipsum dolor libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
        price: 17,
        availability: true,
        },
        {
            name: "Grill",
        image: "https://images-gmi-pmc.edge-generalmills.com/331fb539-79c0-4664-b1f6-1107d8cc8bef.jpg",
        description: "Lorem, ipsum dolor libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
        price: 21,
        availability: true,
        },
        {
        name: "Pasta",
        image: "https://food-images.files.bbci.co.uk/food/recipes/chicken_arrabiata_88408_16x9.jpg",
        description: "Lorem, ipsum dolor libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
        price: 11,
        availability: false,
        },
        
        {
        name: "Steak",
        image: "https://image.kurier.at/images/cfs_landscape_1232w_693h/1409547/46-76815414.jpg",
        description: "Lorem, ipsum dolor libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
        price: 18,
        availability: true,
        },
        {
            name: "Burger",
            image: "https://www.koch-mit.de/app/uploads/2022/08/burger_rezepte_titelbild.jpg",
            description: "Lorem, ipsum dolos libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
            price: 15,
            availability: false,
            },
            {
                name: "Pizza",
            image: "https://www.costakreuzfahrten.at/content/dam/costa/costa-magazine/article-images/61c44de/pizza_principale.jpg.image.694.390.low.jpg",
            description: "Lorem, ipsum dolor libero pariatur unde officia id animi ipsum vero dolores distinctio. Magnam, ipsum sapiente?",
            price: 15,
            availability: true,
            },
];

export interface ifood{
    name: string;
    image: string;
    description: string;
    price: number;
    availability: boolean;
}