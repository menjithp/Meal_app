/*************************
 * author   : Menjith P
 * Purpose  : Listing Meal Items
 *
 *******************/

//default imports
import { useLocation, useNavigate } from "react-router-dom";
import { useState,useMemo,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
//antd imports
import { Image, Button, Typography, Divider, Col, Row } from "antd";
import { ArrowLeftOutlined, YoutubeFilled } from "@ant-design/icons";
//redux imports
import {errormealfetch} from '../../store/reducer'
//components import
import Header from "../header";
import Form from "./mealForm";
import MealItemSkeleton from "./skeleton/mealItem";
//hooks imports
import { useFetchOneMeal } from "../../hooks/meals";

const { Title, Paragraph, Text, Link } = Typography;

export default function MealItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const foodapp=useSelector((state)=>state.foodapp)
  const dispatch=useDispatch()

  const { state, error } = useFetchOneMeal(location.pathname.replace("/", ""));
  const [Checkout, setcheckout] = useState(true);
  const [count, setcount] = useState([]);

  useMemo(() => {
    if (!state) return
    let localcount = [];
    Object.keys(state).forEach((key) => {
      if (key.includes("strIngredient") && !!state[key]) {
        localcount.push(retnum(key));
      }
    });
    setcount(localcount)
  }, [state]);


  useEffect(()=>{
    if(error)dispatch(errormealfetch(error))
},[state,error])

  if (!state) return <MealItemSkeleton />;
  if (error)
    return (
      <p className="font-weight-100 letter-spacing-1 mx-auto fit-content mt-2 red-color">
        {foodapp.error.individual}
      </p>
    );

  return (
    <section className="mealitem position-relative">
      <Header>
          <div className="d-flex justify-content-between">
            <Button onClick={() => navigate("/")}>
              <ArrowLeftOutlined />
            </Button>
            <div className="text-align-center">
              <Title
                className="letter-spacing-1 font-weight-100 violet-color responsive-head-title"
                level={2}
              >
                {state?.strMeal}
              </Title>
              <Paragraph className="sm-column mb-0 d-flex align-items-center justify-content-center">
                {state?.strArea && (
                  <>
                    <Text className="letter-spacing-05 font-weight-100 ">
                      {state?.strArea}
                    </Text>
                    <Divider className="divider" type="vertical" />
                  </>
                )}
                {state?.strCategory && (
                  <>
                    <Text
                      className="letter-spacing-05 font-weight-100 "
                      type="success"
                    >
                      {state?.strCategory}
                    </Text>
                    <Divider className="divider" type="vertical" />
                  </>
                )}
                {state?.strTags && (
                  <>
                    <Text
                      className="letter-spacing-05 font-weight-100 "
                      type="warning"
                    >
                      {"#" + state?.strTags.split(",").join(" #")}
                    </Text>
                    <Divider className="divider" type="vertical" />
                  </>
                )}
                {state?.strYoutube && (
                  <>
                    <Link strong target="_blank" href={state?.strYoutube}>
                      <YoutubeFilled
                        className="red-color"
                        style={{ fontSize: "30px" }}
                      />
                    </Link>
                  </>
                )}
              </Paragraph>
            </div>

            <Button
              onClick={() => setcheckout((prev) => !prev)}
              type="primary"
              danger={!Checkout ? true : false}
            >
              <span className="d-meal-block">
                {Checkout ? "Checkout Product" : "Cancel Checkout"}
              </span>
              <span className="d-meal-none">{Checkout ? "Buy" : "X"}</span>
            </Button>
          </div>
      </Header>

      <article>
        <div className="text-align-center">
          <Image
            className="responsive-image-mealitem text-align-center"
            src={state?.strMealThumb}
          />
        </div>
        <Typography>
          <Title
            className="violet-color letter-spacing-05 font-weight-75"
            level={3}
          >
            Steps for Preparation
          </Title>
          <Paragraph className="letter-spacing-03" type="secondary">
            {state?.strInstructions}
          </Paragraph>
          <Title
            className="violet-color letter-spacing-05 font-weight-75"
            level={3}
          >
            Ingredients
          </Title>
          <ul>
            {count.map((item, index) => (
              <li className="" key={index}>
                <Row>
                  <Col>
                    <span className="list-marker"></span>
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                  >
                    <Text type="secondary" strong>
                      {state["strIngredient" + item]}
                    </Text>
                  </Col>
                  <Col>
                    <Text type="secondary" strong>
                      {" "}
                      {state["strMeasure" + item]}{" "}
                    </Text>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </Typography>
      </article>
     
      <div className={`${!Checkout && "addedclass"} teslastyle`}>
         <Form />
      </div>
    </section>
  );
}

function retnum(str) {
  var num = str.replace(/[^0-9]/g, "");
  return parseInt(num, 10);
}
