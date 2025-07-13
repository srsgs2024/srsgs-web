"use client";

import { useLanguage } from "@/i18next/context/languageContext";

export default function FAQPage() {
  const { language, switchLanguage } = useLanguage();

  // FAQ Data in English
  const faqDataEnglish = [
    {
      question: "What is “Prasadam Vyavastha”?",
      answer:
        "When you visit a temple for prayer, you never go there empty-handed. Similarly, when you return after prayer from any temple, you bring Prasadam from the temple. Likewise, when you donate ₹251/- to Gau-Mata, you receive Prasadam as blessings. The “Prasadam Arrangement” by “Shri Radheshyam Gau-Shala Samiti” is the world’s first such arrangement that offers you a chance to receive Prasadam worth up to ₹25,10,000/- as blessings for a donation of just ₹251/-.",
    },
    {
      question: "Why is the minimum donation amount fixed as ₹251/-?",
      answer:
        "The Society aims to connect as many individuals as possible for the noble work of cow welfare, which is why a minimum, easy, and affordable donation amount has been set, allowing even the poorest individual to contribute and receive Prasadam.",
    },
    {
      question: "What is the Prasadam Arrangement?",
      answer:
        "When you donate ₹251/- to the Society, they provide you with a unique Gau-Sevak ID along with your password. With this unique ID and password, you can click on your 'Gau-Sevak Login' to access your profile. First, you should change your password in the profile section. After that, you need to verify your KYC and provide your complete details to the Society.",
    },
    {
      question:
        "Does the Society invest our donation of ₹251/- in business and then provide us profit as Prasadam?",
      answer:
        "No, the Society does not invest your donation in any business or trade. The funds are utilized solely for Gaushala and Prasadam distribution.",
    },
    {
      question:
        "How does the Society calculate the payment of ₹25,10,000/- in return for our donation of ₹251/-?",
      answer:
        "Through a combination of 'Unity and Arrangement', by adding two new Gau-Sevaks under each existing one, we can calculate the ₹25,10,000/- over 20 levels, with each Gau-Sevak contributing ₹5
        of ₹251/-.",
    },
    {
      question:
        "How will the organization carry out cow protection when the entire donation amount is distributed as Prasadam?",
      answer:
        "The organization returns a minimal amount of ₹251/- as Prasadam to those serving the cows. A significant portion of the donation is retained by the organization for cow protection. The organization’s Prasadam distribution system is an example of well-structured, visionary, and efficient management.",
    },
    {
      question: "Is the Society trying to lure people?",
      answer:
        "No, the Society does not offer any allurements or assurances. This is a mathematically-based arrangement that provides Prasadam. The Society aims to promote Gau-Seva and bring a revolutionary change in the lives of cows through this initiative. This is only a mathematical calculation based on unity and strength. It is only an arrangement with the aim to promote cow service, making an effort to bring about a revolutionary change in the miserable lives of cows. You can voluntarily become an integral part of it.",
    },
    {
      question: "What is the need for this arrangement?",
      answer:
        "Your question is extremely important. In today’s modern and materialistic age, it has become difficult for individuals to bear household expenses, and in such times, expecting them to donate is not appropriate under any circumstances. Apart from humans, there is no other way to ensure the welfare of the cows. The committee has determined that until the welfare of both is achieved, no arrangement can fully ensure the welfare of the cow. With this thought in mind, the structure for the 'Prasadam Arrangement' has been created and implemented.",
    },
    {
      question:
        "Does the Society guarantee that the Gau-Sevak will receive ₹25,10,000/-?",
      answer:
        "No, the Society does not provide any such guarantee. However, it ensures that your registration will remain active until you receive the maximum Prasadam of ₹25,10,000/-.",
    },
    {
      question:
        "How long will it take to receive the Prasadam of ₹25,10,000/-?",
      answer:
        "The Society does not provide any timeframe for receiving the Prasadam, as it depends on the quantity of donations made by Gau-Sevaks.",
    },
    {
      question: "Why should we invest money in the Society?",
      answer:
        "This is only a donation. You are not required to invest any money in the Society. We are a Non-Profit organization, not a financial institution.",
    },
    {
      question: "What is the significance of ₹251/-?",
      answer:
        "This amount is a pure donation and should not be given with any selfish intention.",
    },
    {
      question: "Why are there two types of donation arrangements?",
      answer:
        "The Society has made separate arrangements for donations to facilitate those who want to contribute anonymously or in larger amounts.",
    },
    {
      question: "Does the Society provide receipts for cash donations?",
      answer:
        "No, the Society does not accept any type of 'Cash Donations' and we provide online receipts only for all donations.",
    },
    {
      question:
        "Will we receive an income tax exemption on the donations we make?",
      answer:
        "No, currently the Society is not eligible for income tax exemption under section 80G. The committee is making efforts to obtain 80G recognition, after which donations made will definitely qualify for income tax exemption.",
    },
    {
      question: "How many times can an individual donate ₹251/-?",
      answer:
        "There is no limit to the number of times an individual can donate ₹251/-.",
    },
    {
      question:
        "If a person donates ₹251/- 100 times, will the Prasadam withdrawal be from one registration or 100?",
      answer:
        "Each donation will have a 'Unique Gau-Sevak Registration Number', and the maximum Prasadam limit of ₹25,10,000/- will apply to each registration separately.",
    },
    {
      question: "What if the Society runs away with our money?",
      answer:
        "The Society is a Registered NGO. This ensures that the Society cannot run away with the money.",
    },
    {
      question: "How much fee is deducted at the time of withdrawal?",
      answer: "10% fee is deducted from each withdrawal amount.",
    },
    {
      question: "Why is it necessary to have an inspirer to donate ₹251/-?",
      answer:
        "Having an inspirer is essential because, in the absence of an inspirer, the organization will become inactive, and the distribution of Prasadam will not be possible.",
    },
    {
      question: "If we don’t have an inspirer, how can we donate ₹251/-?",
      answer:
        "If you do not have an inspirer, you can make a donation of ₹251/- by entering the default inspirer’s number provided by the committee.",
    },
    {
      question:
        "What is the difference between a Prernadai (Motivator) and a Gau-Sevak?",
      answer:
        "When you donate ₹251/-, you are given the title of Gau-Sevak. When you motivate another person to donate ₹251/- using your Gau-Sevak registration number, you are called a Preranadai/Motivator for that person.",
    },
    {
      question:
        "Is it necessary to have a different mobile number for each registration?",
      answer:
        "No, you can use the same mobile number for unlimited multiple registrations.",
    },
    {
      question: "Please explain the 'Prasadam withdrawal' process.",
      answer:
        "After you provide complete details such as KYC, bank information, and enrollment in your profile, the committee verifies your bank account. Only after this verification, you can withdraw your Prasadam. For this, you will need to select the desired amount from the balance available in your profile and submit a 'Prasadam withdrawal request'. The Prasadam amount will be deposited into your bank account within the next two working days. This is an initial arrangement, and over time, the Prasadam withdrawal process will become fully automated.",
    },
    {
      question:
        "What is the minimum and maximum amount of Prasadam that we can withdraw?",
      answer:
        "There is no minimum/maximum limit on the amount of Prasadam that you can withdraw.",
    },
    {
      question: "Why is a fee deducted at the time of withdrawal?",
      answer:
        "The fee covers third-party expenses such as SMS, KYC, bank verification, and payment gateway charges.",
    },
    {
      question: "Is the Society involved in MLM?",
      answer:
        "No, the Society is not involved in multi-level marketing, as it does not sell any products under the 'Dan Prasadam Arrangement'.",
    },
    {
      question: "Can we use our Prasadam amount to donate again?",
      answer:
        "No, you cannot use your Prasadam amount to donate again. You can only donate again after withdrawing your Prasadam amount to your bank account.",
    },
    {
      question:
        "Can a person residing abroad also donate ₹251/- and become a part of this arrangement?",
      answer:
        "Yes, any Indian citizen and NRI having a bank account in India can donate ₹251/-. Any person who does not have an account in any bank in India cannot be a part of this arrangement.",
    },
    {
      question:
        "Can a foreigner donate to the Gaushala, and is there any minimum or maximum limit for such donations?",
      answer:
        "Yes, any foreigner can donate to the Gaushala, and there is no minimum or maximum limit for such donations.",
    },
    {
      question:
        "What if a person does not inspire even a single person to donate after donating ₹251/-?",
      answer:
        "Even if a person does not inspire even a single donor, the registration of the donor will continue as before.",
    },
    {
      question:
        "What arrangements are in place if a donor wishes to donate a large sum of money under the donation Prasadam scheme?",
      answer:
        "If a person wishes to donate a large sum under the donation Prasadam scheme, the committee has no objections; they can donate as much as they want. However, the donor must donate in multiples of ₹251/- and should keep their registration number safe while completing their profile for each donation.",
    },
  ];

  // FAQ Data in Hindi
  const faqDataHindi = [
    {
      question: "प्रसादम व्यवस्था क्या है?",
      answer:
        "जब आप मंदिर में ईश्वर के दर्शन के लिए जाते हैं, तो आप खाली हाथ नहीं जाते। और जब दर्शन करके वापस लौटते हैं, तब मंदिर से प्रसादम लेकर आते हैं। इसी प्रकार जब आप गौ-माता को ₹251/- का दान अथवा भेंट देते हैं, तो आपको प्रसादम की प्राप्ति होती है।",
    },
    {
      question: "सिर्फ ₹251/- जैसी न्यूनतम राशि ही क्यों?",
      answer:
        "समिति अधिक से अधिक व्यक्तियों को गौ-सेवा के पुण्य कार्य से जोड़ना चाहती है, इसलिए दान की न्यूनतम राशि का चयन किया गया ताकि गरीब से गरीब व्यक्ति भी दान करके प्रसादम प्राप्त कर सके।",
    },
    {
      question: "प्रसादम व्यवस्था के विषय में बताएं?",
      answer:
        "जब आप समिति को ₹251/- का दान देते हैं, तो समिति आपको एक यूनिक गौ-सेवक संख्या और पासवर्ड उपलब्ध कराती है। इस यूनिक आईडी और पासवर्ड की मदद से आप अपने 'गौ-सेवक लॉगिन' पर क्लिक करके अपने प्रोफाइल तक पहुँचते हैं। सबसे पहले प्रोफाइल में जाकर आपको अपना पासवर्ड बदलना चाहिए। उसके बाद आपको अपने KYC वेरीफाई करने के बाद अपना संपूर्ण विवरण समिति को उपलब्ध कराना चाहिए।",
    },
    {
      question:
        "क्या समिति हमारे द्वारा दिए गए ₹251/- को व्यापार में लगाकर बढ़ाती है उसके बाद हमको प्रसादम के रूप में देती है?",
      answer:
        "जी नहीं, समिति आपके द्वारा दिए गए ₹251/- से किसी प्रकार का कोई निवेश अथवा व्यापार नहीं करती है। इसका उपयोग मात्र गौ-सेवा और प्रसादम वितरण इत्यादि कार्यों हेतु किया जाता है।",
    },
    {
      question:
        "किस प्रकार गणना के माध्यम से समिति हमको ₹251/- के दान के प्रतिफल के रूप में ₹25,10,000/- का भुगतान कर सकती है?",
      answer:
        "संगठन और व्यवस्था का मिश्रण करके प्रत्येक गौ-सेवक के नीचे दो गौ-सेवकों को जोड़कर यदि हम 20 स्तर तक गणना (₹5/- प्रति गौ-सेवक) करें, तो हमको ₹25,10,000/- की राशि प्राप्त होती है।",
    },
    {
      question:
        "जब सारे दान की राशि को समिति प्रसादम के रूप में ही बाँट देगी तो गौ-पालन कैसे करेंगी?",
      answer:
        "समिति ₹251/- में से एक न्यूनतम राशि प्रसादम के रूप में गौ-सेवकों को लौटा रही है। दान राशि का बड़ा भाग समिति गौ-पालन के लिए रख लेती है। समिति की प्रसादम व्यवस्था एक सुव्यवस्थित, दूरदर्शितावादी और कुशल प्रबंधन का उदाहरण है।",
    },
    {
      question: "क्या समिति लोगों को लालच देना चाहती है?",
      answer:
        "जी नहीं, समिति आपको किसी प्रकार का प्रलोभन अथवा आश्वासन नहीं देती है। यह गणित पर आधारित एक गणना और व्यवस्था है जिसके अंतर्गत आपको प्रसादम प्रदान किया जाता है। यह एक ऐसी व्यवस्था है जिसके फलस्वरूप समिति गौ-सेवा को प्रोत्साहित कर गायों के दयनीय जीवन में क्रांतिकारी बदलाव लाने की पहल करने का प्रयास कर रही है। आप अपनी स्वेच्छा से इसके अभिन्न अंग बन सकते हैं।",
    },
    {
      question: "इस व्यवस्था की आवश्यकता क्यों पड़ी?",
      answer:
        "आपका प्रश्न अत्यंत महत्वपूर्ण है। आज के आधुनिक और भौतिकतावादी युग में मनुष्य के लिए घर का खर्च उठाना कठिन हो रहा है, ऐसे समय में उनसे दान की अपेक्षा करना किसी भी स्थिति में उचित नहीं है। मनुष्य के अतिरिक्त गौ-माता के कल्याण का अन्य कोई मार्ग नहीं है। समिति द्वारा यह निर्धारित किया गया कि जब तक दोनों का कल्याण नहीं होता तब तक किसी प्रकार की कोई व्यवस्था पूर्ण रूप से गौ-माता का कल्याण करने में सक्षम हो ही नहीं सकती। इसी सोच के साथ प्रसादम व्यवस्था की संरचना बनाकर क्रियान्वयन किया गया।",
    },
    {
      question:
        "क्या समिति यह गारंटी देती है कि गौ-सेवक को ₹25,10,000/- रुपये अवश्य प्राप्त होंगे?",
      answer:
        "जी नहीं। समिति ऐसी कोई गारंटी नहीं देती है। हाँ, यह गारंटी अवश्य देती है कि जब तक आपको ₹25,10,000/- का प्रसादम प्राप्त नहीं हो जाएगा, तब तक आपका पंजीकरण समाप्त नहीं होगा।",
    },
    {
      question: "कितने समय में हमको ₹25,10,000/- का प्रसादम प्राप्त हो जाएगा?",
      answer:
        "समिति आपको समय का कोई आश्वासन नहीं देती है कि आपको कितने समय में ₹25,10,000/- का प्रसादम प्राप्त हो जाएगा। क्योंकि यह प्रसादम गौसेवकों के दान करने पर निर्भर एक गणितीय गणना है, इसलिए समय का कोई आश्वासन समिति नहीं देती है।",
    },
    {
      question: "हम समिति में पैसा क्यों निवेश करें?",
      answer:
        "समिति में आपको कोई धन निवेश नहीं करना है क्योंकि समिति कोई वित्तीय संस्थान नहीं है। समिति ना किसी प्रकार का कोई निवेश करने के लिए कहती है और ना ही स्वीकार करती है।",
    },
    {
      question: "ये ₹251/- क्या है?",
      answer:
        "यह ₹251/- शुद्ध दान है। इसको स्वार्थवश कदापि ना दें। स्वार्थवश दिया गया दान फलिभूत नहीं होता है।",
    },
    {
      question: "दो प्रकार के दान की व्यवस्था क्यों है?",
      answer:
        "आर्थिक रूप से सक्षम दान दाताओं अथवा गुप्त दान हेतु समिति द्वारा दान की व्यवस्था की गई है। इसमें दान की राशि का निर्धारण, अपने विषय में दी जाने वाली जानकारी इत्यादि का निर्धारण दान दाता द्वारा स्वम किया जाता है। इस दान के प्रतिफल के रूप में समिति कोई प्रसादम नहीं देती है। जबकि 'दान प्रसादम व्यवस्था' के अंतर्गत दिए जाने वाले दान की राशि का निर्धारण समिति द्वारा किया गया है। इसमें दान दाता से ₹251/- से कम या अधिक का दान स्वीकार्य नहीं है। और इस दान के प्रतिफल के रूप में समिति एक निश्चित व्यवस्था और गणना के अनुरूप प्रसादम देती है।",
    },
    {
      question: "क्या नगद दान की रसीद समिति द्वारा दी जाती है?",
      answer:
        "जी नहीं। स्पष्ट कर दें कि समिति किसी भी प्रकार का कोई दान नगद स्वीकार नहीं करती है। सभी दान ऑनलाइन लिए जाते हैं और साथ-साथ रसीद भी ऑनलाइन ही जारी की जाती है। समिति के द्वारा हस्तलिखित कोई रसीद का निर्माण ही नहीं किया गया है।",
    },
    {
      question: "क्या हमारे द्वारा दिए गए दान पर आयकर की छूट मिलेगी?",
      answer:
        "जी नहीं। आयकर 80G के लिए वर्तमान में समिति अनुमन्य नहीं है। 80G की मान्यता हेतु समिति प्रयासरत है, जिसके प्राप्त होने के पश्चात् दिए गए दान पर आयकर छूट अवश्य मिल सकेगी।",
    },
    {
      question: "एक व्यक्ति कितनी बार ₹251/- का दान दे सकता है?",
      answer:
        "एक व्यक्ति जैसे चाहे स्वेच्छा से अनगिनत बार दान दे सकता है। इसकी कोई अधिकतम सीमा नहीं निर्धारित की गई है।",
    },
    {
      question:
        "कोई व्यक्ति यदि 100 बार ₹251/- का दान देगा तो क्या प्रसादम की गणना एक ही पंजीकरण पर की जाएगी या 100 पर?",
      answer:
        "प्रत्येक दान पर एक यूनिक पंजीकरण संख्या मिलेगी और प्रत्येक पंजीकरण संख्या के अधिकतम प्रसादम की सीमा ₹25,10,000/- पृथक-पृथक होंगी।",
    },
    {
      question: "समिति हमारे पैसे लेकर भाग गई तो?",
      answer:
        "सर्वप्रथम आपको अवगत कराना चाहेंगे कि 'श्री राधेश्याम गौशाला समिति' एक पंजीकृत समिति है। इसलिए भागने या घाटा होने जैसी कोई संभावना नहीं हो सकती। दूसरी बात यह कि आप ₹251/- का समिति को दान दे रहे हैं। किसी प्रकार का निवेश किसी योजना में नहीं कर रहे हैं। प्रसादम व्यवस्था गौ-माता और मानवजाती दोनों के कल्याण की दृष्टि से निर्मित एक सुव्यवस्थित और सुसंचालित गणितीय व्यवस्था मात्र है।",
    },
    {
      question: "निकासी के समय कितनी शुल्क काटा जाता है?",
      answer: "प्रत्येक निकासी राशि से 10% शुल्क काटा जाता है।",
    },
    {
      question:
        "₹251/- का दान करने के लिए किसी एक 'प्रेरणादाता' की आवश्यकता क्यों है?",
      answer:
        "प्रेरणादाता का होना अनिवार्य इस कारण से है क्योंकि प्रेरणादाता के आभाव में व्यवस्था शून्य हो जाएगी और प्रसादम का वितरण संभव नहीं हो पाएगा।",
    },
    {
      question:
        "हमारे पास कोई प्रेरणादाता नहीं है तो हम ₹251/- का दान कैसे करें?",
      answer:
        "यदि आपके पास कोई प्रेरणादाता नहीं है तो आप समिति के बाय डिफाल्ट प्रेरणादाता की संख्या अंकित करके ₹251/- का दान कर सकते हैं।",
    },
    {
      question: "प्रेरणादायक और गौ-सेवक में क्या अंतर है?",
      answer:
        "प्रेरणादायक और गौ-सेवक में अंतर निम्न प्रकार है: जब आप ₹251/- का दान करते हैं तो आपको 'गौ-सेवक' का नाम दिया जाता है। जब आप अपनी गौ-सेवक पंजीकरण संख्या के माध्यम से अन्य किसी व्यक्ति से ₹251/- का दान कराते हैं तो आप उस व्यक्ति के लिए 'प्रेरणादायक' कहलाते हैं।",
    },
    {
      question:
        "एक से अधिक दान देने के पंजीकरण के समय क्या अलग-अलग मोबाइल नंबर का होना अनिवार्य है?",
      answer: "जी नहीं, आप एक ही मोबाइल संख्या से अनगिनत पंजीकरण कर सकते हैं।",
    },
    {
      question: "प्रसादम आहरण प्रक्रिया बताएं।",
      answer:
        "आपके द्वारा आपके प्रोफाइल में KYC, बैंक विवरण और नामांकन इत्यादि सम्पूर्ण विवरण उपलब्ध कराने के पश्चात् समिति आपके बैंक अकाउंट को वेरिफाई करती है तत्पश्चात ही आप अपने प्रसादम का आहरण कर सकते है। इसके लिए आपके प्रोफाइल में उपलब्ध राशि में से आपकी इच्छानुसार राशि का चयन कर प्रसादम आहरण रिक्वेस्ट लगानी पड़ेगी और अगले दो कार्यदिवस में प्रसादम राशि आपके बैंक में जमा हो जाएगी। यह एक आरंभिक व्यवस्था है कालांतर में प्रसादम आहरण पूर्णतः स्वचालित प्रक्रिया बन जाएगी।",
    },
    {
      question:
        "हम अपने पुण्यपात्र में से न्यूनतम अथवा अधिकतम कितना प्रसादम विड्रॉल कर सकते हैं?",
      answer:
        "कोई सीमा निर्धारित नहीं है। आप अपनी सुविधा और आवश्यकतानुसार उपलब्ध राशि में से धन का विड्रॉल कर सकते हैं।",
    },
    {
      question: "विड्रॉल के समय हमसे शुल्क क्यों लिया जा रहा है?",
      answer:
        "आपका प्रश्न महत्वपूर्ण है। आपके द्वारा भुगतान किए गए शुल्क से थर्ड पार्टी इत्यादि खर्चों का भुगतान किया जाता है, जैसे कि एसएमएस, केवाईसी, बैंक वेरिफिकेशन और पेमेंट गेटवे शुल्क इत्यादि।",
    },
    {
      question: "क्या समिति एमएलएम कर रही है?",
      answer:
        "जी नहीं, एमएलएम का अर्थ मल्टी लेवल मार्केटिंग होता है और समिति किसी प्रकार के पदार्थ की बिक्री दान प्रसादम व्यवस्था में नहीं करती है। यह एक व्यवस्था मात्र है।",
    },
    {
      question:
        "क्या ऐसा हो सकता है कि हम प्रसादम राशि से ही अपनी एक नई पंजीकरण संख्या के लिए दान कर दें?",
      answer:
        "नहीं, ऐसा होना संभव नहीं है। आप अपना प्रसादम अपने बैंक अकाउंट में निकालने के बाद ही दोबारा दान कर सकते हैं।",
    },
    {
      question:
        "क्या कोई विदेश में बैठा हुआ व्यक्ति भी ₹251/- का दान करके इस व्यवस्था का अंग बन सकता है?",
      answer:
        "जी हाँ, सभी भारतीय नागरिक जिनका भारत में बैंक अकाउंट है, इस ₹251/- का दान कर सकते हैं। कोई भी व्यक्ति जिसका भारत के किसी बैंक में कोई अकाउंट नहीं है, वो इस व्यवस्था का अंग नहीं बन सकता।",
    },
    {
      question:
        "क्या कोई विदेशी व्यक्ति गौशाला को दान कर सकता है और उसकी कोई न्यूनतम या अधिकतम सीमा निर्धारित है?",
      answer:
        "जी हाँ, कोई भी विदेशी व्यक्ति गौशाला को दान कर सकता है और इसके लिए कोई न्यूनतम या अधिकतम सीमा नहीं है।",
    },
    {
      question:
        "क्या होगा यदि कोई व्यक्ति ₹251/- का दान करने के बाद एक भी व्यक्ति को दान करने के लिए प्रेरित ना करें?",
      answer:
        "यदि कोई व्यक्ति एक भी दान करने वाले व्यक्ति को प्रेरित ना करे, तब भी दान करने वाले व्यक्ति का पंजीकरण पूर्व की भांति जारी रहेगा।",
    },
    {
      question:
        "क्या यदि कोई दान दाता दान प्रसादम के अंतर्गत बड़ी धनराशि का दान करना चाहता है तो उसके लिए क्या व्यवस्था है?",
      answer:
        "यदि कोई व्यक्ति दान प्रसादम व्यवस्था में बड़ी धनराशि का दान करना चाहता है तो इसमें समिति को कोई आपत्ति नहीं है, वह जितना चाहे दान दे सकता है, किंतु दान देने वाले व्यक्ति को समिति में दान ₹251/- के गुणांक में ही करना पड़ेगा और प्रत्येक पंजीकरण संख्या को सुरक्षित रखकर प्रत्येक पर अपना प्रोफाइल पूर्ण करना होगा।",
    },
  ];

  // Select FAQ data based on language
  const faqData = language === "hi" ? faqDataHindi : faqDataEnglish;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="bg-[#fefce8] shadow-md p-4 rounded-xl shadow-lg mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide font-bold tracking-wide text-gray-800">
            {language === "hi" ? "सामान्य प्रश्न" : "FAQs"}
          </h1>
          {/* Language Switch Button */}
          <button
            onClick={() => switchLanguage(language === "hi" ? "en" : "hi")}
            className="px-4 py- bg-blue-500 text-white rounded-xl shadow transition-all duration-00 hover:bg-blue-600 transition-colors"
          >
            {language === "hi" ? "English" : "हिंदी"}
          </button>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-[#fefce8] p-6 rounded-xl shadow-lg shadow-sm">
            <h className="text-xl font-serif tracking-wide font-serif font-semibold font-semibold text-[#1e93b] mb-3">
              {index + 1}. {faq.question}
            </h>
            <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
          </div>
        ))}
      </main>

      {/* Footer Section */}
      <footer className="mt-8 text-center text-[#475569]">
        <p>
          {language === "hi"
            ? "अंतिम अद्यतन: [तिथि डालें]"
            : "Last Updated: [Insert Date]"}
        </p>
      </footer>
    </div>
  );
}
