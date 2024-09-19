const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".chatbot header span");
const chatbox = document.querySelector(".chatbot");
const chatboxMessages = document.querySelector(".chatbox");
const backBtn = document.querySelector(".chat-input button");
// Retrieve fullname from session storage
const firstname = sessionStorage.getItem("firstname");

const faqs = {
  "Chat by Therapies": [
    {
      header: "Steaming Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Steaming Therapy?",
      answer:
        "Steaming therapy, also known as steam inhalation or vapor therapy, is a simple yet effective method of using steam to alleviate respiratory symptoms and promote overall well-being. It involves inhaling steam, often infused with essential oils, to moisturize the airways, loosen mucus, and reduce congestion.",
    },
    {
      question: "What does Steaming Therapy treat?",
      answer:
        "Treats respiratory issues, skin conditions, muscle and joint pain, stress, fatigue, detoxification, and digestive issues.",
    },
    {
      question: "How do I prepare myself when going for Steaming Therapy?",
      answer:
        "Consult with a practitioner, wear comfortable clothing, avoid heavy meals, stay hydrated, and discuss any medical conditions with the practitioner.",
    },
    {
      header: "Womb Masking Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Womb Masking Therapy?",
      answer:
        "Womb masking, also known as uterine massage or womb care therapy, is a specialized massage technique that focuses on the lower abdomen and pelvic area. It is a form of alternative medicine that is believed to promote reproductive health and alleviate menstrual cramps, backache, bloating, and other related symptoms.",
    },
    {
      question: "What does womb masking treat?",
      answer:
        "Treats menstrual issues, reproductive health concerns, postpartum recovery, digestive problems, stress, and detoxification.",
    },
    {
      question: "How do I prepare myself when going for womb masking?",
      answer:
        "Consult with a practitioner, wear loose clothing, avoid heavy meals, stay hydrated, and discuss any medical conditions.",
    },
    {
      header: "Water Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Water Therapy?",
      answer:
        "Water Therapy is a broad term encompassing various therapeutic techniques that utilize water to promote health and well-being.",
    },
    {
      question: "What does Water Therapy treat?",
      answer: `
      Treats musculoskeletal disorders, chronic pain, poor circulation, stress, anxiety, skin conditions, respiratory issues, and detoxification.      `,
    },
    {
      question: "How do I prepare for Water Therapy?",
      answer: `
        To prepare for Water Therapy, you should: Consult with a practitioner, Wear appropriate attire, Avoid heavy meals before the session, Stay hydrated, Follow any pre-treatment instructions provided`,
    },
    {
      header: "Aromatherapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Aromatherapy?",
      answer:
        "Aromatherapy is a holistic healing practice that uses essential oils derived from plants to promote physical, emotional, and psychological well-being. These oils are inhaled or applied to the skin to stimulate the body's natural healing processes.",
    },
    {
      question: "What does Aromatherapy treat?",
      answer:
        "Helps treat stress, anxiety, insomnia, pain, and mood disorders through the use of essential oils and therapeutic scents.",
    },
    {
      question: "How do I prepare myself when going for Aromatherapy treat?",
      answer:
        "Consult with a practitioner, avoid strong fragrances, choose comfortable attire, and ensure you're not allergic to any essential oils used.",
    },
    {
      header: "Massage therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Massage therapy?",
      answer:
        "Massage therapy is used to help manage a health condition or enhance wellness. It involves manipulating the soft tissues of the body. Massage has been practiced in most cultures, both Eastern and Western, throughout human history, and was one of the earliest tools that people used to try to relieve pain.",
    },
    {
      question: "What does massage therapy treat?",
      answer:
        "Treats muscle tension, joint pain, stress, headaches, and improves circulation and flexibility.",
    },
    {
      question: "How do I prepare myself when going for massage therapy?",
      answer:
        "Wear comfortable clothing, stay hydrated, and avoid heavy meals before the session. Discuss any pain points or conditions with your therapist.",
    },
    {
      header: "Reflexology",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Reflexology?",
      answer:
        "Reflexology, also known as zone therapy, is an alternative medical practice involving the application of pressure to specific points on the feet, ears, and hands. This is done using thumb, finger, and hand massage techniques without the use of oil or lotion.",
    },
    {
      question: "What does Reflexology treat?",
      answer:
        "Treats stress, anxiety, digestive issues, headaches, and improves circulation by stimulating pressure points on the feet, hands, or ears.",
    },
    {
      question: "How do I prepare myself when going for Reflexology?",
      answer:
        "Wear loose clothing, stay hydrated, and ensure your feet or hands are clean and free of injuries or infections.",
    },
    {
      header: "Acupuncture",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Acupuncture?",
      answer:
        "Acupuncture is an alternative therapy that involves inserting thin needles into targeted areas of the body. It can help treat chronic pain.",
    },
    {
      question: "What does Acupuncture treat?",
      answer:
        "Treats chronic pain, headaches, migraines, stress, digestive issues, and can help with overall energy balance.",
    },
    {
      question: "How do I prepare myself when going for Acupuncture?",
      answer:
        "Wear loose, comfortable clothing, avoid heavy meals, stay hydrated, and inform the practitioner of any medications or health concerns.",
    },
    {
      header: "Cupping Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Cupping Therapy?",
      answer:
        "Cupping therapy is an ancient form of alternative medicine where a therapist puts special cups on your skin for a few minutes to create suction. The idea is to draw blood to or away from parts of your body. People get it for many reasons, such as pain and inflammation relief, relaxation and well-being, and as a type of deep-tissue massage.",
    },
    {
      question: "What does Cupping Therapy treat?",
      answer:
        "Treats muscle and joint pain, respiratory issues, promotes detoxification, and helps reduce inflammation and stress.",
    },
    {
      question: "How do I prepare myself when going for Cupping Therapy?",
      answer:
        "Wear comfortable, loose clothing, avoid heavy meals, stay hydrated, and discuss any health conditions or skin sensitivities with the practitioner.",
    },
    {
      header: "Reiki Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Reiki Therapy?",
      answer:
        "Reiki is a technique that uses energy force to reduce stress and anxiety and encourage relaxation. The method uses gentle touch and placement for healing and tries to improve balance in your body.",
    },
    {
      question: "What does Reiki Therapy treat?",
      answer:
        "Helps treat stress, emotional imbalance, physical discomfort, and promotes overall well-being through energy healing techniques.",
    },
    {
      question: "How do I prepare myself when going for Reiki Therapy?",
      answer:
        "Wear comfortable clothing, avoid heavy meals, relax, and set an intention for healing or balance before the session.",
    },
    {
      header: "Femoral Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Femoral Therapy?",
      answer:
        "Femoral Therapy is a specialized treatment aimed at improving circulation in the legs.",
    },
    {
      question: "What does Femoral Therapy treat?",
      answer:
        "Treats poor circulation, peripheral artery disease (PAD), leg pain, varicose veins, post-surgical recovery, blood clot prevention, and wound healing.",
    },
    {
      question: "How do I prepare for Femoral Therapy?",
      answer:
        "Stay hydrated, wear comfortable clothing, avoid heavy meals and smoking, consult with your healthcare provider if on blood-thinning medications, and be prepared for post-treatment rest.",
    },
    {
      header: "Rehabilitation Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Rehabilitation Therapy?",
      answer:
        "Rehabilitation Therapy is a comprehensive approach to healthcare that focuses on restoring, improving, or maintaining physical, emotional, and functional abilities. It is often used to help individuals recover from injuries, illnesses, or surgeries.",
    },
    {
      question: "What does Rehabilitation Therapy treat?",
      answer:
        "Supports injury recovery, manages chronic pain, improves neurological function, addresses musculoskeletal disorders, enhances cardiovascular health, improves respiratory function, addresses mobility issues, and aids post-surgical recovery.",
    },
    {
      question: "How do I prepare for Rehabilitation Therapy?",
      answer:
        "Consult with a specialist, wear comfortable clothing, stay hydrated, follow pre-treatment instructions, be ready for exercises, and set realistic rehabilitation goals.",
    },
    {
      header: "Moxibustion Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Moxibustion Therapy?",
      answer:
        "Moxibustion Therapy is a traditional Chinese medicine technique that involves the application of heat to specific points on the body using moxa, a material made from dried mugwort leaves. The heat from the moxa is believed to stimulate blood flow, promote healing, and balance the body's energy.",
    },
    {
      question: "What does Moxibustion Therapy treat?",
      answer:
        "Treats chronic pain, digestive disorders, menstrual problems, immune system issues, fatigue, respiratory conditions, and aids recovery and healing.",
    },
    {
      question: "How do I prepare for Moxibustion Therapy?",
      answer:
        "Consult with a practitioner, wear loose comfortable clothing, avoid heavy meals, stay hydrated, and follow pre-treatment instructions.",
    },
    {
      header: "Tok Sen Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Tok Sen Therapy?",
      answer:
        "Tok Sen Therapy is a traditional Thai healing art that involves the use of a wooden mallet to tap on specific points on the body. This rhythmic tapping is believed to help balance energy flow, relieve pain, and promote overall well-being.",
    },
    {
      question: "What does Tok Sen Therapy treat?",
      answer:
        "Treats musculoskeletal pain, chronic fatigue, stress, anxiety, poor circulation, muscle tension, and mobility issues.",
    },
    {
      question: "How do I prepare for Tok Sen Therapy?",
      answer:
        "Consult with a practitioner, wear comfortable clothing, avoid heavy meals, stay hydrated, and relax before and after the session.",
    },
    {
      header: "Fertility Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Fertility Therapy?",
      answer:
        "Fertility Therapy is a broad term that encompasses various treatments and interventions aimed at improving reproductive health and increasing the chances of conception. It can involve a combination of medical, surgical, and lifestyle approaches.",
    },
    {
      question: "What does Fertility Therapy treat?",
      answer:
        "Treats hormonal imbalances, low sperm quality, ovulation issues, stress-related infertility, reproductive organ health, unexplained infertility, and promotes overall reproductive health.",
    },
    {
      question: "How do I prepare for Fertility Therapy?",
      answer:
        "Stay hydrated, maintain a balanced diet, limit alcohol/caffeine, avoid stress, discuss medications, bring medical history, be open to multiple sessions, and communicate fertility goals.",
    },
    {
      header: "Janu Basti Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Janu Basti Therapy?",
      answer:
        "Janu Basti is a specialized Ayurvedic therapy focused on treating knee-related issues by using warm medicated oils.",
    },
    {
      question: "What does Janu Basti treat?",
      answer:
        "Treats knee pain, joint stiffness, inflammation, muscle fatigue, knee injuries, and chronic knee conditions.",
    },
    {
      question: "How do I prepare for Janu Basti?",
      answer:
        "Consult with a practitioner, stay hydrated, wear comfortable clothing, avoid heavy meals, and plan for rest post-treatment to maximize benefits.",
    },
    {
      header: "Kati Basti Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Kati Basti Therapy?",
      answer:
        "Kati Basti is a soothing treatment where a large quantity of warm herbalised oil is retained on your lower back to relieve pain, stiffness and inflammation.",
    },
    {
      question: "What does Kati Basti Therapy treat?",
      answer:
        "Treats Lower back pain (chronic and acute), Sciatica (pain radiating along the sciatic nerve), Lumbar spondylosis (degenerative changes in the lower spine), Herniated or bulging discs, Muscle spasms and stiffness in the lower back, Inflammation and joint-related issues in the lumbar region, Ankylosing spondylitis, Degenerative disc diseases, Stress-induced back pain.",
    },
    {
      question: "How do I prepare for Kati Basti Therapy?",
      answer:
        "Consult with a practitioner, stay hydrated, wear comfortable clothing, avoid heavy meals, and plan for rest post-treatment to maximize benefits.",
    },
    {
      header: "Immunotherapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Immunotherapy?",
      answer:
        "Immunotherapy is a type of cancer treatment that boosts the body's natural defenses to fight cancer.",
    },
    {
      question: "What does Immunotherapy treat?",
      answer:
        "Treats cancers (e.g., melanoma, lung, kidney, bladder, lymphoma), autoimmune diseases, allergic reactions, and supports high-risk patients in preventing cancer recurrence.",
    },
    {
      question: "How do I prepare for Immunotherapy?",
      answer:
        "Consult your oncologist, understand the treatment plan, review medical history, complete pre-treatment tests, discuss medications, and stay hydrated. Plan for rest and track symptoms during treatment.",
    },
    {
      header: "Food Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Food Therapy?",
      answer:
        "Food Therapy involves using a personalized nutrition plan to promote healing and overall health.",
    },
    {
      question: "What does Food Therapy treat?",
      answer:
        "Treats digestive issues, chronic diseases, autoimmune conditions, weight management, allergies, and enhances immunity. Promotes disease prevention and physical performance in athletes.",
    },
    {
      question: "How do I prepare for Food Therapy?",
      answer:
        "Consult a nutritionist, follow recommended dietary changes, avoid processed foods, stay hydrated, and track health improvements based on nutritional changes.",
    },
    {
      header: "Moxibustion Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Moxibustion Therapy?",
      answer:
        "Moxibustion Therapy involves burning a small amount of mugwort near specific body points to promote healing and warmth.",
    },
    {
      question: "What does Moxibustion Therapy treat?",
      answer:
        "Treats chronic pain (arthritis, back pain), digestive problems, menstrual disorders, immune system support, fatigue, respiratory conditions, and assists with recovery from illness or surgery.",
    },
    {
      question: "How do I prepare for Moxibustion Therapy?",
      answer:
        "Consult a practitioner, wear comfortable clothing, avoid heavy meals, stay hydrated, and follow post-treatment care instructions. Prepare for relaxation post-therapy.",
    },
    {
      header: "Chiropractic Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Chiropractic Therapy?",
      answer:
        "Chiropractic Therapy focuses on diagnosing and treating mechanical disorders of the spine and musculoskeletal system.",
    },
    {
      question: "What does Chiropractic Therapy treat?",
      answer:
        "Treats back and neck pain, joint problems, headaches, sciatica, muscle stiffness, poor posture, sports injuries, and improves spinal alignment.",
    },
    {
      question: "How do I prepare for Chiropractic Therapy?",
      answer:
        "Wear loose clothing, stay hydrated, avoid heavy meals, discuss any underlying conditions with the chiropractor, and prepare to discuss your pain points or mobility issues.",
    },
    {
      header: "Api Therapy (Bee Venom Therapy)",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Api Therapy (Bee Venom Therapy)?",
      answer:
        "Api Therapy uses bee venom for therapeutic purposes, aimed at stimulating the immune system and reducing inflammation.",
    },
    {
      question: "What does Api Therapy treat?",
      answer:
        "Treats arthritis, chronic pain, inflammation, multiple sclerosis, Lyme disease, and skin conditions. It also stimulates the immune system and reduces symptoms of autoimmune disorders.",
    },
    {
      question: "How do I prepare for Api Therapy?",
      answer:
        "Avoid alcohol and caffeine before the session, wear loose clothing, stay hydrated, discuss any allergies with the therapist, and prepare for post-session rest to monitor for any adverse reactions.",
    },
    {
      header: "Abhyanga Therapy",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Abhyanga Therapy?",
      answer:
        "Abhyanga Therapy is a form of Ayurvedic oil massage aimed at detoxifying, nourishing, and rejuvenating the body.",
    },
    {
      question: "What does Abhyanga Therapy treat?",
      answer:
        "Treats stress, muscle tension, skin dryness, poor circulation, fatigue, and helps balance body energies (doshas). It is often used to support overall well-being and rejuvenation in Ayurveda.",
    },
    {
      question: "How do I prepare for Abhyanga Therapy?",
      answer:
        "Avoid heavy meals, stay hydrated, wear comfortable clothing, avoid using lotions or oils on your skin before the session, and relax after the treatment for maximum benefit.",
    },
  ],
  "Chat by Symptoms": [
    {
      header: "Autoimmune Disorders",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Autoimmune Disorders?",
      answer:
        "Autoimmune Disorders is a disease in which the body's immune system attacks healthy cells.",
    },
    {
      question: "What are the symptoms related to Autoimmune Disorders?",
      answer: "Arthritis, multiple sclerosis, autoimmune diseases.",
    },
    {
      question: "Which therapy prevents or treats Autoimmune Disorders?",
      answer:
        "Acupuncture, Cupping Therapy, Massage Therapy, Hot Stone Therapy, Reiki Therapy, Food Therapy, Api Therapy.",
    },
    {
      header: "Skin conditions",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Skin conditions?",
      answer:
        "Skin conditions are disorders affecting the skin, such as eczema, psoriasis, acne, and rosacea.",
    },
    {
      question: "What are the symptoms of skin conditions?",
      answer: "Rash, itching, redness, dryness, scaling, acne breakouts.",
    },
    {
      question: "Which therapies can help with skin conditions?",
      answer: "Steaming Therapy, Mud Therapy, Api Therapy",
    },
    {
      header: "Respiratory issues",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Respiratory issues?",
      answer:
        "Respiratory issues refer to conditions affecting the lungs and airways, such as asthma, bronchitis, pneumonia, and COPD.",
    },
    {
      question: "What are the symptoms of respiratory issues?",
      answer:
        "Cough, shortness of breath, wheezing, chest pain, difficulty breathing.",
    },
    {
      question: "Which therapies can help with respiratory issues?",
      answer:
        "Steaming Therapy, Acupuncture, Cupping Therapy, Moxibustion Therapy",
    },
    {
      header: "Neurological conditions",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Neurological conditions?",
      answer:
        "Neurological conditions are disorders affecting the brain, spinal cord, and nerves.",
    },
    {
      question: "What are some common Neurological conditions?",
      answer:
        "Stroke, Parkinson's disease, multiple sclerosis, Alzheimer's disease.",
    },
    {
      question: "Which therapies can help with Neurological conditions?",
      answer:
        "Rehabilitation Therapy, Acupuncture, Massage Therapy, Physical Therapy, Occupational Therapy.",
    },
    {
      header: "Muscle and Joint Pain",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Muscle and Joint Pain?",
      answer:
        "Muscle and joint pain refers to discomfort or soreness in the muscles, tendons, ligaments, or joints.",
    },
    {
      question: "What are the symptoms of muscle and joint pain?",
      answer:
        "Aching, tenderness, stiffness, limited range of motion, swelling.",
    },
    {
      question: "Which therapies can help with muscle and joint pain?",
      answer:
        "Acupuncture, Cupping Therapy, Massage Therapy, Hot Stone Therapy, Tok Sen Therapy, Chiropractic Therapy, Rehabilitation Therapy",
    },
    {
      header: "Stress",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Stress?",
      answer:
        "Stress is a physical or emotional response to a demanding or threatening situation.",
    },
    {
      question: "What are the symptoms of stress?",
      answer:
        "Anxiety, fatigue, difficulty concentrating, irritability, changes in appetite, sleep disturbances.",
    },
    {
      question: "Which therapies can help with stress?",
      answer:
        "Aromatherapy, Massage Therapy, Hot Stone Therapy, Reflexology, Reiki Therapy, Shirodhara Therapy, Tok Sen Therapy, Food Therapy, Fertility Therapy",
    },
    {
      header: "Fatigue",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Fatigue?",
      answer: "Fatigue is a feeling of extreme tiredness or exhaustion.",
    },
    {
      question: "What are the symptoms of fatigue?",
      answer:
        "Excessive tiredness, lack of energy, difficulty concentrating, decreased productivity.",
    },
    {
      question: "Which therapies can help with fatigue?",
      answer:
        "Acupuncture, Cupping Therapy, Massage Therapy, Hot Stone Therapy, Reiki Therapy, Shirodhara Therapy, Food Therapy",
    },
    {
      header: "Detoxification",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Detoxification?",
      answer: "Detoxification is the process of removing toxins from the body.",
    },
    {
      question: "What are the benefits of detoxification?",
      answer:
        "Improved overall health, reduced toxin exposure, improved energy levels, better digestion.",
    },
    {
      question: "Which therapies can help with detoxification?",
      answer:
        "Steaming Therapy, Womb Masking, Cupping Therapy, Mud Therapy, Food Therapy",
    },
    {
      header: "Digestive issues",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Digestive issues?",
      answer:
        "Digestive issues refer to problems with the digestive system, such as constipation, diarrhea, bloating, gas, heartburn, and abdominal pain.",
    },
    {
      question: "What are the symptoms of digestive issues?",
      answer:
        "Constipation, diarrhea, bloating, gas, heartburn, abdominal pain.",
    },
    {
      question: "Which therapies can help with digestive issues?",
      answer:
        "Acupuncture, Cupping Therapy, Reflexology, Food Therapy, Janu Basti, Moxibustion Therapy",
    },
    {
      header: "Menstrual issues",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Menstrual issues?",
      answer:
        "Menstrual issues refer to problems related to menstruation, such as painful periods, irregular bleeding, heavy bleeding, and PMS symptoms.",
    },
    {
      question: "What are the symptoms of menstrual issues?",
      answer:
        "Painful periods, irregular bleeding, heavy bleeding, PMS symptoms.",
    },
    {
      question: "Which therapies can help with menstrual issues?",
      answer:
        "Womb Masking, Acupuncture, Chinese Herbal Medicine, Cupping Therapy, Food Therapy",
    },
    {
      header: "Reproductive Health Concerns",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Reproductive Health Concerns?",
      answer:
        "Reproductive health concerns refer to problems related to the reproductive system, such as infertility, endometriosis, polycystic ovary syndrome (PCOS).",
    },
    {
      question: "What are some common reproductive health concerns?",
      answer: "Infertility, endometriosis, polycystic ovary syndrome (PCOS).",
    },
    {
      question: "Which therapies can help with reproductive health concerns?",
      answer:
        "Fertility Therapy, Acupuncture, Chinese Herbal Medicine, Cupping Therapy, Food Therapy, Reiki Therapy",
    },
    {
      header: "Postpartum Recovery?",
      highlight: true, // Flag to indicate standout category
    },
    {
      question: "What is Postpartum Recovery?",
      answer:
        "Postpartum recovery refers to the physical and emotional healing process that occurs after childbirth.",
    },
    {
      question: "What are common challenges during postpartum recovery?",
      answer:
        "Physical pain, fatigue, emotional changes, breastfeeding difficulties.",
    },
    {
      question: "Which therapies can help with postpartum recovery?",
      answer:
        "Womb Masking, Massage Therapy, Acupuncture, Reiki Therapy, Food Therapy",
    },
  ],
};

// JavaScript code to fetch the 'firstname' from session storage and update the greeting text
document.addEventListener("DOMContentLoaded", function () {
  const firstName = sessionStorage.getItem("firstName");
  if (firstName) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hi there, ${firstName}!`;
  }
});

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const displayDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const dateDiv = document.createElement("div");
  dateDiv.classList.add("chat-date");
  dateDiv.textContent = formattedDate;
  chatboxMessages.appendChild(dateDiv);
};

const displayCustomMessage = (message) => {
  chatboxMessages.appendChild(createChatLi(message, "incoming"));
};

const displayCategories = () => {
  chatboxMessages.innerHTML = ""; // Clear the chatbox
  displayDate(); // Display the current date
  displayCustomMessage(
    "Hi there! I'm the Bush Doktor Virtual Assistant. You can select category to chat by below to get answers to your most pressing alternative therapies enquiries and health-related questions based on symptoms."
  );
  displayCustomMessage(
    "For additional help, navigate to the Contact Us page and send us a message."
  );
  displayCustomMessage("What can I help you with today?");
  Object.keys(faqs).forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");
    categoryCard.textContent = category;
    categoryCard.addEventListener("click", () => displayQuestions(category));
    chatboxMessages.appendChild(categoryCard);
  });
};

const displayQuestions = (category) => {
  chatboxMessages.innerHTML = ""; // Clear the chatbox
  faqs[category].forEach((faq) => {
    if (faq.header) {
      // Create a header card if it's a header
      const headerCard = document.createElement("div");
      headerCard.classList.add("header-card");
      headerCard.textContent = faq.header;
      if (faq.highlight) {
        headerCard.classList.add("highlight"); // Add a highlight class if needed
      }
      chatboxMessages.appendChild(headerCard);
    } else if (faq.question) {
      // Create question cards if it's a question
      const questionCard = document.createElement("div");
      questionCard.classList.add("question-card");
      questionCard.textContent = faq.question;
      questionCard.addEventListener("click", () => {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer-div");
        answerDiv.innerHTML = createChatLi(faq.answer, "incoming").innerHTML;
        questionCard.parentNode.insertBefore(
          answerDiv,
          questionCard.nextSibling
        );
      });
      chatboxMessages.appendChild(questionCard);
    }
  });
};

const displayAnswer = (answer) => {
  chatboxMessages.appendChild(createChatLi(answer, "incoming"));
};

chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
  displayCategories();
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
});

displayCategories(); // Display categories initially
