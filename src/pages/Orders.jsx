import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrdersList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("Please login to view your orders");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || "Please try again";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || error?.response?.status === 403)
        return redirect("/login");

      return null;
    }
  };

const Orders = () => {
  const { orders } = useLoaderData();

  if (orders.length < 1) return <SectionTitle text="There are no orders yet" />;

  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
