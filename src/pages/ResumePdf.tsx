import useResumeStore from '@/zustand/ResumeStore';

function ResumePdf() {
  // state.
  const capturedImageUrl = useResumeStore((state) => state.capturedImageURL);
  
  return (
    capturedImageUrl && (
    <div className="border-4 border-dashed border-green-400 p-2 bg-green-50">
      <img 
        src={capturedImageUrl} 
        alt="Captured Profile Section" 
        className="w-full h-auto rounded-lg shadow-lg"
        style={{ minWidth: '100%' }}
      />
    </div>
    )
  );
}

export default ResumePdf;
