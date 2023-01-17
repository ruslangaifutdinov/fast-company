import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import QualitiesList from "../../ui/qualities";

const User = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(userId).then((data) => {
            setUser(data);
        });
    }, []);

    const handleEditClick = () =>
        history.push(history.location.pathname + "/edit");

    if (user) {
        return (
            <div className="row">
                <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-start">
                    <div className="card">
                        <div className="card-header bg-primary">
                            <h1 className="mg-clear text-lg-center text-light">
                                {user.name}
                            </h1>
                        </div>
                        <div className="card-body">
                            <p>
                                <b>Профессия:</b> {user.profession.name}
                            </p>
                            <p>
                                <b>Качества:</b>{" "}
                                {<QualitiesList qualities={user.qualities} />}
                            </p>
                            <p>
                                <b>Встретился раз: </b>
                                {user.completedMeetings}
                            </p>
                            <p>
                                <b>Рейтинг: </b> {user.rate} / 5
                            </p>
                            <button
                                className="btn btn-lg w-100 btn-success"
                                onClick={handleEditClick}
                            >
                                Изменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <div>Loading....</div>;
};
User.propTypes = {
    userId: PropTypes.string,
};

export default User;
