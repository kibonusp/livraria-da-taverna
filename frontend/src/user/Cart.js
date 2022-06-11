import { Link } from "react-router-dom"

export default function Cart() {
    return (
        <>
            <p>Cart</p>

            <Link to="/cart/confirm">
                <button>Comprar</button>
            </Link>
            <Link to="login">
                <button>login</button>
            </Link>
        </>
    )
}