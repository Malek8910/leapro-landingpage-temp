import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import useId from "react-use-uuid";
import { Context } from "../Wrapper";


const Section = styled.section`
  /* min-height: 100vh; */
  /* min-height: 110vh; */
  width: 100vw;

    /* background-color: ${(props) => props.theme.body}; */
  position: relative;

  direction: ${(props) => props.direction};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #EFF2FB; */
  margin-top: 82px;

  margin-bottom: 82px;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

`;


// Styled components for layout and styling
const FAQContainer = styled.div`
  width: 1160px;
  margin: auto;
  padding: 20px;
  direction: ${(props) => props.context.locale.startsWith("ar") ? "rtl" : "ltr"};

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const QuestionContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;

const QuestionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  color: #1F366B;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  @media (max-width: ${(props) => props.theme.width}) {
    /* width: 90%; */
    font-size: large;  }
`;

const Answer = styled.div`
  padding: 10px 0px;
  margin-top: 10px;
  font-size: 0.9em;
  color: #555;
  font-size: medium;
  white-space: pre-line;
  /* font-family: "IBM Plex Sans Arabic", sans-serif; */


`;

const Icon = styled.span`
  font-size: 1.2em;
`;


const Title = styled.h1`
  /* font-size: ${(props) => props.theme.fontxxl}; */
  text-transform: capitalize;
  font-size: xx-large;
  /* color: ${(props) => props.theme.text}; */
  /* align-self: flex-start; */
  /* display: flex; */
  /* justify-content: right; */
  /* align-items: left; */
  text-align: center;
  /* margin: 1rem auto; */
  /* border-bottom: 2px solid ${(props) => props.theme.text}; */
  /* width: fit-content; */
  /* width: 80%; */
  /* color: #002856; */
  width: ${(props) => props.theme.width};
  padding-top: 40px;
  padding-bottom: 28px;

  color: #1F366B;

  /* font-family: "IBM Plex Sans Arabic", sans-serif; */

  background-image: ${(props) =>
    props.direction === "rtl"
      ? "linear-gradient(90deg, #0693E3, #0F56C8, #1F366B)"
      : "linear-gradient(90deg, #1F366B, #0F56C8, #0693E3)"};
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${(props) => props.theme.width}) {
    font-size: xx-large;
    width: 90%;
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ProductTemplate2Faq = ({ title, faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleQuestion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);

       //console.log(userUUID);
       if (userUUID !== "") {
        sendTrigger(userUUID);
      }
      else
        sendTrigger("userUUID");
  };




  // Sample FAQ data
  // const faqData = [
  //   {
  //     question: "أبيع عبر أمازون أو بالجملة، هل ما زال بإمكان ليبرو تمويلي؟",
  //     answer: "نعم توفر ليبرو التمويل لبائعي أمازون وأعمال البيع بالجملة.",
  //   },
  //   {
  //     question: "هل توفر ليبرو تمويلاً لبدء عمل جديد؟",
  //     answer: "حاليًا، لا تقدم ليبرو تمويلاً لإنشاء عمل جديد."+

  // "لكي تكون مؤهلاً للحصول على التمويل، يجب عليك:"+"\n"+

  // " - تحقيق مبيعات شهرية بمتوسط لا يقل عن 10,000 جنية.",

  // },
  //   {
  //     question: "هل يؤثر توصيل منصاتي إلى ليبرو على موقعي؟",
  //     answer: "لا، اتصال البيانات لدينا لا يتفاعل مباشرة مع موقعك ,نحن نقتصر فقط على سحب البيانات من مزود المنصة.",
  //   },
  //   {
  //     question: "لماذا تحتاج ليبرو الوصول إلى منصاتي؟",
  //     answer: "نحتاج عادةً إلى الوصول للبيانات بقراءة فقط لفهم أداء التسويق والإيرادات السابقة وكذلك تدفقاتك النقدية. يساعد هذا في ضمان أن تكون عروضنا مخصصة لاحتياجات عملك وأن يكون الوقت الذي نقضيه في مراجعة عملك قليل قدر الإمكان."+
  // "لا نجري أي تغييرات على منصاتك ، ولا يؤثر اتصالنا على موقع متجرك لأننا نستخدم واجهات برمجة التطبيقات المقدمة من المنصة نفسها.",
  //   },
  //   {
  //     question: "ما هي المنصات التي يجب علي توصيلها إلى ليبرو؟",
  //     answer: " - نطلب منك توصيل كل المنصات الرقمية اللتى تعمل عليها إلى ليبرو ,و كل ما كان عدد المنصات اكبر كلما التقييم و عروض الاتمويل اسرع ,المنصات الرقميه:"+
  //     " - منصات التجارة الإلكترونية الخاصة بك (مثل Shopify، WooCommerce، أو Magento).\n"+
  // " - منصات التسويق والتحليلات الخاصة بك (مثل Facebook، Google Ads، أو Google Analytics).\n"+
  // " - منصات المحاسبة الخاصة بك (مثل QuickBooks أو Xero).\n"+
  // " - في بعض الحالات، قد نطلب منك توصيل منصة الدفع الخاصة بك.\n"+
  // " - البيانات التي نحصل عليها من هذه المنصات تساعدنا في فهم التدفقات النقدية وأداء التسويق والإيرادات، مما يتيح لنا تخصيص العروض لاحتياجات عملك.\n"+
  // " - ولن نجري تغييرات على بياناتك أو نبيعها لأطراف ثالثة لأغراض تسويقية."
  // },

  // ];


// " - أن يكون عملك قائماً منذ 6 أشهر على الأقل."+"\n"+
// " - أن تكون شركتك مسجلة في مصر",



  let axiosEnabled = true;
  const id = useId();
  
  const context = React.useContext(Context);


  const [userUUID, setUserUUID] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userUUID");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });


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

  }, [userUUID]);



  const sendTrigger = async () => {
    //=========== semding trigger
    let doc = {
      document: {
        userId: userUUID,
        type: "Finance-LandingPage-FAQ-Explored",
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
  const direction = context.locale.startsWith("ar") ? "rtl" : "ltr";


  return (
    <Section>
    <Title direction={direction}>{title}</Title>

    <FAQContainer context={context}>

      {faqData.map((faq, index) => (
        <QuestionContainer key={index}>
          <QuestionTitle onClick={() => toggleQuestion(index)}>
            {faq.question}
            <Icon>{expandedIndex === index ? "-" : "+"}</Icon>
          </QuestionTitle>
          {expandedIndex === index && <Answer>{faq.answer}</Answer>}
        </QuestionContainer>
      ))}
    </FAQContainer>
    </Section>
  );
};

export default ProductTemplate2Faq;
