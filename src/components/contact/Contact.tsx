import { Button, Col, Form, Input, Row } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { FormEvent } from "react";

import SectionTitle from "../common/SectionTitle";
import "./Contact.less";
import ReCaptchaInput from "./ReCaptchaInput";

const FormItem = Form.Item;
const { TextArea } = Input;

// TODO SENDING SERVICE

// tslint:disable-next-line:no-empty-interface
interface IProps extends FormComponentProps {}

class Contact extends React.Component<IProps, {}> {
  public handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        // tslint:disable-next-line:no-console
        console.log("Received values of form: ", values);

        this.props.form.resetFields();
      }
    });
  };

  public validateReCaptcha = (rule: any, value: any, callback: any) => {
    if (value) {
      callback();
      return;
    }
    callback("You're not a bot, are you?");
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const gutter = 36;

    return (
      <section className="Contact">
        <div className="content">
          <SectionTitle
            title="Contact"
            subTitle="Want to get in touch? Leave me a message"
          />
          <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Row gutter={gutter}>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="Contact-form-column"
                >
                  <FormItem>
                    {getFieldDecorator("name", {
                      rules: [
                        {
                          message: "What's your name?",
                          required: true
                        }
                      ]
                    })(<Input size="large" placeholder="Your Name *" />)}
                  </FormItem>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="Contact-form-column"
                >
                  <FormItem>
                    {getFieldDecorator("Email", {
                      rules: [
                        {
                          message: "The input is not valid Email",
                          type: "email"
                        },
                        {
                          message: "How do I message you back?",
                          required: true
                        }
                      ]
                    })(
                      <Input size="large" type="text" placeholder="Email *" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="Contact-form-column"
                >
                  <FormItem>
                    {getFieldDecorator("subject", {})(
                      <Input size="large" placeholder="Subject" />
                    )}
                  </FormItem>
                </Col>
                <Col
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  className="Contact-form-column"
                >
                  <FormItem>
                    {getFieldDecorator("company", {})(
                      <Input size="large" type="text" placeholder="Company" />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={gutter}>
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  className="Contact-form-column"
                >
                  <FormItem>
                    {getFieldDecorator("message", {
                      rules: [
                        {
                          message: "Did you want to tell me something?",
                          required: true
                        }
                      ]
                    })(
                      <TextArea
                        className="Contact-text-area"
                        placeholder="Message *"
                        autosize={{ minRows: 6, maxRows: 6 }}
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <FormItem>
                {getFieldDecorator("recaptcha", {
                  initialValue: undefined,
                  rules: [{ validator: this.validateReCaptcha }]
                })(<ReCaptchaInput />)}
              </FormItem>
              <FormItem>
                <Button
                  className="Contact-submit"
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
                  send message
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

const WrappedContact = Form.create()(Contact);

export default WrappedContact;
