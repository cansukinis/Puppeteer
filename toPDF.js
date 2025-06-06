const fs = require('fs');
const PDFDocument = require('pdfkit');

const doc = new PDFDocument();
const outputPath = 'urunler.pdf';
let isFirst=true;

doc.pipe(fs.createWriteStream(outputPath));

for (let i = 1; i <= 6; i++) {
  const imagePath = `urun_${i}.png`;

  if (fs.existsSync(imagePath)) {
    if(!isFirst){
      doc.addPage();
    }
    else{
      isFirst=false;
    }
    doc.image(imagePath, {
        align: 'center',
        valign: 'center'
    });
  } else {
    console.log(`Dosya bulunamadı: ${imagePath}`);
  }
}

doc.end();

console.log('PDF oluşturuldu:', outputPath);