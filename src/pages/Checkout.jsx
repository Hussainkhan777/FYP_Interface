import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => () => {
  const { user } = store.getState().user;
  if (!user) {
    toast.warn("you must login first to access the checkout page");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cart);
  if (cartTotal === 0) return <SectionTitle text="your cart is empty" />;

  return (
    <>
      <SectionTitle text="checkout" />
      <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
