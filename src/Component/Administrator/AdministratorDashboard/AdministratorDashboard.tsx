import axios from "axios";
import React, { useEffect, useState } from "react";
import { Config } from "../../../Config/config";
import "./AdministratorDashboard.scss";

function AdministratorDashboard() {
  const [users, setUsers] = useState([
    {
      userId: 0,
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  ]);

  const [currentUsers, setCurrentUsers] = useState({
    userId: 0,
    name: "",
    surname: "",
    email: "",
    messages: [{ messageId: 0, message: "", userId: 0 }],
  });
  const [photos, setPhotos] = useState([
    {
      createAt: "",
      messageId: 0,
      photoId: 0,
      photoPath: "",
      userId: 0,
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/allUser")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  function currentUser(userId: number) {
    axios
      .get(`${Config.baseUrl}api/getUserWithMessage/${userId}`)
      .then((res) => {
        setCurrentUsers(res.data);
      })
      .catch((error) => console.log(error.data));
    axios
      .get(`${Config.baseUrl}api/allPhotoForUser/${userId}`)
      .then((res) => setPhotos(res.data))
      .catch((error) => console.log(error.data));
  }

  return (
    <section id="administratorDashboard">
      <div className="adminInfo">
        <div className="adminLogo">
          <h1>Perionica vasic</h1>
        </div>
        <div className="adminName">
          <p>Administrator: {localStorage.getItem("adminName")} </p>
        </div>
      </div>
      <div className="data-container">
        <div className="user">
          {users.map((user, index) => (
            <div
              key={index}
              onClick={() => currentUser(user.userId)}
              className="userContainerInfo"
            >
              <div>{index + 1}</div>
              <div className="userContainerData">
                <p> {user.name} </p>
                <p> {user.surname} </p>
                <p> {user.email} </p>
              </div>
            </div>
          ))}
        </div>
        <div className="message">
          {currentUsers.userId === 0 ? (
            ""
          ) : (
            <div className="current">
              <div className="currentUserInfo">
                <p>
                  Ime: <span>{currentUsers.name}</span>{" "}
                </p>
                <p>
                  Prezime: <span>{currentUsers.surname}</span>{" "}
                </p>
                <p>
                  Email: <span>{currentUsers.email}</span>{" "}
                </p>
              </div>
              <div className="currentMessage">
                <div className="currentMessageContainer">
                  {currentUsers.messages.map((message, index) => (
                    <div key={index}>
                      <p>{message.message}</p>
                    </div>
                  ))}
                </div>
                <div className="currentImgContainer">
                  {photos.map((photo, index) => (
                    <div>
                      <img
                        key={index}
                        src={`${Config.baseUrl}${Config.assetsPhoto}small/${photo.photoPath}`}
                        alt={photo.photoPath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdministratorDashboard;
