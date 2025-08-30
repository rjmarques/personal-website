import React, { Component } from 'react';

// Extend the Window interface to include our Turnstile callbacks
declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: (errorCode: string) => void;
    onTurnstileExpired?: () => void;
  }
}

interface TurnstileInputProps {
  onChange?: (token: string | null) => void;
}

class TurnstileInput extends Component<TurnstileInputProps> {  
  private readonly SITE_KEY = "0x4AAAAAABugWtNT62bs1yWd";

  private onTurnstileSuccess = (token: string) => {
    if (this.props.onChange) {
      this.props.onChange(token);
    }
  };

  private onTurnstileError = (errorCode: string) => {
    console.log('Turnstile error:', errorCode);
    if (this.props.onChange) {
      this.props.onChange(null);
    }
  };

  private onTurnstileExpired = () => {
    if (this.props.onChange) {
      this.props.onChange(null);
    }
  };

  componentDidMount() {
    // Bind the callbacks to the window object so Turnstile can find them
    window.onTurnstileSuccess = this.onTurnstileSuccess;
    window.onTurnstileError = this.onTurnstileError;
    window.onTurnstileExpired = this.onTurnstileExpired;
  }

  componentWillUnmount() {
    delete window.onTurnstileSuccess;
    delete window.onTurnstileError;
    delete window.onTurnstileExpired;
  }

  componentDidUpdate(prevProps: TurnstileInputProps) {
    if (prevProps.onChange !== this.props.onChange) {
      window.onTurnstileSuccess = this.onTurnstileSuccess;
      window.onTurnstileError = this.onTurnstileError;
      window.onTurnstileExpired = this.onTurnstileExpired;
    }
  }

  render() {
    return (
      <div
        className="cf-turnstile"
        data-sitekey={this.SITE_KEY}
        data-theme='dark'
        data-size="normal"
        data-callback="onTurnstileSuccess"
        data-error-callback="onTurnstileError"
        data-expired-callback="onTurnstileExpired"
      />
    );
  }
}

export default TurnstileInput;
