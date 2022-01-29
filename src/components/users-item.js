import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const UserItem = ({info}) => {
    if (info) {
        return (
            <div className="alert border border-2 d-flex justify-content-between">
                <h4 className="align-self-center">{info.name}</h4>
                <Link className="w-25" to={`/users/${info._id}`}>
                    <img className="w-100 rounded-circle"
                        src={info.img} alt={info.name}/>
                </Link>
            </div>
        )
    }
    return <p>No Info prop available</p>
}

export default UserItem;