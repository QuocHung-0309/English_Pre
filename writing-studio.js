(() => {
  const STORAGE_KEY = "engprep-writing-drafts-v1";
  const SETTINGS_KEY = "engprep-writing-settings-v1";
  const RUBRIC = [
    {
      key: "taskFulfillment",
      name: "Task Fulfillment",
      max: 4,
      description: "Đáp ứng các ý bắt buộc, đúng mục đích và đúng thể loại.",
    },
    {
      key: "organization",
      name: "Organization",
      max: 2,
      description: "Bố cục rõ, trình tự hợp lý và liên kết ý.",
    },
    {
      key: "vocabulary",
      name: "Vocabulary",
      max: 2,
      description: "Vốn từ phù hợp, chính xác và có độ linh hoạt.",
    },
    {
      key: "grammar",
      name: "Grammar",
      max: 2,
      description: "Độ chính xác và đa dạng của cấu trúc ngữ pháp.",
    },
  ];
  const TASKS = [
    {
      id: "formal-fair",
      part: "Task 1",
      group: "Thư / Email trang trọng",
      title: "International Student Fair",
      type: "Thư ứng tuyển trang trọng",
      letterType: "Formal application letter",
      minWords: 120,
      minutes: 20,
      prompt:
        "You have seen this advertisement in an English-language newspaper.\n\nINTERNATIONAL STUDENT FAIR · FAIR REQUIRES STAFF\nThe International Student Fair helps people choose the right college or university, and we are looking for assistants for this year's Fair. Duties will include giving directions and offering advice.\n\nDo you like helping people?\nDo you have experience of choosing a place of study?\nAre you willing to work evenings?\n\nIf so, apply to the organiser, Ms Evie Ross, saying why you think you are suitable for the job.\n\nWrite your letter of application in at least 120 words in an appropriate style.",
      requirements: [
        "Mở thư trang trọng và nêu rõ mục đích ứng tuyển.",
        "Nêu kinh nghiệm hoặc hiểu biết về việc chọn nơi học.",
        "Giải thích vì sao bạn thích giúp đỡ mọi người và phù hợp với nhiệm vụ.",
        "Xác nhận khả năng làm buổi tối và kết thúc thư phù hợp.",
      ],
      structure: [
        "Dear Ms Ross,",
        "Nêu vị trí ứng tuyển và lý do viết thư.",
        "Trình bày kinh nghiệm, kỹ năng giao tiếp và khả năng hỗ trợ khách tham quan.",
        "Xác nhận lịch làm buổi tối; đề nghị trao đổi thêm.",
        "Yours sincerely, + tên người viết",
      ],
      vocab: [
        "apply for the position",
        "previous experience",
        "give directions",
        "offer practical advice",
        "a suitable candidate",
        "work evening shifts",
        "communicate clearly",
        "I would welcome the opportunity",
      ],
      outline: [
        "Salutation: Dear Ms Ross,",
        "Paragraph 1: State the position and where you saw the advertisement.",
        "Paragraph 2: Give relevant experience and explain why you enjoy helping people.",
        "Paragraph 3: Confirm evening availability and summarize your suitability.",
        "Closing: Yours sincerely, followed by your name.",
      ],
      sample:
        "Dear Ms Ross,\n\nI am writing to apply for an assistant position at this year's International Student Fair. I saw your advertisement in the newspaper and was pleased to learn that the Fair helps students choose a suitable college or university.\n\nI have experience helping younger students compare courses and find information about different places of study. At school, I often welcomed visitors and explained where they could find the library, offices and classrooms. I enjoy helping people because a little clear advice can make an important decision much easier. These experiences have helped me become patient, approachable and confident when speaking to people.\n\nI am available to work in the evenings during the Fair. I believe my communication skills and knowledge of education would make me a suitable assistant. I would be grateful for the opportunity to discuss my application with you.\n\nYours sincerely,\nAlex",
      translation:
        "Kính gửi bà Ross,\n\nTôi viết thư này để ứng tuyển vị trí trợ lý tại Hội chợ Du học Quốc tế năm nay. Tôi thấy quảng cáo của bà trên báo và rất vui khi biết Hội chợ giúp học sinh chọn trường cao đẳng hoặc đại học phù hợp.\n\nTôi có kinh nghiệm giúp các học sinh nhỏ tuổi hơn so sánh khóa học và tìm thông tin về các nơi học khác nhau. Ở trường, tôi thường đón khách và chỉ cho họ thư viện, văn phòng và phòng học. Tôi thích giúp đỡ mọi người vì một lời khuyên rõ ràng có thể giúp một quyết định quan trọng trở nên dễ dàng hơn. Những trải nghiệm này giúp tôi kiên nhẫn, thân thiện và tự tin khi giao tiếp.\n\nTôi có thể làm việc vào buổi tối trong thời gian diễn ra Hội chợ. Tôi tin rằng kỹ năng giao tiếp và hiểu biết về giáo dục sẽ giúp tôi trở thành một trợ lý phù hợp. Tôi rất mong có cơ hội trao đổi thêm với bà về hồ sơ ứng tuyển.\n\nTrân trọng,\nAlex",
    },
    {
      id: "formal-london",
      part: "Task 1",
      group: "Thư / Email trang trọng",
      title: "A Visit to a London Academy",
      type: "Thư hồi đáp trang trọng",
      letterType: "Formal letter",
      minWords: 120,
      minutes: 20,
      prompt:
        "You are helping to organise a visit to an English Language Academy in London. You have received a letter from James Smith, the director of the Academy.\n\n“I am very glad to see that you are coming to our academy in June. I am sure you will all have a very enjoyable time and that you will learn a lot of English. You can either stay all together in a youth hostel, or individually with local families. Please tell me which you would prefer. Tell me something about your group so that I can organise interesting spare-time activities. What sort of things do they like doing? Please ask if you need any further information.\n\nYours sincerely,\nJames Smith”\n\nWrite a letter responding to Mr Smith. Write at least 120 words. Do not include your name.",
      requirements: [
        "Chọn ở cùng nhau tại youth hostel hoặc ở riêng với các gia đình địa phương; giải thích lựa chọn.",
        "Mô tả nhóm: số lượng, độ tuổi hoặc đặc điểm phù hợp.",
        "Nêu sở thích để giám đốc sắp xếp hoạt động thời gian rảnh.",
        "Đặt câu hỏi cần thiết và dùng lời chào/kết thư trang trọng; không ghi tên.",
      ],
      structure: [
        "Dear Mr Smith,",
        "Cảm ơn thư và xác nhận chuyến thăm vào tháng Sáu.",
        "Nêu lựa chọn chỗ ở cùng lý do.",
        "Giới thiệu nhóm và sở thích hoạt động.",
        "Hỏi thông tin cần thiết; kết thư trang trọng, không ghi tên",
      ],
      vocab: [
        "accommodation arrangement",
        "stay with a host family",
        "youth hostel",
        "a group of students",
        "spare-time activities",
        "be keen on",
        "sightseeing",
        "Could you please let us know",
      ],
      outline: [
        "Salutation: Dear Mr Smith,",
        "Paragraph 1: Thank him and confirm the June visit.",
        "Paragraph 2: Choose the accommodation option and explain why.",
        "Paragraph 3: Describe the group and suggest activities they enjoy.",
        "Paragraph 4: Ask a practical question and close formally without a name.",
      ],
      sample:
        "Dear Mr Smith,\n\nThank you for your letter. We are delighted to visit your academy in June and are looking forward to improving our English.\n\nOur group would prefer to stay together in a youth hostel. There are twelve students and two teachers, so sharing accommodation would make it easier for us to organise our schedule and travel as a group. It would also give the students more opportunities to practise English with one another after lessons.\n\nMost members of our group are between sixteen and eighteen years old. They enjoy team sports, visiting museums and exploring interesting parts of a city. A guided walk around central London or an afternoon at a local sports centre would be especially popular. Some students also enjoy music and photography.\n\nCould you please tell us whether breakfast is included at the hostel and how far it is from the academy? Thank you again for helping us plan the visit.\n\nYours sincerely,",
      translation:
        "Kính gửi ông Smith,\n\nCảm ơn thư của ông. Chúng tôi rất vui được đến thăm học viện của ông vào tháng Sáu và mong chờ cơ hội cải thiện tiếng Anh.\n\nNhóm chúng tôi muốn ở cùng nhau tại một nhà trọ thanh niên. Nhóm có mười hai học sinh và hai giáo viên, vì vậy ở cùng sẽ giúp chúng tôi sắp xếp lịch trình và di chuyển thuận tiện hơn. Việc này cũng tạo thêm cơ hội để học sinh luyện tiếng Anh với nhau sau giờ học.\n\nHầu hết thành viên trong nhóm từ mười sáu đến mười tám tuổi. Các bạn thích thể thao đồng đội, tham quan bảo tàng và khám phá những khu vực thú vị trong thành phố. Một chuyến đi bộ có hướng dẫn quanh trung tâm London hoặc một buổi chiều tại trung tâm thể thao địa phương sẽ rất được yêu thích. Một số bạn cũng thích âm nhạc và nhiếp ảnh.\n\nÔng có thể cho chúng tôi biết bữa sáng có được bao gồm tại nhà trọ không và nơi đó cách học viện bao xa không? Một lần nữa, cảm ơn ông đã giúp chúng tôi lên kế hoạch cho chuyến đi.\n\nTrân trọng,",
    },
    {
      id: "informal-friends",
      part: "Task 1",
      group: "Thư / Email thân mật",
      title: "Friendship and a Best Friend",
      type: "Email thân mật",
      letterType: "Informal email",
      minWords: 120,
      minutes: 20,
      prompt:
        "This is part of an email from an English friend, Alice.\n\n“I’m lucky because I’ve got really good friends – especially those I’ve known since I was a kid. I don’t know what I’d do without them! So tell me, how important are friends to you? Who’s your best friend and what do you like about him or her?\n\nLooking forward to hearing from you soon.”\n\nWrite an email responding to Alice. Write at least 120 words. Do not include your name.",
      requirements: [
        "Trả lời bạn bè quan trọng như thế nào với bạn.",
        "Giới thiệu người bạn thân nhất.",
        "Nêu cụ thể những điều bạn thích hoặc ngưỡng mộ ở người bạn đó.",
        "Dùng giọng thân mật, hồi đáp Alice và kết email tự nhiên; không ghi tên.",
      ],
      structure: [
        "Hi Alice,",
        "Đáp lại ý của Alice và chia sẻ quan điểm về tình bạn.",
        "Giới thiệu bạn thân và cách hai người quen nhau.",
        "Đưa ví dụ cụ thể về phẩm chất bạn yêu quý.",
        "Hỏi thăm / kết email thân mật",
      ],
      vocab: [
        "a close friend",
        "have known each other for years",
        "be there for someone",
        "get along well",
        "share the same sense of humour",
        "I can always count on",
        "make me feel supported",
        "keep in touch",
      ],
      outline: [
        "Greeting: Hi Alice,",
        "Paragraph 1: Say how important friendship is to you.",
        "Paragraph 2: Introduce your best friend and how you met.",
        "Paragraph 3: Describe the qualities you like and give an example.",
        "Closing: Ask Alice a question and sign off warmly.",
      ],
      sample:
        "Hi Alice,\n\nIt was lovely to hear from you. I agree that good friends make life much happier, and they are especially important when we are having a difficult time. I can talk honestly with my friends and know that they will listen without judging me.\n\nMy best friend is Minh. We met in our first year at secondary school and have stayed close ever since. What I like most about him is that he is reliable and has a great sense of humour. Whenever I feel worried about an exam, he encourages me and helps me make a sensible study plan. He is also a good listener, so I never feel that my problems are unimportant.\n\nWe do not need to agree about everything to be close friends. We enjoy playing badminton and trying new cafés, but we also respect each other's different interests. I feel very lucky to have him in my life.\n\nWhat do you and your childhood friends enjoy doing together? Write back soon!\n\nTake care,",
      translation:
        "Chào Alice,\n\nMình rất vui khi nhận được thư của bạn. Mình đồng ý rằng những người bạn tốt khiến cuộc sống hạnh phúc hơn, và họ đặc biệt quan trọng khi chúng ta gặp khó khăn. Mình có thể tâm sự thật lòng với bạn bè và biết rằng họ sẽ lắng nghe mà không phán xét.\n\nBạn thân nhất của mình là Minh. Chúng mình gặp nhau vào năm đầu cấp hai và vẫn thân thiết kể từ đó. Điều mình thích nhất ở bạn ấy là sự đáng tin cậy và khiếu hài hước tuyệt vời. Mỗi khi lo lắng về kỳ thi, bạn ấy động viên và giúp mình lập kế hoạch học tập hợp lý. Bạn ấy cũng biết lắng nghe nên mình không bao giờ cảm thấy vấn đề của mình là không quan trọng.\n\nChúng mình không cần đồng ý với nhau về mọi thứ để trở thành bạn thân. Chúng mình thích chơi cầu lông và thử quán cà phê mới, đồng thời tôn trọng sở thích riêng của nhau. Mình thấy rất may mắn khi có bạn ấy trong cuộc sống.\n\nBạn và những người bạn từ thời thơ ấu thường thích làm gì cùng nhau? Hãy sớm viết thư lại nhé!\n\nThân mến,",
    },
    {
      id: "informal-party",
      part: "Task 1",
      group: "Thư / Email thân mật",
      title: "A Surprise Birthday Party",
      type: "Email thân mật",
      letterType: "Informal email",
      minWords: 120,
      minutes: 20,
      prompt:
        "Your friend Kate has sent you an email asking you to help organise a surprise birthday party for her brother Simon.\n\n“We must make sure that Simon doesn’t know we are planning this surprise. I’m not sure how many people to invite, but our house is definitely too small. Do you think we should book the Rex Hotel for the evening and have the party there? You know that Simon is very keen on music, so we could hire a live band. I’ve also been wondering what we could buy as a present. What do you think?\n\nCould you come the day before the party to help with preparations? There’s a lot to plan, so I’d really like your help. Can you suggest something else that will really make the party special?\n\nAll for now, best wishes,\nSusan”\n\nWrite an email responding to Kate. Write at least 120 words. Do not include your name.",
      requirements: [
        "Đề xuất cách giữ bí mật và ước lượng khách mời/địa điểm phù hợp.",
        "Cho ý kiến về Rex Hotel và ý tưởng thuê ban nhạc.",
        "Gợi ý món quà phù hợp với Simon.",
        "Trả lời việc giúp chuẩn bị ngày hôm trước và thêm một ý tưởng đặc biệt cho bữa tiệc.",
      ],
      structure: [
        "Hi Kate,",
        "Đồng ý giúp và nhắc giữ bí mật.",
        "Đề xuất địa điểm / số khách, phản hồi ý tưởng ban nhạc.",
        "Gợi ý quà và một hoạt động bất ngờ khác.",
        "Xác nhận sẽ đến chuẩn bị; kết email thân mật",
      ],
      vocab: [
        "keep it a secret",
        "invite a small group",
        "book a venue",
        "hire a live band",
        "a thoughtful present",
        "help with the preparations",
        "make the evening memorable",
        "count me in",
      ],
      outline: [
        "Greeting: Hi Kate,",
        "Paragraph 1: Respond positively and agree on keeping the party secret.",
        "Paragraph 2: Discuss the venue, guest list and live music.",
        "Paragraph 3: Suggest a present and another special activity.",
        "Paragraph 4: Confirm you can help the day before and close warmly.",
      ],
      sample:
        "Hi Kate,\n\nThanks for asking me to help. I would love to organise the party with you, and I promise not to mention it to Simon. Since our house is too small, booking a room at the Rex Hotel sounds sensible. We could invite around twenty of his closest friends so that the room does not feel crowded.\n\nA live band would be exciting because Simon loves music. We should check the hotel’s schedule and budget first, though. For a present, perhaps we could buy him a good pair of headphones or a record by his favourite band. We could also ask each guest to write a short birthday message and put them together in a small book.\n\nI can come the day before to decorate the room and prepare the messages. Another idea is to make a playlist of songs that remind Simon of his friends. That would make the evening personal and memorable.\n\nCount me in! Let me know what time you would like me to arrive.\n\nBest wishes,",
      translation:
        "Chào Kate,\n\nCảm ơn bạn đã nhờ mình giúp. Mình rất sẵn lòng cùng bạn tổ chức bữa tiệc và hứa sẽ không nhắc gì với Simon. Vì nhà mình quá nhỏ, đặt một phòng tại khách sạn Rex có vẻ hợp lý. Chúng ta có thể mời khoảng hai mươi người bạn thân nhất của anh ấy để căn phòng không quá đông.\n\nMột ban nhạc sống sẽ rất thú vị vì Simon yêu âm nhạc. Tuy nhiên, trước tiên chúng ta nên kiểm tra lịch và ngân sách của khách sạn. Về quà, có lẽ chúng ta có thể mua cho anh ấy một chiếc tai nghe tốt hoặc một đĩa nhạc của ban nhạc yêu thích. Chúng ta cũng có thể nhờ mỗi khách viết lời chúc sinh nhật ngắn rồi tập hợp lại thành một cuốn sổ nhỏ.\n\nMình có thể đến từ hôm trước để trang trí phòng và chuẩn bị những lời nhắn. Một ý tưởng khác là tạo danh sách nhạc gồm những bài hát gợi nhớ về bạn bè của Simon. Điều đó sẽ khiến buổi tối trở nên riêng tư và đáng nhớ.\n\nMình tham gia nhé! Hãy cho mình biết bạn muốn mình đến lúc nào.\n\nThân mến,",
    },
    {
      id: "essay-newspapers",
      part: "Task 2",
      group: "Essay · đề luyện tập",
      title: "The Future of Printed Newspapers",
      type: "Agree / disagree essay",
      letterType: "Essay",
      minWords: 250,
      minutes: 40,
      prompt:
        "Some people say we do not need printed paper newspapers anymore. To what extent do you agree or disagree with this opinion? Write an essay of at least 250 words.",
      requirements: [
        "Nêu rõ mức độ đồng ý hoặc không đồng ý với việc bỏ báo in.",
        "Giải thích các lợi ích của tin tức số và ảnh hưởng đến báo in.",
        "Phân tích nhóm độc giả hoặc giá trị mà báo in vẫn phục vụ.",
        "Đưa ví dụ phù hợp và kết luận nhất quán với lập trường.",
      ],
      structure: [
        "Introduction: Paraphrase the claim and state your position.",
        "Body paragraph 1: Explain the convenience and reach of digital news.",
        "Body paragraph 2: Explain why printed newspapers remain useful to some readers.",
        "Conclusion: Restate a balanced position and summarize the key reason.",
      ],
      vocab: [
        "printed edition",
        "digital news platform",
        "real-time updates",
        "reliable internet access",
        "media literacy",
        "in-depth reporting",
        "older readers",
        "a complementary format",
      ],
      outline: [
        "Introduction: Disagree that print is entirely unnecessary, while recognizing its declining role.",
        "Digital advantage: Online news is immediate, searchable and inexpensive to distribute.",
        "Print value: Some readers prefer a focused, accessible format and may lack reliable digital access.",
        "Example: Compare a commuter checking updates with a reader who wants a paper-free, distraction-free article.",
        "Conclusion: Print should become less common, but remain available alongside digital news.",
      ],
      sample: `The growth of online news has led some people to argue that printed newspapers are no longer necessary. I partly disagree with this view. Digital platforms have become the main source of news for many readers, but print still serves a purpose for particular audiences and situations.

Online news is fast and convenient. Readers can receive updates as events develop, search for older stories and access reports from different countries on a phone. Digital publishers can also correct mistakes quickly and include video or interactive graphics. These advantages explain why many people, especially younger readers, no longer buy a paper every morning. Online distribution can reduce printing and delivery costs as well.

However, it would be too simple to assume that everyone can or wants to get news online. Some older people are more comfortable reading a familiar printed edition, while people in areas with unreliable internet may not have consistent access to digital sources. A physical newspaper can also offer a focused reading experience without notifications or the temptation to switch between applications. In addition, buying a paper can support local journalism, which may otherwise struggle to fund detailed reporting.

For example, a commuter may use a phone to check breaking news during the day, while a retired reader may prefer to sit down with a printed paper and read longer articles at home. Both formats can meet different needs.

In conclusion, printed newspapers are no longer essential for most people, but they have not become completely unnecessary. Publishers should prioritize digital services while keeping print available where there is reader demand. A gradual transition is more inclusive than removing the printed option altogether.`,
      translation: `Sự phát triển của tin tức trực tuyến khiến một số người cho rằng báo in không còn cần thiết. Tôi không hoàn toàn đồng ý. Nền tảng số đã trở thành nguồn tin chính của nhiều độc giả, nhưng báo in vẫn có ích với một số nhóm người và trong những hoàn cảnh nhất định.

Tin tức trực tuyến nhanh và thuận tiện. Độc giả có thể cập nhật diễn biến sự kiện, tìm lại bài cũ và đọc tin từ nhiều quốc gia trên điện thoại. Nhà xuất bản số cũng có thể sửa lỗi nhanh chóng và bổ sung video hoặc đồ họa tương tác. Những ưu điểm này giải thích vì sao nhiều người, đặc biệt là độc giả trẻ, không còn mua báo mỗi sáng. Phân phối trực tuyến cũng có thể giảm chi phí in ấn và giao báo.

Tuy nhiên, cho rằng ai cũng có thể hoặc muốn đọc tin trên mạng là quá đơn giản. Một số người lớn tuổi quen đọc báo giấy, trong khi người dân ở nơi có mạng không ổn định có thể không tiếp cận nguồn tin số thường xuyên. Báo giấy cũng tạo trải nghiệm đọc tập trung, không có thông báo hay sự cám dỗ chuyển qua lại giữa các ứng dụng. Ngoài ra, mua báo có thể hỗ trợ báo chí địa phương, vốn có thể gặp khó khăn trong việc tài trợ cho các bài điều tra chuyên sâu.

Ví dụ, một người đi làm có thể xem tin nóng trên điện thoại trong ngày, còn một người đã nghỉ hưu có thể thích ngồi đọc báo in và các bài dài ở nhà. Hai định dạng có thể đáp ứng những nhu cầu khác nhau.

Tóm lại, báo in không còn thiết yếu với đa số mọi người nhưng chưa hoàn toàn vô ích. Nhà xuất bản nên ưu tiên dịch vụ số, đồng thời vẫn duy trì báo giấy ở nơi độc giả còn nhu cầu. Chuyển đổi từng bước sẽ bao quát hơn việc loại bỏ hoàn toàn lựa chọn báo in.`,
    },
    {
      id: "essay-holidays",
      part: "Task 2",
      group: "Essay · đề luyện tập",
      title: "Holidays Near Home or Abroad",
      type: "Opinion essay",
      letterType: "Essay",
      minWords: 250,
      minutes: 40,
      prompt:
        "Is it better to have holidays near home rather than travel abroad? Write an essay to an educated reader to give your opinion. Include reasons and any relevant examples to support your answer. Write at least 250 words.",
      requirements: [
        "Đưa ra quan điểm rõ ràng về nghỉ gần nhà hay đi nước ngoài.",
        "Giải thích lợi ích của lựa chọn bạn ủng hộ.",
        "Cân nhắc lợi ích hoặc hạn chế của phương án còn lại.",
        "Dùng lý do, ví dụ phù hợp và kết luận nhất quán.",
      ],
      structure: [
        "Introduction: Introduce the two holiday choices and state your opinion.",
        "Body paragraph 1: Explain the advantages of holidays close to home.",
        "Body paragraph 2: Acknowledge what international travel offers and compare the costs.",
        "Conclusion: Summarize why your preferred option is better overall.",
      ],
      vocab: [
        "domestic destination",
        "travel costs",
        "cultural experience",
        "broaden one's perspective",
        "local businesses",
        "a limited travel budget",
        "avoid a long journey",
        "a change of scenery",
      ],
      outline: [
        "Introduction: Both options can be enjoyable; argue that holidays near home are better for most people.",
        "Reason 1: Lower transport costs and shorter journeys leave more time and money for activities.",
        "Reason 2: Local trips support regional businesses and can reveal unfamiliar places nearby.",
        "Counterpoint: Travel abroad offers cultural learning, but requires more planning and expense.",
        "Conclusion: Prefer nearby holidays for regular breaks, while treating overseas travel as an occasional choice.",
      ],
      sample: `People have different ideas about whether a holiday should be spent close to home or in another country. In my opinion, holidays near home are a better choice for most people, although travelling abroad can be valuable on special occasions.

The main advantage of a nearby holiday is that it is usually less expensive and less stressful. Travellers can avoid costly flights, visa arrangements and long journeys. The money saved can be spent on accommodation, local food or activities. Shorter travel also means more time to relax, which is often the real purpose of taking a break. For instance, a family can drive to a coastal town for a few days and enjoy the beach without losing an entire day to airports.

Staying within one's own country does not have to mean seeing the same places repeatedly. Many regions have distinctive landscapes, traditions and food that residents have never explored. Visiting them can support small hotels, restaurants and tour operators, so the benefits remain in the local economy. It is also easier to make a spontaneous trip when people have limited time off work.

International travel, on the other hand, exposes visitors to different cultures and can broaden their perspective. This is a genuine benefit, particularly for people who have the time and resources to travel thoughtfully. Nevertheless, overseas holidays often require more preparation and a larger budget. They are therefore less practical as a regular way to rest.

Overall, I believe holidays near home are better for most people because they are affordable, convenient and can still provide new experiences. Travelling abroad remains worthwhile, but it need not be the definition of a successful holiday.`,
      translation: `Mọi người có những quan điểm khác nhau về việc nên nghỉ gần nhà hay đến một quốc gia khác. Theo tôi, kỳ nghỉ gần nhà là lựa chọn tốt hơn với đa số mọi người, dù đi nước ngoài cũng có giá trị trong những dịp đặc biệt.

Ưu điểm chính của kỳ nghỉ gần nhà là thường ít tốn kém và đỡ căng thẳng hơn. Du khách có thể tránh vé máy bay đắt đỏ, thủ tục thị thực và những hành trình dài. Số tiền tiết kiệm được có thể dùng cho nơi ở, món ăn địa phương hoặc hoạt động vui chơi. Đi lại ngắn hơn cũng giúp có nhiều thời gian thư giãn, vốn thường là mục đích thực sự của một kỳ nghỉ. Chẳng hạn, một gia đình có thể lái xe đến thị trấn ven biển vài ngày và tận hưởng bãi biển mà không mất cả ngày ở sân bay.

Ở trong nước không có nghĩa là phải liên tục ghé lại những nơi cũ. Nhiều vùng có cảnh quan, truyền thống và ẩm thực riêng mà người dân chưa từng khám phá. Tham quan những nơi này có thể hỗ trợ khách sạn nhỏ, nhà hàng và đơn vị du lịch, nhờ đó lợi ích ở lại trong nền kinh tế địa phương. Một chuyến đi tự phát cũng dễ sắp xếp hơn khi mọi người chỉ có ít ngày nghỉ.

Mặt khác, du lịch quốc tế giúp du khách tiếp xúc với các nền văn hóa khác và mở rộng góc nhìn. Đây là lợi ích thực sự, đặc biệt với người có đủ thời gian và điều kiện để đi du lịch có ý thức. Tuy vậy, kỳ nghỉ ở nước ngoài thường đòi hỏi chuẩn bị nhiều hơn và ngân sách lớn hơn. Vì thế, hình thức này không thực tế để nghỉ ngơi thường xuyên.

Nhìn chung, tôi tin kỳ nghỉ gần nhà tốt hơn với đa số mọi người vì vừa hợp túi tiền, thuận tiện, vừa có thể đem lại trải nghiệm mới. Du lịch nước ngoài vẫn đáng giá, nhưng không nhất thiết là tiêu chuẩn duy nhất cho một kỳ nghỉ thành công.`,
    },
    {
      id: "essay-celebrations",
      part: "Task 2",
      group: "Essay · đề luyện tập",
      title: "The Changing Meaning of Celebrations",
      type: "Problems and solutions essay",
      letterType: "Essay",
      minWords: 250,
      minutes: 40,
      prompt:
        "Some celebrations have lost their original meaning and these occasions have become too much about spending money. What problems can this cause? What could be done to change the situation? Write an essay of at least 250 words.",
      requirements: [
        "Giải thích vì sao một số lễ kỷ niệm ngày càng tập trung vào chi tiêu.",
        "Phân tích ít nhất hai vấn đề mà xu hướng này gây ra.",
        "Đề xuất giải pháp khả thi từ cá nhân, gia đình, cộng đồng hoặc doanh nghiệp.",
        "Dùng ví dụ phù hợp và kết luận tóm tắt vấn đề cùng giải pháp.",
      ],
      structure: [
        "Introduction: Describe the shift from meaning to spending and preview the response.",
        "Body paragraph 1: Explain financial pressure and the loss of personal or cultural meaning.",
        "Body paragraph 2: Suggest practical actions by families, schools and businesses.",
        "Conclusion: Summarize how simpler, shared celebrations can restore meaning.",
      ],
      vocab: [
        "commercial pressure",
        "social expectations",
        "financial strain",
        "meaningful tradition",
        "overspending",
        "shared experience",
        "set a spending limit",
        "community-led celebration",
      ],
      outline: [
        "Introduction: Explain that advertising and social comparison can make spending seem central.",
        "Problem 1: Families may borrow money or feel anxious about matching expensive gifts and events.",
        "Problem 2: The original cultural, religious or family purpose can be overshadowed.",
        "Solutions: Agree on budgets, prioritize shared activities, and teach the history of traditions.",
        "Conclusion: Restore meaning through participation and relationships rather than the price of purchases.",
      ],
      sample: `Many celebrations were created to bring people together or mark an important cultural event. Today, however, advertising and social pressure can make them seem like occasions for spending as much as possible. This change can cause financial and social problems, but families and communities can take practical steps to restore their meaning.

The first problem is financial strain. People may feel obliged to buy expensive presents, clothes or decorations because they fear appearing ungenerous. Families with limited incomes can consequently borrow money or cut spending on necessities. Even households that can afford these purchases may experience unnecessary stress when they compare their celebrations with carefully presented images on social media.

A second problem is that the purpose of the occasion can be forgotten. If attention is focused on gifts and elaborate parties, people may spend less time learning about a tradition, remembering its history or enjoying one another's company. Children may also come to expect costly presents as the main sign of affection. Over time, a shared cultural event can become a commercial routine rather than a meaningful experience.

Several changes could help. Families can agree on a reasonable spending limit and organize activities that do not depend on expensive products, such as cooking together, telling family stories or volunteering. Schools and community groups can explain the history of local celebrations and arrange inclusive events. Businesses and advertisers should also avoid suggesting that love or respect can be measured by the price of a gift.

In conclusion, excessive spending can create debt and weaken the personal or cultural value of celebrations. By setting realistic budgets and giving greater importance to shared traditions, families and communities can make these occasions meaningful again without excluding people who have less money.`,
      translation: `Nhiều dịp lễ được tạo ra để gắn kết mọi người hoặc đánh dấu một sự kiện văn hóa quan trọng. Tuy nhiên, ngày nay quảng cáo và áp lực xã hội có thể khiến mọi người nghĩ rằng đây là dịp để chi tiêu càng nhiều càng tốt. Sự thay đổi này có thể gây ra vấn đề tài chính và xã hội, nhưng gia đình và cộng đồng có thể thực hiện những bước thiết thực để khôi phục ý nghĩa của ngày lễ.

Vấn đề đầu tiên là áp lực tài chính. Mọi người có thể cảm thấy buộc phải mua quà, quần áo hoặc đồ trang trí đắt tiền vì sợ bị xem là không hào phóng. Do đó, các gia đình có thu nhập hạn chế có thể vay tiền hoặc cắt giảm chi phí thiết yếu. Ngay cả những gia đình đủ khả năng chi trả cũng có thể căng thẳng không cần thiết khi so sánh ngày lễ của mình với những hình ảnh được trau chuốt trên mạng xã hội.

Vấn đề thứ hai là mục đích của dịp lễ có thể bị lãng quên. Nếu sự chú ý chỉ tập trung vào quà tặng và tiệc tùng cầu kỳ, mọi người sẽ dành ít thời gian hơn để tìm hiểu truyền thống, nhớ về lịch sử hoặc tận hưởng thời gian bên nhau. Trẻ em cũng có thể cho rằng quà đắt tiền là dấu hiệu chính của tình cảm. Theo thời gian, một sự kiện văn hóa chung có thể trở thành thói quen thương mại thay vì trải nghiệm ý nghĩa.

Một số thay đổi có thể hữu ích. Gia đình có thể thống nhất một giới hạn chi tiêu hợp lý và tổ chức hoạt động không phụ thuộc vào hàng hóa đắt tiền, chẳng hạn cùng nấu ăn, kể chuyện gia đình hoặc làm tình nguyện. Trường học và các nhóm cộng đồng có thể giải thích lịch sử lễ hội địa phương và tổ chức sự kiện hòa nhập. Doanh nghiệp và nhà quảng cáo cũng nên tránh ngụ ý rằng tình yêu hay sự tôn trọng được đo bằng giá của món quà.

Tóm lại, chi tiêu quá mức có thể gây nợ nần và làm suy yếu giá trị cá nhân hoặc văn hóa của ngày lễ. Bằng cách đặt ngân sách thực tế và coi trọng truyền thống chung hơn, gia đình và cộng đồng có thể khôi phục ý nghĩa cho những dịp này mà không loại trừ người có điều kiện kinh tế hạn chế.`,
    },
    {
      id: "essay-relocation-work",
      part: "Task 2",
      group: "Essay · đề luyện tập",
      title: "Moving Away for Work",
      type: "Advantages / disadvantages essay",
      letterType: "Essay",
      minWords: 250,
      minutes: 40,
      prompt:
        "Nowadays, more people move away from their friends and families for work. Do the advantages outweigh the disadvantages? Write an essay to an educated reader to give your opinion. Include reasons and any relevant examples to support your answer. Write at least 250 words.",
      requirements: [
        "Nêu rõ những lợi ích chính của việc chuyển đi vì công việc.",
        "Phân tích các bất lợi đối với quan hệ gia đình, bạn bè hoặc sức khỏe tinh thần.",
        "So sánh hai phía và trả lời trực tiếp liệu lợi ích có lớn hơn bất lợi không.",
        "Đưa lý do, ví dụ liên quan và kết luận nhất quán với quan điểm.",
      ],
      structure: [
        "Introduction: Paraphrase the trend and state which side outweighs the other.",
        "Body paragraph 1: Explain career, income and personal-development benefits.",
        "Body paragraph 2: Explain the cost of distance and ways to reduce it.",
        "Conclusion: Weigh both sides and restate your judgment.",
      ],
      vocab: [
        "career opportunity",
        "professional development",
        "higher earning potential",
        "support network",
        "long-distance relationship",
        "emotional well-being",
        "regular communication",
        "a worthwhile trade-off",
      ],
      outline: [
        "Introduction: Work-related relocation is common; argue that benefits outweigh costs when planned carefully.",
        "Advantage: Access to specialized jobs, training and higher income can improve long-term prospects.",
        "Disadvantage: Distance reduces daily support and may create loneliness or extra travel costs.",
        "Evaluation: Video calls, visits and a clear time plan can preserve close relationships.",
        "Conclusion: The move is worthwhile when career gains are substantial and relationships receive active care.",
      ],
      sample: `It is increasingly common for people to move to another city or country to find work. Although this decision can place pressure on relationships, I believe its advantages outweigh the disadvantages when the move offers a realistic improvement in a person's career and is managed carefully.

Relocating can give workers access to jobs that are unavailable in their home area. Large cities often offer specialized positions, professional training and opportunities to work with experienced colleagues. A higher salary may also allow someone to support relatives, save for the future or gain financial independence. For example, a new graduate who moves to a technology centre may develop skills more quickly than if they remained in a town with few employers in that field.

The main disadvantage is separation from friends and family. People can miss ordinary events, such as shared meals or helping an older relative, and travel home may be expensive. A newcomer may also feel lonely while building a social network in an unfamiliar place. These difficulties are especially serious when a person moves without a clear plan or assumes that occasional messages will replace meaningful contact.

However, distance does not have to end close relationships. Workers can schedule regular calls, plan visits in advance and involve family members in important decisions. Employers can help by offering flexible leave or opportunities to work remotely for short periods. It is also important for newcomers to build friendships locally rather than relying entirely on people at home.

In conclusion, moving for work can be emotionally difficult, but access to better employment, skills and income can provide lasting benefits. I therefore consider the advantages greater, provided that workers make a deliberate effort to maintain their relationships and have a clear purpose for relocating.`,
      translation: `Ngày càng phổ biến việc mọi người chuyển đến thành phố hoặc quốc gia khác để tìm việc. Mặc dù quyết định này có thể gây áp lực lên các mối quan hệ, tôi tin lợi ích lớn hơn bất lợi khi việc chuyển đi tạo ra cải thiện thực tế cho sự nghiệp và được chuẩn bị cẩn thận.

Chuyển nơi ở có thể giúp người lao động tiếp cận công việc không có ở quê nhà. Các thành phố lớn thường có vị trí chuyên môn, đào tạo nghề nghiệp và cơ hội làm việc với đồng nghiệp giàu kinh nghiệm. Mức lương cao hơn cũng giúp một người hỗ trợ người thân, tiết kiệm cho tương lai hoặc độc lập về tài chính. Chẳng hạn, một sinh viên mới tốt nghiệp chuyển đến trung tâm công nghệ có thể phát triển kỹ năng nhanh hơn so với khi ở lại một thị trấn có ít nhà tuyển dụng trong lĩnh vực đó.

Bất lợi chính là phải xa bạn bè và gia đình. Mọi người có thể bỏ lỡ những việc thường ngày như ăn cùng nhau hoặc giúp đỡ người thân lớn tuổi, còn việc về thăm nhà có thể tốn kém. Người mới chuyển đến cũng có thể cô đơn khi xây dựng mạng lưới xã hội ở nơi xa lạ. Những khó khăn này đặc biệt nghiêm trọng khi một người chuyển đi mà không có kế hoạch rõ ràng hoặc cho rằng vài tin nhắn thỉnh thoảng có thể thay thế sự quan tâm có ý nghĩa.

Tuy vậy, khoảng cách không nhất thiết chấm dứt các mối quan hệ thân thiết. Người lao động có thể lên lịch gọi điện thường xuyên, sắp xếp chuyến thăm trước và để người thân tham gia các quyết định quan trọng. Nhà tuyển dụng có thể hỗ trợ bằng cách cho nghỉ linh hoạt hoặc làm việc từ xa trong thời gian ngắn. Người mới chuyển đi cũng nên xây dựng tình bạn tại nơi ở mới thay vì chỉ dựa vào người quen ở quê nhà.

Tóm lại, chuyển nơi ở vì công việc có thể khó khăn về mặt cảm xúc, nhưng cơ hội việc làm, kỹ năng và thu nhập tốt hơn có thể đem lại lợi ích lâu dài. Vì vậy, tôi cho rằng lợi ích lớn hơn, với điều kiện người lao động chủ động duy trì các mối quan hệ và có mục đích rõ ràng khi chuyển đi.`,
    },
  ];

  const $ = (id) => document.getElementById(id);
  const byId = new Map(TASKS.map((task) => [task.id, task]));
  const wordPattern = /[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu;
  let drafts = {};
  let settings = {};
  let activeTaskId = null;
  let timerStartedAt = null;
  let saveTimeout = null;
  let timerInterval = null;

  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (saved && typeof saved === "object" && !Array.isArray(saved)) {
      for (const task of TASKS) {
        const draft = saved[task.id];
        if (draft && typeof draft === "object") {
          drafts[task.id] = {
            text: typeof draft.text === "string" ? draft.text : "",
            checks: Array.isArray(draft.checks)
              ? draft.checks.filter(
                  (index) =>
                    Number.isInteger(index) &&
                    index >= 0 &&
                    index < task.requirements.length,
                )
              : [],
            elapsedSeconds: Number.isFinite(draft.elapsedSeconds)
              ? Math.max(0, Math.floor(draft.elapsedSeconds))
              : 0,
            finished: draft.finished === true,
            targetReached: draft.targetReached === true,
            result:
              draft.result && typeof draft.result === "object"
                ? draft.result
                : null,
          };
        }
      }
    }
    settings = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") || {};
    if (typeof settings.endpoint !== "string") settings = {};
  } catch {
    drafts = {};
    settings = {};
  }

  function draftFor(taskId = activeTaskId) {
    if (!taskId) return null;
    if (!drafts[taskId])
      drafts[taskId] = {
        text: "",
        checks: [],
        elapsedSeconds: 0,
        finished: false,
        targetReached: false,
        result: null,
      };
    return drafts[taskId];
  }

  function escapeHtml(value) {
    return String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[character],
    );
  }

  function wordCount(text) {
    return (text.match(wordPattern) || []).length;
  }

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function currentElapsed() {
    const draft = draftFor();
    if (!draft) return 0;
    return (
      draft.elapsedSeconds +
      (timerStartedAt === null
        ? 0
        : Math.floor((Date.now() - timerStartedAt) / 1000))
    );
  }

  function captureEditor() {
    const draft = draftFor();
    if (!draft || !$("writing-answer")) return;
    draft.text = $("writing-answer").value;
  }

  function persist(showSaved = false) {
    captureEditor();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
      $("writing-save-state").textContent =
        "Bản nháp được lưu trên thiết bị này";
      $("writing-draft-status").textContent = "Đã lưu";
      $("writing-draft-status").classList.remove("is-saving");
      if (showSaved)
        $("writing-timer-message").textContent = "Đã lưu bản nháp.";
    } catch {
      $("writing-save-state").textContent =
        "Không lưu được · hãy xuất bài trước khi đóng trang";
      $("writing-draft-status").textContent = "Chưa lưu";
      $("writing-draft-status").classList.add("is-saving");
    }
    renderTaskCards();
  }

  function scheduleSave() {
    $("writing-draft-status").textContent = "Đang lưu…";
    $("writing-draft-status").classList.add("is-saving");
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => persist(), 350);
  }

  function openDialog(title, contentNode, actions) {
    const dialog = document.createElement("dialog");
    dialog.className = "writing-dialog";
    const header = document.createElement("div");
    header.className = "writing-dialog-head";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "writing-icon-button";
    close.setAttribute("aria-label", "Đóng");
    close.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
    close.addEventListener("click", () => dialog.close());
    header.append(heading, close);
    const body = document.createElement("div");
    body.className = "writing-dialog-body";
    body.append(contentNode);
    const footer = document.createElement("div");
    footer.className = "writing-dialog-actions";
    for (const action of actions) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `writing-button${action.primary ? " writing-button-primary" : ""}${action.danger ? " writing-button-danger" : ""}`;
      button.textContent = action.label;
      button.addEventListener("click", () => action.onClick(dialog));
      footer.append(button);
    }
    dialog.append(header, body, footer);
    dialog.addEventListener("close", () => dialog.remove());
    document.body.append(dialog);
    dialog.showModal();
    return dialog;
  }

  function openSimpleDialog(title, text, actions) {
    const content = document.createElement("p");
    content.textContent = text;
    return openDialog(title, content, actions);
  }

  function renderTaskCards() {
    const container = $("writing-task-list");
    if (!container) return;
    container.innerHTML = TASKS.map((task) => {
      const draft = draftFor(task.id);
      const hasDraft = !!draft.text.trim();
      return `<button type="button" class="writing-task-card" data-writing-task="${task.id}"><span class="writing-task-card-top"><span class="writing-task-type">${escapeHtml(task.group)}</span><span class="writing-task-status">${hasDraft ? `${wordCount(draft.text)} từ · tiếp tục` : `${task.minutes} phút`}</span></span><h4>${escapeHtml(task.title)}</h4><p>${escapeHtml(task.prompt.split("\n")[0])}</p></button>`;
    }).join("");
  }

  function setTask(taskId) {
    const task = byId.get(taskId);
    if (!task) return;
    if (timerStartedAt !== null) pauseTimer(false);
    if (activeTaskId) persist();
    activeTaskId = task.id;
    timerStartedAt = null;
    $("writing-library").classList.add("hidden");
    $("writing-workspace").classList.remove("hidden");
    $("writing-task-select").value = task.id;
    $("writing-part-label").textContent =
      `${task.part.toUpperCase()} · ${task.type.toUpperCase()}`;
    $("writing-task-title").textContent = task.title;
    $("writing-task-mark").textContent = `${task.minutes}′`;
    $("writing-task-meta").innerHTML = [
      ["Loại bài", task.letterType],
      ["Tối thiểu", `${task.minWords} từ`],
      ["Mục tiêu", `${task.minutes} phút`],
    ]
      .map(
        ([label, value]) =>
          `<div class="writing-meta-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`,
      )
      .join("");
    $("writing-word-target").textContent = `Tối thiểu ${task.minWords} từ`;
    $("writing-prompt").textContent = task.prompt;
    $("writing-requirements").innerHTML = task.requirements
      .map(
        (requirement, index) =>
          `<label class="writing-requirement"><input type="checkbox" data-writing-check="${index}"><span>${escapeHtml(requirement)}</span></label>`,
      )
      .join("");
    $("writing-structure").innerHTML = task.structure
      .map(
        (step, index) =>
          `<div class="writing-structure-step"><b>${index + 1}</b><span>${escapeHtml(step)}</span></div>`,
      )
      .join("");
    $("writing-answer").value = draftFor().text;
    $("writing-requirements")
      .querySelectorAll("input")
      .forEach((checkbox) => {
        checkbox.checked = draftFor().checks.includes(
          Number(checkbox.dataset.writingCheck),
        );
      });
    $("writing-result").classList.add("hidden");
    if (draftFor().result) renderResult(draftFor().result);
    $("writing-timer-message").textContent = draftFor().finished
      ? "Buổi viết đã kết thúc. Bản nháp vẫn có thể chỉnh sửa."
      : "";
    $("writing-answer").focus({ preventScroll: true });
    updateEditor();
    persist();
  }

  function updateEditor() {
    if (!activeTaskId) return;
    const task = byId.get(activeTaskId);
    const elapsed = currentElapsed();
    $("writing-word-count").textContent = wordCount($("writing-answer").value);
    $("writing-elapsed").textContent = formatTime(elapsed);
    $("writing-remaining").textContent = formatTime(
      Math.max(0, task.minutes * 60 - elapsed),
    );
    $("writing-timer-start").disabled = timerStartedAt !== null;
    $("writing-timer-pause").disabled = timerStartedAt === null;
    $("writing-timer-start").querySelector("span").textContent =
      draftFor().finished || draftFor().elapsedSeconds > 0
        ? "Tiếp tục"
        : "Bắt đầu";
  }

  function startTimer() {
    const draft = draftFor();
    if (!draft || timerStartedAt !== null) return;
    draft.finished = false;
    timerStartedAt = Date.now();
    $("writing-timer-message").textContent = "Đồng hồ đang chạy.";
    updateEditor();
  }

  function pauseTimer(saveNow = true) {
    if (timerStartedAt === null) return;
    const draft = draftFor();
    draft.elapsedSeconds = currentElapsed();
    timerStartedAt = null;
    updateEditor();
    if (saveNow) persist();
  }

  function resetTimer() {
    if (timerStartedAt !== null) pauseTimer(false);
    const draft = draftFor();
    draft.elapsedSeconds = 0;
    draft.finished = false;
    draft.targetReached = false;
    updateEditor();
    $("writing-timer-message").textContent = "Đồng hồ đã được đặt lại.";
    persist();
  }

  function finishAfterTarget() {
    const draft = draftFor();
    if (timerStartedAt !== null) pauseTimer(false);
    draft.finished = true;
    $("writing-timer-message").textContent =
      "Đã kết thúc buổi viết; bài chưa được nộp.";
    persist();
  }

  function tick() {
    if (!activeTaskId || timerStartedAt === null) return;
    const task = byId.get(activeTaskId);
    const draft = draftFor();
    const elapsed = currentElapsed();
    updateEditor();
    if (elapsed >= task.minutes * 60 && !draft.targetReached) {
      draft.targetReached = true;
      pauseTimer(false);
      persist();
      openSimpleDialog(
        "Đã hết thời gian mục tiêu",
        "Đồng hồ đã dừng. Bài viết chưa được nộp và không bị khóa. Bạn muốn tiếp tục viết hay kết thúc buổi viết?",
        [
          {
            label: "Tiếp tục viết",
            primary: true,
            onClick: (dialog) => {
              dialog.close();
              startTimer();
            },
          },
          {
            label: "Kết thúc buổi viết",
            onClick: (dialog) => {
              dialog.close();
              finishAfterTarget();
            },
          },
        ],
      );
      $("writing-timer-message").textContent =
        "Đã hết giờ mục tiêu · bài chưa được nộp.";
    } else if (elapsed > 0 && elapsed % 15 === 0) {
      persist();
    }
  }

  function renderResult(result) {
    const section = $("writing-result");
    section.classList.remove("hidden");
    section.replaceChildren();
    const heading = document.createElement("h4");
    heading.textContent = "Kết quả chấm tham khảo";
    const scoreLine = document.createElement("div");
    scoreLine.className = "writing-result-score";
    const score = document.createElement("strong");
    score.textContent = Number.isFinite(result.score)
      ? result.score.toFixed(1)
      : "—";
    const outOf = document.createElement("span");
    outOf.textContent = "/ 10 điểm ước lượng";
    scoreLine.append(score, outOf);
    section.append(heading, scoreLine);
    if (result.completion)
      addResultParagraph(
        section,
        "Mức độ hoàn thành yêu cầu đề",
        result.completion,
      );
    if (result.overview)
      addResultParagraph(section, "Nhận xét tổng quan", result.overview);
    if (result.criteria && Object.keys(result.criteria).length) {
      const grid = document.createElement("div");
      grid.className = "writing-result-grid";
      for (const criterion of RUBRIC) {
        const scored = result.criteria[criterion.key];
        if (!scored) continue;
        const item = document.createElement("div");
        item.className = "writing-score-item";
        const title = document.createElement("strong");
        title.textContent = `${criterion.name} · ${scored.score}/${criterion.max}`;
        const note = document.createElement("small");
        note.textContent = scored.comment || criterion.description;
        item.append(title, note);
        grid.append(item);
      }
      section.append(grid);
    }
    addResultList(section, "Điểm mạnh", result.strengths);
    addResultList(section, "Lỗi cần sửa trước tiên", result.priorities);
    addResultList(section, "Gợi ý cho lần viết tiếp theo", result.nextSteps);
    const disclaimer = document.createElement("p");
    disclaimer.className = "writing-result-note";
    disclaimer.textContent =
      "Điểm tham khảo do AI ước lượng theo rubric luyện tập của ứng dụng; không phải điểm thi VSTEP chính thức.";
    section.append(disclaimer);
    section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function addResultParagraph(container, title, text) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${title}: `;
    paragraph.append(strong, document.createTextNode(String(text)));
    container.append(paragraph);
  }

  function addResultList(container, title, values) {
    if (!Array.isArray(values) || values.length === 0) return;
    const heading = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = title;
    heading.append(strong);
    const list = document.createElement("ul");
    for (const value of values.slice(0, 6)) {
      const item = document.createElement("li");
      item.textContent = String(value);
      list.append(item);
    }
    container.append(heading, list);
  }

  function scoreFromResponse(payload) {
    const result =
      payload && typeof payload === "object"
        ? payload.result || payload.data || payload
        : null;
    if (!result || typeof result !== "object")
      throw new Error("Phản hồi AI không đúng định dạng JSON yêu cầu.");
    const criteria = {};
    for (const criterion of RUBRIC) {
      const raw = result.criteria?.[criterion.key];
      if (
        !raw ||
        raw.score === null ||
        raw.score === "" ||
        !Number.isFinite(Number(raw.score))
      )
        continue;
      const score = Number(raw.score);
      if (score < 0 || score > criterion.max)
        throw new Error(`Điểm ${criterion.name} nằm ngoài thang rubric.`);
      criteria[criterion.key] = {
        score,
        comment: typeof raw.comment === "string" ? raw.comment : "",
      };
    }
    const allScored = RUBRIC.every((criterion) => criteria[criterion.key]);
    if (!allScored)
      throw new Error(
        "AI cần trả về điểm cho đủ bốn tiêu chí của rubric luyện tập.",
      );
    const total = RUBRIC.reduce(
      (sum, criterion) => sum + criteria[criterion.key].score,
      0,
    );
    return {
      score: total,
      completion:
        typeof result.completion === "string" ? result.completion : "",
      overview: typeof result.overview === "string" ? result.overview : "",
      strengths: Array.isArray(result.strengths) ? result.strengths : [],
      priorities: Array.isArray(result.priorities) ? result.priorities : [],
      nextSteps: Array.isArray(result.nextSteps) ? result.nextSteps : [],
      criteria,
    };
  }

  async function gradeWriting() {
    const task = byId.get(activeTaskId);
    const answer = $("writing-answer").value.trim();
    if (!answer) {
      $("writing-timer-message").textContent =
        "Hãy viết câu trả lời trước khi chấm.";
      $("writing-answer").focus();
      return;
    }
    if (!settings.endpoint) {
      openAiSettings(
        "Hãy cấu hình endpoint của dịch vụ AI trước khi chấm. Ứng dụng không tự tạo điểm khi chưa kết nối AI.",
      );
      return;
    }
    const button = $("writing-grade");
    button.disabled = true;
    button.querySelector("span").textContent = "Đang gửi bài…";
    $("writing-timer-message").textContent =
      "Đang gửi bài viết tới endpoint AI đã cấu hình.";
    const rubric = RUBRIC.map(({ key, name, max, description }) => ({
      key,
      name,
      maxScore: max,
      description,
    }));
    const request = {
      task: task.prompt,
      requirements: task.requirements,
      learnerAnswer: answer,
      letterType: task.letterType,
      wordCount: wordCount(answer),
      rubric,
      scoringRule:
        "Practice rubric with fixed weighted points: Task Fulfillment 4, Organization 2, Vocabulary 2, Grammar 2. When all criterion scores are returned, total score is their sum (maximum 10), never an unweighted average. Return JSON with criteria keyed by taskFulfillment, organization, vocabulary, grammar; each has score and comment. Also return completion, overview, strengths[], priorities[], nextSteps[]. Do not claim an official VSTEP score.",
    };
    try {
      const response = await fetch(settings.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify(request),
      });
      if (!response.ok)
        throw new Error(`Endpoint trả về HTTP ${response.status}.`);
      const result = scoreFromResponse(await response.json());
      draftFor().result = result;
      persist();
      renderResult(result);
      $("writing-timer-message").textContent =
        "Đã nhận phản hồi chấm luyện tập.";
    } catch (error) {
      $("writing-timer-message").textContent =
        `Chưa chấm được: ${error.message}`;
    } finally {
      button.disabled = false;
      button.querySelector("span").textContent = "Chấm điểm bài viết";
    }
  }

  function openAiSettings(message = "") {
    const content = document.createElement("div");
    if (message) {
      const intro = document.createElement("p");
      intro.textContent = message;
      content.append(intro);
    }
    const field = document.createElement("div");
    field.className = "writing-dialog-field";
    const label = document.createElement("label");
    label.htmlFor = "writing-endpoint-input";
    label.textContent = "AI scoring endpoint";
    const input = document.createElement("input");
    input.id = "writing-endpoint-input";
    input.type = "url";
    input.placeholder = "https://your-server.example/api/vstep-writing-score";
    input.value = settings.endpoint || "";
    field.append(label, input);
    const note = document.createElement("p");
    note.className = "writing-dialog-note";
    note.textContent =
      "Endpoint nhận POST JSON gồm đề bài, yêu cầu, bài viết, loại thư và rubric; trả JSON theo schema hiển thị trong request. Cần cấu hình CORS nếu khác nguồn. Không nhập API key hoặc bí mật ở đây; hãy dùng backend proxy của bạn.";
    content.append(field, note);
    openDialog("Cấu hình chấm AI", content, [
      {
        label: "Xóa endpoint",
        danger: true,
        onClick: (dialog) => {
          settings = {};
          try {
            localStorage.removeItem(SETTINGS_KEY);
          } catch {}
          dialog.close();
        },
      },
      {
        label: "Lưu endpoint",
        primary: true,
        onClick: (dialog) => {
          const value = input.value.trim();
          if (value && !/^https?:\/\//i.test(value) && !value.startsWith("/")) {
            let error = content.querySelector(".writing-dialog-error");
            if (!error) {
              error = document.createElement("p");
              error.className = "writing-dialog-error";
              content.append(error);
            }
            error.textContent =
              "Nhập URL HTTP(S) hoặc đường dẫn endpoint cùng nguồn.";
            return;
          }
          settings = value ? { endpoint: value } : {};
          try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
          } catch {}
          dialog.close();
          $("writing-timer-message").textContent = value
            ? "Đã lưu endpoint chấm AI."
            : "Chưa cấu hình endpoint AI.";
        },
      },
    ]);
  }

  function openResource(kind) {
    const task = byId.get(activeTaskId);
    const content = document.createElement("div");
    let title = "";
    if (kind === "vocab") {
      title = "Từ vựng gợi ý";
      const list = document.createElement("ul");
      for (const phrase of task.vocab) {
        const item = document.createElement("li");
        item.textContent = phrase;
        list.append(item);
      }
      content.append(list);
    } else if (kind === "outline") {
      title = "Dàn ý gợi ý";
      const list = document.createElement("ol");
      for (const step of task.outline) {
        const item = document.createElement("li");
        item.textContent = step;
        list.append(item);
      }
      content.append(list);
    } else {
      title = kind === "sample" ? "Bài mẫu tham khảo" : "Bản dịch tham khảo";
      const text = kind === "sample" ? task.sample : task.translation;
      const paragraphs = text.split("\n\n");
      const supplement =
        kind === "sample" ? task.sampleSupplement : task.translationSupplement;
      if (supplement && paragraphs.length > 1)
        paragraphs.splice(paragraphs.length - 1, 0, supplement);
      for (const paragraphText of paragraphs) {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphText;
        content.append(paragraph);
      }
    }
    openDialog(title, content, [
      { label: "Đóng", primary: true, onClick: (dialog) => dialog.close() },
    ]);
  }

  function renderLibrary() {
    renderTaskCards();
    $("writing-task-select").innerHTML = TASKS.map(
      (task) =>
        `<option value="${task.id}">${escapeHtml(task.part)} · ${escapeHtml(task.title)}</option>`,
    ).join("");
  }

  function initialize() {
    if (!$("writing-task-list")) return;
    renderLibrary();
    $("writing-task-list").addEventListener("click", (event) => {
      const button = event.target.closest("[data-writing-task]");
      if (button) setTask(button.dataset.writingTask);
    });
    $("writing-task-select").addEventListener("change", (event) =>
      setTask(event.target.value),
    );
    $("writing-back").addEventListener("click", () => {
      if (timerStartedAt !== null) pauseTimer();
      persist();
      activeTaskId = null;
      $("writing-workspace").classList.add("hidden");
      $("writing-library").classList.remove("hidden");
      renderTaskCards();
    });
    $("writing-answer").addEventListener("input", () => {
      $("writing-word-count").textContent = wordCount(
        $("writing-answer").value,
      );
      scheduleSave();
    });
    $("writing-requirements").addEventListener("change", (event) => {
      if (!event.target.matches("[data-writing-check]")) return;
      const index = Number(event.target.dataset.writingCheck);
      const checks = new Set(draftFor().checks);
      if (event.target.checked) checks.add(index);
      else checks.delete(index);
      draftFor().checks = [...checks];
      persist();
    });
    $("writing-timer-start").addEventListener("click", startTimer);
    $("writing-timer-pause").addEventListener("click", () => {
      pauseTimer();
      $("writing-timer-message").textContent = "Đồng hồ đã tạm dừng.";
    });
    $("writing-timer-reset").addEventListener("click", resetTimer);
    $("writing-save").addEventListener("click", () => persist(true));
    $("writing-delete").addEventListener("click", () =>
      openSimpleDialog(
        "Xóa bài viết này?",
        "Thao tác này sẽ xóa bản nháp, checklist và kết quả chấm của đề đang mở. Thời gian đã sử dụng được giữ lại.",
        [
          { label: "Giữ bài", onClick: (dialog) => dialog.close() },
          {
            label: "Xóa bài viết",
            danger: true,
            onClick: (dialog) => {
              const draft = draftFor();
              draft.text = "";
              draft.checks = [];
              draft.result = null;
              $("writing-answer").value = "";
              $("writing-requirements")
                .querySelectorAll("input")
                .forEach((checkbox) => {
                  checkbox.checked = false;
                });
              $("writing-result").classList.add("hidden");
              updateEditor();
              persist();
              dialog.close();
            },
          },
        ],
      ),
    );
    $("writing-grade").addEventListener("click", gradeWriting);
    $("writing-ai-settings").addEventListener("click", () => openAiSettings());
    $("tab-writing-content").addEventListener("click", (event) => {
      const button = event.target.closest("[data-writing-resource]");
      if (button && activeTaskId) openResource(button.dataset.writingResource);
    });
    timerInterval = setInterval(tick, 250);
    window.addEventListener("beforeunload", () => {
      if (timerStartedAt !== null) pauseTimer(false);
      persist();
    });
  }

  initialize();
})();
