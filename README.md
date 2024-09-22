
# NLP Sentiment Analysis Project

## Proje Tanıtımı

Bu proje, doğal dil işleme (NLP) ve duygu analizi yapabilen bir sistem geliştirmenizi sağlar. Proje, belirli anahtar kelimelerle tanınan niyetleri (intent) tespit ederek ve doğal dil işleme teknikleri kullanarak, kullanıcıdan gelen metni analiz eder ve yanıtlar üretir. Ayrıca, bu analiz sonuçlarını veritabanında saklar.

### Projenin Temel İşlevleri

1. **Doğal Dil İşleme (NLP):**
   - Kullanıcıdan gelen metinlerin, hangi niyetle yazıldığını belirlemek için doğal dil işleme tekniklerini kullanır.
   - Eğitim verilerini kullanarak modeli eğitir ve yeni metinleri tanımlı niyetlerle eşleştirir.

2. **Duygu Analizi:**
   - Kullanıcının metnindeki duygusal tonu (olumlu, olumsuz, nötr vb.) tespit eder ve bu bilgiyi analiz sonuçlarına dahil eder.

3. **Veritabanı Entegrasyonu:**
   - Yapılan analizlerin sonuçları, yanıtlar ve ilgili diğer tüm bilgiler veritabanında saklanır. Böylece, her analiz edilen metnin geçmişi kayıt altına alınır ve gerektiğinde yeniden kullanılabilir.
   - Veritabanı ayrıca, anahtar kelimeler, niyetlere karşılık gelen yanıtlar ve eğitim verileri gibi bilgileri de barındırır.

4. **Anahtar Kelime Tabanlı Intent Tanıma:**
   - Metinde geçen belirli anahtar kelimeleri tanıyarak, metnin hangi niyetle yazıldığını belirler.

5. **Dinamik Yanıtlar:**
   - Niyetlerin tanınmasının ardından, veritabanında tanımlı olan yanıtlar dinamik olarak seçilir ve kullanıcıya iletilir.

### Proje Dosya Yapısı

```
project-root/
│
├── components/
│   ├── database.js                 # Veritabanı işlemleri ve veri saklama fonksiyonları
│   ├── keywordIntentRecognizer.js   # Anahtar kelime bazlı intent tanıma
│   ├── preprocessor.js              # Metin ön işleme işlemleri (temizleme, normalleştirme)
│   └── trainingData.js              # Eğitim verileriyle model eğitimi
│
├── prisma/
│   ├── schema.prisma                # Prisma veritabanı şeması
│
├── node_modules/                    # Proje bağımlılıkları (npm install ile oluşturulur)
│
├── .env                             # Çevre değişkenleri (veritabanı bağlantısı vb.)
│
├── main.js                          # Ana uygulama dosyası (projenin başlangıç noktası)
│
├── package.json                     # Proje bağımlılıkları ve komutlar
│
└── package-lock.json                # Tam bağımlılık ağacı
```

### Dosya ve Klasörlerin Açıklamaları:

- **`components/` Klasörü:**
  - **`database.js`:** Bu dosya, Prisma'yı kullanarak veritabanıyla etkileşimde bulunan fonksiyonları içerir.
  - **`keywordIntentRecognizer.js`:** Anahtar kelime bazlı intent tanıma işlevlerini içerir.
  - **`preprocessor.js`:** Metin temizleme ve ön işleme fonksiyonlarını içerir.
  - **`trainingData.js`:** Bu dosya, veritabanından alınan eğitim verilerini kullanarak NLP modelinin eğitimini gerçekleştirmek için fonksiyonlar içerir.

- **`prisma/` Klasörü:**
  - **`schema.prisma`:** Prisma ORM'in veritabanı şeması burada tanımlanır. Tablolar, sütunlar ve veri tipleri bu dosyada belirtilir.

- **`main.js`:** Ana uygulama dosyasıdır. Bu dosya, uygulamanın başlangıç noktasıdır ve burada NLP süreci, veritabanı etkileşimi ve analiz işlemleri gerçekleştirilir.

- **`.env`:** Çevre değişkenlerini saklamak için kullanılır (örneğin, veritabanı bağlantı bilgileri). Bu dosya genellikle gizli ve hassas bilgileri içerir.

- **`package.json`:** Projenin bağımlılıklarını, scriptlerini ve genel bilgilerini içerir.

- **`node_modules/` Klasörü:** Projeye eklenen tüm npm bağımlılıklarının yer aldığı klasördür. Bu klasör `npm install` komutu ile otomatik olarak oluşturulur.

### Projenin Amacı.

Bu proje, doğal dil işleme (NLP) ve duygu analizi yapabilen bir sistem geliştirmenizi sağlar. Proje, belirli anahtar kelimelerle tanınan niyetleri tespit ederek ve doğal dil işleme tekniklerini kullanarak, kullanıcıdan gelen metni analiz eder ve yanıtlar üretir. Ayrıca, bu analiz sonuçlarını veritabanında saklar. Proje müşteri destek sistemleri, sosyal medya analizi, akademik araştırmalar ve chatbot geliştirme gibi senaryolarda kullanılabilir.
