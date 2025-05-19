import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { XMLParser } from 'fast-xml-parser';


// Crie uma instância local de pdfMake para configurar o vfs
const pdfMakeInstance = { ...pdfMake };
(pdfMakeInstance as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-nfe-pdf-generator',
  templateUrl: './nfe-pdf-generator.component.html',
  styleUrls: ['./nfe-pdf-generator.component.css']
})
export class NfePdfGeneratorComponent {

  xmlContent: string = ''; // Armazena o conteúdo do XML

  // Função que é chamada quando o usuário seleciona um arquivo XML
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.xmlContent = e.target.result; // Carrega o conteúdo do XML
        this.generatePdfFromXml(this.xmlContent); // Gera o PDF
      };
      reader.readAsText(file); // Lê o arquivo como texto
    }
  }

  // Função que gera o PDF a partir do XML
  generatePdfFromXml(xmlString: string) {
  const parser = new XMLParser({
    ignoreAttributes: false, // Mantém atributos, se houver
  });

  const result = parser.parse(xmlString);

  try {
    const nfe = result.nfeProc.NFe;

    const emitente = nfe.infNFe.emit;
    const destinatario = nfe.infNFe.dest;
    const produtos = Array.isArray(nfe.infNFe.det)
      ? nfe.infNFe.det
      : [nfe.infNFe.det]; // Garante array

    const documentDefinition = {
      content: [
        { text: 'Nota Fiscal Eletrônica', style: 'header' },
        { text: `Emitente: ${emitente.xNome}`, style: 'subheader' },
        { text: `Destinatário: ${destinatario.xNome}`, style: 'subheader' },
        { text: '\n' },
        { text: 'Produtos:', style: 'subheader' },
        {
          table: {
            body: [
              ['Descrição', 'Quantidade', 'Valor Unitário', 'Valor Total'],
              ...produtos.map((produto: any) => [
                produto.prod.xProd,
                produto.prod.qCom,
                produto.prod.vUnCom,
                produto.prod.vProd,
              ])
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 14,
          bold: true
        }
      }
    };

    pdfMakeInstance.createPdf(documentDefinition).download('nfe.pdf');

  } catch (error) {
    console.error('Erro ao processar XML:', error);
  }
}

}
