import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null as any);
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  function sendRequest(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (name === "" || surname === "" || email === "" || message === "") return;

    axios
      .post("http://localhost:3000/api/addUser", {
        name: name,
        surname: surname,
        email: email,
        message: message,
      })
      .then((res) => {
        if (file === null) return setShowMessage(true);

        let data = new FormData();
        data.append("photo", file);

        axios
          .post(
            `http://localhost:3000/api/uploadPhoto/${res.data[0].userId}/${res.data[1]}`,
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            setShowMessage(true);
          })
          .catch((error) => {
            setShowMessage(true);
            setErrorMessage(true);
          });
      })
      .catch((error) => console.log(error));
  }

  return (
    <section id="contactForm">
      <div
        data-testid="warning"
        className={!showMessage ? "hidenMessage" : "message"}
      >
        {!errorMessage ? (
          <p>
            Hvala sto ste nam se obratili. Pokusacemo da vam odgovorimo u sto
            kracem roku!
          </p>
        ) : (
          <p>Slike moraju biti u .jpg ili .png formatu!</p>
        )}

        <button
          onClick={() => {
            setShowMessage(false);
            setErrorMessage(false);
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
      <div className="contractContainer">
        <div className="contractTitle">
          <h1>
            Ukoliko imate neko pitanje kontaktirajte nas. Uvek smo tu za vas!!
          </h1>
        </div>
        <form>
          <input
            data-testid="name"
            type="text"
            placeholder="Ime"
            value={name}
            required
            onChange={(evant) => {
              setName(evant.target.value);
            }}
          />
          <input
            data-testid="surname"
            type="text"
            placeholder="Prezime"
            required
            value={surname}
            onChange={(evant) => setSurname(evant.target.value)}
          />
          <input
            data-testid="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(evant) => setEmail(evant.target.value)}
          />
          <textarea
            data-testid="message"
            cols={20}
            rows={5}
            value={message}
            required
            placeholder="Poruka"
            maxLength={255}
            onChange={(evant) => setMessage(evant.target.value)}
          ></textarea>
          <label htmlFor="file-upload" placeholder="Izaberi sliku">
            Izaberi sliku
          </label>
          <input
            data-testid="fileInput"
            type="file"
            id="file-upload"
            onChange={(evant) => {
              evant.target.files
                ? setFile(evant.target.files[0])
                : setFile(null);
            }}
          />
          <button onClick={(e) => sendRequest(e)}>Posalji...</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
