"use client";

import { useLanguage } from "@/i18next/context/languageContext";

export default function PrivacyPolicyPage() {
  const { language, switchLanguage } = useLanguage();

  // Privacy Policy Content in English
  const privacyPolicyEnglish = [
    {
      title: "1. Introduction",
      content:
        "SRSGS – “Shri Radheshyam Gaushala Society” ('Society,' 'We,' 'Our,' or 'Us') is committed to protect your privacy. This policy explains how we collect, use, and safeguard your personal information when you interact with our website (www.srsgs.com) and services.",
    },
    {
      title: "2. Information Collection",
      content:
        "We will collect the following information:\n" +
        "• Personal Information: Name, Contact Details, Aadhaar Card, PAN Card & Bank Details.\n" +
        "• Transaction Details: Donation, Records and Payment information.\n" +
        "• Technical Information: IP address, Cookies, and Browsing activity.\n" +
        "• User-Generated Content: Comments, Reviews or other Voluntary Information provided by users.",
    },
    {
      title: "3. Purpose of Data Collection",
      content:
        "We collect and use your data for:\n" +
        "• Processing Donations and Issuing Receipts.\n" +
        "• Managing Donor Profiles and Nominations.\n" +
        "• Sending updates related to 'Gaushala' activities and events.\n" +
        "• Compliance with Legal and Tax Regulations.\n" +
        "• Enhancing Website Functionality and user experience.",
    },
    {
      title: "4. Data Security & Protection",
      content:
        "• We implement Strict Security Measures to protect user data from unauthorized access, theft, or misuse.\n" +
        "• All transactions are SSL Encrypted to ensure Secure Processing.\n" +
        "• Aadhaar, PAN & Bank Details are stored with Restricted Access and used only for Verification Purposes.\n" +
        "• We conduct Regular Security Audits to Detect & Prevent Vulnerabilities.\n" +
        "• Users are responsible for maintaining the Confidentiality of their Login Credentials.",
    },
    {
      title: "5. Data Sharing & Retention",
      content:
        "• We Do Not sell or share personal data except for Legal, Financial or Tax Processing.\n" +
        "• Data is retained only as long as necessary for compliance and operations.\n" +
        "• Users can request Deletion of Personal Data by contacting us at (support@srsgs.com).",
    },
    {
      title: "6. User Rights & Control",
      content:
        "• Users can Access, Update their data upon request.\n" +
        "• Profile Information Can Not be Edited once saved; it can be done by requesting at (support@srsgs.com).",
    },
    {
      title: "7. Cookies & Tracking Technologies",
      content:
        "• Our website may use cookies for analytics and improved user experience.\n" +
        "• Users can Disable Cookies in browser settings if preferred.",
    },
    {
      title: "8. Fraudulent Activity Prevention",
      content:
        "• Users must not engage in fraudulent activities, including fake donations, misrepresentation of identity or unauthorized access.\n" +
        "• The Society reserves the right to Terminate Accounts involved in suspicious transactions.\n" +
        "• Any detected fraud will be Reported to Legal Authorities for necessary action.",
    },
    {
      title: "9. Policy Updates",
      content:
        "We reserve the right to update this policy. Any changes will be notified on our website.",
    },
    {
      title: "10. Contact Us",
      content: "For privacy-related queries:\nEmail: [info@srsgs.com]",
    },
  ];

  // Privacy Policy Content in Hindi
  const privacyPolicyHindi = [
    {
      title: "1. परिचय",
      content:
        "एसआरएसजीएस – 'श्री राधेश्याम गौशाला सोसाइटी' ('सोसाइटी,' 'हम,' 'हमारा,' या 'हमें') आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध है। यह नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं और सुरक्षित करते हैं जब आप हमारी वेबसाइट (www.srsgs.com) और सेवाओं के साथ इंटरैक्ट करते हैं।",
    },
    {
      title: "2. जानकारी एकत्र करना",
      content:
        "हम निम्नलिखित जानकारी एकत्र करेंगे:\n" +
        "• व्यक्तिगत जानकारी: नाम, संपर्क विवरण, आधार कार्ड, पैन कार्ड और बैंक विवरण।\n" +
        "• लेनदेन विवरण: दान, रिकॉर्ड और भुगतान जानकारी।\n" +
        "• तकनीकी जानकारी: आईपी पता, कुकीज़ और ब्राउज़िंग गतिविधि।\n" +
        "• उपयोगकर्ता-जनित सामग्री: टिप्पणियाँ, समीक्षाएँ या उपयोगकर्ताओं द्वारा प्रदान की गई अन्य स्वैच्छिक जानकारी।",
    },
    {
      title: "3. डेटा संग्रह का उद्देश्य",
      content:
        "हम आपका डेटा निम्नलिखित उद्देश्यों के लिए एकत्र और उपयोग करते हैं:\n" +
        "• दान प्रसंस्करण और रसीद जारी करना।\n" +
        "• दाता प्रोफाइल और नामांकन प्रबंधित करना।\n" +
        "• 'गौशाला' गतिविधियों और कार्यक्रमों से संबंधित अपडेट भेजना।\n" +
        "• कानूनी और कर नियमों का पालन करना।\n" +
        "• वेबसाइट की कार्यक्षमता और उपयोगकर्ता अनुभव को बढ़ाना।",
    },
    {
      title: "4. डेटा सुरक्षा और सुरक्षा",
      content:
        "• हम उपयोगकर्ता डेटा को अनधिकृत पहुंच, चोरी या दुरुपयोग से बचाने के लिए सख्त सुरक्षा उपाय लागू करते हैं।\n" +
        "• सभी लेनदेन SSL एन्क्रिप्टेड हैं ताकि सुरक्षित प्रसंस्करण सुनिश्चित हो सके।\n" +
        "• आधार, पैन और बैंक विवरण प्रतिबंधित पहुंच के साथ संग्रहीत किए जाते हैं और केवल सत्यापन उद्देश्यों के लिए उपयोग किए जाते हैं।\n" +
        "• हम नियमित सुरक्षा ऑडिट करते हैं ताकि कमजोरियों का पता लगाया जा सके और उन्हें रोका जा सके।\n" +
        "• उपयोगकर्ता अपने लॉगिन क्रेडेंशियल्स की गोपनीयता बनाए रखने के लिए जिम्मेदार हैं।",
    },
    {
      title: "5. डेटा साझाकरण और प्रतिधारण",
      content:
        "• हम व्यक्तिगत डेटा को कानूनी, वित्तीय या कर प्रसंस्करण के अलावा किसी के साथ साझा या बेचते नहीं हैं।\n" +
        "• डेटा को केवल अनुपालन और संचालन के लिए आवश्यक समय तक रखा जाता है।\n" +
        "• उपयोगकर्ता (support@srsgs.com) पर संपर्क करके व्यक्तिगत डेटा को हटाने का अनुरोध कर सकते हैं।",
    },
    {
      title: "6. उपयोगकर्ता अधिकार और नियंत्रण",
      content:
        "• उपयोगकर्ता अनुरोध पर अपना डेटा एक्सेस और अपडेट कर सकते हैं।\n" +
        "• प्रोफाइल जानकारी को एक बार सहेजने के बाद संपादित नहीं किया जा सकता है; इसे (support@srsgs.com) पर अनुरोध करके किया जा सकता है।",
    },
    {
      title: "7. कुकीज़ और ट्रैकिंग प्रौद्योगिकियाँ",
      content:
        "• हमारी वेबसाइट एनालिटिक्स और बेहतर उपयोगकर्ता अनुभव के लिए कुकीज़ का उपयोग कर सकती है।\n" +
        "• उपयोगकर्ता ब्राउज़र सेटिंग्स में कुकीज़ को अक्षम कर सकते हैं यदि वे पसंद करते हैं।",
    },
    {
      title: "8. धोखाधड़ी गतिविधि रोकथाम",
      content:
        "• उपयोगकर्ताओं को धोखाधड़ी गतिविधियों में शामिल नहीं होना चाहिए, जिसमें नकली दान, पहचान का गलत प्रतिनिधित्व या अनधिकृत पहुंच शामिल है।\n" +
        "• सोसाइटी को संदिग्ध लेनदेन में शामिल खातों को समाप्त करने का अधिकार सुरक्षित है।\n" +
        "• किसी भी पाई गई धोखाधड़ी को कानूनी अधिकारियों को रिपोर्ट किया जाएगा।",
    },
    {
      title: "9. नीति अपडेट",
      content:
        "हम इस नीति को अपडेट करने का अधिकार सुरक्षित रखते हैं। किसी भी बदलाव की सूचना हमारी वेबसाइट पर दी जाएगी।",
    },
    {
      title: "10. हमसे संपर्क करें",
      content: "गोपनीयता से संबंधित प्रश्नों के लिए:\nईमेल: [info@srsgs.com]",
    },
  ];

  // Select Privacy Policy content based on language
  const privacyPolicyData =
    language === "hi" ? privacyPolicyHindi : privacyPolicyEnglish;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="bg-[#fefce8] shadow-md p-4 rounded-xl shadow-lg mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide font-bold tracking-wide text-gray-800">
            {language === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}
          </h1>
          {/* Language Switch Button */}
          <button
            onClick={() => switchLanguage(language === "hi" ? "en" : "hi")}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow transition-all duration-200 hover:bg-blue-600 transition-colors"
          >
            {language === "hi" ? "English" : "हिंदी"}
          </button>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <main className="space-y-6">
        {privacyPolicyData.map((section, index) => (
          <div key={index} className="bg-[#fefce8] p-6 rounded-xl shadow-lg shadow-sm">
            <h2 className="text-xl font-serif tracking-wide font-serif font-semibold font-semibold text-[#1e293b] mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {section.content}
            </p>
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
        <p>
          {language === "hi"
            ? "प्रभावी तिथि: [तिथि डालें]"
            : "Effective Date: [Insert Date]"}
        </p>
      </footer>
    </div>
  );
}
