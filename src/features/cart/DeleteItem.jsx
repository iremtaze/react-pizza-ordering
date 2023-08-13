import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import PropTypes from "prop-types"; // Import PropTypes


function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            Delete
        </Button>
    );
    }    

    DeleteItem.propTypes = {
        pizzaId: PropTypes.number.isRequired, // Adjust the type if necessary
    };

export default DeleteItem;