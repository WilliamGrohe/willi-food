import { db } from "../_lib/prisma"
import { RestaurantItem } from "./restaurant-item";

export async function RestaurantList() {
  const restaurants = await db.restaurant.findMany({take: 10})
  
  return (
    <div className="flex overflow-x-scroll scroll-smooth gap-4 px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}