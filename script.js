const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".chatbot header span");
const chatbox = document.querySelector(".chatbot");
const chatboxMessages = document.querySelector(".chatbox");
const backBtn = document.querySelector(".chat-input button");
// Retrieve fullname from session storage
const firstname = sessionStorage.getItem("firstname");

const faqs = {
  "General Questions": [
    {
      question:
        "What services does Kampala Homemade Holistic Herbal Clinic and Therapeutic Center offer?",
      answer:
        "We offer a range of services including herbal consultations/treatments, Ayurvedic therapies, dietary and lifestyle advice, massage therapies, mental health therapies, detox programs, and personalized wellness plans.",
    },
    {
      question: "What is Ayurveda?",
      answer:
        "Ayurveda is an ancient system of medicine from India that focuses on balancing the body, mind, and spirit through natural therapies, including herbal remedies, cupping, acupuncture, shirodhara, Kati basti, uro basti, moxibustion, dietary changes, quantum healing, past life regression therapy, yoga, and meditation.",
    },
  ],
  "Consultations and Treatments": [
    {
      question: "How do I book a consultation?",
      answer:
        "You can book a consultation by calling our clinic, visiting our website, or stopping by in person. Online booking options are also available for your convenience.",
    },
    {
      question: "What should I expect during my first consultation?",
      answer:
        "During your first consultation, our practitioners will conduct a thorough assessment of your health, including your medical history, lifestyle, diet, and current health concerns. This helps us create a personalized treatment plan tailored to your specific needs.",
    },
    {
      question: "Are the treatments safe?",
      answer:
        "Yes, our treatments are safe and based on natural, holistic approaches. We use high-quality, organic herbs and follow traditional Ayurvedic practices that have been used for centuries.",
    },
  ],
  "Herbal Remedies and Therapies": [
    {
      question: "What types of herbal remedies do you offer?",
      answer:
        "We offer a variety of herbal remedies including teas, tinctures, capsules, and topical applications. These remedies are tailored to address specific health issues.",
    },
    {
      question: "Can I combine herbal remedies with my current medications?",
      answer:
        "It is important to consult with our practitioners and your healthcare provider before combining herbal remedies with any prescribed medications to ensure there are no adverse interactions.",
    },
  ],
  "Lifestyle and Dietary Advice": [
    {
      question: "Do you provide dietary recommendations?",
      answer:
        "Yes, we provide personalized dietary advice based on Ayurvedic principles that consider your body type, current health condition, and lifestyle. This helps in promoting better digestion, energy, and overall health.",
    },
  ],
  "Practical Information": [
    {
      question: "What are your operating hours?",
      answer:
        "Our clinic operates from Monday to Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays and public holidays except for emergency cases.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We currently do not accept insurance for our services. However, we provide detailed receipts that you can submit to your insurance provider for possible reimbursement.",
    },
    {
      question: "How can I contact the clinic for further inquiries?",
      answer:
        "You can contact us via WhatsApp, phone, email, or through our website's contact form. Our friendly staff is always ready to assist you with any questions or concerns you may have.",
    },
  ],
  "Specific Conditions and Treatments": [
    {
      question: "Can Ayurvedic treatments help with chronic conditions?",
      answer:
        "Yes, Ayurvedic treatments can be very effective in managing chronic conditions such as stroke, arthritis, asthma, diabetes, cancer, HBP, kidney, liver, heart diseases, digestive disorders, and stress-related illnesses. Our practitioners will create a personalized treatment plan based on your specific condition.",
    },
    {
      question: "Do you offer treatments for mental health issues?",
      answer:
        "Yes, we offer treatments for mental health issues including anxiety, depression, addiction, trauma, and stress. These treatments may include past life regression therapy, quantum healing therapy, herbal remedies, lifestyle and dietary advice, yoga, meditation, and other holistic therapies.",
    },
  ],
  "Products and Services": [
    {
      question: "Do you sell Ayurvedic products?",
      answer:
        "Yes, we have a range of Ayurvedic products available for purchase at our clinic. These include herbal supplements, oils, teas, and skincare products that are designed to support your overall well-being.",
    },
  ],
  "Education and Workshops": [
    {
      question: "Do you offer any workshops or classes?",
      answer:
        "Yes, we offer various training programs, workshops and classes on topics such as Ayurvedic therapies, herbal medicine, quantum healing, meditation, and stress management. These are designed to educate and empower you to take charge of your health.",
    },
    {
      question: "Can I learn more about Ayurveda at your center?",
      answer:
        "Absolutely! We provide educational resources, and consultations to help you understand the principles of Ayurveda and how to incorporate them into your daily life for better health and wellness.",
    },
  ],
  "Customized Services": [
    {
      question: "Do you provide customized wellness plans?",
      answer:
        "Yes, we provide personalized wellness plans that are tailored to your unique needs and health goals. These plans may include dietary and lifestyle recommendations, herbal remedies, and specific therapies to support your overall well-being.",
    },
    {
      question: "How do you determine which treatments are right for me?",
      answer:
        "Our practitioners perform a detailed assessment during your initial consultation, considering your medical history, lifestyle, diet, and current health concerns. Based on this, we create a customized treatment plan to address your specific needs.",
    },
  ],
  "Follow-Up and Support": [
    {
      question: "How often should I come in for treatments?",
      answer:
        "The frequency of treatments depends on your individual health needs and goals. Some clients benefit from weekly sessions, while others may only need monthly visits. Our practitioners will recommend a schedule that best supports your wellness journey.",
    },
    {
      question: "Do you offer follow-up consultations?",
      answer:
        "Yes, follow-up consultations are an important part of our care. They allow us to monitor your progress, adjust treatments as needed, and ensure that you are achieving your health and wellness goals.",
    },
  ],
};

// JavaScript code to fetch the 'firstname' from session storage and update the greeting text
document.addEventListener("DOMContentLoaded", function () {
  const firstName = sessionStorage.getItem("firstName");
  if (firstName) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hello there, ${firstName}!`;
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
  displayCustomMessage("Hi there! I'm the Kampala Homemade Virtual Assistant.");
  displayCustomMessage(
    "For additional help, please log in to your account to chat further"
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
    const questionCard = document.createElement("div");
    questionCard.classList.add("question-card");
    questionCard.textContent = faq.question;
    questionCard.addEventListener("click", () => {
      const answerDiv = document.createElement("div");
      answerDiv.classList.add("answer-div");
      answerDiv.innerHTML = createChatLi(faq.answer, "incoming").innerHTML;
      questionCard.parentNode.insertBefore(answerDiv, questionCard.nextSibling);
    });
    chatboxMessages.appendChild(questionCard);
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
