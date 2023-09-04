import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import car from "../assets/models/car.glb";
import ioscar from "../assets/models/car.usdz";
import car1 from "../assets/models/Car1.glb";
import ioscar1 from "../assets/models/Car1.usdz";

const productItems = [
  {
    id: 1,
    name: "Sheen Chair",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange",
  },
  {
    id: 2,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
  },
  {
    id: 3,
    name: "Car",
    modelSrc: car,
    iOSSrc: ioscar,
    category: "Vehicle",
    color: "Blue",
  },

  {
    id: 4,
    name: "Sport Car",
    modelSrc: car1,
    iOSSrc: ioscar1,
    category: "Vehicle",
    color: "Red",
  },
];
export default productItems;
