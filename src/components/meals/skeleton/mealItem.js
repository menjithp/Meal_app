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
  Space
} from "antd";


const ItemSkeleton = () => {
  return (
    <>
      <br />
      <Flex gap="large" justify='space-between'>
        <Skeleton.Button active={true} size={"default"} shape={"default"} />
        <Skeleton.Input className="responsive-width-skeleton middle-item"  active={true} size={"default"} block={"default"} />
        <Skeleton.Input className="responsive-width-skeleton" active={true} size={"default"} />
      </Flex>
      <br />
      <Flex align="center" justify="center">
        <Skeleton.Input
          active={true}
          size={"default"}
          
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
      <br/>
      <div style={{ marginTop: "1rem" }} />
      {[...Array(5)].map((item, index) => (
        <React.Fragment key={index}>
          {" "}
          <Row>
            <Col xs={6} sm={4} md={2} lg={2} xl={2} >
              <Skeleton.Input active={true} size={"small"} style={{width:"50px" ,minWidth:"50px"}} />
            </Col>
            <Col xs={8} sm={10} md={8} lg={6} xl={6}>
              <Skeleton.Input  className="responsive-width-skeleton" active={true} size={"small"} />
            </Col>
            <Col>
              <Skeleton.Input className="responsive-width-skeleton" active={true} size={"small"} />
            </Col>
          </Row>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};
export default ItemSkeleton;
