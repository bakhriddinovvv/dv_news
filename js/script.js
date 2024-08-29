const defaultData = [
  [
    {
      img: 'img/uzb/img1.jpg',
      name: '“O‘ztemiryo‘lyo‘lovchi” Raqobat qo‘mitasi qaroriga munosabat bildirdi',
      time: '13:09',
      category: 'Ozbekiston',
      descr:
        'Raqobat qo‘mitasi “O‘ztemiryo‘lyo‘lovchi” AJ va “Shahar atrofida yo‘lovchi tashish” MCHJ tomonidan iste’molchilardan 1,3 milliard so‘mga yaqin ortiqcha undirilgan to‘lovlarni qaytarishi yuzasidan ko‘rsatma berib, moliyaviy jarima qo‘llagandi. “O‘ztemiryo‘lyo‘lovchi” bunga munosabat bildirdi.',
      id: 1,
    },
    {
      img: 'img/uzb/img2.jpg',
      name: 'Toshkentda uy sotaman deb Chirchiqda ham 174 kishini chuv tushirgani aytilmoqda',
      category: 'Ozbekiston',
      descr:
        'Aziya Invest Favorit MCHJ — bu nom sizga judayam tanish to‘g‘rimi? Topdingiz, aynan shu MCHJ rahbari Toshkent shahri Yashnobod tumani Izzat ko‘chasida qurilishi rejalashtirilgan ko‘p qavatli uylardan kvartira sotib olish bo‘yicha shartnoma tuzgan mingdan ortiq fuqarolarni aldab, salkam 164 milliard so‘mga chuv tushirdi.',
      time: '13:02',
      id: 2,
    },
    {
      img: 'img/uzb/img3.jpg',
      name: 'Ichki ishlarda pensiyaga chiqish uchun xizmat muddatini 25 yilga uzaytirish',
      time: '16:07',
      category: 'Ozbekiston',
      descr:
        'Ijtimoiy tarmoqlarda ichki ishlar organlarida pensiyaga chiqish uchun xizmat muddatini 25 yilga uzaytirish mumkinligi haqida xabarlar tarqalmoqda.',
      id: 3,
    },
    {
      img: 'img/uzb/img5.jpg',
      name: 'Toshkent shahrining ikki tumanida gaz yetkazib berish vaqtincha to‘xtatiladi',
      time: '12:20',
      category: 'Ozbekiston',
      descr:
        'Toshkent shahrining ikki tumanida 22-avgust kuni gaz yetkazib berish vaqtincha to‘xtatiladi. Bu haqda “Hududgaz Poytaxt” GTF xabar berdi.',
      id: 4,
    },
    {
      img: 'img/uzb/img4.jpg',
      name: 'O‘zbekistonda 1-avgust holatiga ko‘ra 293 411 ta MCHJ faoliyat yuritmoqda',
      time: '15:09',
      category: 'Ozbekiston',
      descr:
        '2024-yil 1-avgust holatiga ko‘ra O‘zbekistonda jami 293 411 ta mas’uliyati cheklangan jamiyatlar faoliyat yuritmoqda. Bu haqida Statistika agentligi xabar berdi.',
      id: 5,
    },
  ],
  [
    {
      img: 'img/sport/img1.jpg',
      name: 'Bahodir Jalolov qozog‘istonlik bokschi bilan jang qilishi mumkin.',
      time: '15:08',
      category: 'Sport',
      id: 6,
      descr:
        'Super og‘ir vaznda jang qiluvchi qozog‘istonlik Ivan Dichko (14-0, 13 KO) janglariga mas’ul bo‘lgan menejer Ziyo Aliyev “Vesti.kz” muxbiri bilan suhbatda o‘zbekistonlik ikki karra Olimpiada chempioni Bahodir Jalolov (14-0, 14 KO) bilan ehtimoliy jang vaqtini ma’lum qildi.',
    },
    {
      img: 'img/sport/img2.jpg',
      name: '“Manchester Siti” va “Al-Hilol” Joau Kanseluning transferi bo‘yicha kelishuvga erishdi',
      time: '13:30',
      category: 'Sport',
      id: 7,
      descr:
        '“Manchester Siti” va Saudiya Arabistonining “Al-Hilol” klubi 30 yoshli portugaliyalik o‘ng qanot himoyachisi Joau Kanseluning transferi bo‘yicha kelishuvga erishdi, deb xabar bermoqda City Report. Manbaga ko‘ra, tovon puli kamida 35 million yevroni tashkil qilishi mumkin.',
    },
    {
      img: 'img/sport/img3.jpg',
      name: 'Futbol tarixidagi eng omadsiz 15 ta transfer e’lon qilindi. Sobiq “Barselona” futbolchisi ro‘yxatda yetakchi',
      time: '22:06',
      category: 'Sport',
      id: 8,
      descr:
        'Mashhur sport nashri Goal barcha ligalar bo‘yicha futbol tarixidagi 15 ta eng muvaffaqiyatsiz transferlar reytingini e’lon qildi.',
    },
    {
      img: 'img/sport/img4.jpg',
      name: 'Razambek Jamalov Olimpiada g‘olibligi uchun berilgan avtomobillarni murabbiylariga sovg‘a qildi',
      time: '13:34',
      category: 'Sport',
      id: 9,
      descr:
        'Parij Olimpiadasida O‘zbekiston sharafini himoya qilgan Razambek Jamalov Dog‘istonga qaytdi.',
    },
    {
      img: 'img/sport/img5.jpg',
      name: 'Joau Feliks London klubiga ko‘chib o‘tdi',
      time: '18:18',
      category: 'Sport',
      id: 10,
      descr:
        'Londonning “Chelsi” klubi o‘zining rasmiy sayti orqali “Atletiko” klubi futbolchisi Joau Feliksning transferini e’lon qildi.',
    },
  ],
  [
    {
      img: 'img/fan/img1.jpg',
      name: 'SpaceX kosmosga sayyohlarni olib chiqishni boshlaydi',
      time: '19:13',
      category: 'FanVaTexnika',
      id: 11,
      descr:
        'SpaceX tarixida birinchi marta sayyohlarni keyingi haftada ochiq kosmosga jo‘natadi. Bu haqda CNBC xabar berdi.',
    },
    {
      img: 'img/fan/img2.jpg',
      name: 'Yuz yillik tarixiy qasrdan Dubaydagi zamonaviy villagacha',
      time: '15:15',
      category: 'FanVaTexnika',
      id: 12,
      descr:
        '29 yoshli milliarder Anant Ambani va Radhika Merchantning bir necha oy davom etgan yilning eng shov-shuvli to‘yi uchun oila 600 million dollardan ortiq mablag‘ sarfladi. Biroq bunday summa Ambanilar oilasi uchun okeandan bir tomchidek gap, chunki bunday dabdabali bayram milliarderlar oilasi boyligining atigi 0,5 foizini tashkil qiladi. Ambanilarga tegishli dunyoning turli chekkalaridagi hashamatli ko‘chmas mulklar buning dalilidir. ',
    },
    {
      img: 'img/fan/img3.jpg',
      name: 'ASUS atirgul iforiga ega dunyodagi birinchi noutbukni taqdim etdi (foto)',
      time: '10:04',
      category: 'FanVaTexnika',
      id: 13,
      descr:
        'ASUS kompaniyasi Anna Sui parfyumeriya brendi bilan hamkorlikda xushbo‘y hid taratadigan noodatiy qurilma — Adolbook 14 Air nomli yangi noutbukni ishlab chiqdi.',
    },
    {
      img: 'img/fan/img4.jpg',
      name: 'Bakalavriat ta’lim yo‘nalishlariga kirish test sinovlari bo‘yicha mandat e’lon qilindi',
      time: '12:03',
      category: 'FanVaTexnika',
      id: 14,
      descr:
        '2024–2025-o‘quv yili uchun oliy ta’lim muassasalarining bakalavriat ta’lim yo‘nalishlariga kirish test sinovlari bo‘yicha tanlov natijalari e’lon qilindi. Bu haqida Bilim va malakalarni baholash agentligi xabar berdi.',
    },
    {
      img: 'img/fan/img5.jpg',
      name: 'Davlat granti bo‘yicha 2024/2025-o‘quv yili uchun qabul kvotalari tasdiqlandi',
      time: '18:03',
      category: 'FanVaTexnika',
      id: 15,
      descr:
        'Prezident farmoyishi bilan 2024/2025 o‘quv yili uchun davlat OTMlariga davlat granti kvotalari tasdiqlandi. Shu yildan boshlab davlat grantlari oliygohlar uchun berilmaydi, balki yo‘nalish uchun ajratiladi.',
    },
  ],
  [
    {
      img: 'img/yangiliklar/img1.jpg',
      name: 'O‘zbekiston dizel importi hajmini ikki yilda yetti baravarga oshirdi',
      time: '14:20',
      category: 'SongiYaniliklar',
      id: 16,
      descr:
        'O‘zbekistonda dizel ishlab chiquvchi bir necha korxonalar mavjud bo‘lsa–da, mahsulot importi yildan yilga oshib bormoqda. Buni oxirgi uch yillik raqamlarda ko‘rish mumkin. ',
    },
    {
      img: 'img/yangiliklar/img2.jpg',
      name: 'Yulduz Usmonovadan Rafet el Romangacha. Yangi mavsumda kimlar konsert beradi? (foto)',
      time: '13:50',
      category: 'SongiYaniliklar',
      id: 17,
      descr:
        'Yozgi taʼtildan so‘ng teatr va konsert tomoshalarining yangi mavsumi ochiladi. Xo‘sh, yaqin oylarda qaysi xonandalar konsert berishadi va ularning chipta narxlari qancha?',
    },
    {
      img: 'img/yangiliklar/img3.jpg',
      name: '“O‘ztemiryo‘lyo‘lovchi” Raqobat qo‘mitasi qaroriga munosabat bildirdi',
      time: '14:10',
      category: 'SongiYaniliklar',
      id: 18,
      descr:
        'Raqobat qo‘mitasi “O‘ztemiryo‘lyo‘lovchi” AJ va “Shahar atrofida yo‘lovchi tashish” MCHJ tomonidan iste’molchilardan 1,3 milliard so‘mga yaqin ortiqcha undirilgan to‘lovlarni qaytarishi yuzasidan ko‘rsatma berib, moliyaviy jarima qo‘llagandi. “O‘ztemiryo‘lyo‘lovchi” bunga munosabat bildirdi.',
    },
    {
      img: 'img/yangiliklar/img4.jpg',
      name: ' Toshkentda uy sotaman deb, 164 mlrd so‘mni “yeb ketgan”',
      time: '13:52',
      category: 'SongiYaniliklar',
      id: 19,
      descr:
        'Aziya Invest Favorit MCHJ — bu nom sizga judayam tanish to‘g‘rimi? Topdingiz, aynan shu MCHJ rahbari Toshkent shahri Yashnobod tumani Izzat ko‘chasida qurilishi rejalashtirilgan ko‘p qavatli uylardan kvartira sotib olish bo‘yicha shartnoma tuzgan mingdan ortiq fuqarolarni aldab, salkam 164 milliard so‘mga chuv tushirdi.',
    },
    {
      img: 'img/yangiliklar/img5.jpg',
      name: 'Qozog‘iston Lukashenko bayonoti ortidan Belarus elchisini TIVga chaqirtirdi',
      time: '13:37',
      category: 'SongiYaniliklar',
      id: 20,
      descr:
        'Belarus prezidenti Aleksandr Lukashenkoning bayonoti ortidan Qozog‘iston Tashqi ishlar vazirligi mamlakatdagi Belarus elchisini chaqirtirdi. Bu haqda vazirlik saytida xabar berildi.',
    },
  ],
];

if (!localStorage.getItem('data')) {
  localStorage.setItem('data', JSON.stringify(defaultData));
}

function dataFunc() {
  const data = JSON.parse(localStorage.getItem('data'));
  document.querySelector('.data-news').innerHTML = data
    .map(
      (group) => `
      <div class="news-div">
        ${group
          .map((item) => {
            return `
          <div class="news-div-item" id=${item.id}>
            <img src="${item.img}" alt="">
            <p>${
              item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name
            }</p>
            <p>${item.time}</p>
          </div>
        `;
          })
          .join('')}
      </div>
    `
    )
    .join('');
}
dataFunc();

document.querySelector('#hamburger-btn').addEventListener('click', () => {
  document.querySelector('.hamburger-div').classList.add('active');
});

document.querySelector('#search-btn').addEventListener('click', () => {
  document.querySelector('.search-panel').classList.add('active-search');
});

document.querySelectorAll('.close-2').forEach((item) =>
  item.addEventListener('click', () => {
    document.querySelector('.hamburger-div').classList.remove('active');
    document.querySelector('.search-panel').classList.remove('active-search');
    document.querySelector('.admin-panel').classList.remove('admin-active');
  })
);

function renderNavItems(item, index) {
  document.querySelectorAll(item).forEach((navItem) =>
    navItem.addEventListener('click', () => {
      document.querySelector('.news-feature').style.display = 'none';
      document.querySelector('.hamburger-div').classList.remove('active');
      const data = JSON.parse(localStorage.getItem('data'));
      document.querySelector('.data-news').innerHTML = `
        <div class="news-div">
          ${data[index]
            .map(
              (newsItem) => `
            <div class="news-div-item news-div-item-category" id="${
              newsItem.id
            }">
              <img src="${newsItem.img}" alt="">
              <p>${
                newsItem.name.length > 35
                  ? newsItem.name.slice(0, 35) + '...'
                  : newsItem.name
              }</p>
              <p>${newsItem.time}</p>
            </div>
          `
            )
            .join('')}
        </div>
      `;
      document.querySelectorAll('.news-div-item-category').forEach((item) => {
        item.addEventListener('click', () => {
          const itemId = item.id;
          const data = JSON.parse(localStorage.getItem('data'));

          const newsItem = data.flat().find((news) => news.id == itemId);

          if (newsItem) {
            document.querySelector('.about-news').style.display = 'block';
            document.querySelector('.news-feature').style.display = 'none';
            document.querySelector(
              '.about-news'
            ).innerHTML = `<p>${newsItem.category}</p> <p>${newsItem.name}</p> <img src="${newsItem.img}" alt="" />  <p>${newsItem.descr}</p> <p>${newsItem.time}</p>`;
          } else {
            console.log('Yangilik topilmadi');
          }
        });
      });
    })
  );
}

renderNavItems('.uzb', 0);
renderNavItems('.sport', 1);
renderNavItems('.fan', 2);
renderNavItems('.yangiliklar', 3);

function renderLastNews() {
  const data = JSON.parse(localStorage.getItem('data'));
  document.querySelector('.sidebar-ul').innerHTML = data[3]
    .map(
      (item) => `
    <li>
      <div>
        <p>${
          item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name
        }</p>
        <p>${item.time}</p>
      </div>
      <img src="${item.img}" alt="">
    </li>
    `
    )
    .join('');
}
renderLastNews();

const input1 = document.querySelector('.input-1');
const searchBtn = document.querySelector('.submit-button');
const dataNewsDiv = document.querySelector('.data-news');

searchBtn.addEventListener('click', () => {
  document.querySelector('.search-panel').classList.remove('active-search');
  const query = input1.value.toLowerCase();
  const data = JSON.parse(localStorage.getItem('data'));
  const filteredData = data
    .flat()
    .filter((item) => item.name.toLowerCase().includes(query));
  document.querySelector('.search-panel').classList.remove('active');
  dataNewsDiv.innerHTML =
    filteredData.length > 0
      ? `
    <div class="news-div">
      ${filteredData
        .map(
          (item) => `
        <div class="news-div-item news-div-item-search" id='${item.id}'>
          <img src="${item.img}" alt="">
          <p>${
            item.name.length > 35 ? item.name.slice(0, 35) + '...' : item.name
          }</p>
          <p>${item.time}</p>
        </div>
      `
        )
        .join('')}
    </div>
  `
      : `<p>Natija topilmadi.</p>`;
  document.querySelectorAll('.news-div-item-search').forEach((item) => {
    item.addEventListener('click', () => {
      const itemId = item.id;
      const data = JSON.parse(localStorage.getItem('data'));
      console.log(itemId);

      const newsItem = data.flat().find((news) => news.id == itemId);

      if (newsItem) {
        document.querySelector('.about-news').style.display = 'block';
        document.querySelector('.news-feature').style.display = 'none';
        document.querySelector(
          '.about-news'
        ).innerHTML = `<p>${newsItem.category}</p> <p>${newsItem.name}</p> <img src="${newsItem.img}" alt="" />    <p>${item.descr}</p> <p>${newsItem.time}</p>`;
      } else {
        console.log('Yangilik topilmadi');
      }
    });
  });
});

const registerBtn = document.querySelector('.register-btn');
const registerModal = document.querySelector('.register-modal');
const closeRegister = document.querySelector('.close-register');
const formInp1 = document.querySelector('.form-enter1');
const formInp2 = document.querySelector('.form-enter2');

registerBtn.addEventListener('click', () => {
  document.querySelector('.hamburger-div').classList.remove('active');
  registerModal.style.display = 'block';
});

closeRegister.addEventListener('click', () => {
  registerModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === registerModal) {
    registerModal.style.display = 'none';
  }
});

document.querySelector('.enter-admin-panel').addEventListener('click', (e) => {
  e.preventDefault();
  if (formInp1.value === 'davlatbek' && formInp2.value === '38FSskdj') {
    document.querySelector('.admin-panel').classList.add('admin-active');
    registerModal.style.display = 'none';
  }
});
let selectedText = "O'zbekiston";
const selectElement = document.querySelector('select');

selectElement.addEventListener('change', function() {
  const selectedValue = selectElement.value;

  // faqat 'option1' tanlanganida
  if (selectedValue === 'opt-1') {
   selectedText = "O'zbekiston"
  }  
  if (selectedValue === 'opt-2') {
    selectedText = "Sport"
   }
   if (selectedValue === 'opt-3') {
    selectedText = "Fan va Texnika"
   }
   if (selectedValue === 'opt-4') {
    selectedText = "So'ngi yangiliklar"
   }
   if (selectedText == "O'zbekiston") {
    addNews(
      document.querySelector('.add-btn1'),
      0,
      document.querySelector('#add-uzb'),
      document.querySelector('#add-uzb2'),
      document.querySelector('#add-uzb2'),
      selectedText,
      document.querySelector('#add-uzb6')
    );
  }
  if (selectedText == 'Sport') {
    addNews(
      document.querySelector('.add-btn1'),
      1,
      document.querySelector('#add-uzb'),
      document.querySelector('#add-uzb2'),
      document.querySelector('#add-uzb2'),
      selectedText,
      document.querySelector('#add-uzb6')
    );
  }
  if (selectedText == 'Fan va Texnika') {
    addNews(
      document.querySelector('.add-btn1'),
      2,
      document.querySelector('#add-uzb'),
      document.querySelector('#add-uzb2'),
      document.querySelector('#add-uzb2'),
      selectedText,
      document.querySelector('#add-uzb6')
    );
  }
  if (selectedText == "So'ngi yangiliklar") {
    addNews(
      document.querySelector('.add-btn1'),
      3,
      document.querySelector('#add-uzb'),
      document.querySelector('#add-uzb2'),
      document.querySelector('#add-uzb2'),
      selectedText,
      document.querySelector('#add-uzb6')
    );
  }
});

function addNews(
  btn,
  categoryIndex,
  imgInput,
  nameInput,
  idInput,
  category,
  descriptionInput
) {
  btn.addEventListener('click', () => {
    if (
      imgInput.value !== '' &&
      nameInput.value !== '' &&
      category.value !=='tanlang' &&
      descriptionInput.value !== ''
    ) {
      document.querySelector('.admin-panel').classList.remove('admin-active');
      const storedData =
        JSON.parse(localStorage.getItem('data')) || defaultData;
      storedData[categoryIndex].push({
        img: imgInput.value,
        name: nameInput.value,
        time: `${String(new Date().getDay()).length ==1 ? `0${new Date().getDay()}` : new Date().getDay() }.${String(new Date().getMonth()+1).length ==1 ? `0${new Date().getMonth()+1}` : new Date().getMonth+1() }.${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}`,
        id: String(idInput.value).slice(0, 10) + Math.floor(Math.random()*99),
        category : category,
        descr: descriptionInput.value,
      });
      localStorage.setItem('data', JSON.stringify(storedData));
      dataFunc();
      renderLastNews();
      location.reload();
    }
  });
}


document.querySelector('.logo').addEventListener('click', () => {
  location.reload();
});

document.querySelectorAll('.news-div-item').forEach((item) => {
  item.addEventListener('click', () => {
    const itemId = item.id;
    const data = JSON.parse(localStorage.getItem('data'));

    const newsItem = data.flat().find((news) => news.id == itemId);

    if (newsItem) {
      document.querySelector('.about-news').style.display = 'block';
      document.querySelector('.news-feature').style.display = 'none';
      document.querySelector(
        '.about-news'
      ).innerHTML = `<p>${newsItem.category}</p> <p>${newsItem.name}</p> <img src="${newsItem.img}" alt="" />  <p>${newsItem.descr}</p> <p>${newsItem.time}</p>`;
    } else {
      console.log('Yangilik topilmadi');
    }
  });
});
