import { getRole } from "../../config/storage";

// assets
import HomeIcon from "../../assets/image/home (2) 1.png";
import ProductIcon from "../../assets/image/package 1.png";
import CartIcon from "../../assets/image/shopping-cart (3) 1.png";
import MapIcon from "../../assets/image/map.png";
import ClipboardIcon from "../../assets/image/clipboard.png";

const getMenuBar = () => {
  const role = getRole();

  if (role === "seller") {
    return [
      {
        label: "Store",
        icon: HomeIcon,
        bgColor: "bg-primary",
        path: "/profile",
        subMenu: [
          {
            label: "Store Profile",
            path: "my-profile",
          },
        ],
      },
      {
        label: "Product",
        icon: ProductIcon,
        bgColor: "bg-success",
        path: "/profile/product",
        subMenu: [
          {
            label: "My Products",
            path: "my-product",
          },
          {
            label: "Selling Products",
            path: "selling",
          },
        ],
      },
      {
        label: "Order",
        icon: CartIcon,
        bgColor: "bg-danger",
        path: "/profile/order",
        subMenu: [
          { label: "My Order", path: "my-order" },
          {
            label: "Order Cancel",
            path: "order-cancel",
          },
        ],
      },
    ];
  } else if (role === "customer") {
    return [
      {
        label: "My account",
        icon: HomeIcon,
        bgColor: "bg-primary",
        path: "/profile",
      },
      {
        label: "Shipping Address",
        icon: MapIcon,
        bgColor: "bg-success",
        path: "/profile/shipping-address",
      },
      {
        label: "My order",
        icon: ClipboardIcon,
        bgColor: "bg-danger",
        path: "/profile/my-order",
      },
    ];
  }

  return [];
};

export default getMenuBar;
