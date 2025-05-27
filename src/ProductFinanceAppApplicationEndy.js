import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';  
import { Link, useLocation } from 'react-router-dom';  
import styled from 'styled-components';  
import Button from './components/Button';  
import emailjs from '@emailjs/browser';  
import axios from "axios";  
import useId from "react-use-uuid";  
import { Context } from "./components/Wrapper";  
  
const Section = styled.section`  
  width: 100vw;  
  position: relative;  
  direction: ${(props) => props.direction};  
  display: flex;  
  flex-direction: column;  
  align-items: center;  
  padding-top: 150px;  
  padding-bottom: 100px;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const Container = styled.div`  
  max-width: 800px;  
  margin: 0 auto;  
  direction: rtl;  
`;  
  
const Title = styled.h1`  
  font-size: 2em;  
  margin-bottom: 1em;  
  color: #1F366B;

  @media (max-width: ${(props) => props.theme.width}) {  
    font-size: 200%;  
    align-self: center;  
    text-align: center;  
    width: 90%;  
    margin-top: 10px;  
  }  
  margin-bottom: 42px;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const Subtitle = styled.h2`  
  font-size: 1.5em;  
  margin-bottom: 1em;  
  font-weight: 400;  
`;  
  
const SectionTitle = styled.h3`  
  font-size: 1.2em;  
  margin-top: 1.5em;  
  margin-bottom: 1em;  
`;  
  
const Requirements = styled.div`  
  background-color: #f0f0f0;  
  padding: 1em;  
  margin-bottom: 2.5em;  
  border-radius: 8px;  
  direction: rtl;  
  font-family: "IBM Plex Sans Arabic", sans-serif;
  font-size: large;

`;  
  
const List = styled.ul`  
  list-style: none;  
  padding: 0;  
  margin-bottom: 1em;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const ListItem = styled.li`  
  margin-bottom: 1em;  
`;  
  
const Options = styled.div`  
  display: flex;  
  justify-content: center;  
  flex-wrap: wrap;  
  gap: 10px;  
  margin-bottom: 1.5em;  
  min-height: 60px;  
`;  
  
const RadioButton = styled.input`  
  display: none;  
  align-content: space-evenly;  
  &:checked + label {  
    background-color: #ddd;  
  }  
`;  
  
const Label = styled.label`  
  display: inline-block;  
  background-color: white;  
  border: 1px solid #ccc;  
  padding: 10px 20px;  
  border-radius: 5px;  
  cursor: pointer;  
  font-size: 1em;  
  width: 100px;  
  text-align: center;  
`;  
  
const SubmitButton = styled.button`  
  background-color: #666;  
  color: white;  
  border: none;  
  padding: 10px 20px;  
  border-radius: 5px;  
  cursor: pointer;  
  font-size: 1em;  
`;  
  
const ButtonContainer = styled.div`  
  display: flex;  
  gap: 16px;  
  align-self: center;  
  align-content: center;  
  justify-content: center;  
  margin-top  : 48px;  
  @media (max-width: 48em) {  
    align-self: center;  
    text-align: center;  
    button {  
      margin: 0 auto;  
    }  
  }  
`;  
  
const ImgContainer = styled.div`  
  width: 2rem;  
  border-radius: 20px;  
  &:hover {  
    transform: scale(1.1);  
  }  
  @media (max-width: 64em) {  
    align-self: center;  
    width: 20rem;  
  }  
  @media (max-width: 48em) {  
    align-self: center;  
    width: 20rem;  
  }  
  img {  
    width: 100%;  
    height: auto;  
    @media (max-width: 64em) {  
      align-self: center;  
      width: 100%;  
    }  
    @media (max-width: 48em) {  
      align-self: center;  
      width: 100%;  
    }  
  }  
  display: flex;  
`;  
  
const StyledLabel = styled.label`  
  display: block;  
  margin-bottom: 5px;  
  font-weight: bold;  
  color: ${props => props.invalid ? 'red' : 'black'};  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const FormItems = styled.div`  
  margin: 2rem 2rem;  
  display: flex;  
  flex-direction: column;  
  justify-content: start;  
  flex-grow: 1;  
  @media (max-width: 48em) {  
    margin: 0 0;  
    justify-content: center;  
  }  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const StyledInput = styled.input`  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 5px;  
  margin-bottom: 16px;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const StyledInputTextArea = styled.textarea`  
  padding: 10px;  
  border: 1px solid #ccc;  
  border-radius: 5px;  
  margin-bottom: 16px;  
  height: 100px;  
  resize: vertical;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

`;  
  
const Bottom = styled.div`  
  width: 75%;  
  margin: 0 auto;  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  font-family: "IBM Plex Sans Arabic", sans-serif;

  a {  
    text-decoration: underline;  
  }  
  @media (max-width: 48em) {  
    flex-direction: column;  
    width: 100%;  
  }  
  span {  
    margin-bottom: 1rem;  
  }  
`;  
  
const ProductFinanceAppApplicationEndy = () => {  
  const [ecommercePlatform, setEcommercePlatform] = useState('');  
  const [accountingApp, setAccountingApp] = useState('');  
  const [marketingPlatform, setMarketingPlatform] = useState('');  
  
  const form = useRef();  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [stateMessage, setStateMessage] = useState(null);  
  const [email, setEmail] = useState('');  
  const [isEmailValid, setIsEmailValid] = useState(false);  
  
  const [userUUID, setUserUUID] = useState(() => {  
    const saved = localStorage.getItem("userUUID");  
    const initialValue = JSON.parse(saved);  
    return initialValue || "";  
  });  
  
  const validateEmail = (email) => {  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    return re.test(email);  
  };  
  
  const handleEmailChange = (e) => {  
    const emailValue = e.target.value;  
    setEmail(emailValue);  
    setIsEmailValid(validateEmail(emailValue));  
  };  
  
  const sendEmail = (e) => {  
    sendTriggerNotifyMeButtonClicked(userUUID);  
    e.preventDefault();  
    setIsSubmitting(true);  
    emailjs  
      .sendForm('service_1ybhixj', 'template_vxghmjt', form.current, {  
        publicKey: 'GMhkKLiG9jGjG5kK_',  
      })  
      .then(  
        () => {  
          setStateMessage('Message sent successfully!');  
          setIsSubmitting(false);  
          setTimeout(() => {  
            setStateMessage(null);  
          }, 3000); // hide message after 5 seconds  
        },  
        (error) => {  
          setStateMessage('Something went wrong, please try again later');  
          setIsSubmitting(false);  
          setTimeout(() => {  
            setStateMessage(null);  
          }, 3000); // hide message after 5 seconds  
        }  
      );  
    // Clears the form after sending the email  
    e.target.reset();  
  };  
  
  let axiosEnabled = true;  
  const id = useId();  
  const context = React.useContext(Context);  
  
  useEffect(() => {  
    if (userUUID === "") {  
      setUserUUID(id);  
      localStorage.setItem("userUUID", JSON.stringify(id));  
    }  
    if (userUUID !== "") {  
      sendTrigger(userUUID);  
    } else {  
      sendTrigger("userUUID");  
    }  
  }, [userUUID]);  
  
  const sendTrigger = async () => {  
    let doc = {  
      document: {  
        userId: userUUID,  
        type: "Finance-ApplicationEndPage-Visited",  
        local: context.locale,  
      },  
    };  
  
    try {  
      let { data } = "";  
      if (axiosEnabled === true) {  
        data = await axios.post(  
          "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",  
          doc,  
          {  
            headers: {  
              Accept: "application/json",  
            },  
          }  
        );  
      }  
    } catch (err) {  
      console.error("Error sending trigger:", err.message);  
    }  
  };  
  
  const sendTriggerNotifyMeButtonClicked = async () => {  
    let doc = {  
      document: {  
        userId: userUUID,  
        type: "Finance-ApplicationEndPage-NotifyMeButton-Clicked-"+email,  
        local: context.locale,  
      },  
    };  
  
    try {  
      let { data } = "";  
      if (axiosEnabled === true) {  
        data = await axios.post(  
          "https://landingpage-triggers.azurewebsites.net/api/landingpage-triggers?code=dDJ-cf4giE8k9C0HSuxsgT4Q4mgux1XMVwcOJ2Y-MdHRAzFuSTTdjQ%3D%3D",  
          doc,  
          {  
            headers: {  
              Accept: "application/json",  
            },  
          }  
        );  
      }  
    } catch (err) {  
      console.error("Error sending trigger:", err.message);  
    }  
  };  
  

  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // window.scrollTo(0, 0);
  }, [location.pathname]);


  return (  
    <Section>  
  <Title>عذرًا، لقد بلغنا العدد الأقصى من العملاء للإطلاق التجريبي</Title>
         <Container>  
        <Requirements>  
          <List>  
            <ListItem>  
              نحن حالياً في مرحلة الإطلاق التجريبي، ونعمل مع عدد محدود من الشركات.  
            </ListItem>  
            <ListItem>  
              لقد نفدت الأماكن المتاحة حالياً، وسنفتح جولة جديدة قريباً جدا لقبول تسجيل شركات جديدة قبل الإطلاق الكامل.  
            </ListItem>  
            <ListItem>  
              يرجى إدخال البيانات التالية و سيتم إبلاغك قريبا عند الإطلاق الكامل لمنصة ليبرو.  
            </ListItem>  
          </List>  
        </Requirements>  
        <form ref={form} onSubmit={sendEmail} style={{ padding: "16px" }}>  
          <FormItems>  
            <StyledLabel>الإسم</StyledLabel>  
            <StyledInput type="text" name="from_name" />  
            <StyledLabel>اسم الشركة</StyledLabel>  
            <StyledInput type="text" name="company" />  
            <StyledLabel invalid={!isEmailValid}>البريد الإلكترونى</StyledLabel>  
            <StyledInput  
              type="email"  
              name="reply_to"  
              value={email}  
              onChange={handleEmailChange}  
            />  
            <StyledLabel>رسالة الى فريق ليبرو</StyledLabel>  
            <StyledInputTextArea maxLength="250" name="message" />  
            <br />  
            {isSubmitting ? (  
              <><Bottom></Bottom>Sending...</>  
            ) : (  
              <Button  
                type="submit"  
                text="تلقى إشعار عند الإطلاق الكامل لمنصة ليبرو"  
                disabled={!isEmailValid || isSubmitting}  
              >  
                Send  
              </Button>  
            )}  
            <br />  
            <span>{stateMessage && <p>{stateMessage}</p>}</span>  
          </FormItems>  
        </form>  
      </Container>  
    </Section>  
  );  
};  
  
export default ProductFinanceAppApplicationEndy;  