import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You need to login first");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) return <SectionTitle text="Your cart is empty" />;

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
