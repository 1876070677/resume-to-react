export default function ProfileImage({ src }: { src: string }) {
  return (
    <div className="pb-3 text-center">
      <img style={{ maxHeight: '320px' }} className="img-fluid rounded" src={src} alt="Profile" />
    </div>
  );
}
