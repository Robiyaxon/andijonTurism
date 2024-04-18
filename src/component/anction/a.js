const mapData = [
    {
      title: "Bog`ishamol",
      text: `
      
Andijon viloyati, Bog'ishamol tumani, Bog'ishamol tabiati boyicha mahalliy istirohat bog'i ko'p yillar mobaynida mamlakatimiz fuqarolarini o'zlarining o'zaro do'stlariga muloqotlashish, o'tkazishlari va dam olgan joylardan dam olgan joylar vaqtlaridan yotkazgan qadimiy va jismoniy madaniy marosimlarini aniqlashlari uchun joylashgan joydir.
Bog'ishamol tabiati boyicha istirohat bog'i haqida bir qancha umumiy ma'lumotlar:
Bog'ishamol, Andijon viloyati manzilida joylashgan va uning turli xil tabiiy yodgorliklari va madaniy meroslariga ega bo'lgan joydir.
Istirohat bog'ida tarkibiy tuzilmalardan foydalanib, mamlakatning milliy madaniyatining eng asosiy qismlarini namoyish etish maqsadida ko'plab tadbirlar o'tkaziladi.
Mahalliy madaniyatni, san'atni, muzokaralarini va turizmni rivojlantirish bo'yicha tadbirlar va festival, bayramlar o'tkaziladi.
Bog'ishamol tabiati boyicha istirohat bog'i, shahar fuqarolariga va turistlarga tabiatning zo'r mukofotlarini taqdim etadi, shuningdek, yaxshi dam olish va xavfsiz joylashish imkoniyatlarini ham taklif qiladi.
      `,
      img1: park1,
      img2: park_2,
      img3: park3,
      map1: 40.78386437,
      map2: 72.35164365,
      main_pic: main_park,
      route: "Bog'lar",
      route_path: "park",
    }
  ];

  const mapComponents = mapData.map((data, index) => (
    <div key={index}>
      <AnctionHeader
        title={data.title}
        main_pic={data.main_pic}
        route={data.route}
        route_path={data.route_path}
      />
      <div className={style.Header}>
        <h1>{data.title}</h1>
        <p>
          {data.text}
        </p>
        <div className={style.IMG}>
          <img src={data.img1} alt="" />
          <img src={data.img2} alt="" />
          <img src={data.img3} alt="" />
        </div>
      </div>
      <MyMap title={data.title} map1={data.map1} map2={data.map2} />
    </div>
  ));