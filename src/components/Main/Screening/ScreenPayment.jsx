import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Title, Button } from "../../Atoms/Atoms";

const ScreenPayment = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  return (
    <React.Fragment>
      <div className="screening-block screening-block_payment">
        <div className=" card screening-block_card">
          <div className="screening-block_card-top">
            <Title
              text={"Способ оплаты"}
              className="screening-block_card_title"
            />
          </div>
          <div className="card-body screening-payment">
            <span className="screening-payment_text">{data}</span>
            <div className="screening-payment_control">
              <Button
                text="Изменить"
                type="screening"
                onClick={() =>
                  navigate({
                    pathname: `/fe-dev-diploma/personal_information/${params.id}`,
                    search: location.search,
                  })
                }
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ScreenPayment;