import React, { useEffect, useLayoutEffect, useState } from 'react';  
import { Link, useLocation } from 'react-router-dom';  
import styled from 'styled-components';  
import Button from './components/Button';  
import shopify from "./assets/logo-shopify.png";  
import amazon from "./assets/logo-amazon.png";  
import amazonShopify from "./assets/logo-shopify+mazon.png";  
import other from "./assets/logo-other.png";  

import odoo from "./assets/logo-odoo.png";  
import xero from "./assets/logo-zero.png";  
import quickbooks from "./assets/logo-quickbook.png";  
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

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

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

  margin-bottom: 32px;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

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
  color: #1F366B;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
    padding-right: 16px;
  }
`;  
  
const Requirements = styled.div`  
  background-color: #f0f0f0;  
  padding: 2em;  
  margin-bottom: 2.5em;  
  border-radius: 8px;  
  direction: rtl;  
  font-size: large;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  @media (max-width: ${(props) => props.theme.width}) {
    width: 90%;
  }
`;  
  
const List = styled.ul`  
  list-style: none;  
  padding: 0;  
  margin-bottom: 1em; 
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */
 
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
  /* align-items: center;   */
  min-height: 90px;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

`;  
  
const RadioButton = styled.input`  
  display: none;  

  &:checked + label {  
    background-color: #f0f0f0;  
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

  display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #1F366B;
    /* font-family: "IBM Plex Sans Arabic", sans-serif; */


min-height: 100px;

`;  
  
const ImgContainer = styled.div`  
  width: 2rem;  
  border-radius: 20px;  
  margin-top: 0.5rem;  
  img {  
    width: 100%;  
    height: auto;  
  }  
`;  
  
const ButtonContainer = styled.div`  
  display: flex;  
  gap: 16px;  
  align-self: center;  
  align-content: center;  
  margin-top: 48px;  

  @media (max-width: 48em) {  
    align-self: center;  
    text-align: center;  

    button {  
      margin: 0 auto;  
    }  
  }  
`;  
  
const RadioButtonOption = ({ id, name, value, checked, onChange, label, imgSrc }) => (  
  
  <div style={{ textAlign: 'center' }}>  
    <RadioButton type="radio" id={id} name={name} value={value} checked={checked} onChange={onChange} />  
    <Label htmlFor={id}>  
      {label}  
      <ImgContainer>  
        <img src={imgSrc} alt={label} />  
      </ImgContainer>  
    </Label>  
  </div>  
);  
  
const ProductFinanceAppApplication = () => {  
  const [ecommercePlatform, setEcommercePlatform] = useState('');  
  const [accountingApp, setAccountingApp] = useState('');  
  const [marketingPlatform, setMarketingPlatform] = useState('');  


  const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });


  let axiosEnabled = true;
  const id = useId();
  
  const context = React.useContext(Context);


  useEffect(() => {
    //const userUUIDVaIe = JSON.parse(localStorage.getItem("userUUID"));
    if (userUUID === "") {
      //if found in localstorage load it
      ///setUserUUID(userUUIDVaIe);
      //} else {
      //if not found save

      setUserUUID(id);
      localStorage.setItem("userUUID", JSON.stringify(id));
    }
    //console.log(userUUID);
    if (userUUID !== "") {
      sendTrigger(userUUID, "Finance-ApplicationPage-Visited");
    }
    else
      sendTrigger("userUUID","Finance-ApplicationPage-Visited");
  }, [userUUID]);


  const sendTrigger = async (userId, event) => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: event,
        local: context.locale,
      },
    };

    //setIsLoading(true);
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

      //console.log("reponse data is: ", JSON.stringify(data, null, 4));

      //setData(data);
    } catch (err) {
      //setErr(err.message);
      //console.log("error message is: ", JSON.stringify(err.message, null, 4));
    } finally {
      //setIsLoading(false);
    }
    //===========
  };

  
  function handleEcommerceClick(name) {
    setEcommercePlatform(name);

    sendTrigger(userUUID, "Finance-ApplicationPage-eCommerce-"+name+"-Clicked");
  }

  function handleAccountingClick(name) {
    setAccountingApp(name);

    sendTrigger(userUUID, "Finance-ApplicationPage-Accounting-"+name+"-Clicked");
  }

  const location = useLocation();
  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // window.scrollTo(0, 0);
  }, [location.pathname]);


  return (  
    <Section>  
      <Title>احصل على التمويل مع ليبرو</Title>  
      <Container>  
        {/* <Requirements>  
          <SectionTitle>المتطلبات الرئيسية:</SectionTitle>  
          <List>  
            <ListItem>✓ بيع المنتجات الخاصة بك عبر الإنترنت أو خارجها (من خلال قنوات البيع بالتجزئة أو الجملة).</ListItem>  
            <ListItem>✓ تحقيق مبيعات سنوية بمتوسط لا يقل عن 100,000 جنيه مصري.</ListItem>  
            <ListItem>✓ العمل في السوق لمدة لا تقل عن 6 أشهر.</ListItem>  
          </List>  
        </Requirements>   */}

              <Requirements>  
          <SectionTitle>المتطلبات الرئيسية:</SectionTitle>  
          <List>  
            <ListItem>لتقديم تمويل سريع ومستدام، سنحتاج للوصول إلى البيانات الرقمية لشركتك من خلال واجهات برمجة التطبيقات (APIs).</ListItem>  
            <ListItem>سيسمح لنا ذلك بتقييم أداء التدفقات النقدية بدقة، مما يسهم في تسهيل عملية التقييم، وتوفير الوقت وتأمين التمويل بسرعة. يرجى اختيار المنصة/المنصات التي تستخدمها حاليًا.</ListItem>  
            <ListItem>مع العلم : لن يؤثر توصيل منصاتك إلى ليبرو على موقعك او تطبيقاتك، اتصال البيانات لدينا لا يتفاعل مباشرة مع موقعك او تطبيقك ,نحن نقتصر فقط على سحب البيانات من مزود المنصة.</ListItem>  
          </List>  
        </Requirements>  
  
        <SectionTitle>منصة تطبيق المحاسبة المستخدمة:</SectionTitle>  
        <Options>  
          <RadioButtonOption  
            id="quickBooks"  
            name="accountingApp"  
            value="quickBooks"  
            checked={accountingApp === 'quickBooks'}  
            onChange={() => handleAccountingClick('quickBooks')}  
            label="كويك بوكس"  
            imgSrc={quickbooks} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="xero"  
            name="accountingApp"  
            value="xero"  
            checked={accountingApp === 'xero'}  
            onChange={() => handleAccountingClick('xero')}  
            label="زيرو"  
            imgSrc={xero} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="odoo"  
            name="accountingApp"  
            value="odoo"  
            checked={accountingApp === 'odoo'}  
            onChange={() => handleAccountingClick('odoo')}  
            label="اودو"  
            imgSrc={odoo} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="otherAccounting"  
            name="accountingApp"  
            value="otherAccounting"  
            checked={accountingApp === 'otherAccounting'}  
            onChange={() => handleAccountingClick('otherAccounting')}  
            label="اخرى"  
            imgSrc={other} // Replace with appropriate image if different  
          />  
        </Options>  
  
  
        <SectionTitle>منصة التجارة الإلكترونية الخاصة بك:</SectionTitle>  
        <Options>  
          <RadioButtonOption  
            id="amazon"  
            name="ecommercePlatform"  
            value="amazon"  
            checked={ecommercePlatform === 'amazon'}  
            onChange={() => handleEcommerceClick('amazon')}  
            label="امازون"  
            imgSrc={amazon}  
          />  
          <RadioButtonOption  
            id="shopify"  
            name="ecommercePlatform"  
            value="shopify"  
            checked={ecommercePlatform === 'shopify'}  
            onChange={() => handleEcommerceClick('shopify')}  
            label="شوبيفاي"  
            imgSrc={shopify}  
          />  
          <RadioButtonOption  
            id="amazonShopify"  
            name="ecommercePlatform"  
            value="amazonShopify"  
            checked={ecommercePlatform === 'amazonShopify'}  
            onChange={() => handleEcommerceClick('amazonShopify')}  
            label="امازون و شوبيفاي"  
            imgSrc={amazonShopify} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="otherEcommerce"  
            name="ecommercePlatform"  
            value="otherEcommerce"  
            checked={ecommercePlatform === 'otherEcommerce'}  
            onChange={() => handleEcommerceClick('otherEcommerce')}  
            label="منصه اخرى او خارج الانترنت"  
            imgSrc={other} // Replace with appropriate image if different  
          />  
        </Options>  
  

        {/* Uncomment if needed */}  
        {/* <SectionTitle>منصة التسوق والتطبيقات
                {/* Uncomment if needed */}  
        {/* <SectionTitle>منصة التسوق والتطبيقات المستخدمة:</SectionTitle>  
        <Options>  
          <RadioButtonOption  
            id="facebook"  
            name="marketingPlatform"  
            value="facebook"  
            checked={marketingPlatform === 'facebook'}  
            onChange={() => setMarketingPlatform('facebook')}  
            label="فيس بوك"  
            imgSrc={shopify} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="googleAnalytics"  
            name="marketingPlatform"  
            value="googleAnalytics"  
            checked={marketingPlatform === 'googleAnalytics'}  
            onChange={() => setMarketingPlatform('googleAnalytics')}  
            label="جوجل اناليتيكس"  
            imgSrc={shopify} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="googleAds"  
            name="marketingPlatform"  
            value="googleAds"  
            checked={marketingPlatform === 'googleAds'}  
            onChange={() => setMarketingPlatform('googleAds')}  
            label="جوجل ادز"  
            imgSrc={shopify} // Replace with appropriate image if different  
          />  
          <RadioButtonOption  
            id="otherMarketing"  
            name="marketingPlatform"  
            value="otherMarketing"  
            checked={marketingPlatform === 'otherMarketing'}  
            onChange={() => setMarketingPlatform('otherMarketing')}  
            label="اخرى"  
            imgSrc={shopify} // Replace with appropriate image if different  
          />  
        </Options> */}  
  

      </Container>  
      <ButtonContainer>  
          <Link to={"/finance-application-end"} onClick={() => { }}>  
            <Button text="متابعة"></Button>  
          </Link>  
        </ButtonContainer>  
    </Section>  
  );  
};  
  
export default ProductFinanceAppApplication;  