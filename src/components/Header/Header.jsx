import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const {user, onClose} = useTelegram();
const Header = (props) => {

    return (
        <div className="header">
            <Button onClick={onClose}>Close</Button>
            <span className="username">{user?.username}</span>
        </div>
    )
};

export default Header;