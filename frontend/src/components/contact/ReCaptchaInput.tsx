import React, { Component, RefObject } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6LcKIigTAAAAAJrd3T7rUu08qAysuwuMqWb3MvuN"; // "6LdoTSkTAAAAACxMJ2yf5S_CghOhFnyNkyT3ZFe9";

interface IProps {
  onChange?: any; // antd will add this property
}

interface IState {
  reCaptchaValue: any;
}

class ReCaptchaInput extends Component<IProps, IState> {
  private reCaptchaRef: RefObject<ReCAPTCHA> = React.createRef();

  constructor(props: IProps) {
    super(props);

    this.state = {
      reCaptchaValue: undefined,
    };
  }

  public handleChange = (value: any) => {
    this.setState({ reCaptchaValue: value });
    this.triggerChange(value);
  };

  public triggerChange = (changedValue: any) => {
    if (this.props.onChange) {
      this.props.onChange(changedValue);
    }
  };

  public render() {
    const ref = this.reCaptchaRef;
    return (
      <ReCAPTCHA
        theme="dark"
        ref={ref}
        sitekey={SITE_KEY}
        onChange={this.handleChange}
      />
    );
  }
}

export default ReCaptchaInput;
