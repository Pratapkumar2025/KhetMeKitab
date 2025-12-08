// Quiz Data - NCERT Questions in Hindi/Hinglish
// Class 5-10, Subjects: Science, Social Science, Math

const quizData = {
    // ========== CLASS 5 ==========
    5: {
        science: [
            {
                question: "पौधे अपना भोजन कैसे बनाते हैं?",
                options: [
                    "जड़ों से मिट्टी का रस लेकर",
                    "पत्तियों में सूर्य की रोशनी से (Photosynthesis)",
                    "हवा से सीधे लेकर",
                    "पानी पीकर"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "हमारे शरीर में कितनी हड्डियां होती हैं?",
                options: ["106", "206", "306", "406"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "पानी किस temperature पर उबलता है?",
                options: ["50°C", "75°C", "100°C", "150°C"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "पृथ्वी के चारों ओर घूमने वाले को क्या कहते हैं?",
                options: ["सूर्य", "चंद्रमा (Moon)", "मंगल", "शुक्र"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस gas से पौधे अपना भोजन बनाते हैं?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "मच्छर किस बीमारी को फैलाते हैं?",
                options: ["खांसी", "बुखार", "मलेरिया", "पेट दर्द"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "पौधों में पानी ऊपर कैसे जाता है?",
                options: ["जड़ों द्वारा खींचकर", "पंप से", "हवा से", "बारिश से"],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "दिन और रात क्यों होते हैं?",
                options: [
                    "सूर्य घूमता है",
                    "पृथ्वी अपनी धुरी पर घूमती है (Rotation)",
                    "चंद्रमा घूमता है",
                    "बादल आते हैं"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "हमारे शरीर का सबसे बड़ा अंग (organ) कौन सा है?",
                options: ["दिल (Heart)", "लीवर (Liver)", "त्वचा (Skin)", "फेफड़े (Lungs)"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "पौधों में भोजन कहाँ store होता है?",
                options: ["पत्तियों में", "जड़ों और तनों में", "फूलों में", "बीजों में"],
                correct: 1,
                difficulty: "hard"
            }
        ],
        social: [
            {
                question: "भारत की राजधानी कौन सी है?",
                options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत में कितने राज्य हैं? (2024 तक)",
                options: ["25", "28", "30", "32"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "15 अगस्त को क्या मनाया जाता है?",
                options: [
                    "गणतंत्र दिवस",
                    "स्वतंत्रता दिवस (Independence Day)",
                    "Gandhi Jayanti",
                    "Children's Day"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत का राष्ट्रीय पक्षी कौन सा है?",
                options: ["तोता", "कबूतर", "मोर (Peacock)", "बुलबुल"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Himalayas किस दिशा में स्थित हैं?",
                options: ["दक्षिण", "उत्तर (North)", "पूर्व", "पश्चिम"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत का सबसे लंबा नदी कौन सी है?",
                options: ["Yamuna", "Narmada", "Ganga", "Brahmaputra"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "26 जनवरी को क्या मनाया जाता है?",
                options: [
                    "स्वतंत्रता दिवस",
                    "गणतंत्र दिवस (Republic Day)",
                    "Gandhi Jayanti",
                    "Ambedkar Jayanti"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत के पहले प्रधानमंत्री कौन थे?",
                options: [
                    "Mahatma Gandhi",
                    "Jawaharlal Nehru",
                    "Sardar Patel",
                    "Dr. Rajendra Prasad"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत का राष्ट्रीय खेल क्या है?",
                options: ["Cricket", "Football", "Hockey", "Kabaddi"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Taj Mahal किस शहर में स्थित है?",
                options: ["Delhi", "Jaipur", "Agra", "Lucknow"],
                correct: 2,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "50 + 75 = ?",
                options: ["115", "125", "135", "145"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "12 × 8 = ?",
                options: ["84", "94", "96", "106"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "100 - 37 = ?",
                options: ["53", "63", "73", "83"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "144 ÷ 12 = ?",
                options: ["10", "11", "12", "13"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "एक किलोमीटर में कितने मीटर होते हैं?",
                options: ["100", "500", "1000", "10000"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "15 का आधा (half) कितना होगा?",
                options: ["5", "7.5", "10", "12"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "एक घंटे में कितने मिनट होते हैं?",
                options: ["30", "45", "60", "90"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "25 × 4 = ?",
                options: ["90", "95", "100", "105"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "200 का 50% कितना होगा?",
                options: ["50", "75", "100", "150"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "एक triangle में कितने कोण (angles) होते हैं?",
                options: ["2", "3", "4", "5"],
                correct: 1,
                difficulty: "hard"
            }
        ]
    },

    // ========== CLASS 6 ==========
    6: {
        science: [
            {
                question: "Photosynthesis में पौधे क्या छोड़ते हैं (release करते हैं)?",
                options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "चुंबक (Magnet) किस धातु को attract करता है?",
                options: ["लकड़ी", "प्लास्टिक", "लोहा (Iron)", "कागज"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "पानी का chemical formula क्या है?",
                options: ["H2O", "CO2", "O2", "N2"],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "हमारे शरीर में कौन सा अंग blood को pump करता है?",
                options: ["Lungs", "Liver", "Heart (दिल)", "Kidney"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Solar System में कितने planets हैं?",
                options: ["7", "8", "9", "10"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "पौधों की जड़ें क्या काम करती हैं?",
                options: [
                    "केवल पानी लेना",
                    "पानी और minerals लेना, plant को support देना",
                    "केवल support देना",
                    "कोई काम नहीं"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Thermometer किसको measure करता है?",
                options: ["दबाव (Pressure)", "तापमान (Temperature)", "लंबाई", "वजन"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "पृथ्वी पर oxygen कहाँ से आती है?",
                options: ["पहाड़ों से", "पौधों से", "समुद्र से", "जानवरों से"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Electric current कैसे flow करती है?",
                options: [
                    "केवल खुले circuit में",
                    "केवल बंद circuit में (closed circuit)",
                    "दोनों में",
                    "कभी नहीं"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Mirror में बनने वाली image कैसी होती है?",
                options: [
                    "बड़ी",
                    "छोटी",
                    "Laterally inverted (बाएं-दाएं उलटी)",
                    "उल्टी (upside down)"
                ],
                correct: 2,
                difficulty: "hard"
            }
        ],
        social: [
            {
                question: "भारत किस महाद्वीप (continent) में स्थित है?",
                options: ["Africa", "Asia", "Europe", "Australia"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Indus Valley Civilization कहाँ विकसित हुई थी?",
                options: [
                    "गंगा के किनारे",
                    "सिंधु नदी के किनारे (Indus River)",
                    "नर्मदा के किनारे",
                    "कावेरी के किनारे"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "पृथ्वी पर कितने महाद्वीप हैं?",
                options: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "भारत में कितने Union Territories हैं? (2024 तक)",
                options: ["6", "7", "8", "9"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Equator (भूमध्य रेखा) पृथ्वी को कैसे divide करती है?",
                options: [
                    "पूर्व और पश्चिम में",
                    "उत्तर और दक्षिण में",
                    "चार भागों में",
                    "कोई division नहीं"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत का क्षेत्रफल (area) विश्व में कौन से स्थान पर है?",
                options: ["5वें", "6वें", "7वें", "8वें"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "Vedic period में कौन सी भाषा का प्रयोग होता था?",
                options: ["Hindi", "Sanskrit", "Tamil", "Prakrit"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत की सबसे ऊँची चोटी कौन सी है?",
                options: ["Kanchenjunga", "Nanda Devi", "K2 (Godwin Austen)", "Everest"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "Globe पर North-South lines को क्या कहते हैं?",
                options: ["Latitude", "Longitude", "Equator", "Tropic"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Ashoka किस dynasty से संबंधित थे?",
                options: ["Gupta", "Maurya", "Mughal", "Chola"],
                correct: 1,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "2/4 को सबसे सरल रूप (simplest form) में लिखें:",
                options: ["1/2", "1/3", "2/3", "3/4"],
                correct: 0,
                difficulty: "easy"
            },
            {
                question: "LCM of 4 and 6 क्या है?",
                options: ["10", "12", "18", "24"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "45 ÷ 5 + 3 × 2 = ?",
                options: ["12", "15", "18", "21"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "एक square की सभी sides बराबर होती हैं। अगर एक side 5 cm है, तो perimeter क्या होगा?",
                options: ["15 cm", "20 cm", "25 cm", "30 cm"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "HCF of 12 and 18 क्या है?",
                options: ["3", "6", "9", "12"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "3/5 + 1/5 = ?",
                options: ["2/5", "3/5", "4/5", "5/5"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "एक rectangle की length 8 cm और width 5 cm है। Area क्या होगा?",
                options: ["13 sq cm", "26 sq cm", "40 sq cm", "80 sq cm"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Prime number कौन सी है?",
                options: ["15", "21", "29", "33"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "(-5) + (+8) = ?",
                options: ["-13", "-3", "3", "13"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "अगर 2x = 16 है, तो x का value क्या होगा?",
                options: ["4", "6", "8", "10"],
                correct: 2,
                difficulty: "hard"
            }
        ]
    },

    // ========== CLASS 7 ==========
    7: {
        science: [
            {
                question: "Respiration में oxygen किसमें convert होती है?",
                options: ["Water", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Acids का taste कैसा होता है?",
                options: ["मीठा (Sweet)", "खट्टा (Sour)", "कड़वा (Bitter)", "नमकीन (Salty)"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस process में solid सीधे gas बन जाती है?",
                options: ["Melting", "Evaporation", "Sublimation", "Condensation"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Human body में सबसे छोटी bone कहाँ होती है?",
                options: ["हाथ में", "पैर में", "कान में (Ear)", "नाक में"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Light की speed लगभग कितनी होती है?",
                options: [
                    "3,000 km/s",
                    "30,000 km/s",
                    "3,00,000 km/s",
                    "3,000,000 km/s"
                ],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "Chlorophyll किस color का होता है?",
                options: ["लाल (Red)", "नीला (Blue)", "हरा (Green)", "पीला (Yellow)"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "किस nutrient से हमें सबसे ज्यादा energy मिलती है?",
                options: ["Proteins", "Vitamins", "Carbohydrates", "Minerals"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Amoeba कैसे reproduce करता है?",
                options: [
                    "Budding",
                    "Binary Fission (विखंडन)",
                    "Fragmentation",
                    "Spore formation"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Wind energy किस type की energy है?",
                options: [
                    "Non-renewable",
                    "Renewable (नवीकरणीय)",
                    "Nuclear",
                    "Chemical"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Litmus paper acid में किस color में बदलता है?",
                options: ["नीला (Blue)", "लाल (Red)", "हरा (Green)", "पीला (Yellow)"],
                correct: 1,
                difficulty: "medium"
            }
        ],
        social: [
            {
                question: "Delhi Sultanate की स्थापना किसने की थी?",
                options: [
                    "Muhammad bin Tughlaq",
                    "Qutub-ud-din Aibak",
                    "Alauddin Khilji",
                    "Iltutmish"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत में monsoon किस महीने में आता है?",
                options: ["अप्रैल-मई", "जून-जुलाई", "अगस्त-सितंबर", "अक्टूबर-नवंबर"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "संविधान (Constitution) में कितने fundamental rights हैं?",
                options: ["4", "5", "6", "7"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Thar Desert किस राज्य में स्थित है?",
                options: ["Gujarat", "Rajasthan", "Haryana", "Punjab"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत का सबसे बड़ा राज्य (area में) कौन सा है?",
                options: ["Maharashtra", "Madhya Pradesh", "Rajasthan", "Uttar Pradesh"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "किस parallel को Tropic of Cancer कहते हैं?",
                options: ["23.5° N", "23.5° S", "66.5° N", "66.5° S"],
                correct: 0,
                difficulty: "hard"
            },
            {
                question: "Mughal Empire के संस्थापक कौन थे?",
                options: ["Akbar", "Babur", "Humayun", "Jahangir"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत की Parliament में कितने houses हैं?",
                options: ["1", "2", "3", "4"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Western Ghats किस coast पर स्थित हैं?",
                options: ["Eastern", "Western", "Northern", "Southern"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Quit India Movement किस साल शुरू हुआ?",
                options: ["1940", "1942", "1944", "1946"],
                correct: 1,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "(-8) × (-3) = ?",
                options: ["-24", "-11", "11", "24"],
                correct: 3,
                difficulty: "easy"
            },
            {
                question: "एक circle का diameter 14 cm है। Radius क्या होगी?",
                options: ["4 cm", "7 cm", "14 cm", "28 cm"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "25% को fraction में लिखें:",
                options: ["1/2", "1/3", "1/4", "1/5"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "3x - 7 = 14, तो x = ?",
                options: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Sum of angles in a triangle:",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "2³ × 2² = ?",
                options: ["2⁴", "2⁵", "2⁶", "2⁷"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Perimeter of square with side 12 cm:",
                options: ["24 cm", "36 cm", "48 cm", "60 cm"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Median of 3, 7, 9, 12, 15:",
                options: ["7", "9", "12", "15"],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Ratio 15:25 को simplest form में:",
                options: ["1:2", "2:3", "3:5", "5:3"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Simple Interest: P=1000, R=5%, T=2 years",
                options: ["₹50", "₹100", "₹150", "₹200"],
                correct: 1,
                difficulty: "hard"
            }
        ]
    },

    // ========== CLASS 8 ==========
    8: {
        science: [
            {
                question: "Cell का powerhouse किसे कहते हैं?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस metal को room temperature पर liquid पाया जाता है?",
                options: ["Iron", "Copper", "Mercury (पारा)", "Gold"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Friction (घर्षण) किस पर depend करता है?",
                options: [
                    "केवल surface की प्रकृति पर",
                    "केवल weight पर",
                    "Surface और contact force दोनों पर",
                    "कोई factor नहीं"
                ],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Pollination में कौन मदद करता है?",
                options: ["केवल हवा", "केवल कीट", "हवा, कीट और पानी", "केवल पानी"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "किस frequency की sound humans सुन सकते हैं?",
                options: [
                    "0-20 Hz",
                    "20-20,000 Hz",
                    "20,000-40,000 Hz",
                    "40,000+ Hz"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Coal किस type का fuel है?",
                options: [
                    "Renewable",
                    "Fossil fuel (जीवाश्म ईंधन)",
                    "Nuclear",
                    "Biofuel"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Adolescence (किशोरावस्था) में कौन से hormones active होते हैं?",
                options: [
                    "Insulin",
                    "Testosterone और Estrogen",
                    "Thyroxine",
                    "Adrenaline"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Pressure का SI unit क्या है?",
                options: ["Newton", "Pascal", "Joule", "Watt"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "किस process में microorganisms का use करके alcohol बनाया जाता है?",
                options: ["Pasteurization", "Fermentation (किण्वन)", "Distillation", "Oxidation"],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Convex mirror में image कैसी बनती है?",
                options: [
                    "बड़ी और real",
                    "छोटी और virtual (आभासी)",
                    "बड़ी और virtual",
                    "छोटी और real"
                ],
                correct: 1,
                difficulty: "hard"
            }
        ],
        social: [
            {
                question: "भारत में पहला स्वतंत्रता संग्राम कब हुआ?",
                options: ["1757", "1857", "1942", "1947"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Constitution of India कब लागू हुआ?",
                options: [
                    "15 August 1947",
                    "26 January 1950",
                    "26 November 1949",
                    "2 October 1950"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत में किस type की government है?",
                options: [
                    "Presidential",
                    "Parliamentary (संसदीय)",
                    "Military",
                    "Monarchy"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Jallianwala Bagh Massacre किस शहर में हुआ?",
                options: ["Delhi", "Amritsar", "Lahore", "Lucknow"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
                options: ["Maharashtra", "Bihar", "West Bengal", "Uttar Pradesh"],
                correct: 3,
                difficulty: "easy"
            },
            {
                question: "किस movement का slogan था 'Do or Die'?",
                options: [
                    "Non-Cooperation",
                    "Civil Disobedience",
                    "Quit India",
                    "Swadeshi"
                ],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Fundamental Duties किस article में हैं?",
                options: ["Article 19", "Article 32", "Article 51A", "Article 356"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "किसे 'Iron Man of India' कहा जाता है?",
                options: [
                    "Jawaharlal Nehru",
                    "Sardar Vallabhbhai Patel",
                    "Subhash Chandra Bose",
                    "Bhagat Singh"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Bengal का विभाजन (Partition) किस साल हुआ?",
                options: ["1895", "1905", "1915", "1925"],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "भारत में कितने High Courts हैं?",
                options: ["20", "22", "24", "25"],
                correct: 3,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "Square root of 144:",
                options: ["10", "11", "12", "13"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "(a + b)² = ?",
                options: [
                    "a² + b²",
                    "a² + 2ab + b²",
                    "a² - 2ab + b²",
                    "a² + b² + 2"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Cube of 5:",
                options: ["25", "75", "125", "625"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Area of circle with radius 7 cm (π = 22/7):",
                options: ["44 cm²", "154 cm²", "308 cm²", "616 cm²"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Compound Interest formula:",
                options: [
                    "P × R × T / 100",
                    "P(1 + R/100)^T",
                    "P + R + T",
                    "P × R / T"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Volume of cube with side 4 cm:",
                options: ["16 cm³", "32 cm³", "64 cm³", "128 cm³"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "5x + 3 = 2x + 15, तो x = ?",
                options: ["2", "3", "4", "5"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Exterior angle of regular hexagon:",
                options: ["45°", "60°", "72°", "90°"],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "√(81/16) = ?",
                options: ["9/4", "9/16", "3/4", "27/4"],
                correct: 0,
                difficulty: "hard"
            },
            {
                question: "Linear equation: 2y - 3 = 7, y = ?",
                options: ["3", "4", "5", "6"],
                correct: 2,
                difficulty: "medium"
            }
        ]
    },

    // ========== CLASS 9 ==========
    9: {
        science: [
            {
                question: "Newton का पहला law of motion क्या है?",
                options: [
                    "F = ma",
                    "Law of Inertia (जड़त्व का नियम)",
                    "Action-Reaction",
                    "Law of Gravitation"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Cell theory किसने दिया था?",
                options: [
                    "Robert Hooke",
                    "Schleiden और Schwann",
                    "Darwin",
                    "Mendel"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Atomic number किसकी संख्या बताता है?",
                options: ["Neutrons", "Protons", "Electrons", "Nucleons"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस process में liquid gas में बदलता है?",
                options: ["Condensation", "Sublimation", "Evaporation (वाष्पीकरण)", "Melting"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Kinetic Energy का formula क्या है?",
                options: ["mgh", "1/2 mv²", "mv", "m/v"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "DNA का full form क्या है?",
                options: [
                    "Deoxyribonucleic Acid",
                    "Diribonucleic Acid",
                    "Deoxyribose Acid",
                    "Dynamic Nucleic Acid"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "Work का SI unit क्या है?",
                options: ["Newton", "Joule", "Watt", "Pascal"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस tissue को 'पैकिंग tissue' कहते हैं?",
                options: [
                    "Epithelial tissue",
                    "Connective tissue",
                    "Muscular tissue",
                    "Nervous tissue"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Acceleration due to gravity (g) की value क्या है?",
                options: ["8.8 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "किस organelle को 'suicide bag' कहते हैं?",
                options: ["Ribosome", "Mitochondria", "Lysosome", "Golgi body"],
                correct: 2,
                difficulty: "hard"
            }
        ],
        social: [
            {
                question: "French Revolution कब शुरू हुई?",
                options: ["1769", "1779", "1789", "1799"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "भारत में मानसून किस wind system का हिस्सा है?",
                options: [
                    "Trade winds",
                    "Seasonal winds (मौसमी पवन)",
                    "Permanent winds",
                    "Local winds"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Democracy में power किसके पास होती है?",
                options: [
                    "King",
                    "People (जनता)",
                    "Military",
                    "Religious leaders"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Storming of Bastille किस date को हुआ?",
                options: [
                    "14 July 1789",
                    "14 August 1789",
                    "14 September 1789",
                    "14 October 1789"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "भारत की तटरेखा (coastline) कितनी लंबी है?",
                options: ["5,500 km", "6,500 km", "7,516 km", "8,500 km"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "किस line को 'Standard Meridian of India' कहते हैं?",
                options: ["82.5° E", "85.5° E", "90° E", "77° E"],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "Nazi Party के leader कौन थे?",
                options: ["Mussolini", "Stalin", "Adolf Hitler", "Lenin"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "भारत में किस प्रकार का forest सबसे ज्यादा पाया जाता है?",
                options: [
                    "Tropical Rainforest",
                    "Tropical Deciduous (पतझड़ वन)",
                    "Mangrove",
                    "Alpine"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "लोकतंत्र की key feature क्या है?",
                options: [
                    "Hereditary rule",
                    "Elections (चुनाव)",
                    "Military power",
                    "Religious authority"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस parallel को 'Tropic of Capricorn' कहते हैं?",
                options: ["23.5° N", "23.5° S", "66.5° N", "66.5° S"],
                correct: 1,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "√2 किस type की संख्या है?",
                options: [
                    "Rational (परिमेय)",
                    "Irrational (अपरिमेय)",
                    "Whole",
                    "Natural"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Polynomial x² + 5x + 6 को factorize करें:",
                options: [
                    "(x + 2)(x + 3)",
                    "(x + 1)(x + 6)",
                    "(x - 2)(x - 3)",
                    "(x + 2)(x - 3)"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "किसी triangle में angles का sum:",
                options: ["90°", "180°", "270°", "360°"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Distance formula:",
                options: [
                    "√[(x₂-x₁) + (y₂-y₁)]",
                    "√[(x₂-x₁)² + (y₂-y₁)²]",
                    "(x₂-x₁)² + (y₂-y₁)²",
                    "|(x₂-x₁) + (y₂-y₁)|"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Euclid's division lemma: a = bq + r, यहाँ r का range:",
                options: ["0 < r < b", "0 ≤ r < b", "0 < r ≤ b", "r < b"],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "Surface area of sphere (radius = r):",
                options: ["2πr²", "3πr²", "4πr²", "πr²"],
                correct: 2,
                difficulty: "medium"
            },
            {
                question: "Zero of polynomial p(x) = 2x + 3:",
                options: ["-3/2", "3/2", "-2/3", "2/3"],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "किसी parallelogram के opposite angles:",
                options: [
                    "बराबर होते हैं (Equal)",
                    "Supplementary होते हैं",
                    "Complementary होते हैं",
                    "कोई relation नहीं"
                ],
                correct: 0,
                difficulty: "easy"
            },
            {
                question: "Heron's formula (triangle area):",
                options: [
                    "√[s(s-a)(s-b)(s-c)]",
                    "s(s-a)(s-b)(s-c)",
                    "√(s-a)(s-b)(s-c)",
                    "s + a + b + c"
                ],
                correct: 0,
                difficulty: "hard"
            },
            {
                question: "Linear equation ax + by + c = 0 में a और b:",
                options: [
                    "दोनों zero हो सकते हैं",
                    "दोनों zero नहीं हो सकते",
                    "कोई भी zero हो सकता है",
                    "दोनों positive होने चाहिए"
                ],
                correct: 1,
                difficulty: "hard"
            }
        ]
    },

    // ========== CLASS 10 ==========
    10: {
        science: [
            {
                question: "Tyndall Effect किसमें observe होता है?",
                options: ["True solution", "Colloid (कोलाइड)", "Suspension", "Pure water"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "HCl का pH value लगभग कितना होता है?",
                options: ["0-1", "7", "12-14", "5-6"],
                correct: 0,
                difficulty: "easy"
            },
            {
                question: "किस metal को 'थर्मामीटर metal' कहते हैं?",
                options: ["Silver", "Mercury (पारा)", "Gold", "Copper"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Photosynthesis का chemical equation:",
                options: [
                    "CO₂ + H₂O → C₆H₁₂O₆ + O₂",
                    "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
                    "CO₂ + H₂O → O₂",
                    "C₆H₁₂O₆ → CO₂ + H₂O"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Ohm's Law का formula:",
                options: ["V = I/R", "V = IR", "I = VR", "R = VI"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "किस lens से दूर की चीजें देखते हैं (दूरदृष्टि दोष)?",
                options: [
                    "Convex lens (उत्तल)",
                    "Concave lens (अवतल)",
                    "Cylindrical lens",
                    "Bifocal lens"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "Mendel ने किस plant पर experiment किया?",
                options: ["Sunflower", "Pea plant (मटर)", "Rose", "Wheat"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Human eye का focal length:",
                options: [
                    "Fixed (निश्चित)",
                    "Variable (परिवर्तनशील)",
                    "Zero",
                    "Infinite"
                ],
                correct: 1,
                difficulty: "hard"
            },
            {
                question: "किस reaction में heat release होती है?",
                options: [
                    "Endothermic",
                    "Exothermic (ऊष्माक्षेपी)",
                    "Displacement",
                    "Decomposition"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Magnetic field की direction कैसे find करते हैं?",
                options: [
                    "Left hand rule",
                    "Right hand thumb rule (दाएं हाथ का अंगूठा नियम)",
                    "Fleming's left hand rule",
                    "Ohm's law"
                ],
                correct: 1,
                difficulty: "hard"
            }
        ],
        social: [
            {
                question: "किस movement में 'Non-cooperation' का नारा था?",
                options: [
                    "Swadeshi Movement",
                    "Non-Cooperation Movement (1920)",
                    "Civil Disobedience",
                    "Quit India"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "भारत में federalism किस type की है?",
                options: [
                    "'Coming together' federation",
                    "'Holding together' federation",
                    "Unitary",
                    "Confederate"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "किस sector को 'primary sector' कहते हैं?",
                options: [
                    "Manufacturing",
                    "Agriculture (कृषि)",
                    "Services",
                    "Technology"
                ],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Jallianwala Bagh Massacre किस साल हुआ?",
                options: ["1917", "1919", "1921", "1923"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "किसे 'Father of Indian Constitution' कहते हैं?",
                options: [
                    "Jawaharlal Nehru",
                    "Sardar Patel",
                    "Dr. B.R. Ambedkar",
                    "Mahatma Gandhi"
                ],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "किस state में ज्यादा bauxite reserves हैं?",
                options: ["Gujarat", "Rajasthan", "Odisha", "Tamil Nadu"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "Per capita income किसको measure करता है?",
                options: [
                    "Total income",
                    "Average income (औसत आय)",
                    "GDP",
                    "Inflation"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Salt March (Dandi March) कब शुरू हुआ?",
                options: ["1928", "1930", "1932", "1934"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "भारत में किस energy source का सबसे ज्यादा उपयोग होता है?",
                options: ["Solar", "Wind", "Coal (कोयला)", "Nuclear"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "किस article में 'Right to Education' है?",
                options: ["Article 19", "Article 21A", "Article 32", "Article 51A"],
                correct: 1,
                difficulty: "hard"
            }
        ],
        math: [
            {
                question: "Quadratic formula:",
                options: [
                    "x = (-b ± √(b²-4ac))/2a",
                    "x = (-b ± √(b²+4ac))/2a",
                    "x = (b ± √(b²-4ac))/2a",
                    "x = (-b ± √(b²-4ac))/a"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "tan 45° की value:",
                options: ["0", "1/√2", "1", "√3"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Arithmetic Progression में nth term:",
                options: [
                    "a + nd",
                    "a + (n-1)d",
                    "a + (n+1)d",
                    "an + d"
                ],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "किसी circle की tangent radius से किस angle पर होती है?",
                options: ["45°", "60°", "90°", "180°"],
                correct: 2,
                difficulty: "easy"
            },
            {
                question: "Sin²θ + Cos²θ = ?",
                options: ["0", "1", "2", "θ"],
                correct: 1,
                difficulty: "easy"
            },
            {
                question: "Volume of cone (r = radius, h = height):",
                options: ["πr²h", "1/3 πr²h", "2/3 πr²h", "1/2 πr²h"],
                correct: 1,
                difficulty: "medium"
            },
            {
                question: "Discriminant (D) = ?",
                options: [
                    "b² - 4ac",
                    "b² + 4ac",
                    "4ac - b²",
                    "-b² - 4ac"
                ],
                correct: 0,
                difficulty: "medium"
            },
            {
                question: "किसी triangle की similarity के लिए minimum कितने corresponding parts बराबर होने चाहिए?",
                options: ["1", "2", "3", "4"],
                correct: 2,
                difficulty: "hard"
            },
            {
                question: "Mode formula (grouped data):",
                options: [
                    "L + (f₁-f₀)/(2f₁-f₀-f₂) × h",
                    "L + (f₁-f₀)/(f₁-f₀-f₂) × h",
                    "L - (f₁-f₀)/(2f₁-f₀-f₂) × h",
                    "L + (f₀-f₁)/(2f₁-f₀-f₂) × h"
                ],
                correct: 0,
                difficulty: "hard"
            },
            {
                question: "Probability range:",
                options: [
                    "0 < P < 1",
                    "0 ≤ P ≤ 1",
                    "P > 0",
                    "P < 1"
                ],
                correct: 1,
                difficulty: "medium"
            }
        ]
    }
};
