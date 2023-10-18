/*************************
 * author   : Menjith P
 * Purpose  : Meal Cards Skeleton
 * 
 *******************/

import { Flex, Skeleton } from "antd";
export default function mealCard_Skeleton() {
  return (
    <div className="mealcard_skeleton">
      <Flex
        flex={1}
        align="center"
        justify="center"
        vertical
        style={{ border: "1px solid #f0f0f0" }}
      >
        <Skeleton.Image
          active={true}
          size={"large"}
          shape={"default"}
          style={{  width: "100%", height: "200px" }}
        />
        <br />
        <Skeleton.Input
          size={"small"}
          style={{ margin: "auto", display: "block", width: "65%" }}
        />
        <br />
      </Flex>
    </div>
  );
}
