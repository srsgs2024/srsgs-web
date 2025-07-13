"use client";

import { useLanguage } from "@/i18next/context/languageContext";

export default function TermsAndConditionsPage() {
  const { language, switchLanguage } = useLanguage();

  // Terms & Conditions Content in English
  const termsEnglish = [
    {
      title: "1. General Terms & Disclaimers",
      content:
        "• No Cash Donations: The Society Does Not Accept Cash Donation. Donations must be made on-line and also a receipt will be generated online.\n" +
        "• Non-Profit Commitment: Donations are used solely for Cow Welfare Activities and not for profit-making purposes.\n" +
        "• No Refunds: Once a donation is made, it is Non-Refundable and cannot be altered.\n" +
        "• Profile Data: Once saved, profile details Cannot be Edited. For any amendment contact us at Support Desk.",
    },
    {
      title: "2. Registration Terms",
      content:
        "• A Donation of 251/- INR is required for registration, made voluntarily.\n" +
        "• The Society may send SMS Updates related to Gaushala Activities.\n" +
        "• Users must provide a PAN No before withdrawal.\n" +
        "• Users must Enroll a Nominee; failure to do so may result in loss of rights.\n" +
        "• Users agree to abide by any Future Modifications made by the Society.",
    },
    {
      title: "3. Profile & KYC Terms",
      content:
        "• Users must verify their Adhaar, PAN, and Bank Details before making transactions.\n" +
        "• The Society will deduct fixed Third Party Expense Charges @10% on every withdrawal.\n" +
        "• In the absence of e-KYC Verification, the withdrawal amount will Not be Credited.",
    },
    {
      title: "4. Prasadam Terms",
      content:
        "• No Ownership Rights: Prasadam is a Symbolic Facility for donors and does not create any legal rights.\n" +
        "• Right to Modify or Cancel: The Society may Modify or Discontinue Prasadam services without any prior notice.",
    },
    {
      title: "5. Nomination & Rights Transfer",
      content:
        "• Single Nominee Rule: Each donor ID must have Only One Nominee.\n" +
        "• Transfer upon Death: If the donor passes away, rights will transfer to the nominee.\n" +
        "• No Nomination: If no nominee is assigned, legal heirs must provide a Succession Certificate.\n" +
        "• No Multiple Transfers: Rights cannot be split among multiple heirs.\n" +
        "• Court Dispute Resolution: If any dispute arises, the decision of the Honorable Competent Court will be final.",
    },
    {
      title: "6. Donations & Payment Terms",
      content:
        "• Donations are Voluntary & Non-Refundable.\n" +
        "• The Society does not guarantee any return or benefit in exchange for donations.\n" +
        "• The Society reserves the right to refuse donations that do not comply with legal or ethical standards.",
    },
    {
      title: "7. Withdrawal & Deduction Policies",
      content:
        "• Minimum/Maximum Limit: On withdrawals No Limit added by the society.\n" +
        "• Third-Party Expense Fee: 10% deduction on every withdrawal amount.\n" +
        "• The Prasadam Account will be used to cover applicable charges if any.\n" +
        "• Withdrawals will only be credited to the Registered Bank Account only, subject to matching with Adhaar details.",
    },
    {
      title: "8. User Responsibilities",
      content:
        "• Users must not misuse the website for fraudulent activities.\n" +
        "• Any misleading information provided by users can lead to account suspension.\n" +
        "• Users are responsible for keeping their login credentials secure.",
    },
    {
      title: "9. Fraudulent Activity & Unauthorized Access",
      content:
        "• Users must not engage in fraudulent activities, including identity misrepresentation, misuse of donor accounts or unauthorized access.\n" +
        "• The Society reserves the right to Block or Suspend accounts involved in fraudulent activities.\n" +
        "• Any fraudulent activity will be reported to Law Enforcement Authorities for necessary legal action.",
    },
    {
      title: "10. Third-Party Links & Services",
      content:
        "• Our website may contain links to Third-Party Websites. We are Not Responsible for the content or security of external websites.\n" +
        "• Users should review third-party privacy policies before engaging with them.",
    },
    {
      title: "11. Limitation of Liability",
      content:
        "• The Society is Not Liable for any unauthorized transactions outside our official website.\n" +
        "• We do not guarantee uninterrupted access to our website or services.\n" +
        "• The Society is Not Responsible for technical errors in payments caused by third-party providers.",
    },
    {
      title: "12. Dispute Resolution",
      content:
        "• All disputes will be resolved in accordance with Present Indian Laws.",
    },
    {
      title: "13. Updates to Terms & Conditions",
      content:
        "• The Society reserves the right to modify these terms at any time.\n" +
        "• Users will be notified about major changes via email or website updates.",
    },
    {
      title: "14. Contact Us",
      content:
        "For queries regarding these Terms, contact:\nEmail: [info@srsgs.com]",
    },
  ];

  // Terms & Conditions Content in Hindi
  const termsHindi = [
    {
      title: "1. सामान्य नियम और अस्वीकरण",
      content:
        "• नकद दान नहीं: समिति नकद दान स्वीकार नहीं करती है। दान ऑनलाइन किया जाना चाहिए और रसीद ऑनलाइन जनरेट की जाएगी।\n" +
        "• गैर-लाभकारी प्रतिबद्धता: दान का उपयोग केवल गौ कल्याण गतिविधियों के लिए किया जाता है और लाभ कमाने के उद्देश्यों के लिए नहीं।\n" +
        "• कोई धनवापसी नहीं: एक बार दान करने के बाद, यह गैर-वापसीयोग्य है और इसे बदला नहीं जा सकता।\n" +
        "• प्रोफाइल डेटा: एक बार सहेजे जाने के बाद, प्रोफाइल विवरण संपादित नहीं किया जा सकता। किसी भी संशोधन के लिए सपोर्ट डेस्क से संपर्क करें।",
    },
    {
      title: "2. पंजीकरण नियम",
      content:
        "• पंजीकरण के लिए 251/- रुपये का दान आवश्यक है, जो स्वेच्छा से किया जाना चाहिए।\n" +
        "• समिति गौशाला गतिविधियों से संबंधित एसएमएस अपडेट भेज सकती है।\n" +
        "• उपयोगकर्ताओं को निकासी से पहले पैन नंबर प्रदान करना होगा।\n" +
        "• उपयोगकर्ताओं को एक नामांकित व्यक्ति को नामित करना होगा; ऐसा करने में विफलता से अधिकारों का नुकसान हो सकता है।\n" +
        "• उपयोगकर्ता समिति द्वारा किए गए किसी भी भविष्य के संशोधनों का पालन करने के लिए सहमत होते हैं।",
    },
    {
      title: "3. प्रोफाइल और केवाईसी नियम",
      content:
        "• उपयोगकर्ताओं को लेनदेन करने से पहले अपने आधार, पैन और बैंक विवरण को सत्यापित करना होगा।\n" +
        "• समिति प्रत्येक निकासी पर 10% का तीसरे पक्ष का खर्च काटेगी।\n" +
        "• ई-केवाईसी सत्यापन के अभाव में, निकासी राशि जमा नहीं की जाएगी।",
    },
    {
      title: "4. प्रसादम नियम",
      content:
        "• कोई स्वामित्व अधिकार नहीं: प्रसादम दाताओं के लिए एक प्रतीकात्मक सुविधा है और इससे कोई कानूनी अधिकार नहीं बनते हैं।\n" +
        "• संशोधन या रद्द करने का अधिकार: समिति बिना किसी पूर्व सूचना के प्रसादम सेवाओं को संशोधित या बंद कर सकती है।",
    },
    {
      title: "5. नामांकन और अधिकार हस्तांतरण",
      content:
        "• एकल नामांकित व्यक्ति नियम: प्रत्येक दाता आईडी में केवल एक नामांकित व्यक्ति होना चाहिए।\n" +
        "• मृत्यु पर हस्तांतरण: यदि दाता की मृत्यु हो जाती है, तो अधिकार नामांकित व्यक्ति को हस्तांतरित हो जाएंगे।\n" +
        "• कोई नामांकन नहीं: यदि कोई नामांकित व्यक्ति नहीं है, तो कानूनी उत्तराधिकारियों को उत्तराधिकार प्रमाणपत्र प्रदान करना होगा।\n" +
        "• कोई बहुविध हस्तांतरण नहीं: अधिकारों को कई उत्तराधिकारियों के बीच विभाजित नहीं किया जा सकता है।\n" +
        "• न्यायालय विवाद समाधान: यदि कोई विवाद उत्पन्न होता है, तो सम्माननीय सक्षम न्यायालय का निर्णय अंतिम होगा।",
    },
    {
      title: "6. दान और भुगतान नियम",
      content:
        "• दान स्वैच्छिक और गैर-वापसीयोग्य हैं।\n" +
        "• समिति दान के बदले किसी भी रिटर्न या लाभ की गारंटी नहीं देती है।\n" +
        "• समिति को उन दानों को अस्वीकार करने का अधिकार है जो कानूनी या नैतिक मानकों का पालन नहीं करते हैं।",
    },
    {
      title: "7. निकासी और कटौती नीतियाँ",
      content:
        "• न्यूनतम/अधिकतम सीमा: निकासी पर समिति द्वारा कोई सीमा नहीं जोड़ी गई है।\n" +
        "• तीसरे पक्ष का खर्च शुल्क: प्रत्येक निकासी राशि पर 10% कटौती।\n" +
        "• प्रसादम खाते का उपयोग लागू शुल्क को कवर करने के लिए किया जाएगा, यदि कोई हो।\n" +
        "• निकासी केवल पंजीकृत बैंक खाते में जमा की जाएगी, जो आधार विवरण से मेल खाता हो।",
    },
    {
      title: "8. उपयोगकर्ता जिम्मेदारियाँ",
      content:
        "• उपयोगकर्ताओं को वेबसाइट का दुरुपयोग धोखाधड़ी गतिविधियों के लिए नहीं करना चाहिए।\n" +
        "• उपयोगकर्ताओं द्वारा प्रदान की गई किसी भी भ्रामक जानकारी से खाता निलंबित हो सकता है।\n" +
        "• उपयोगकर्ता अपने लॉगिन क्रेडेंशियल्स को सुरक्षित रखने के लिए जिम्मेदार हैं।",
    },
    {
      title: "9. धोखाधड़ी गतिविधि और अनधिकृत पहुंच",
      content:
        "• उपयोगकर्ताओं को धोखाधड़ी गतिविधियों में शामिल नहीं होना चाहिए, जिसमें पहचान का गलत प्रतिनिधित्व, दाता खातों का दुरुपयोग या अनधिकृत पहुंच शामिल है।\n" +
        "• समिति को धोखाधड़ी गतिविधियों में शामिल खातों को ब्लॉक या निलंबित करने का अधिकार है।\n" +
        "• किसी भी धोखाधड़ी गतिविधि को कानून प्रवर्तन अधिकारियों को रिपोर्ट किया जाएगा।",
    },
    {
      title: "10. तीसरे पक्ष के लिंक और सेवाएँ",
      content:
        "• हमारी वेबसाइट में तीसरे पक्ष की वेबसाइटों के लिंक हो सकते हैं। हम बाहरी वेबसाइटों की सामग्री या सुरक्षा के लिए जिम्मेदार नहीं हैं।\n" +
        "• उपयोगकर्ताओं को तीसरे पक्ष की गोपनीयता नीतियों की समीक्षा करनी चाहिए।",
    },
    {
      title: "11. दायित्व सीमा",
      content:
        "• समिति हमारी आधिकारिक वेबसाइट के बाहर किसी भी अनधिकृत लेनदेन के लिए जिम्मेदार नहीं है।\n" +
        "• हम अपनी वेबसाइट या सेवाओं तक निर्बाध पहुंच की गारंटी नहीं देते हैं।\n" +
        "• समिति तीसरे पक्ष प्रदाताओं के कारण भुगतान में तकनीकी त्रुटियों के लिए जिम्मेदार नहीं है।",
    },
    {
      title: "12. विवाद समाधान",
      content: "• सभी विवाद वर्तमान भारतीय कानूनों के अनुसार हल किए जाएंगे।",
    },
    {
      title: "13. नियम और शर्तों में अपडेट",
      content:
        "• समिति को इन नियमों को किसी भी समय संशोधित करने का अधिकार है।\n" +
        "• उपयोगकर्ताओं को प्रमुख परिवर्तनों के बारे में ईमेल या वेबसाइट अपडेट के माध्यम से सूचित किया जाएगा।",
    },
    {
      title: "14. हमसे संपर्क करें",
      content:
        "इन नियमों से संबंधित प्रश्नों के लिए संपर्क करें:\nईमेल: [info@srsgs.com]",
    },
  ];

  // Select Terms & Conditions content based on language
  const termsData = language === "hi" ? termsHindi : termsEnglish;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <header className="bg-[#fefce8] shadow-md p-4 rounded-xl shadow-lg mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold tracking-wide tracking-wide font-serif font-bold tracking-wide font-bold tracking-wide text-gray-800">
            {language === "hi" ? "नियम और शर्तें" : "Terms & Conditions"}
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

      {/* Terms & Conditions Content */}
      <main className="space-y-6">
        {termsData.map((section, index) => (
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
            ? "प्रभावी तिथि: [तिथि डालें]"
            : "Effective Date: [Insert Date]"}
        </p>
        <p>
          {language === "hi"
            ? "अंतिम अद्यतन: [तिथि डालें]"
            : "Last Updated: [Insert Date]"}
        </p>
      </footer>
    </div>
  );
}
