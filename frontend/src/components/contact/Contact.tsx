import { Button, Form, Input, message } from "antd";
import { FormInstance } from "antd/lib/form";
import React, { Component } from "react";

import ContentSection from "../common/ContentSection";
import ReCaptchaInput from "./ReCaptchaInput";

import "./Contact.less";

const FormItem = Form.Item;

interface IProps {
  sendMessage: (
    name: string,
    email: string,
    message: string,
    captcha: string,
    subject?: string,
    company?: string
  ) => Promise<void>;
}

interface IState {
  isSending: boolean;
}

class Contact extends Component<IProps, IState> {
  private formRef = React.createRef<FormInstance>();

  constructor(props: IProps) {
    super(props);

    this.state = {
      isSending: false,
    };
  }

  public onFinish = async (values: any) => {
    const hide = message.loading("Sending message...", 0);
    this.setState({ isSending: true });

    console.log(values);

    try {
      await this.props.sendMessage(
        values.name,
        values.email,
        values.message,
        values.captcha,
        values.subject,
        values.company
      );

      this.formRef.current!.resetFields([
        "name",
        "email",
        "message",
        "subject",
        "company",
        "captcha",
      ]);

      message.success(
        "Thank you for your message! I'll come back to you as soon as possible.",
        5
      );
    } catch (error) {
      console.log(error);
      message.error("Uh oh...Please refresh the page and try again", 5);
    } finally {
      hide();
      this.setState({ isSending: false });
    }
  };

  public onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  public validateReCaptcha = (rule: any, value: any) => {
    return value
      ? Promise.resolve()
      : Promise.reject("You're not a bot, are you?");
  };

  public render() {
    return (
      <ContentSection
        title="Contact"
        subTitle="Want to get in touch? Leave me a message"
        wrapperClass="contact"
      >
        <Form
          ref={this.formRef}
          name="contact-form"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="contact-form materialize"
        >
          <FormItem
            name="name"
            rules={[
              {
                message: "What's your name?",
                required: true,
              },
            ]}
          >
            <Input size="large" placeholder="Your Name *" />
          </FormItem>
          <FormItem
            name="email"
            rules={[
              {
                message: "The input is not valid Email",
                type: "email",
              },
              {
                message: "How do I message you back?",
                required: true,
              },
            ]}
          >
            <Input size="large" type="text" placeholder="Email *" />
          </FormItem>
          <FormItem name="subject">
            <Input size="large" placeholder="Subject" />
          </FormItem>
          <FormItem name="company">
            <Input size="large" type="text" placeholder="Company" />
          </FormItem>
          <FormItem
            className="full-row"
            name="message"
            rules={[
              {
                message: "Did you want to tell me something?",
                required: true,
              },
            ]}
          >
            <Input.TextArea
              className="contact-text-area"
              placeholder="Message *"
              rows={6}
            />
          </FormItem>
          <FormItem
            name="captcha"
            rules={[{ validator: this.validateReCaptcha }]}
            initialValue={undefined}
          >
            <ReCaptchaInput />
          </FormItem>
          <FormItem className="full-row">
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={this.state.isSending}
            >
              send message
            </Button>
          </FormItem>
        </Form>
      </ContentSection>
    );
  }
}

export default Contact;
