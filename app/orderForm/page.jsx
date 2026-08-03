import Footer from "@/components/pages/home/Footer";
import Header from "@/components/pages/home/Header";
import OrderForm from "@/components/reuse/OrderForm";

export const metadata = {
  title: "Place an Order | Its My Kitchen",
  description:
    "Order fresh homemade meals and cakes online. Delivery and pickup available.",
};

export default function OrderFormPage() {
  return (
    <>
      <Header />
      <main>
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
