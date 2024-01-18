import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, category, company, order, price, shipping } = params;

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        label="Search Product"
        name="search"
        type="search"
        size="input-sm"
        defaultValue={search}
      />

      <FormSelect
        label="Select Category"
        name="category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        label="Select Company"
        name="company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        label="Sort By"
        name="order"
        size="select-sm"
        list={["A-Z", "Z-A", "High", "Low"]}
        defaultValue={order}
      />
      <FormRange
        name="price"
        label="Select Price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />

      <button type="submit" className="btn btn-primary btn-sm">
        SEARCH
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        RESET
      </Link>
    </Form>
  );
};
export default Filters;
