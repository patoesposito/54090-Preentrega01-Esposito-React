import { Button } from "bootstrap";
function UserCard(props) {

    console.log(props)
    console.log(props.name)

    return (
        <div className="user-card">
            <img src="https://picsum.photos/200" alt="" />
            <h2>props.nombre</h2>
            <button>Comprar</button>
        </div>
    )
}

export default UserCard