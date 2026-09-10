
// Masalsı Renk Paleti (4 Ana Renk + 1 Yedek)
const renkler = ["#ffd1dc", "#b5e2fa", "#d4f0f0", "#fcf4dd", "#e8dff5"];

// 81 İlin Sınır Komşuları Listesi
const komsular = {
  "adana": ["mersin","nigde","kayseri","kahramanmaras","osmaniye","hatay"],
  "adiyaman": ["kahramanmaras","malatya","diyarbakir","sanliurfa"],
  "afyonkarahisar": ["kutahya","usak","denizli","burdur","isparta","konya","eskisehir"],
  "agri": ["van","igdir","kars","erzurum","mus","bitlis"],
  "aksaray": ["konya","ankara","kirsehir","nevsehir","nigde"],
  "amasya": ["samsun","tokat","yozgat","corum"],
  "ankara": ["konya","aksaray","kirsehir","kirikkale","cankiri","bolu","eskisehir"],
  "antalya": ["mugla","burdur","isparta","konya","karaman","mersin"],
  "ardahan": ["kars","erzurum","artvin"],
  "artvin": ["ardahan","erzurum","rize"],
  "aydin": ["mugla","denizli","manisa","izmir"],
  "balikesir": ["canakkale","izmir","manisa","kutahya","bursa"],
  "bartin": ["zonguldak","karabuk","kastamonu"],
  "batman": ["mardin","siirt","bitlis","mus","diyarbakir"],
  "bayburt": ["erzurum","erzincan","gumushane","trabzon","rize"],
  "bilecik": ["bursa","kutahya","eskisehir","bolu","sakarya"],
  "bingol": ["diyarbakir","mus","erzurum","erzincan","tunceli","elazig"],
  "bitlis": ["siirt","sirnak","van","agri","mus","batman"],
  "bolu": ["duzce","sakarya","bilecik","eskisehir","ankara","cankiri","karabuk","zonguldak"],
  "burdur": ["mugla","antalya","isparta","afyonkarahisar","denizli"],
  "bursa": ["balikesir","kutahya","bilecik","sakarya","kocaeli","yalova"],
  "canakkale": ["edirne","tekirdag","balikesir"],
  "cankiri": ["ankara","kirikkale","corum","kastamonu","karabuk","bolu"],
  "corum": ["yozgat","amasya","samsun","sinop","kastamonu","cankiri","kirikkale"],
  "denizli": ["mugla","antalya","burdur","afyonkarahisar","usak","manisa","aydin"],
  "diyarbakir": ["sanliurfa","mardin","batman","mus","bingol","elazig","malatya","adiyaman"],
  "duzce": ["sakarya","bolu","zonguldak"],
  "edirne": ["kirklareli","tekirdag","canakkale"],
  "elazig": ["malatya","diyarbakir","bingol","tunceli","erzincan"],
  "erzincan": ["elazig","tunceli","bingol","erzurum","bayburt","gumushane","giresun","sivas"],
  "erzurum": ["bingol","mus","agri","kars","ardahan","artvin","rize","bayburt","erzincan"],
  "eskisehir": ["bilecik","kutahya","afyonkarahisar","konya","ankara","bolu"],
  "gaziantep": ["kilis","hatay","osmaniye","kahramanmaras","adiyaman","sanliurfa"],
  "giresun": ["gumushane","erzincan","sivas","ordu","trabzon"],
  "gumushane": ["erzincan","bayburt","trabzon","giresun"],
  "hakkari": ["sirnak","van"],
  "hatay": ["gaziantep","osmaniye","adana"],
  "igdir": ["agri","kars"],
  "isparta": ["antalya","burdur","afyonkarahisar","konya"],
  "istanbul": ["tekirdag","kocaeli"],
  "izmir": ["aydin","manisa","balikesir"],
  "kahramanmaras": ["gaziantep","osmaniye","adana","kayseri","sivas","malatya","adiyaman"],
  "karabuk": ["zonguldak","bartin","kastamonu","cankiri","bolu"],
  "karaman": ["mersin","antalya","konya"],
  "kars": ["agri","igdir","ardahan","erzurum"],
  "kastamonu": ["sinop","corum","cankiri","karabuk","bartin"],
  "kayseri": ["adana","nigde","nevsehir","yozgat","sivas","kahramanmaras"],
  "kilis": ["gaziantep"],
  "kirikkale": ["ankara","kirsehir","yozgat","corum","cankiri"],
  "kirklareli": ["edirne","tekirdag"],
  "kirsehir": ["aksaray","nevsehir","yozgat","kirikkale","ankara"],
  "kocaeli": ["istanbul","yalova","bursa","sakarya"],
  "konya": ["karaman","antalya","isparta","afyonkarahisar","eskisehir","ankara","aksaray","nigde","mersin"],
  "kutahya": ["manisa","usak","afyonkarahisar","eskisehir","bilecik","bursa","balikesir"],
  "malatya": ["kahramanmaras","sivas","erzincan","elazig","diyarbakir","adiyaman"],
  "manisa": ["izmir","aydin","denizli","usak","kutahya","balikesir"],
  "mardin": ["sanliurfa","diyarbakir","batman","siirt","sirnak"],
  "mersin": ["adana","nigde","konya","karaman","antalya"],
  "mugla": ["antalya","burdur","denizli","aydin"],
  "mus": ["bitlis","agri","erzurum","bingol","diyarbakir","batman"],
  "nevsehir": ["nigde","aksaray","kirsehir","yozgat","kayseri"],
  "nigde": ["mersin","adana","kayseri","nevsehir","aksaray","konya"],
  "ordu": ["samsun","tokat","sivas","giresun"],
  "osmaniye": ["hatay","gaziantep","kahramanmaras","adana"],
  "rize": ["artvin","erzurum","bayburt","trabzon"],
  "sakarya": ["kocaeli","bursa","bilecik","bolu","duzce"],
  "samsun": ["ordu","tokat","amasya","corum","sinop"],
  "sanliurfa": ["gaziantep","adiyaman","diyarbakir","mardin"],
  "siirt": ["mardin","batman","bitlis","sirnak"],
  "sinop": ["kastamonu","corum","samsun"],
  "sirnak": ["mardin","siirt","bitlis","van","hakkari"],
  "sivas": ["kayseri","yozgat","tokat","ordu","giresun","erzincan","malatya","kahramanmaras"],
  "tekirdag": ["edirne","kirklareli","istanbul","canakkale"],
  "tokat": ["amasya","yozgat","sivas","ordu","samsun"],
  "trabzon": ["rize","bayburt","gumushane","giresun"],
  "tunceli": ["elazig","bingol","erzincan"],
  "usak": ["manisa","denizli","afyonkarahisar","kutahya"],
  "van": ["hakkari","sirnak","bitlis","agri"],
  "yalova": ["kocaeli","bursa"],
  "yozgat": ["kayseri","nevsehir","kirsehir","kirikkale","corum","amasya","tokat","sivas"],
  "zonguldak": ["duzce","bolu","karabuk","bartin"]
};

// Haritayı boyayan güncellenmiş ve kusursuz fonksiyon
function haritayiBoyat() {
    const ilRenkleri = {}; 

    // 1. ADIM: Komşuluk listesindeki eksikleri çift taraflı olarak otomatik onar
    Object.keys(komsular).forEach(il => {
        komsular[il].forEach(komsu => {
            // Eğer komşunun listesinde bu il yoksa, otomatik ekle
            if (komsular[komsu] && !komsular[komsu].includes(il)) {
                komsular[komsu].push(il);
            }
        });
    });

    // 2. ADIM: İlleri komşu sayısına göre büyükten küçüğe sırala (Welsh-Powell)
    // Böylece önce Konya, Ankara gibi kalabalık iller boyanır, çakışma riski sıfırlanır.
    const siraliIller = Object.keys(komsular).sort((a, b) => komsular[b].length - komsular[a].length);

    // 3. ADIM: Akıllı Boyama
    siraliIller.forEach(il => {
        let kullanilanRenkler = new Set();
        
        // Komşuların renklerine bak
        komsular[il].forEach(komsu => {
            if (ilRenkleri[komsu] !== undefined) {
                kullanilanRenkler.add(ilRenkleri[komsu]);
            }
        });

        // Çakışmayan ilk boş rengi kap
        for (let i = 0; i < renkler.length; i++) {
            if (!kullanilanRenkler.has(i)) {
                ilRenkleri[il] = i;
                break;
            }
        }

        // Güvenlik: Eğer renk kalmazsa (ki artık kalacak), siyah olmasın diye 0. rengi ata
        if (ilRenkleri[il] === undefined) {
            ilRenkleri[il] = 0; 
        }
    });

    // 4. ADIM: Renkleri haritadaki yollara (path) uygula
    Object.keys(ilRenkleri).forEach(il => {
        const ilElementleri = document.querySelectorAll(`#${il} path`);
        ilElementleri.forEach(yol => {
            yol.style.fill = renkler[ilRenkleri[il]];
        });
    });
}

// Sayfa yüklendiğinde boyama işlemini başlat
window.addEventListener('DOMContentLoaded', haritayiBoyat);




const provinces = document.querySelectorAll('g[data-iladi]');
const modal = document.getElementById('story-modal');
const closeBtn = document.querySelector('.close-btn');
const provinceTitle = document.getElementById('province-title');
const provinceStory = document.getElementById('province-story');
// Görsel elementini seçiyoruz
const provinceImage = document.getElementById('province-image'); 

// YENİ EKLENEN SES KODU 1: Aktif sesi takip edecek değişkeni tanımlıyoruz
let aktifSes = null;

provinces.forEach(province => {
    // Hem tıklamayı ('click') hem de dokunmayı ('touchstart') dinleyen yeni paket
    ['click', 'touchstart'].forEach(eventType => {
        province.addEventListener(eventType, function(event) {
            // Eğer bu bir dokunma olayıysa, tarayıcının varsayılan 'click' gecikmesini engelle
            if (eventType === 'touchstart') {
                event.preventDefault(); // Mobildeki 300ms gecikmeyi kaldırır
            }

            // --- SENİN MEVCUT MANTIĞIN BURADAN BAŞLIYOR ---
            // Bu mantık artık hem PC'de tıklandığında hem de mobilde dokunulduğunda çalışacak.
            
            const ilId = this.getAttribute('id'); 
            const ilAdi = this.getAttribute('data-iladi'); 
            const seciliIl = hikayeler[ilId];
            
            if (seciliIl) {
                provinceTitle.innerText = seciliIl.baslik;
                provinceStory.innerText = seciliIl.hikaye;
                
                // Veride görsel varsa göster, yoksa gizle
                if (seciliIl.gorsel) {
                    provinceImage.src = seciliIl.gorsel;
                    provinceImage.style.display = "block";
                } else {
                    provinceImage.style.display = "none";
                }

                // SES KODU: Tıklanan ilin masal sesini başlatma
                if (aktifSes) {
                    aktifSes.pause();
                    aktifSes.currentTime = 0; // Başa sar
                }
                // assets klasöründen ilId ile aynı ada sahip mp3'ü bul ve çal (Örn: ankara.mp3)
                aktifSes = new Audio(`assets/${ilId}.mp3`);
                aktifSes.play();

            } else {
                provinceTitle.innerText = ilAdi + " Masalı";
                provinceStory.innerText = "Bu şehrin masalı henüz yazılmamış...";
                provinceImage.style.display = "none";
                
                // Eğer masalı olmayan (henüz eklenmemiş) bir ile tıklanırsa arkadaki sesi sustur
                if (aktifSes) {
                    aktifSes.pause();
                    aktifSes.currentTime = 0;
                }
            }
            
            modal.style.display = "flex";
            // --- SENİN MEVCUT MANTIĞIN BURADA BİTİYOR ---

        });
    });
});
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";

    // YENİ EKLENEN SES KODU 3: Modalı kapatınca sesi durdurma
    if (aktifSes) {
        aktifSes.pause();
        aktifSes.currentTime = 0;
    }
});

// Boşluğa (arkaplana) tıklayınca modalı kapatma ve sesi durdurma
window.addEventListener('click', function(event) {
    // Tıklanan hedefin doğrudan modal'ın arka planı olup olmadığını kontrol et
    if (event.target === modal) {
        modal.style.display = "none";
        
        // Modal kapanınca arkada çalan masal sesini tamamen durdur
        if (aktifSes) {
            aktifSes.pause();
            aktifSes.currentTime = 0;
        }
    }
});