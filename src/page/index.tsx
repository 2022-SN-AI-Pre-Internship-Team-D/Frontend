import 'tailwindcss/tailwind.css';
import ColorSystem from 'utils/ColorSystem';

function Test() {
  return (
    <div className="flex justify-center" style={{ backgroundColor: ColorSystem.MainColor.Primary }}>
      <span className="text-xl text-blue-700">index</span>
    </div>
  );
}

export default Test;
