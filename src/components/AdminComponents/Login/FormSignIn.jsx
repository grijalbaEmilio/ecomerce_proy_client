import React, { useState } from "react";
import newAdmin from "../../../assetts/img/jpg/user1.jpg";
import { Form, Input, Button } from "antd";
import { LockFilled, MailFilled } from "@ant-design/icons";
import Toast from "../../Toast";

import "./FormsLogin.scss";

export default function SignUpForm() {
  const onFinish = (values) => {
    console.log("envio");
    Toast({title:'Error !', message:'Algo se rompió.', mode:'danger'})

  };

  return (
    <div className="container-form-login">
      <Form
        name="normal_signUp"
        className="form-login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img className="form-login__logoAdmin" src={newAdmin} alt="#" />
        <h1 className="form-login__TitleAdmin">Ingresar...</h1>

        <div className="form-login__content">
          <div className="form-login__content-izq">
            <Form.Item
              className="form-login__item  form-login__email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Campo Necesario!",
                },
              ]}
            >
              <Input
                className="form-login__input"
                type="email"
                prefix={<MailFilled className="site-form-item-icon" />}
                placeholder="Correo"
              />
            </Form.Item>

            <Form.Item
              className="form-login__item form-login__password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Campo Necesario!",
                },
              ]}
            >
              <Input
                className="form-login__input"
                prefix={<LockFilled className="site-form-item-icon" />}
                type="password"
                placeholder="Contraseña"
              />
            </Form.Item>
          </div>

          <div className="form-login__content-der">
            <Form.Item
              className=" form-login__item form-login__repeatPassword"
              name="repeatPassword"
              rules={[
                {
                  required: true,
                  message: "Campo Necesario!",
                },
              ]}
            >
              <Input
                className=" form-login__input"
                prefix={<LockFilled className="site-form-item-icon " />}
                type="password"
                placeholder="Repetir Contraseña"
              />
            </Form.Item>
          </div>
        </div>

        <Form.Item className="form-login__registro">
          <Button
            onClick={() => {
              console.log('hello');
              return (
                <Toast>
                  {{
                    mode: "danger",
                    message: "nada pa, todo mal toca que si tatat fiu fau.",
                  }}
                </Toast>
              );
            }}
            type="primary"
            htmlType="submit"
            className="form-login__button"
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
