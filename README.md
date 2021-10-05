Step by step :
1. Langkah pertama untuk membuat sebuah project node.js dan express.js yaitu dengan menginstall node.js dari websitenya.
2. lalu buka command prompt dan buka folder atau buat folder dengan cd(Change Directory) atau mkdir(untuk membuat sebuah folder).
3. lalu ketik "npm init" pada folder yang ditentukan untuk sebuah project
4. lalu isi package name dengan nama folder yang dibuat atau bisa diganti sesuai selera
5.untuk version bisa di pilih version 1.0.0 untuk project ini saya buat dengan versi 0.0.1
6. isi description sesuai dengan projectnya
7. lalu isi entry point dengan nama "app.js"
8. untuk test command bisa langsung di enter
9. git repository tidak perlu diisi
10. keywords diisi dengan rest, express dan mongodb
11. untuk author bisa diisi dengan nama saya "fernando" lalu jika sudah langsung enter untuk "yes"
12. lalu jika file sudah bisa dibuat maka install express.js, mongoose dan cors dengan command "npm install express mongoose cors --save" untuk menginstall ketiga package tersebut dan dipastikan install nya benar di folder yang sudah dibuat tadi
13.lalu masih difolder yang sama ketikan command "code ." menggunakan titik untuk membuka Microsoft Visual Code dengan folder tadi
14. didalam folder tersebut akan ada folder "node_modules" dan 2 file yang bernama "package-lock.json" dan "package.json"
15. lalu masukkan semua file dan folder ke folder tersebut(kecuali node_modules, package-lock.json dan package.json)
16. lalu jalankan menggunakan terminal VScode dengan command "node app.js" dan jika sudah ada nodemon maka bisa digunakan nodemon, jikalau belum ada nodemon maka bisa di install terlebih dahulu dengan command "npm install nodemon --save"