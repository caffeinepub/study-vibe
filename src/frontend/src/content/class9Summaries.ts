export interface SubjectSummary {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  image: string;
  imageAlt: {
    en: string;
    hi: string;
  };
}

export const class9Summaries: SubjectSummary[] = [
  {
    id: 'mathematics',
    title: {
      en: 'Mathematics',
      hi: 'गणित'
    },
    content: {
      en: `Mathematics in Class 9 develops logical thinking, reasoning, and problem-solving skills. It begins with Number Systems, explaining rational and irrational numbers and their properties. Algebra topics like polynomials and linear equations help students understand variables and expressions. Coordinate Geometry introduces graphing points on a plane. Geometry includes Euclid's geometry, lines and angles, triangles, quadrilaterals, circles, and constructions, helping students understand shapes and their properties. Chapters like Areas, Heron's Formula, Surface Areas and Volumes deal with practical measurements. Statistics and Probability teach data handling and predicting outcomes, which are useful in real life.`,
      hi: `कक्षा 9 में गणित तार्किक सोच, तर्क और समस्या-समाधान कौशल विकसित करता है। यह संख्या प्रणाली से शुरू होता है, जो परिमेय और अपरिमेय संख्याओं और उनके गुणों की व्याख्या करता है। बीजगणित विषय जैसे बहुपद और रैखिक समीकरण छात्रों को चर और व्यंजकों को समझने में मदद करते हैं। निर्देशांक ज्यामिति एक तल पर बिंदुओं को आलेखित करना सिखाती है। ज्यामिति में यूक्लिड की ज्यामिति, रेखाएँ और कोण, त्रिभुज, चतुर्भुज, वृत्त और रचनाएँ शामिल हैं, जो छात्रों को आकृतियों और उनके गुणों को समझने में मदद करती हैं। क्षेत्रफल, हीरोन का सूत्र, पृष्ठीय क्षेत्रफल और आयतन जैसे अध्याय व्यावहारिक मापों से संबंधित हैं। सांख्यिकी और प्रायिकता डेटा प्रबंधन और परिणामों की भविष्यवाणी सिखाते हैं, जो वास्तविक जीवन में उपयोगी हैं।`
    },
    image: '/assets/generated/subject-mathematics.dim_768x512.png',
    imageAlt: {
      en: 'Mathematics illustration with geometric shapes and equations',
      hi: 'ज्यामितीय आकृतियों और समीकरणों के साथ गणित का चित्रण'
    }
  },
  {
    id: 'science',
    title: {
      en: 'Science',
      hi: 'विज्ञान'
    },
    content: {
      en: `Science helps students understand the natural world through observation and experiments. Biology explains life at different levels, starting from cells and tissues to diversity in organisms, human health, natural resources, and food production. Chemistry introduces matter, its states, composition, atoms, molecules, and atomic structure, forming the base for higher chemistry studies. Physics explains motion, force, gravitation, work, energy, and sound, helping students understand physical laws that govern everyday life. Overall, Class 9 Science builds scientific thinking, curiosity, and awareness about health, environment, and technology.`,
      hi: `विज्ञान छात्रों को अवलोकन और प्रयोगों के माध्यम से प्राकृतिक दुनिया को समझने में मदद करता है। जीव विज्ञान विभिन्न स्तरों पर जीवन की व्याख्या करता है, कोशिकाओं और ऊतकों से लेकर जीवों में विविधता, मानव स्वास्थ्य, प्राकृतिक संसाधन और खाद्य उत्पादन तक। रसायन विज्ञान पदार्थ, उसकी अवस्थाएँ, संरचना, परमाणु, अणु और परमाणु संरचना का परिचय देता है, जो उच्च रसायन विज्ञान अध्ययन का आधार बनाता है। भौतिकी गति, बल, गुरुत्वाकर्षण, कार्य, ऊर्जा और ध्वनि की व्याख्या करती है, जो छात्रों को रोजमर्रा की जिंदगी को नियंत्रित करने वाले भौतिक नियमों को समझने में मदद करती है। कुल मिलाकर, कक्षा 9 विज्ञान वैज्ञानिक सोच, जिज्ञासा और स्वास्थ्य, पर्यावरण और प्रौद्योगिकी के बारे में जागरूकता बनाता है।`
    },
    image: '/assets/generated/subject-science.dim_768x512.png',
    imageAlt: {
      en: 'Science illustration with laboratory equipment and molecules',
      hi: 'प्रयोगशाला उपकरण और अणुओं के साथ विज्ञान का चित्रण'
    }
  },
  {
    id: 'social-science',
    title: {
      en: 'Social Science',
      hi: 'सामाजिक विज्ञान'
    },
    content: {
      en: `Social Science helps students understand society, governance, economy, and history. History covers major world events like the French Revolution, Russian Revolution, and the rise of Nazism, showing how these events shaped modern society. Geography explains India's location, physical features, climate, rivers, vegetation, wildlife, and population. Political Science focuses on democracy, the Constitution, elections, institutions, and citizens' rights. Economics introduces basic economic concepts like production, human resources, poverty, and food security. Together, Social Science builds awareness, responsibility, and critical thinking.`,
      hi: `सामाजिक विज्ञान छात्रों को समाज, शासन, अर्थव्यवस्था और इतिहास को समझने में मदद करता है। इतिहास में फ्रांसीसी क्रांति, रूसी क्रांति और नाज़ीवाद के उदय जैसी प्रमुख विश्व घटनाओं को शामिल किया गया है, जो दिखाता है कि इन घटनाओं ने आधुनिक समाज को कैसे आकार दिया। भूगोल भारत की स्थिति, भौतिक विशेषताओं, जलवायु, नदियों, वनस्पति, वन्यजीव और जनसंख्या की व्याख्या करता है। राजनीति विज्ञान लोकतंत्र, संविधान, चुनाव, संस्थानों और नागरिकों के अधिकारों पर केंद्रित है। अर्थशास्त्र उत्पादन, मानव संसाधन, गरीबी और खाद्य सुरक्षा जैसी बुनियादी आर्थिक अवधारणाओं का परिचय देता है। साथ में, सामाजिक विज्ञान जागरूकता, जिम्मेदारी और आलोचनात्मक सोच का निर्माण करता है।`
    },
    image: '/assets/generated/subject-social-science.dim_768x512.png',
    imageAlt: {
      en: 'Social Science illustration with maps, historical monuments and civic symbols',
      hi: 'मानचित्र, ऐतिहासिक स्मारक और नागरिक प्रतीकों के साथ सामाजिक विज्ञान का चित्रण'
    }
  },
  {
    id: 'hindi',
    title: {
      en: 'Hindi',
      hi: 'हिंदी'
    },
    content: {
      en: `Hindi develops language skills and moral values through literature and grammar. The गद्य खंड includes stories and essays that reflect social issues, human emotions, and inspirational ideas. The पद्य खंड consists of poems that express feelings like patriotism, nature, struggle, and hope. व्याकरण strengthens sentence formation, word usage, and language accuracy. लेखन कौशल improves students' ability to write letters, essays, dialogues, and paragraphs. Hindi helps students express thoughts clearly and connect with Indian culture and values.`,
      hi: `हिंदी साहित्य और व्याकरण के माध्यम से भाषा कौशल और नैतिक मूल्यों का विकास करती है। गद्य खंड में कहानियाँ और निबंध शामिल हैं जो सामाजिक मुद्दों, मानवीय भावनाओं और प्रेरक विचारों को दर्शाते हैं। पद्य खंड में कविताएँ हैं जो देशभक्ति, प्रकृति, संघर्ष और आशा जैसी भावनाओं को व्यक्त करती हैं। व्याकरण वाक्य निर्माण, शब्द प्रयोग और भाषा की सटीकता को मजबूत करता है। लेखन कौशल छात्रों की पत्र, निबंध, संवाद और अनुच्छेद लिखने की क्षमता में सुधार करता है। हिंदी छात्रों को विचारों को स्पष्ट रूप से व्यक्त करने और भारतीय संस्कृति और मूल्यों से जुड़ने में मदद करती है।`
    },
    image: '/assets/generated/subject-hindi.dim_768x512.png',
    imageAlt: {
      en: 'Hindi illustration with Devanagari script and literature',
      hi: 'देवनागरी लिपि और साहित्य के साथ हिंदी का चित्रण'
    }
  },
  {
    id: 'sanskrit',
    title: {
      en: 'Sanskrit',
      hi: 'संस्कृत'
    },
    content: {
      en: `Sanskrit introduces students to one of the oldest languages of India and strengthens grammatical understanding. The chapters include गद्य और पद्य पाठ, which teach moral values, discipline, and wisdom. शब्द रूप और धातु रूप build the foundation of Sanskrit grammar. अनुवाद अभ्यास improves understanding and language skills. Sanskrit also gives knowledge of Indian traditions, philosophy, and culture while enhancing memory and analytical skills.`,
      hi: `संस्कृत छात्रों को भारत की सबसे पुरानी भाषाओं में से एक से परिचित कराती है और व्याकरणिक समझ को मजबूत करती है। अध्यायों में गद्य और पद्य पाठ शामिल हैं, जो नैतिक मूल्य, अनुशासन और ज्ञान सिखाते हैं। शब्द रूप और धातु रूप संस्कृत व्याकरण की नींव बनाते हैं। अनुवाद अभ्यास समझ और भाषा कौशल में सुधार करता है। संस्कृत भारतीय परंपराओं, दर्शन और संस्कृति का ज्ञान भी देती है जबकि स्मृति और विश्लेषणात्मक कौशल को बढ़ाती है।`
    },
    image: '/assets/generated/subject-sanskrit.dim_768x512.png',
    imageAlt: {
      en: 'Sanskrit illustration with ancient manuscripts and Devanagari script',
      hi: 'प्राचीन पांडुलिपियों और देवनागरी लिपि के साथ संस्कृत का चित्रण'
    }
  },
  {
    id: 'computer-application',
    title: {
      en: 'Computer Application',
      hi: 'कंप्यूटर अनुप्रयोग'
    },
    content: {
      en: `Computer Application helps students become digitally literate. It introduces basic computer concepts, hardware, software, and operating systems. Students learn practical skills using word processing and spreadsheet software for creating documents and managing data. The subject also covers internet usage, email, and cyber safety, teaching responsible and safe use of technology. Computer education prepares students for the digital world and future careers.`,
      hi: `कंप्यूटर अनुप्रयोग छात्रों को डिजिटल रूप से साक्षर बनने में मदद करता है। यह बुनियादी कंप्यूटर अवधारणाओं, हार्डवेयर, सॉफ्टवेयर और ऑपरेटिंग सिस्टम का परिचय देता है। छात्र दस्तावेज़ बनाने और डेटा प्रबंधित करने के लिए वर्ड प्रोसेसिंग और स्प्रेडशीट सॉफ्टवेयर का उपयोग करके व्यावहारिक कौशल सीखते हैं। विषय में इंटरनेट उपयोग, ईमेल और साइबर सुरक्षा भी शामिल है, जो प्रौद्योगिकी के जिम्मेदार और सुरक्षित उपयोग को सिखाता है। कंप्यूटर शिक्षा छात्रों को डिजिटल दुनिया और भविष्य के करियर के लिए तैयार करती है।`
    },
    image: '/assets/generated/subject-computer-application.dim_768x512.png',
    imageAlt: {
      en: 'Computer Application illustration with laptop, code and digital elements',
      hi: 'लैपटॉप, कोड और डिजिटल तत्वों के साथ कंप्यूटर अनुप्रयोग का चित्रण'
    }
  },
  {
    id: 'english',
    title: {
      en: 'English',
      hi: 'अंग्रेज़ी'
    },
    content: {
      en: `The Class 9 English syllabus includes two books, Beehive and Moments, which contain a variety of stories, biographies, plays, and travelogues. These chapters focus on developing moral values, positive thinking, courage, determination, compassion, and a sense of humanity among students.

The book Beehive presents inspiring life stories and meaningful lessons. The Fun They Had shows a future where children study with mechanical teachers and miss the joy of real classrooms. The Sound of Music highlights the achievements of Evelyn Glennie, who overcame deafness to become a great musician, and Bismillah Khan, who brought respect to Indian classical music. The Little Girl describes the emotional bond between a strict father and his daughter. A Truly Beautiful Mind presents Albert Einstein as a genius scientist and a peace-loving human being. Humorous chapters like The Snake and the Mirror and Packing entertain readers while teaching presence of mind and patience. My Childhood shows the simple upbringing of Dr. A.P.J. Abdul Kalam and the values of unity and hard work. Reach for the Top inspires students through the success stories of Santosh Yadav and Maria Sharapova. The Bond of Love shows deep affection for animals, while Kathmandu introduces cultural diversity. The play If I Were You teaches that intelligence is more powerful than violence.

The supplementary reader Moments mainly focuses on emotional growth and moral lessons. The Lost Child shows that parental love is more important than material things. The Adventures of Toto warns against keeping wild animals as pets. Iswaran the Storyteller highlights the power of imagination. In the Kingdom of Fools criticizes foolish leadership. Stories like The Happy Prince and The Last Leaf teach sacrifice, kindness, and hope.`,
      hi: `कक्षा 9 अंग्रेज़ी पाठ्यक्रम में दो पुस्तकें, बीहाइव और मोमेंट्स शामिल हैं, जिनमें विभिन्न प्रकार की कहानियाँ, जीवनियाँ, नाटक और यात्रा वृत्तांत हैं। ये अध्याय छात्रों में नैतिक मूल्यों, सकारात्मक सोच, साहस, दृढ़ संकल्प, करुणा और मानवता की भावना विकसित करने पर केंद्रित हैं।

बीहाइव पुस्तक प्रेरक जीवन कहानियाँ और सार्थक पाठ प्रस्तुत करती है। द फन दे हैड एक भविष्य दिखाता है जहाँ बच्चे यांत्रिक शिक्षकों के साथ अध्ययन करते हैं और वास्तविक कक्षाओं के आनंद को याद करते हैं। द साउंड ऑफ म्यूजिक एवलिन ग्लेनी की उपलब्धियों को उजागर करता है, जिन्होंने बहरेपन को पार करके एक महान संगीतकार बनीं, और बिस्मिल्लाह खान, जिन्होंने भारतीय शास्त्रीय संगीत को सम्मान दिलाया। द लिटिल गर्ल एक सख्त पिता और उसकी बेटी के बीच भावनात्मक बंधन का वर्णन करती है। ए ट्रूली ब्यूटीफुल माइंड अल्बर्ट आइंस्टीन को एक प्रतिभाशाली वैज्ञानिक और शांतिप्रिय इंसान के रूप में प्रस्तुत करता है। द स्नेक एंड द मिरर और पैकिंग जैसे हास्य अध्याय पाठकों का मनोरंजन करते हैं जबकि उपस्थिति और धैर्य सिखाते हैं। माई चाइल्डहुड डॉ. ए.पी.जे. अब्दुल कलाम के सरल पालन-पोषण और एकता और कड़ी मेहनत के मूल्यों को दिखाता है। रीच फॉर द टॉप संतोष यादव और मारिया शारापोवा की सफलता की कहानियों के माध्यम से छात्रों को प्रेरित करता है। द बॉन्ड ऑफ लव जानवरों के प्रति गहरा स्नेह दिखाता है, जबकि काठमांडू सांस्कृतिक विविधता का परिचय देता है। नाटक इफ आई वर यू सिखाता है कि बुद्धि हिंसा से अधिक शक्तिशाली है।

पूरक पाठक मोमेंट्स मुख्य रूप से भावनात्मक विकास और नैतिक पाठों पर केंद्रित है। द लॉस्ट चाइल्ड दिखाता है कि माता-पिता का प्यार भौतिक चीजों से अधिक महत्वपूर्ण है। द एडवेंचर्स ऑफ टोटो जंगली जानवरों को पालतू जानवर के रूप में रखने के खिलाफ चेतावनी देता है। इस्वरन द स्टोरीटेलर कल्पना की शक्ति को उजागर करता है। इन द किंगडम ऑफ फूल्स मूर्ख नेतृत्व की आलोचना करता है। द हैप्पी प्रिंस और द लास्ट लीफ जैसी कहानियाँ त्याग, दयालुता और आशा सिखाती हैं।`
    },
    image: '/assets/generated/subject-english.dim_768x512.png',
    imageAlt: {
      en: 'English illustration with books, literature and language elements',
      hi: 'पुस्तकों, साहित्य और भाषा तत्वों के साथ अंग्रेज़ी का चित्रण'
    }
  }
];
