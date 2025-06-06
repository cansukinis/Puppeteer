# Puppeteer
<img align="right" width="120" src="https://static-00.iconduck.com/assets.00/puppeteer-icon-1371x2048-otngklvq.png">

### Puppeteer nedir?
Google tarafından geliştirilen, Chrome veya Chromium tarayıcılarını kontrol etmek için üst düzey bir API sağlayan güçlü bir Node.js kütüphanesidir. Default olarak headless modda çalışır. Bu özelliği headful olarak değiştirebilirsiniz.

**Headless mode (Başsız):** Tarayıcının arka planda, arayüz görünmeden çalıştığı moddur. Bu sayede çok fazla sistem kaynağı tüketmeden son derece hızlı testler koşulabilir.

**Headful mode (Başlı):** Tarayıcı, gerçek bir kullanıcı gibi görünür şekilde açılır.

UI test otomasyonu, veri kazıma, performans testleri, PDF ve ekran görüntüsü alma işlemler için kullanılabilir.
- **Veri Kazıma (Web Scraping):** Sayfalardan metin, görsel, tablo, fiyat, haber başlığı, ürün bilgisi vb. verileri çekilebilir.
- **UI Test Otomasyonu:** Klavye, mouse hareketleri, görsel işlemler, dosya veya form gönderme gibi işlemler yapılabilir.
- **Performans Testleri:** Sayfa yükleme süreleri, network istekleri, başarılı&başarısız loglar, DOM büyüklüğü, render hızı gibi bilgiler analiz edilebilir.
- **PDF ve Ekran Görüntüsü Alma:** Sayfa üzerinden ekran görüntüsü veya ekran kaydı alınabilir. Alınan ekran görüntüleri PDF dosyasına çevrilebilir.

Daha derine inmeniz için anlatımını faydalı bulduğum [site](https://www.tutorialspoint.com/puppeteer/index.htm) linkini buraya ekliyorum.

------------

#### Örnek Testler
- Terminale öncelikle **`node test1`** yazarsanız Headless modda nasıl çalıştığını görebilirsiniz. Explorer alanında example.png adında bir google ekran görüntüsü eklendiği görülür.
- Terminale **`node test2`** yazarsanız Headful modda çalıştığını görmüş olacaksınız. Explorer alanında example.png adında bir google ekran görüntüsü eklendiği görülür.
- Terminale **`node test3`** yazarsanız amazon sitesindeki en çok satan 6 dizüstü bilgisayarın ekran görüntüsü alınır ve ürün başlığı, fiyatı, puan verileri bir txt dosyasına yazdırılır.
- Terminale **`node toPDF`** yazarsanız *test3* aşamasında alınan görsellerin PDF haline geldiğini görmüş olacaksınız.
- Terminale **`node toPDFwithTxt`** yazarsanız *test3* aşamasında alınan görsellere başlık eklenerek PDF haline geldiğini görmüş olacaksınız. Başlık yerine ürün bilgisi, fiyatı, açıklaması gibi bilgiler de eklenebilir.
- Terminale **`node hata`** yazarsanız terminalde hata mesajı alınabildiğini görmüş olacaksınız. Bu loglar ihtiyaca göre revize edilebilir.
- Terminale **`node mobil`** yazarsanız amazon web sayfasının *iphone X* telefonunda görüntüsünü ss almış olursunuz. Yani web sayfalarının mobil simülasyonu yapılabilmektedir.
- Terminale **`node test:all`** yazarsanız *tests* klasöründeki tüm testlerin çalıştırıldığını görmüş olacaksınız. Config klasöründe test edilecek butonların ortak özellikleri (Örneğin URL bilgisi) tanımlanır. Package.json dosyasında tanımladığımız script çalıştırılır. Buradaki amaç, aynı sayfa üzerinde yapılan işlemler için tekrar tekrar aynı tanımları yapmaktan kaçınmaktır. Ayrıca script ile birden fazla testin aynı anda çalıştırabileceğinizi görmüş oldunuz.

**NOT:** png, txt, pdf çıktıları explorer alanından görülür.
