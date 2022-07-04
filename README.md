#TR Kurulum
- git clone https://github.com/ylcnnemre/gameTask.git  komutunu kullanarak projeyi bilgisayara indiriniz.
- yarn ve npm install komutlarını kullanarak gerekli paketleri indiriniz. 
- yarn start veya npm run start komutlarını kullanarak projeyi başlatabilirsiniz.


#EN Setup
 - Download the project to your computer using the git clone https://github.com/ylcnnemre/gameTask.git command.
 - Download the necessary packages using the yarn or npm install commands.
 - You can start the project using the yarn start or npm run start command.

#TR
- Projede typescript kullanılmıştır
- Proje anasayfa , market , kitaplık , giriş ve kayıt olmak üzere 5 adet sayfadan oluşmaktadır.
- Giriş yaptığınızda  kimlik doğrulamanız local storage'a yazılır ve orada tutulur
- Kayıt sayfasından üye olduğunuzda kullanıcı bilgileriniz local storage'a yazılır
- library sayfasında daha önce satın aldığınız oyunlar listelenir ve buradan oyununuzu indirebilir veya kaldırabilirsiniz
- market sayfasında bütün oyunlar listelenir.
- State yönetimi olarak ContextApi kullanılmıştır App.tsx dosyası üzerinden inceleyebilirsiniz.
- stillendirme için  scss,antdesign ve tailwindcss kullanılmıştır.
- dil dosyalarına ve oyunların listesinde data dosyası üzerinden erişebilirsiniz.
- iconlar için react-icons paketi , slider için swiper paketi kullanılmıştır

#EN
 - Typescript is used in the project
 - The project consists of 5 pages: homepage, market, library, login and registration.
 - When you log in, your authentication is written to local storage and kept there.
 - When you sign up from the registration page, your user information is written to local storage.
 - The library page lists the games you have purchased before and you can download or uninstall your game from there.
 - All games are listed on the market page.
 - ContextApi is used as state management. You can examine it over the App.tsx file.
 - scss,antdesign and tailwindcss are used for styling.
 - You can access the language files and the list of games through the data file.
 - React-icons package is used for icons, swiper package is used for slider






