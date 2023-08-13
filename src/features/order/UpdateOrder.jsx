import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

// Define prop types for the component
UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired, // Adjust the prop type according to your needs
};

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
