export default function EmailInput() {
  return (
    <div className="input-container flex flex-col gap-4">
      <input
        className="border-2 rounded-3xl px-4 py-2"
        type="text"
        placeholder="Your email address..."
      />
      <button className="text-white rounded-3xl">Notify Me</button>
    </div>
  );
}
