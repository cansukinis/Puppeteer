const fs = require('fs');
const PDFDocument = require('pdfkit');


const doc = new PDFDocument();
const outputPath = 'urunler2.pdf';
let isFirst = true;

doc.pipe(fs.createWriteStream(outputPath));

for (let i = 1; i <= 6; i++) {
  const imagePath = `urun_${i}.png`;
  const baslik = `${i}.Ürün`;

  if (fs.existsSync(imagePath)) {
    if (!isFirst) {
      doc.addPage();
    } else {
      isFirst = false;
    }

    
    doc.fontSize(16).text(baslik, {
      align: 'center',
      underline: true
    });

    doc.moveDown(0.5); 

    
    doc.image(imagePath, {
      fit: [500, 400],
      align: 'center',
      valign: 'center'
    });
  } else {
    console.log(`Dosya bulunamadı: ${imagePath}`);
  }
}

doc.end();
console.log('PDF oluşturuldu:', outputPath);