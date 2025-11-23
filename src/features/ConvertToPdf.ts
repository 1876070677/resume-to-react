/* eslint-disable no-await-in-loop, no-restricted-syntax, new-cap */
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SECTION_MARGINS_MM = {
  'profile-section': 15,
  'introduce-section': 15,
  'skill-section': 0,
  'experience-section': 20,
  'project-section': 0,
  'opensource-section': 0,
  'presentation-section': 0,
  'article-section': 20,
  'education-section': 20,
  'etc-section': 20,
  'footer-section': 0,
};
type SectionIdKey = keyof typeof SECTION_MARGINS_MM;
const SECTION_IDS: SectionIdKey[] = [
  'profile-section', 
  'introduce-section',
  'skill-section', 
  'experience-section',
  'project-section',
  'opensource-section',
  'presentation-section',
  'article-section',
  'education-section',
  'etc-section',
  'footer-section',
];
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_X = 15;
const MARGIN_Y = 20;
const CONTENT_WIDTH_MM = A4_WIDTH_MM - (MARGIN_X * 2);
const CONTENT_HEIGHT_LIMIT_MM = A4_HEIGHT_MM - (MARGIN_Y * 2);

export const handleCapture = async (ref: HTMLElement) => {
  try {
    const canvas = await html2canvas(ref, {
      scale: 1.5,
      useCORS: true,
      allowTaint: true,
      logging: true,
    });

    const imageDataURL = canvas.toDataURL('image/png');
    return {
      canvas,
      imageDataURL,
    };
  } catch (err) {
    return {
      canvas: null,
      imageDataURL: null,
    };
  }
};

export const createMultiPagePDFPerSection = async (ref: HTMLDivElement) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  let cursorY = MARGIN_Y;

  for (const sectionId of SECTION_IDS) {
    const element = ref.querySelector(`#${sectionId}`) as HTMLElement;
    if (element) {
      const { imageDataURL } = await handleCapture(element);

      const DOM_WIDTH = element.offsetWidth;
      const DOM_HEIGHT = element.offsetHeight;
      const imageRatio = DOM_HEIGHT / DOM_WIDTH; 
      const sectionHeightMM = CONTENT_WIDTH_MM * imageRatio; 
        
      if (cursorY + sectionHeightMM > CONTENT_HEIGHT_LIMIT_MM) {
        pdf.addPage();
        cursorY = MARGIN_Y; 
      }

      if (imageDataURL) {
        pdf.addImage(
          imageDataURL, 
          'PNG', 
          MARGIN_X,
          cursorY,
          CONTENT_WIDTH_MM,
          sectionHeightMM,
        );

        cursorY += sectionHeightMM;
        // 섹션 사이에 여백.
        const extraMargin = SECTION_MARGINS_MM[sectionId] || 0;
        cursorY += extraMargin;
      }
    }
  }

  pdf.save('multipage_resume_section.pdf');
};
