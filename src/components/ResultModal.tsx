import { Fragment, useRef, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ColorSystem from 'utils/ColorSystem';
import { useNavigate } from 'react-router-dom';

interface Props {
  openinit: any;
  closeModal: any;
  id: string;
}
export default function ResultModal({ openinit, closeModal, id }: Props) {
  const [open, setOpen] = useState(openinit);

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate(`/mainpage2${id}`);
  };

  return (
    <div>
      <Transition.Root show={openinit} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel>
                  <div
                    className="overflow-hidden rounded-lg shadow-xl md:w-128 md:h-96 w-64 h-48 flex justify-center items-center"
                    style={{ backgroundColor: ColorSystem.MainColor.Primary }}
                  >
                    <div className="mt-3 flex justify-center items-center flex-col md:w-128 md:h-96 w-64 h-48">
                      <Dialog.Title as="h3" className="font-press-start font-bold text-2xl text-slate-100 md:w-52 w-24">
                        편지 작성이 완료되었습니다!
                      </Dialog.Title>
                      <div className="mt-2 flex justify-center">
                        <img src="images/letterimg.png" alt="a" className="md:w-48 w-24" />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="absolute top-0 right-0 rounded-full m-2 bg-slate-700 px-3 py-1 font-medium text-white "
                    onClick={goToMain}
                  >
                    X
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
