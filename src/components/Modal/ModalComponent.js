import React, { useState } from "react";
import "./ModalComponent.scss";
import ExchangesComponent from "../Exchanges/ExchangesComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import queryString from "query-string";

const ModalComponent = (props) => {
  const { header, onModalClose } = props;
  const [currency, setCurrency] = useState("usdt");
  const [amount, setAmount] = useState(0);

  const api = "https://wazirx-transfers-d7ta793lwrm1.runkit.sh/transfers";
  const payload = {
    amount: amount,
    currency: currency,
  };

  const exchanges = [
    {
      type: "From",
      imageURL: "./logos/wazirx.png",
      name: "WazirX",
    },
    {
      type: "To",
      imageURL: "./logos/binance.png",
      name: "Binance",
    },
  ];

  const getExchanges = () => {
    return exchanges.map((item, index) => {
      if (index === 0) {
        return (
          <>
            <ExchangesComponent
              key={item.name}
              type={item.type}
              imageURL={item.imageURL}
              name={item.name}
            />
            <img src="./logos/arrow.png" className="arrow"></img>
          </>
        );
      } else {
        return (
          <ExchangesComponent
            key={item.name}
            type={item.type}
            imageURL={item.imageURL}
            name={item.name}
          />
        );
      }
    });
  };

  const onTranfer = () => {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: queryString.stringify(payload),
    }).then((response) => console.log(response));
  };

  return (
    <div className="modal-component">
      <section>
        <div className="head">
          <h3>
            {header}
            <i class="fa fa-times" onClick={(e) => onModalClose(e)}></i>
          </h3>
        </div>

        <div className="body">
          <div className="exchanges-container">{getExchanges()}</div>

          <div>
            <select
              id="currency"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
              value={currency}
            >
              <option value="usdt">Tether USD</option>
              <option value="btc">Bitcoin</option>
              <option value="xrp">Ripple</option>
              <option value="ltc">Litecoin</option>
              <option value="trx">Tron</option>
            </select>
          </div>

          <div className="amount-container">
            <div className="flex-column">
              <div>Amount</div>
              <div className="currency">{currency} </div>
            </div>
            <input
              type="number"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              value={amount}
            />
          </div>

          <ButtonComponent
            label={"Transfer to Binance"}
            onClick={() => onTranfer()}
            isDisabled={amount <= 0}
          />
        </div>
      </section>
    </div>
  );
};

export default ModalComponent;
