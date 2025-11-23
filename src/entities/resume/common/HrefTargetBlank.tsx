interface HrefTargetBlankProps {
  url: string;
  text?: string;
}

export function HrefTargetBlank({ url, text }: HrefTargetBlankProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className="text-[#007bff] no-underline hover:underline">
      {text || url}
    </a>
  );
}
