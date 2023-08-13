import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

UpdateItemQuantity.propTypes = {
    pizzaId: PropTypes.number.isRequired, // Ensure pizzaId is a required number
    currentQuantity: PropTypes.number.isRequired, // Ensure currentQuantity is a required number
  };

export default UpdateItemQuantity;