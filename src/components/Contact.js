import React, { useState, useEffect, useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [key, setKey] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const typewriterRef = useRef(null);

  const restartTypewriter = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const getObserver = (entries) => {
    entries.forEach((entry) => {
      setIsInViewport(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(getObserver, {
      threshold: 0.5,
    });

    if (typewriterRef.current) {
      observer.observe(typewriterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!initialLoad && isInViewport) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [isInViewport, initialLoad]);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        "service_4v7868v",
        "template_91wo049",
        form,
        "0b6BthkKhn9IHIWOz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactDiv">
      <h1 id="contact-header">CONTACT</h1>
      <div
        key={key}
        className={`typewriter ${isInViewport ? "restart-animation" : ""}`}
        onClick={restartTypewriter}
        ref={typewriterRef}
      >
        <div className="type-div">
          <h1>printf("Hello!")</h1>
        </div>
        <p>Any questions or proposals? Type away!</p>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <form onSubmit={sendEmail}>
            <span className="flex name-email">
              <div className="one">
                <label htmlFor="name">Name</label>
                <input name="name" className="control" type="text" id="name" />
              </div>
              <div className="two">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  className="control"
                  type="text"
                  id="email"
                />
              </div>
            </span>
            <label htmlFor="message">Message</label>
            <input
              name="message"
              className="control"
              type="text"
              id="message"
            />
            <div className="send-btn">
              <button type="submit" id="send">
                Send <FontAwesomeIcon icon={faArrowRight} id="send-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
