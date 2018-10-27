import { Button, Col, Form, Input, message, Row } from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { FormEvent } from "react";

import SectionTitle from "../common/SectionTitle";
import ReCaptchaInput from "./ReCaptchaInput";

import "./Contact.less";

const FormItem = Form.Item;
const { TextArea } = Input;

interface IProps extends FormComponentProps {
  sendMessage: (
    name: string,
    email: string,
    message: string,
    subject?: string,
    company?: string
  ) => Promise<void>;
}

interface IState {
  isSending: boolean;
}

class Contact extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isSending: false
    };
  }

  public handleSubmit = (e: FormEvent<any>) => {
    e.preventDefault();
    this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        const hide = message.loading("Sending message...", 0);
        this.setState({ isSending: true });

        try {
          await this.props.sendMessage(
            values.name,
            values.email,
            values.message,
            values.subject,
            values.company
          );

          // reset all except recaptcha
          this.props.form.resetFields([
            "name",
            "email",
            "message",
            "subject",
            "company"
          ]);
          message.success(
            "Thank you for your message! I'll come back to you as soon as possible.",
            5
          );
        } catch (error) {
          message.error("Uh oh...Please refresh the page and try again", 5);
        }

        hide();
        this.setState({ isSending: false });
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
                    {getFieldDecorator("email", {
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
                  loading={this.state.isSending}
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
