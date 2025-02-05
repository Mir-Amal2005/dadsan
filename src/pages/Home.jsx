import React, { useEffect } from 'react'
import AOS from 'aos';

const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='home '>

      <div className="first_section">
        <div className="first_block" data-aos="fade-down">
          <div className="content">
            <img src="src/assets/images/name.svg" alt="log" />
            <p>Biz müştərilərin istək və tələblərinə uyğun olaraq xidmət göstəririkAzərbaycanda mətbəx xidməti sahəsində qabaqcıl şirkətlərdənbiridir.</p>
            <div className="buttons">
              <button>Zəng edin</button>
              <a href="www.instagram.com"><img src="src/assets/images/inst.svg" alt="instagram" width={49} height={49} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery" id='gallery'>
        <div className="left" data-aos="fade-down">
          <img src="src/assets/images/img_7.png" alt="image_7" />
          <img src="src/assets/images/img_2.jpg" alt="image_2" />
          <img src="src/assets/images/img_9.jpg" alt="image_1" />
        </div>
        <div className="center" data-aos="fade-down">
          <img src="src/assets/images/img_4.jpg" alt="image_6" />
        </div>
        <div className="right" data-aos="fade-down">
          <img src="src/assets/images/img_3.jpg" alt="image_3" />
          <img src="src/assets/images/img_6.png" alt="image_4" />
          <img src="src/assets/images/img_5.jpg" alt="image_5" />
        </div>
      </div>

      <div className="second_part">
        <div className="second_block" data-aos="fade-down">
          <div className="top">
            <img src="src/assets/images/salad.svg" alt="salad" />
            <div className="text">
              <h1>Hazır yeməklərin çatdırılması</h1>
              <p>Yeməklər xüsusi sterilizə olunmuş qablarda və termobokslarda çatdırılır. Bizim komandada yalnız çoxillik iş təcrübəsi olan peşəkarlar çalışır. Onlar yemək hazırlamanın bütün detallarına çox diqqətlə yanaşırlar, buna görə də razı qalacaqsınız. Bizim yeməklər dəqiq vaxtında, günün istənilən hissəsində və mütləq isti halda çatdırılır.</p>
            </div>
          </div>
          <div className="bottom" data-aos="fade-right">
            <div className="text">
              <h1>Tədbirlərin təşkili</h1>
              <p>Təşkil etdiyimiz tədbirlər iki istiqamət üzrədir: Korporativ tədbirlər, özəl tədbirlər Korporativ tədbirlərə dövlət və özəl şirkətlərinin, bankların açılış mərasimləri, il dönümləri, məhsul tanıtımı üçün furşetlərin təşkili və digər xidmətləri göstəririk.Özəl tədbirlərimiz isə nişan mərasimləri, adgünləri, həftəsonu yığıncaqları və xüsusi dəvətlərdir.</p>
            </div>
            <img src="src/assets/images/car.svg" alt="car" />
          </div>
        </div>
      </div>

      <div className="third_section">
        <div className="third_block" data-aos="fade-down">
          <div className="title">
            <h1>mətbəxtlər</h1>
            <div className="line"></div>
          </div>
          <div className="cnt">
            <div className="inf" data-aos="fade-down">
              <div className="sh">
                <div className="sh-txt">
                  <h1>İtaliyan mətbəxi 🇮🇹</h1>
                  <p>İtalyan mətbəxi bütün dünyada sevilən və istehlak edilən yemək mədəniyyətidir. Makaron, pizza, risotto və daha çox dadlı yeməkləri ilə zəngindir. İtalyan mətbəxi inqrediyentlərin təzəliyinə və keyfiyyətinə əsaslanır. İtalyan mətbəxi zeytun yağı, pomidor, sarımsaq, soğan, bibər, göbələk, reyhan, rukkola, kəklikotu, rozmarin, müxtəlif pendirlər, salam, vetçina, ət və balıq kimi maddələrlə hazırlanır.</p>
                </div>
              </div>
            </div>
            <div className="inf" data-aos="fade-down">
              <div className="sh">
                <div className="sh-txt">
                  <h1>Türk mətbəxi 🇹🇷</h1>
                  <p>Türkiyənin milli mətbəxi olan türk mətbəxi Osmanlı mədəniyyətinin varisidir. Türk mətbəxində başlanğıc isti şorba ilə hazırlanır. Ət xörəkləri deyildikdə ilk ağıla küftə və kabab gəlir. Bundan əlavə türk yeməklərinə gəlincə, ən çox sevilən yeməklərdən biri də zeytun yağıdır. Paxlava, pudinq, aşura, manna halvası və künefe türk mətbəxinin görkəmlidesertlərindəndir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth_section">
        <div className="fourth_block" data-aos="fade-down">
          <div className="title">
            <h1>Xidmət göstərdik</h1>
          </div>
          <div className="companies">
            <img src="src/assets/images/company1.svg" alt="compnay1" />
            <img src="src/assets/images/company2.svg" alt="company2" />
          </div>
        </div>
      </div>

      <div className="end">
        <img src="src/assets/images/close.svg" alt="close" />
      </div>
    </div>
  )
}

export default Home