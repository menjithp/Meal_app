/*************************
 * author   : Menjith P
 * Purpose  : Meal Card View
 * 
 *******************/

//default imports
import { useNavigate } from "react-router-dom";
//antd imports
import { Card } from "antd";

const { Meta } = Card;

export default function Mealcard({ data }) {
  const navigate = useNavigate();

  return (
    <Card
    data-testid={data.strMeal}
      onClick={() => navigate(`/${data.idMeal}`)}
      hoverable
      cover={<img alt="example" src={data.strMealThumb} />}
    >
      <Meta className="violet-color" title={data.strMeal} />
    </Card>
  );
}
