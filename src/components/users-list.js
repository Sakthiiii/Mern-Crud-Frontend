import { useSelector } from "react-redux";
import UserItem from "./users-item";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const UsersList = () => {

        const users = useSelector((state)=>state.users.list);
        if(users){
                return users.map((user)=>(<UserItem info={user} key={user._id}/>)) 
        }
        return <p>
           Loading Users...
        </p>}
export default UsersList;