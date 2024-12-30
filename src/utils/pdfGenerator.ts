import { jsPDF } from 'jspdf';

export async function generatePDF(content: string, documentType: string): Promise<void> {
  // Create PDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  // PDF dimensions
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 40;
  const usableWidth = pageWidth - (margin * 2);

  // Add title
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text(documentType.toUpperCase(), margin, margin);

  // Add content
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  
  // Split content into paragraphs
  const paragraphs = content.split('\n\n');
  
  let yPosition = margin + 40; // Start below title

  for (const paragraph of paragraphs) {
    // Handle headers (lines starting with #)
    if (paragraph.startsWith('#')) {
      pdf.setFontSize(16);
      pdf.setFont('helvetica', 'bold');
      const headerText = paragraph.replace(/^#+ /, '');
      pdf.text(headerText, margin, yPosition);
      yPosition += 30;
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      continue;
    }

    // Split paragraph into lines that fit the page width
    const lines = pdf.splitTextToSize(paragraph, usableWidth);
    
    // Check if we need a new page
    if (yPosition + (lines.length * 15) > pdf.internal.pageSize.getHeight() - margin) {
      pdf.addPage();
      yPosition = margin;
    }

    // Add lines to PDF
    pdf.text(lines, margin, yPosition);
    yPosition += lines.length * 15 + 15; // Add extra spacing between paragraphs
  }

  // Download the PDF
  pdf.save(`${documentType.toLowerCase()}-${Date.now()}.pdf`);
}