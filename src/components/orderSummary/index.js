/*************************
 * author   : Menjith P
 * Purpose  : Order summary/Order Confrmation View
 *
 *******************/

//default packages
import { useEffect,useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
//antd packages
import { ArrowLeftOutlined, HomeFilled } from "@ant-design/icons";
import { Col, Row, Typography, Button } from "antd";
//Component imports
import Header from "../header";

const { Title, Text } = Typography;

export default function Order() {
  const navigate = useNavigate();
  const foodapp = useSelector((state) => state.foodapp);
  const location = useLocation();
  const state = JSON.parse(JSON.stringify(foodapp.ordersummary));

  useEffect(() => {
    if (!state) navigate("/");
  }, []);
  const filterkeys = useMemo(()=>({
    "Name:": "name",
    "Email": "email",
    "Mobile number": "phone",
    "Indididual Price": "price",
    "Total Orders": "orders",
    "Total Price": "totalprice",
    "Residence": "residence",
    "Address": "address",
    "Pincode": "pincode",
    "Status": "status",
  }),[]);

  if (!state) return null;
  state.status = "Order placed Successfully";

//return <p>{state.name}</p>
  return (
    <section className="order-page">
      <Header>
        <div className="d-flex align-items-center justify-content-between">
          <Button onClick={() => navigate(location.state)}>
            <ArrowLeftOutlined />
          </Button>
          <Title
            className="font-weight-100 letter-spacing-1 violet-color"
            level={3}
          >
            Order Summary
          </Title>
          <Button onClick={() => navigate("/")}>
            <HomeFilled />
          </Button>
        </div>
      </Header>
      <Typography>
        <ul>
          {Object.keys(filterkeys).map((key, index) => (
            <li key={index}>
              <Row>
                <Col>
                  <span className="list-marker"></span>
                </Col>
                <Col xs={8} sm={8} md={8} lg={6} xl={6}>
                  <Text type="secondary" strong>
                    {key}
                  </Text>
                </Col>
                <Col>
                  <Text
                    className={key === "Status" && "font-weight-100"}
                    type={key === "Status" ? "success" : "secondary"}
                  >
                    {state[filterkeys[key]]}
                  </Text>
                </Col>
              </Row>
            </li>
          ))}
          <li></li>
        </ul>
      </Typography>
    </section>
  );
}
