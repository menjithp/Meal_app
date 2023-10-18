/*************************
 * author   : Menjith P
 * Purpose  : Meal Items Skeleton
 * 
 *******************/
//default imports
import React from 'react'

//antd imports
import {
  Divider,
  Skeleton,
  Flex,
  Row,
  Col,
} from "antd";


const ItemSkeleton = () => {
  return (
    <>
      <br />
      <Flex gap="large">
        <Skeleton.Button active={true} size={"default"} shape={"default"} />
        <Skeleton.Input active={true} size={"default"} block={"default"} />
        <Skeleton.Input active={true} size={"default"} />
      </Flex>
      <br />
      <Flex align="center" justify="center">
        <Skeleton.Input
          active={true}
          size={"default"}
          style={{ width: "300px" }}
        />
      </Flex>
      <Divider />
      <Flex align="center" justify="center">
        <Skeleton.Image
          active={true}
          size={"large"}
          shape={"default"}
          style={{ width: "300px", height: "200px" }}
        />
      </Flex>
      <br />
      <br />
      <Skeleton />
      <br />
      <br />
      <Skeleton.Input active={true} size={"default"} />
      <div style={{ marginTop: "1rem" }} />
      {[...Array(5)].map((item, index) => (
        <React.Fragment key={index}>
          {" "}
          <Row>
            <Col xs={3}>
              <Skeleton.Input active={true} size={"small"} />
            </Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={6}>
              <Skeleton.Input active={true} size={"small"} />
            </Col>
            <Col>
              <Skeleton.Input active={true} size={"small"} />
            </Col>
          </Row>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};
export default ItemSkeleton;
