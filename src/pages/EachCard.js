import React, { useEffect, useState } from "react";
import data from "../Data";
import Profile from "./Profile";
import SearchSection from "./SearchSection";

const allItems = [
  "all",
  ...new Set(data.default.records.profiles.map((item) => item.PaymentMethod)),
];
console.log(allItems);
const EachCard = () => {
  const [detail, setDetail] = useState(data.default.records.profiles);
  const [search, setSearch] = useState(allItems);
  useEffect(() => {
    fetch(`https://api.enye.tech/v1/challenge/records`)
      .then((resp) => resp.json())
      .then((response) => console.log(response));
  }, []);

  const filterItems = (filterItem) => {
    if (filterItem === "all") {
      setDetail(data.default.records.profiles);
      return;
    }
    const newItem = data.default.records.profiles.filter(
      (method) => method.PaymentMethod === filterItem
    );
    setDetail(newItem);
  };

  return (
    <>
      <SearchSection filterItems={filterItems} allItems={search} />
      <div className="grandparent">
        {detail.map((profile) => {
          const {
            CreditCardNumber,
            CreditCardType,
            DomainName,
            Email,
            FirstName,
            Gender,
            LastLogin,
            LastName,
            Latitude,
            Longitude,
            MacAddress,
            PaymentMethod,
            PhoneNumber,
            UserName,
            URL,
          } = profile;

          return (
            <div className="hmmm">
              <section className="container">
                <div className="parent">
                  <div className="front-page">
                    <p>
                      <span>Names: </span> {FirstName + "   " + LastName}
                    </p>
                    <p>
                      <span>Username: </span> {UserName} | <span>Gender: </span>
                      {Gender}
                    </p>
                    <p>
                      <span>Email: </span>
                      {Email}
                    </p>
                    <div className="card-type">
                      <p>
                        <a href={`${URL}`} target="_blank">
                          Portfolio
                        </a>
                      </p>
                      <p>{CreditCardType}</p>
                    </div>
                    <p>
                      <span>Phone Number: </span>
                      {PhoneNumber}
                    </p>
                  </div>
                  <div className="back-page">
                    <p className="card-number">{CreditCardNumber}</p>
                    <div className="back-bottom">
                      <p>
                        <span>Payment Method: </span>
                        {PaymentMethod}
                      </p>
                      <p>
                        <span>Domian Name: </span>
                        {DomainName}
                      </p>
                      <p className="last-login">
                        <span>Last Login: </span>
                        {LastLogin}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EachCard;
