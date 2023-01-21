import React, { useEffect } from "react";
import { Button, Col, Form, Input, Row, message , Image} from "antd";
import "../Resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import img from "../vaultify.png";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const onFinish = (values) => {
    dispatch({ type: "showloading" });
    
 
      axios.post("/api/users/login", values )  
    .then((res) => {
          dispatch({ type: "showloading" });
          message.success("login successfull");
          localStorage.setItem("pos-user", JSON.stringify(res.data));
          
          navigate("/home");
        })
        .catch(() => {
          dispatch({ type: "hideloading" });
          message.error("sOMTHING WENT WRONG");
        });


    // axios
    //   .post("/api/users/login", values)
    //   .then((res) => {
    //     dispatch({ type: "showloading" });
    //     message.success("login successfull");
    //     localStorage.setItem("pos-user", JSON.stringify(res.data));
    //     navigate("/home");
    //   })
    //   .catch(() => {
    //     dispatch({ type: "hideloading" });
    //     message.error("sOMTHING WENT WRONG");
    //   });

    // axios
    //   .post("/api/cashiers/cashier-login", values).post
    //   .then((res) => {
    //     dispatch({ type: "showloading" });
    //     message.success("login successfull");

    //     localStorage.setItem("pos-user", JSON.stringify(res.data));
    //     navigate("/orders");
    //   })
    //   .catch(() => {
    //     dispatch({ type: "hideloading" });

    //     message.error("sOMTHING WENT WRONG");
    //   });
  };

  useEffect(() => {
   // if (localStorage.getItem("pos-user")) navigate("/home");
  }, []);

  return (
    <div className="authentication">
      <Row>
        <Col lg={8} xs={22}>
          <Form layout="vertical" onFinish={onFinish}>
          <Image
            width={200}
            height={62}
            borderRadius={5}
            src={img}
            preview={false}
         
          

          />
            <hr />
            <h3>Login</h3>

            <Form.Item name="userName" label="User ID">
              <Input placeholder="" />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
          
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
