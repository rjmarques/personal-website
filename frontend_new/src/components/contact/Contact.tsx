import React, { useState } from 'react';
import {
  Button,
  TextField,
  Snackbar,
  Alert
} from '@mui/material';

import ContentSection from '../common/ContentSection';
import TurnstileInput from './TurnstileInput';
import './Contact.scss';

interface ContactProps {
  sendMessage: (
    name: string,
    email: string,
    message: string,
    captcha: string,
    subject?: string,
    company?: string
  ) => Promise<void>;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
  captcha: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  company?: string;
  message?: string;
  captcha?: string;
}

const Contact: React.FC<ContactProps> = ({ sendMessage }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    company: '',
    message: '',
    captcha: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSending, setIsSending] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "What's your name?";
    }

    if (!formData.email.trim()) {
      newErrors.email = "How do I message you back?";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "The input is not valid Email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Did you want to tell me something?";
    }

    if (!formData.captcha) {
      newErrors.captcha = "You're not a bot, are you?";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    console.log('Captcha token:', token);
    setFormData(prev => ({ ...prev, captcha: token || '' }));
    
    // Clear captcha error when user completes the challenge
    if (errors.captcha) {
      setErrors(prev => ({ ...prev, captcha: undefined }));
    }
  };



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      await sendMessage(
        formData.name,
        formData.email,
        formData.message,
        formData.captcha,
        formData.subject,
        formData.company
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        captcha: '',
        subject: '',
        company: ''
      });

      setSnackbar({
        open: true,
        message: "Thank you for your message! I'll come back to you as soon as possible.",
        severity: 'success'
      });
    } catch (error) {
      console.log(error);
      setSnackbar({
        open: true,
        message: "Uh oh...Please refresh the page and try again",
        severity: 'error'
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <ContentSection
      title="Contact"
      subTitle="Want to get in touch? Leave me a message"
      wrapperClass="contact"
    >
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-grid">
          <TextField
            className="input-field"
            fullWidth
            size="small"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleInputChange('name')}
            error={!!errors.name}
            helperText={errors.name || ' '}
            disabled={isSending}
          />
          <TextField
            className="input-field"
            fullWidth
            size="small"
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={!!errors.email}
            helperText={errors.email || ' '}
            disabled={isSending}
          />
          <TextField
            className="input-field"
            fullWidth
            size="small"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange('subject')}
            helperText={' '}
            disabled={isSending}
          />
          <TextField
            className="input-field"
            fullWidth
            size="small"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange('company')}
            helperText={' '}
            disabled={isSending}
          />
          <TextField
            className="input-field contact-text-area full-width"
            fullWidth
            multiline
            rows={6}
            placeholder="Message *"
            value={formData.message}
            onChange={handleInputChange('message')}
            error={!!errors.message}
            helperText={errors.message || ' '}
            disabled={isSending}
          />
          <div className="captcha-container full-width">
            <TurnstileInput
              onChange={handleCaptchaChange}
            />
            {errors.captcha && (
              <div className="captcha-error">
                {errors.captcha}
              </div>
            )}
          </div>
          <div className='full-width'>
            <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSending}
                loading={isSending}
                className='submit-button'
            >
                {isSending ? 'Sending...' : 'send message'}
            </Button>
          </div>
        </div>
      </form>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContentSection>
  );
};

export default Contact;
