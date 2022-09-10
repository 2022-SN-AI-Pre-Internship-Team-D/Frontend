import 'tailwindcss/tailwind.css';

function MailInput() {
  return (
    <div className=" text-center bg-[url('images/letterbg.png')] rounded-lg h-fit " style={{ width: '580px' }}>
      <textarea
        placeholder="fasdfasdf"
        cols={45}
        rows={9}
        className="p-4 rounded-lg bg-transparent text-xl leading-9 focus:outline-none line-clamp-3"
      />
    </div>
  );
}
export default MailInput;
