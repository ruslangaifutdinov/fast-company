import { React, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../api/index";
import QualitiesList from "../../ui/qualities";

const User = () => {
    const params = useParams();
    const history = useHistory();
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(params.userId).then((data) => {
            setUser(data);
        });
    }, []);

    const handleReturns = () => history.replace("/users");

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
                                onClick={() => handleReturns()}
                            >
                                Вернуться к списку всех пользователей
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <div>Loading....</div>;
};

export default User;
