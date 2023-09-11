import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { styled } from "styled-components";
import { TbMailForward } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { sentEmail } from "../utils/helpers";

const StyledContactContainer = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: 2rem;
  width: 100%;
  height: 100%;

  h1 {
    line-height: 1;
    font-family: "Rubik", sans-serif;
    color: var(--on-surface);
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: none;
      width: 55px;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    input,
    textarea {
      border: none;
      border-radius: 1rem;
      padding: 2rem 3rem;
      box-shadow: var(--shadow-sm);
      font-family: inherit;
      width: 100%;
    }

    textarea {
      resize: none;
      padding-top: 2.5rem;
      height: 10rem;
    }

    input:focus,
    textarea:focus {
      outline-color: var(--primary);
    }

    .button {
      button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-md);
        border: none;
        background-color: var(--primary);
        color: var(--on-primary);

        span {
          font-size: 2rem;
        }
        .icon {
          font-size: 2.5rem;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        display: block;
        width: 80%;
        height: auto;
      }
    }
  }
`;

const FormRow = styled.div`
  width: 100%;
  span {
    color: var(--error);
    font-weight: 600;
  }
`;

function ContactContainer() {
  const form = useRef();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit() {
    sentEmail(form);
    reset();
    navigate("/projects");
  }

  function onError() {
    toast.error("Check form values.");
  }

  return (
    <StyledContactContainer>
      <div className="container">
        <img src="/public/contactImg.png" alt="html label" />

        <form ref={form} onSubmit={handleSubmit(onSubmit, onError)}>
          <h1>Contact</h1>
          <FormRow>
            <span>{errors?.user_name?.message}</span>
            <input
              type="text"
              placeholder="Full Name"
              {...register("user_name", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow>
            <span>{errors?.user_email?.message}</span>
            <input
              type="mail"
              placeholder="E-mail Address"
              {...register("user_email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
          </FormRow>
          <FormRow>
            <span>{errors?.user_subject?.message}</span>
            <input
              className="subject"
              type="text"
              placeholder="Subject"
              {...register("user_subject", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow>
            <span>{errors?.message?.message}</span>
            <textarea
              placeholder="Message"
              {...register("message", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <div className="button">
            <button type="submit">
              <TbMailForward className="icon" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </StyledContactContainer>
  );
}

export default ContactContainer;
