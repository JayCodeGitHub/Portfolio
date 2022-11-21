import React from 'react';
import { Wrapper, ButtonWrapper } from './Form.styles';
import Button from '../Button/Button.styles';

const Form = () => {
  return (
    <Wrapper>
      <form>
        <input type="text" id="fname" placeholder="Name" />
        <input type="text" id="email" placeholder="Email" />
        <textarea
          name="message"
          cols="40"
          rows="12"
          placeholder="Your Message"
        ></textarea>
      </form>
      <ButtonWrapper>
        <Button>Send Message</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Form;
