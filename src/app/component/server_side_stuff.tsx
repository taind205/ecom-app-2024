import { Book_Detail, Book_Info_Lite, Rating_Data, User_Rate } from "./data_type"

export const product_info:{[key:number]:Book_Detail} ={
    1:{
      available_num:9,
      name:'Tư Duy Kinh Tế - 50 Bài Giảng Để Hiểu Quy Luật Làm Giàu',
      language:"VI",
      category:'economy_book',
      price:150000,
      total_rate:60,
      rate_point:3.4,
      sold_num:12000,
      description:
      `
      Cuốn sách “Tư duy kinh tế - 50 bài giảng để hiểu quy luật làm giàu” tập trung truyền đạt các nguyên lý kinh tế học của trường phái Áo dưới dạng tiểu luận tổng hợp, đồng thời sử dụng các nguyên lý này để giải thích và phân tích nhiều trường hợp trong kinh doanh, giai thoại trong thế giới thực, cổ đại và hiện đại, trên toàn thế giới liên quan đến nhiều nội dung: Từ giá trị, quyền sở hữu, cạnh tranh cho đến vấn đề mang tính nhận thức như bản chất con người, đạo đức, nhận thức… bằng một văn phong mộc mạc và giản dị, cuốn sách giải thích một cách có hệ thống các vấn đề kinh tế liên quan mật thiết đến cuộc sống hàng ngày của chúng ta, giúp người đọc hình thành lối tư duy kinh tế, nhận thức lại kinh tế thị trường, hiểu logic kinh doanh và trở thành người có tư duy hợp lý, có những quyết định và hành động thận trọng.
      Nội dung cuốn sách Tư duy kinh tế - 50 bài giảng để hiểu quy luật làm giàu
      Cuốn sách là 50 bài học được chia làm 4 phần nội dung như sau:

      Phần 1: Bản chất của con người và thị trường

      Phần 2: Tài sản và đạo đức

      Phần 3: Sự thịnh hành và sự thật

      Phần 4:Nhận thức và vận mệnh

      Thực chất đây không phải một cuốn sách về kinh tế khô khan với những lý thuyết chuyên sâu và thuật ngữ chuyên ngành, trong cuốn sách này, tác giả chỉ đi lý giải mọi mặt của cuộc sống dưới góc độ kinh tế, bởi tất cả mọi thứ đang diễn ra hàng ngày trong cuộc sống của chúng ta không thể thoát khỏi vòng xoay của kinh tế, dù là nhu cầu về vật chất hay tinh thần. Như:

      - Tìm hiểu về nguyên lý và nguồn gốc của kinh tế, mối quan hệ giữa con người và thị trường, trả lời các câu hỏi như: Tại sao ước mơ không thể dùng để kiếm sống? Vấn đề lương tối thiểu và việc làm? Thế nào gọi là “Mùi thương mại”?;Tại sao trải nghiệm người tiêu dùng lại không ngừng cải thiện, đó thực chất là do cạnh tranh thị trường…

      - Những hiểu biết và nghiên cứu về tiền bạc, lịch sử của tiền tệ, tại sao mọi người cảm thấy quyên góp tiền có đạo đức hơn kiếm tiền? Tại sao con người thích khiển trách sự lạnh nhạt của xã hội? Con người hiện đại không hạnh phúc phải chăng vì họ có được quá nhiều?

      Bản chất của kinh tế là gì?
      Cổ nhân 2.000 năm trước cho rằng, nếu người người đều có cơm ăn, áo mặc thì đó sẽ là một thế giới hoàng kim, con người sẽ sống trong hạnh phúc mãi mãi.

      Cairns 90 năm trước cho rằng, cùng với sự tiến bộ của khoa học kỹ thuật, sự phát triển của năng lực sản xuất, mức sống của con người cũng không ngừng tăng cao, vấn đề kinh tế sẽ không tồn tại nữa.

      Rất nhiều người ngày nay cho rằng, nếu người người đều có nhà, có xe, có người yêu, thì thế giới sẽ trở thành thiên đường, con người sẽ sống một cuộc sống hạnh phúc mãi mãi.

      Ngay cả khi nền kinh tế phát triển vô tận, ngay cả khi người người đều sống một cuộc sống giàu có như Buffett, thì cuộc sống con người vẫn sẽ đầy rẫy những tình huống cầu nhưng không được, vẫn sẽ đầy rẫy những than phiền. Ví dụ: Tại sao có người xinh đẹp hơn, tại sao có người khỏe mạnh hơn, tại sao người yêu tôi lại ít như vậy, tại sao trong thành phố lúc nào cũng tắc đường, tại sao tôi không sống được thêm 500 năm?

      Sự thiếu hụt mãi mãi tồn tại, vấn đề kinh tế mãi mãi tồn tại. Đây chính là bản chất.

      Tại sao chúng ta cần học kinh tế học?
      1. Kinh tế học là một môn khoa học làm cho đầu óc tỉnh táo
      Kinh tế học có thể khiến chúng ta nhìn thấy được chân tướng của thế giới này, có thể khiến chúng ta hiểu được “phúc lợi miễn phí” mà con người hướng đến có phải là miễn phí thật hay không, có thể khiến chúng ta hiểu rõ vô số người tại sao lại có tài nhưng không gặp thời, hiểu được động cơ lương thiện và ý nguyện tốt đẹp, tại sao việc làm và kết quả luôn luôn trái ngược nhau, phương pháp và mục đích rốt cuộc có quan hệ như thế nào.

      2. Kinh tế học là một môn khoa học đề cập đến sự tồn tại và phát triển
      Cho dù là vào thời đại không có tiền bạc (tiền tệ), thì con người vẫn cần phải giải quyết vô số các bài toán kinh tế. Ví dụ: Làm thế nào để có được quần áo và thức ăn? Sử dụng thời gian và tài nguyên như thế nào mới có thể sản sinh ra lợi ích lớn hơn? Làm thế nào để đối phó với rủi ro và sự không chắc chắn?... 

      3.  Kinh tế học là một môn khoa học đề cập đến cạnh tranh và hợp tác
      Trên thị trường, con người thông qua hợp tác để cạnh tranh, người tiêu dùng dùng tiền để cạnh tranh thương phẩm, thương gia dùng chất lượng và dịch vụ để cạnh tranh người tiêu dùng. Cạnh tranh và hợp tác khiến cho chúng ta từ bỏ thành kiến cá nhân, làm cho chúng ta hiểu được nhu cầu của người khác, và đem lại lợi ích cho người khác cũng chính là đem lại lợi ích cho mình. 

      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
      Nguồn: https://tiki.vn/sach-tu-duy-kinh-te-50-bai-giang-de-hieu-quy-luat-lam-giau-p272268612.html`,
      img_list:['https://bizbooks.vn/uploads/images/2023/thang-9/sach-tu-duy-kinh-te.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/55/0d/fe/b60ab1404c00e536d4e7595d183839df.jpg.webp',
      "https://salt.tikicdn.com/cache/750x750/ts/product/76/f1/f1/9ddd2038149fe3892a18c8fcbe4cf814.JPEG.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/91/ae/a6/52788c356f8bb586dbfd3a0b9c438895.JPEG.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/ac/0d/ee/f9b0b39bf34a2085293a7c237c7d2493.JPEG.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/cc/00/f9/437c7cd819db37935a6ebb5d93ccac0e.JPEG.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/3f/48/cf/1f15108ae20ea18731a517c09692e174.JPEG.webp"]
    },
    2:{
      available_num:200,
      name:"Cách Nền Kinh Tế Vận Hành - Niềm Tin, Sự Sụp Đổ Và Những Lời Tiên Tri Tự Đúng",
      language:"VI",
      category:'economy_book',
      price: 220000,
      total_rate: 52,
      rate_point: 5,
      sold_num: 160,
      description: `Cách Nền Kinh Tế Vận Hành - Niềm Tin, Sự Sụp Đổ Và Những Lời Tiên Tri Tự Đúng ( Tặng sổ tay xương rồng )
  
      Sổ tay xương rồng ngẫu nhiên ( 1 trong 4 hình)
      
      1.Tác giả
      
      Roger E. A. Farmer (1955-)
      
      Nhà kinh tế học người Mĩ, giảng dạy tại Đại học California, được biết đến qua các công trình về những lời tiên tri tự đúng.
      
      2. Tác phẩm
      
      Cuốn sách Cách nền kinh tế vận hành được xuất bản lần đầu tiên vào năm 2010. Thời điểm này cũng là lúc thế giới đang phải vật lộn với cuộc suy thoái tồi tệ nhất kể từ những năm 1930. Đã ba mươi bảy tháng trôi qua kể từ thời điểm Cục nghiên cứu Kinh tế Quốc gia Hoa Kì (NBER) tuyên bố cuộc khủng hoảng kinh tế lần này đã chấm dứt, nhưng vào tháng 6 năm 2009, Chính phủ Hoa Kì vẫn còn rất nhiều việc phải làm để có thể phục hồi số việc làm cho người lao động về mức trước khủng hoảng. Tôi viết cuốn sách này nhằm giúp các bạn hiểu rõ hơn tại sao những điều tồi tệ này lại xảy ra, và đưa ra một số ý tưởng nhằm ngăn chặn các cuộc khủng khoảng tài chính tương tự có thể xảy ra trong tương lai.
      
      3. Trích dẫn 
      
      Theo tôi, đối với người dân, hiểu biết về kinh tế học có vai trò quan trọng không thua kém gì so với hiểu biết về toán học hay vật lí. Và việc nắm được cách các học thuyết kinh tế tác động lên những chính sách kinh tế thế nào và tiếp đó các chính sách này đang hằng ngày ảnh hưởng to lớn đến cuộc sống của chúng ta ra sao càng trở nên quan trọng hơn bao giờ hết. Tôi hi vọng ấn bản mới của cuốn sách Cách nền kinh tế vận hành này có thể đóng góp một phần vào công cuộc lớn lao đó. Tôi cũng mong những ý tưởng mới mà tôi cung cấp thêm cũng được các độc giả đón nhận.
      
      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
      Nguồn: https://tiki.vn/cach-nen-kinh-te-van-hanh-niem-tin-su-sup-do-va-nhung-loi-tien-tri-tu-dung-tang-so-tay-xuong-rong-p195439159.html`,
      img_list:[
      'https://www.khaitam.com/Data/Sites/1/Product/7262/cach-nen-kinh-te-van-hanh-bia-1.jpg',
      'https://salt.tikicdn.com/cache/750x750/ts/product/44/98/61/4589ea8676c1d4c989f9c9a99468ff4b.jpg.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/26/43/b5/ba9423ca141809fcc2aca63e2c440fed.jpg.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/bf/54/d6/51e2b0584cc7fc8b97f5608fdc34e8c8.jpg.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/36/b0/45/7571aa34e310b8225f1a409a66632121.jpg.webp',]
    },
    3:{
      available_num:5,
      name:"Khởi Nghiệp Bán Lẻ - Bí Quyết Thành Công Và Giàu Có Bằng Những Cửa Hàng Đông Khách - Công Thức Kinh Doanh Và Quản Lý Cửa Hàng Hiệu Quả",
      language:'VI',
      category:'economy_book',
      price: 125000,
      total_rate: 245,
      rate_point: 4,
      sold_num: 6050,
      description: `TOP 1 SÁCH KHỞI NGHIỆP CHỨA ĐỰNG KINH NGHIỆM TRONG 10 NĂM KINH DOANH CỦA MỘT NGƯỜI TỪNG QUẢN LÝ 65 CỬA HÀNG BÁN LẺ. \nBạn sẽ tìm thấy trong quyển sách:\nCách đơn giản để tìm kiếm ý tưởng kinh doanh và huy động vốn để khởi nghiệp.\nPhương pháp phân tích nhu cầu khách hàng và đề ra mô hình kinh doanh chuẩn xác.\n10 tiêu chí cốt lõi để lựa chọn mặt bằng kinh doanh & 10 kinh nghiệm để thiết kế cửa hàng vừa thu hút vừa tiết kiệm đến 70% chi phí.\nĐặc biệt nhất là 7 bí quyết nhà nghề độc đáo được trình bày từ dễ đến khó để bạn có ngay một cửa hàng lúc nào cũng đông khách!\nVà nhiều kinh nghiệm quý giá khác, đã và đang được áp dụng tại chính các cửa hàng của tác giả.\nQuyển sách này dành cho:\nCác bạn đang kinh doanh online và cửa hàng offline.\nCác chủ shop muốn nâng cao hiệu quả hoạt động của cửa hàng.\nNhà sản xuất muốn mở showroom bán sản phẩm của mình. \nHay bất kỳ ai yêu thích kinh doanh và ấp ủ giấc mơ làm giàu bền vững.\nKhởi Nghiệp Bán Lẻ là quyển sách không thể thiếu cho những ai muốn quản lý cửa hàng và làm giàu bằng ngành bán lẻ.
      Nguồn: https://tiki.vn/khoi-nghiep-ban-le-bi-quyet-thanh-cong-va-giau-co-bang-nhung-cua-hang-dong-khach-cong-thuc-kinh-doanh-va-quan-ly-cua-hang-hieu-qua-p1926761.html`,
      img_list:['https://salt.tikicdn.com/cache/750x750/ts/product/87/89/7d/5bf87088791bcd0d58e3400636f472c4.png.webp',
      "https://salt.tikicdn.com/cache/750x750/ts/product/dd/30/0b/f8d7437fab4382289e3e4213a8ca8005.png.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/f3/60/53/edbb458e24fdd5ee66a71fcac34f62af.png.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/a4/b1/dc/15e6be1ace641e5d4a7b6dd7444743da.png.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/a4/b1/dc/15e6be1ace641e5d4a7b6dd7444743da.png.webp",
      "https://salt.tikicdn.com/cache/750x750/ts/product/7d/36/c2/6458e1887a9e96e356ffa9e9371b4cb6.png.webp"]
    },
    4:{
      available_num:5,
      name:"Freakonomics: A Rogue Economist Explores the Hidden Side of Everything",
      language:'EN',
      category:'economy_book',
      price: 220000,
      total_rate: 545,
      rate_point: 3,
      sold_num: 1020,
      description: `The book is a collection of articles written by Levitt, an economist who had gained a reputation for applying economic theory to diverse subjects not usually covered by "traditional" economists. In Freakonomics, Levitt and Dubner argue that economics is, at root, the study of incentives. The book's chapters cover:
  
      Chapter 1: Discovering cheating as applied to teachers and sumo wrestlers, as well as a typical Washington, D.C.–area bagel business and its customers
      Chapter 2: Information control as applied to the Ku Klux Klan and real-estate agents
      Chapter 3: The economics of drug dealing, including the surprisingly low earnings and abject working conditions of crack cocaine dealers
      Chapter 4: The role legalized abortion has played in reducing crime, contrasted with the policies and downfall of Romanian dictator Nicolae Ceauşescu (Levitt explored this topic in an earlier paper entitled "The Impact of Legalized Abortion on Crime", written with John Donohue)
      Chapter 5: The negligible effects of good parenting on education
      Chapter 6: The socioeconomic patterns of naming children (nominative determinism)
      One example of the authors' use of economic theory involves demonstrating the existence of cheating among sumo wrestlers. In a sumo tournament, all wrestlers in the top division compete in 15 matches and face demotion if they do not win at least eight of them. The sumo community is very close-knit, and the wrestlers at the top levels tend to know each other well. The authors looked at the final match, and considered the case of a wrestler with seven wins, seven losses, and one fight to go, fighting against an 8–6 wrestler. Statistically, the 7–7 wrestler should have a slightly below even chance, since the 8–6 wrestler is slightly better. However, the 7–7 wrestler actually wins around 80% of the time. Levitt uses this statistic and other data gleaned from sumo wrestling matches, along with the effect that allegations of corruption have on match results, to conclude that those who already have eight wins collude with those who are 7–7 and let them win, since they have already secured their position for the following tournament. Despite condemnation of the claims by the Japan Sumo Association following the book's publication in 2005, the 2011 Grand Tournament in Tokyo was canceled for the first time since 1946 because of allegations of match-fixing.[3]
      
      The authors attempt to demonstrate the power of data mining, as a number of their results emerge from Levitt's analysis of various databases. The authors posit that various incentives encourage teachers to cheat by assisting their students with multiple-choice high-stakes tests. Such cheating in the Chicago school system is inferred from detailed analysis of students' answers to multiple-choice questions. Levitt asks, "What would the pattern of answers look like if the teacher cheated?", and hypothesizes that the more difficult questions found at the end of test sections will be answered correctly more frequently than the easy questions at the beginning of test sections.
      Source: https://en.wikipedia.org/wiki/Freakonomics`,
      img_list:['https://cdn0.fahasa.com/media/catalog/product/i/m/image_128582.jpg']
    },
    5:{
      available_num:3,
      name:"Naked Economics: Undressing the Dismal Science",
      language:'EN',
      category:'economy_book',
      price: 225000,
      total_rate: 25,
      rate_point: 4.6,
      sold_num: 350,
      description: `Naked Economics: Undressing the Dismal Science is a book by Charles Wheelan that seeks to translate basic economic issues into a format that can be easily read by people with little or no previous knowledge of economics. The Chicago Tribune described the book as "Translat[ing] the arcane and often inscrutable jargon of the professional economist into language accessible to the inquiring but frustrated layman."[1] A fully revised and updated version of the book with a foreword by Burton Malkiel was published in 2010.
  
      It has been translated into eleven languages.
      Source: https://en.wikipedia.org/wiki/Naked_Economics`,
      img_list:['https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529039596l/40180021.jpg']
    },
    6:{
      available_num:1,
      name:"Súng, vi trùng và thép: Định mệnh của các xã hội loài người",
      language:'VI',
      category:'history_book',
      price: 55000,
      total_rate: 76,
      rate_point: 4.6,
      sold_num: 3250,
      description: `“Súng, vi trùng và thép: Định mệnh của các xã hội loài người” là cuốn sách khoa học phổ thông thứ hai và nổi tiếng nhất của Jared Diamond, được xuất bản lần đầu trên thế giới vào năm 1997.
  
      Cuốn sách đã trở thành cuốn sách bán chạy nhất trên thế giới thời điểm đó, được dịch ra 33 thứ tiếng và nhận được nhiều giải thưởng, trong đó có một giải Pulitzer, một giải thưởng Sách Khoa học Aventis và giải thưởng Khoa học Phi Beta Kap-pa năm 1997. Một bộ phim tài liệu truyền hình nhiều tập dựa trên cuốn sách đã được Hiệp hội Địa lý Quốc gia sản xuất vào năm 2005.
      
      Đến nay, "Súng, vi trùng và thép" đã bán được hàng triệu bản và vẫn được xem là một công trình nền tảng về địa lý liên ngành, toàn diện và đột phá.
      
      Yuval Harari đã lấy cảm hứng từ chính cuốn sách này của Jared Diamond để sáng tác ra một cuốn sách nổi tiếng không kém: “Sapiens: Lược sử về loài người”. Colin Renfrew – Thành viên Quốc hội Vương quốc Liên hiệp Anh và Bắc Ireland nhận xét: “Diamond đã viết nên một tác phẩm với tầm tri thức đặc biệt xuất sắc. Đây là một trong những công trình quan trọng nhất và đáng đọc nhất về loài người”.
      
      Nhân dịp tác phẩm nhận được Giải A Sách Quốc gia 2021, chúng tôi tái bản bìa mới, chỉnh sửa một số lỗi và đặc biệt là có bổ sung thêm index. Các đường vân trên bìa biểu trưng cho dòng chảy thời gian, dòng chảy văn minh của nhân loại, đồng thời kết nối quá khứ với hiện tại.
      
      Nội dung cuốn sách giải thích vì sao các nền văn minh Á – Âu (bao gồm cả Bắc Phi) lại tồn tại được, cũng như đã chinh phục các nền văn minh khác, cùng lúc ông bác bỏ các lý thuyết về sự thống trị của các nền văn minh Á –Âu dựa trên trí tuệ, đạo đức hay ưu thế di truyền. Jared Diamond lập luận rằng, sự khác biệt về quyền lực và công nghệ giữa các xã hội loài người có nguồn gốc từ sự khác biệt về môi trường, trong đó sự khác biệt này được khuếch đại không ngừng. Qua đó, ông giải thích tại sao Tây Âu, chứ không phải các nền văn minh khác trong thế giới Á – Âu như Trung Quốc, lại trở thành các thế lực thống trị.
      
      Về tác giả Jared Diamond
      
      Giáo sư Địa lý học tại Đại học Los Angeles, Mỹ.
      
      Ông đã nhận được nhiều giải thưởng danh giá, trong đó phải kể đến Huy chương Khoa học Quốc gia, Giải thưởng Cosmos của Nhật Bản, Giải thưởng Lewis Thomas do Đại học Rockefeller trao tặng, và đặc biệt là giải Pulitzer cho thể loại sách phi hư cấu năm 1998 với tác phẩm Guns, Germs and Steel (Súng, Vi trùng và Thép).
      
      Tác phẩm tiêu biểu: The Third Chimpanzee (Loài tinh tinh thứ 3) (1991), Why Is Sex Fun? (Tại sao tình dục lại thú vị?) (1997), Guns, Germs and Steel (Súng, Vi trùng và Thép) (1997), Collapse (Sụp đổ) (2005), The World Until Yesterday (Thế giới cho đến ngày hôm qua) (2012), Upheaval (Biến động) (2019)
      
      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
      Nguồn: https://tiki.vn/sung-vi-trung-va-thep-dinh-menh-cua-cac-xa-hoi-loai-nguoi-tai-ban-2021-p140120577.html`,
      img_list:['https://salt.tikicdn.com/cache/750x750/ts/product/63/15/e7/bd90cf53061071c4d298ae2a77aaf08d.png.webp'
    ,'https://salt.tikicdn.com/cache/750x750/ts/product/e2/17/bd/b3fde0f8fe2c2a9cfc16c656e74eba18.jpg.webp']
    },
    7:{
      available_num:2,
      name:"A People's History of the United States",
      language:'EN',
      category:'history_book',
      price: 95000,
      total_rate: 176,
      rate_point: 3.6,
      sold_num: 1450,
      description: `In a letter responding to a 2007 critical review of his A Young People's History of the United States (a release of the title for younger readers) in The New York Times Book Review, Zinn wrote:
  
      My history ... describes the inspiring struggle of those who have fought slavery and racism (Frederick Douglass, William Lloyd Garrison, Fannie Lou Hamer, Bob Moses), of the labor organizers who have led strikes for the rights of working people (Big Bill Haywood, Mother Jones, César Chávez), of the socialists and others who have protested war and militarism (Eugene V. Debs, Helen Keller, the Rev. Daniel Berrigan, Cindy Sheehan). My hero is not Theodore Roosevelt, who loved war and congratulated a general after a massacre of Filipino villagers at the turn of the century, but Mark Twain, who denounced the massacre and satirized imperialism.[11][12] I want young people to understand that ours is a beautiful country, but it has been taken over by men who have no respect for human rights or constitutional liberties. Our people are basically decent and caring, and our highest ideals are expressed in the Declaration of Independence, which says that all of us have an equal right to "life, liberty, and the pursuit of happiness." The history of our country, I point out in my book, is a striving, against corporate robber barons and war makers, to make those ideals a reality—and all of us, of whatever age, can find immense satisfaction in becoming part of that.
      Source: https://en.wikipedia.org/wiki/A_People%27s_History_of_the_United_States`,
      img_list:['https://upload.wikimedia.org/wikipedia/en/1/11/Peopleshistoryzinn.jpg']
    },
    8:{
      available_num:25,
      name:"Elon Musk: Tesla, Spacex Và Sứ Mệnh Tìm Kiếm Một Tương Lai Ngoài Sức Tưởng Tượng",
      language:'VI',
      category:'technology_book',
      price: 250000,
      total_rate: 236,
      rate_point: 4.6,
      sold_num: 890,
      description: `Trong cuốn Elon Musk: Tesla, SpaceX và sứ mệnh tìm kiếm một tương lai ngoài sức tưởng tượng, nhà báo công nghệ kỳ cựu Ashlee Vance đã mở cánh cửa đầu tiền nhìn vào cuộc sống phi thường của doanh nhân táo bạo nhất thung lũng Silicon. Được viết với độc quyền tiếp cận Musk, gia đình và bạn bè anh, cuốn sách lần theo cuộc hành trình của doanh nhân này, từ thuở nhỏ được nuôi dạy ở Nam Phi đến khi lên đến đỉnh cao của giới kinh doanh toàn cầu. Vance dành hơn 30 giờ trò chuyện với Musk và phỏng vấn gần 300 người để kể những câu chuyện đầy biến động về các công ty đang làm thay đổi thế giới mà Musk thành lập: PayPal, Tesla Motors, SpaceX và SolarCity, và để mô tả một người đàn ông đã tạo sức sống mới cho ngành công nghiệp Mỹ và thổi bùng tinh thần đổi mới ở một cấp độ khác, trong khi cũng tạo nên không ít kẻ thù trên con đường đó.
  
      Vance dùng câu chuyện cuả Musk để khám phá một trong những câu hỏi trọng tâm trong thời đại của chúng ta: liệu quốc gia của những nhà phát minh sáng chế, thế lực đã dẫn dắt thế giới hiện đại suốt một thế kỷ có còn trụ nổi trong kỷ nguyên cạnh tranh toàn cầu khốc liệt? Anh khẳng định rằng Musk – một trong những nhận vật dị thường và ấn tượng nhất lịch sử kinh doanh Mỹ- là một sự hòa trộn đương đại của những nhà sáng chế huyền thoại và những nhà công nghiệp như Thomas Edison, Henry Ford, Howard Hughes và Steve Jobs. Hơn bất cứ doanh nhân nào khác, Musk cống hiến toàn bộ năng lượng và cược toàn bộ tương lai của anh cho việc kiến tạo một tương lai giàu mạnh và rộng mở cho thời hoàng kim của khoa học viễn tưởng
      
      Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....
      Nguồn: https://tiki.vn/elon-musk-tesla-spacex-va-su-menh-tim-kiem-mot-tuong-lai-ngoai-suc-tuong-tuong-p273896964.html`,
      img_list:['https://salt.tikicdn.com/cache/750x750/ts/product/10/3f/70/09341002804aac536360ed88d442e44f.png.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/b9/03/60/1f675842ad7628f1962e216769ae4d87.png.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/c9/94/00/aff05741dd084a2d8be80cf1f6fc338c.jpg.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/bf/c0/65/1eb4b3a0389131fc34462f968d8c8b1f.png.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/df/a4/da/8e355a60ffdc4ed792e18c9743aaac7a.jpeg.webp',
    'https://salt.tikicdn.com/cache/750x750/ts/product/e9/4d/68/4bef990126408cb0bc14816390b3df85.jpeg.webp']
    },
    9:{
      available_num:4,
      name:"Don Quijote",
      language:'EN',
      category:'novel',
      price: 350000,
      total_rate: 136,
      rate_point: 3.6,
      sold_num: 890,
      description: `For Cervantes and the readers of his day, Don Quixote was a one-volume book published in 1605, divided internally into four parts, not the first part of a two-part set. The mention in the 1605 book of further adventures yet to be told was totally conventional, did not indicate any authorial plans for a continuation, and was not taken seriously by the book's first readers.
      Source: https://en.wikipedia.org/wiki/Don_Quixote`,
      img_list:['https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Title_page_first_edition_Don_Quijote.jpg/800px-Title_page_first_edition_Don_Quijote.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gustave_Dor%C3%A9_-_Miguel_de_Cervantes_-_Don_Quixote_-_Part_1_-_Chapter_1_-_Plate_1_%22A_world_of_disorderly_notions%2C_picked_out_of_his_books%2C_crowded_into_his_imagination%22.jpg/800px-thumbnail.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Don_Quijote_Illustration_by_Gustave_Dore_VII.jpg/800px-Don_Quijote_Illustration_by_Gustave_Dore_VII.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Don_Quijote_and_Sancho_Panza.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/68/1879%2C_El_ingenioso_hidalgo_D._Quijote_de_la_Mancha%2C_Arremeti%C3%B3_%C3%A1_Lotario_con_la_daga_desenvainada%2C_Mestres.jpg',]
    },
    10:{
      available_num:7,
      name:"Mrs Dalloway",
      language:'EN',
      category:'novel',
      price: 250000,
      total_rate: 160,
      rate_point: 3,
      sold_num: 1290,
      description: `Clarissa Dalloway goes around London in the morning, getting ready to host a party that evening. The nice day reminds her of her youth spent in the countryside in Bourton and makes her wonder about her choice of husband; she had married the reliable Richard Dalloway instead of the enigmatic and demanding Peter Walsh, and she "had not the option" to be with a female romantic interest, Sally Seton. Peter reintroduces these conflicts by paying a visit that morning.
  
      Septimus Warren Smith, a First World War veteran suffering from deferred traumatic stress, spends his day in the park with his Italian-born wife Lucrezia, where Peter Walsh observes them. Septimus is visited by frequent and indecipherable hallucinations, mostly concerning his dear friend Evans who died in the war. Later that day, after he is prescribed involuntary commitment to a psychiatric hospital, he commits suicide by jumping out of a window.
      
      Clarissa's party in the evening is a slow success. It is attended by most of the characters she has met throughout the book, including people from her past. She hears about Septimus' suicide at the party and gradually comes to admire this stranger's act, which she considers an effort to preserve the purity of his happiness.
      Source: https://en.wikipedia.org/wiki/Mrs_Dalloway`,
      img_list:['https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Mrs._Dalloway_cover.jpg/330px-Mrs._Dalloway_cover.jpg',
      'https://cdn.kobo.com/book-images/dc043919-597a-4d28-bfe7-f2638a464ce1/1200/1200/False/mrs-dalloway-141.jpg',]
    },
    11:{
      available_num:8,
      name:"Số đỏ",
      language:'VI',
      category:'novel',
      price: 150000,
      total_rate: 1060,
      rate_point: 3.3,
      sold_num: 2390,
      description: `Số đỏ là một tiểu thuyết văn học của nhà văn Vũ Trọng Phụng (ông vua phóng sự đất Bắc) đăng ở Hà Nội báo từ số 40 ngày 7 tháng 10 năm 1936 và được in thành sách lần đầu vào năm 1938. Nhiều nhân vật và câu nói trong tác phẩm đã đi vào cuộc sống đời thường và tác phẩm đã được dựng thành kịch, phim. Nhân vật chính của Số đỏ là Xuân - biệt danh là Xuân Tóc đỏ, từ chỗ là một kẻ bị coi là hạ lưu, bỗng nhảy lên tầng lớp danh giá của xã hội nhờ trào lưu Âu hóa của giới tiểu tư sản Hà Nội khi đó. Tác phẩm Số đỏ, cũng như các tác phẩm khác của Vũ Trọng Phụng đã từng bị cấm lưu hành tại Việt Nam Dân chủ Cộng hòa trước năm 1975 cũng như tại Việt Nam thống nhất từ năm 1975 cho đến năm 1986.
      
      Cho đến nay, tác phẩm Số đỏ đã được tái xuất bản và được phê duyệt ở Việt Nam. Đồng thời đoạn trích của tác phẩm này cũng được đưa vào chương trình học ở trong nước (Sách giáo khoa Ngữ văn 11, tập 1 với tên gọi: Hạnh phúc của một tang gia).
      
      Truyện dài 20 chương và được bắt đầu khi bà Phó Đoan đến chơi ở sân quần vợt nơi Xuân tóc đỏ làm việc. Vô tình Xuân tóc đỏ vì xem trộm 1 cô đầm thay đồ nên bị cảnh sát bắt giam và được bà Phó Đoan bảo lãnh. Sau đó, bà Phó Đoan giới thiệu Xuân đến làm việc ở tiệm may Âu Hóa, từ đó Xuân bắt đầu tham gia vào việc cải cách xã hội. Nhờ thuộc lòng những bài quảng cáo thuốc lậu, hắn được vợ chồng Văn Minh gọi là "sinh viên trường thuốc", "đốc tờ Xuân". Hắn gia nhập xã hội thượng lưu, quen với những người giàu và có thế lực, quyến rũ được cô Tuyết và phát hiện cô Hoàng Hôn ngoại tình. Xuân còn được bà Phó Đoan nhờ dạy dỗ cậu Phước, được nhà sư Tăng Phú mời làm cố vấn cho báo Gõ Mõ. Vì vô tình, hắn gây ra cái chết cho cụ cố tổ nên được mọi người mang ơn. Văn Minh vì nghĩ ơn của Xuân nên dẫn Xuân đi xóa bỏ lý lịch trước kia rồi đăng ký đi tranh giải quần vợt nhân dịp vua Xiêm đến Bắc Kì. Bằng thủ đoạn xảo trá, hắn làm 2 vận động viên quán quân bị bắt ngay trước hôm thi đấu nên Xuân được dịp thi tài với quán quân Xiêm. Vì để giữ tình giao hảo, hắn được lệnh phải thua. Kết thúc trận đấu, khi bị đám đông phản đối, Xuân hùng hồn diễn thuyết cho đám đông dân chúng hiểu hành động "hy sinh vì tổ quốc của mình", được mời vào hội Khai trí tiến đức, được nhận huân chương Bắc Đẩu bội tinh và cuối cùng trở thành con rể cụ cố Hồng.
      Nguồn: https://vi.wikipedia.org/wiki/S%E1%BB%91_%C4%91%E1%BB%8F`,
      img_list:['https://upload.wikimedia.org/wikipedia/commons/0/0e/Sodobanindau.jpg',]
    },
    12:{
      available_num:9,
      name:"THÁM TỬ LỪNG DANH CONAN - TẬP 102",
      language:'VI',
      category:'manga',
      price: 25000,
      total_rate: 1560,
      rate_point: 3.1,
      sold_num: 6390,
      description: `Jugo Yokomizo tình cờ gặp Chihaya Hagiwara tại bữa tiệc mai mối!
      Điều gì hiện lên trong tâm trí Chihaya khi cô chăm chú nhìn Wataru Takagi!?
      Chí nguyện “hoa anh đào” được tiếp nối qua bao thế hệ...
      Và...
      Chẳng hề báo trước, tập truyện này sẽ mở ra những diễn biến đầy bất ngờ.
      Nguồn: https://nxbkimdong.com.vn/products/tham-tu-lung-danh-conan-tap-102-1`,
      img_list:['https://product.hstatic.net/200000343865/product/102_359d8e4410484914b3ccee5831926b14_master.jpg']
    },
    13:{
      available_num:2,
      name:"THÁM TỬ LỪNG DANH CONAN - TẬP 101",
      language:'VI',
      category:'manga',
      price: 25000,
      total_rate: 1160,
      rate_point: 4.1,
      sold_num: 3390,
      description: `Mật mã Akemi Miyano để lại ẩn chứa gợi ý về vị trí chôn chiếc hộp thời gian ở trường tiểu học!? Conan dẽ cùng nhóm Haibara hợp sức giải mã!!
      Tiếng súng vang lên tại nhà hàng Pháp danh tiếng! Conan lần theo dấu viết của tiến sĩ vừa bị bắt đi, thế rồi “nữ thần gió” bất ngờ xuất hiện trước mặt cậu. Thân phận thực sự của cô là gì?
      Và lần này, Toru Amuro sẽ đối đầu với Kaito Kid khi hắn định trộm món bảo vật!
      Nguồn: https://nxbkimdong.com.vn/products/tham-tu-lung-danh-conan-tap-101-1`,
      img_list:['https://product.hstatic.net/200000343865/product/101_2c49d5bcea3d4b2e908c48550c1e0a39_master.jpg']
    },
    14:{
      available_num:15,
      name:"NINJA RANTARO - TẬP 22",
      language:'VI',
      category:'manga',
      price: 45000,
      total_rate: 160,
      rate_point: 4.8,
      sold_num: 320,
      description: `“Yahoo! Các cháu vẫn khỏe cả chứ? Bác đã đi đây đó, gặp gỡ rất nhiều bạn bè, và nhờ hấp thụ được sự khỏe khoắn của họ mà giờ đây bác cảm thấy trong mình tràn đầy năng lượng. Đầu tiên, phải thử thay đổi bộ mặt phòng ốc của mình, à không, thay đổi bộ mặt của “Ninja Rantaro” trước đã. Không biết các cháu có nhận ra không nhỉ? Nhìn kĩ thì tập 22 này có nhiều điểm khác với những tập trước kia đấy. Cho bác biết cảm tưởng đi nào.” - Soubee Amako
      Nguồn: https://nxbkimdong.com.vn/products/ninja-rantaro-tap-22`,
      img_list:['https://product.hstatic.net/200000343865/product/22_7ab54862dc704d88986d68b99efcab89_master.jpg']
    },
  }

const product_info_lite:Book_Info_Lite[] = Object.entries(product_info).map(([k,b]) =>
  ({id:Number(k),name:b.name,price:b.price,img:b.img_list[0],available_num:b.available_num, 
    category:b.category,sold_num:b.sold_num,rate_point:b.rate_point}) )


export const get_product_info_lite:(id:number)=>Book_Info_Lite = (id)=>product_info_lite.find((v)=>v.id==id)||
      {id: 0,name: 'undefined',price: 0,rate_point: 0,sold_num: 0,category: 'undefined',img: '',available_num:0,}

export const get_product_info_lite_by_term:(term:string)=>Book_Info_Lite[] = (term) =>
    product_info_lite.filter((p)=> p.name.toLowerCase().includes(term.toLowerCase())).slice(0,10)

export const rating_data:Rating_Data = {
  five_star:10,
  four_star:22,
  three_star:15,
  two_star:7,
  one_star:2,
}

const user_rate1:User_Rate[] = [
  {
    username:'Tài Nguyễn',
    rate:3,
    cmt:'Sách hay nhưng giao hàng chậm',
    likes:15,
    time:'2024-1-15 16:30:00',
    response:'Xin lỗi vì sự cố của bạn.',
    img:['https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  },
  {
    username:'Phong',
    rate:2,
    cmt:'Hơi chán',
    likes:8,
    response:'',
    time:'2024-1-18 12:30:00',
    img:[]
  },
  {
    username:'Trung Nguyễn',
    rate:5,
    cmt:'Lần đầu đọc sách như thế này, cảm thấy sách rất thực tế.\nĐã đọc 3 lần.\nCảm ơn tác giả.',
    
    response:'Cảm ơn bạn đã đánh giá tốt.',
    likes:20,
    time:'2024-1-17 22:30:00',
    img:['https://images.pexels.com/photos/10863290/pexels-photo-10863290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    username:'Quốc Đạt',
    rate:5,
    cmt:'Đọc rất cuốn',
    response:'',
    likes:20,
    time:'2024-1-17 22:30:00',
    img:['https://images.pexels.com/photos/7171398/pexels-photo-7171398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    username:'Duy',
    rate:4,
    cmt:'Khá hay',
    response:'',
    likes:15,
    time:'2024-1-13 16:30:00',
    
    img:[]
  },
  {
    username:'Quốc Đạt2',
    rate:5,
    cmt:'Đọc rất cuốn',
    
    response:'',
    likes:20,
    time:'2024-1-17 22:30:00',
    img:['https://images.pexels.com/photos/3704611/pexels-photo-3704611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    username:'Trung Nguyễn2',
    rate:5,
    cmt:'Lần đầu đọc sách như thế này, cảm thấy sách rất thực tế.\nĐã đọc 3 lần.\nCảm ơn tác giả.',
    response:'Cảm ơn bạn đã đánh giá tốt.',
    likes:20,
    time:'2024-1-17 22:30:00',
    
    img:[]
  },
  {
    username:'Tài Nguyễn2',
    rate:3,
    cmt:'Sách hay nhưng giao hàng chậm',
    
    response:'Xin lỗi vì sự cố của bạn.',
    likes:15,
    time:'2024-1-15 16:30:00',
    img:['https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

  },
  {
    username:'Duy2',
    rate:4,
    cmt:'',
    
    response:'',
    likes:15,
    time:'2024-1-13 16:30:00',
    
    img:[]
  },
  {
    username:'Phong2',
    rate:2,
    cmt:'',
    likes:8,
    response:'',
    time:'2024-1-18 12:30:00',
    img:[]
  },
  {
  username:'Duy3',
  rate:4,
  cmt:'',
  
  response:'',
  likes:15,
  time:'2024-1-13 16:30:00',
  
  img:[]
},
{
  username:'Phong3',
  rate:5,
  cmt:'',
  likes:8,
  response:'Cảm ơn bạn đã đánh giá tốt.',
  time:'2024-1-18 12:30:00',
  img:[]
},{
  username:'Duy4',
  rate:2,
  cmt:'',
  likes:8,
  response:'',
  time:'2024-1-18 12:30:00',
  img:[]
},
{
  username:'Phong4',
  rate:5,
  cmt:'',
  likes:8,
  response:'',
  time:'2024-1-18 12:30:00',
  img:[]
}
]
export const user_rate:User_Rate[] =user_rate1.concat(user_rate1).concat(user_rate1).concat(user_rate1).slice(0,57);


// // Static gen with code: 
// // ??
export const product_back_path:any = {1:'economy_book', 2:'economy_book', 3: 'economy_book', 4:'technology_book' ,5:'history_book'};

// // Static gen:
// // ??
export const available_product = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

export const available_path:any = {all:["novel","book","comics"],
  book:["technology_book","economy_book","history_book"],
  comics:["manga","manhua","manhwa"]};

export const back_path:{[key:string]:string} = { novel: "all", book: "all", comics: "all", technology_book: "book", economy_book: "book", history_book: "book", manga: "comics", manhua: "comics", manhwa: "comics" };
// // Static gen with code: 
// // for(const [key, value] of Object.entries(available_path)) {
// //   	for (const path of value)
// //     back_path[path]=key; }

// // Static gen:
// // let available_category = [];
// // Object.values(available_path).forEach((v)=>p=p.concat(v));
export const available_category = ["fill", "all", "novel", "book", "comics", "technology_book", "economy_book", "history_book", "manga", "manhua", "manhwa"];
