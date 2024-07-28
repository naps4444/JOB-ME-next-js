"use client";
import Image from "next/image";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function UpdateStatusModal({show, setShow}) {
//   const [open, setOpen] = useState(true);

 

  return (
    <Dialog open={show} onClose={setShow} className="relative z-10">
      <DialogBackdrop
        transition
        className=" data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full mt-10 items-center justify-center text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-lg transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg  lg:w-full data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className=" sm:flex sm:items-start w-full">
                <div className="w-full mt-3 text-left sm:mt-0 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="flex justify-between items-start text-base font-semibold leading-6 text-gray-900"
                  >
                    Update Your Application Status
                    <Image
                      onClick={() => setShow(false)}
                      src="/x.svg"
                      alt="top cancel"
                      width={20}
                      height={30}
                      className=""
                    />
                  </DialogTitle>
                  <p className="flex justify-between items-end ">
                    Only job seeker can see this!
                  </p>
                  <div className="my-3">
                    <p className=" flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f1.svg"
                        alt="Applied"
                        width={25}
                        height={25}
                      />
                      Applied
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3">
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f2.svg"
                        alt="Interviewing"
                        width={25}
                        height={25}
                      />
                      Interviewing
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3">
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f3.svg"
                        alt="Received offer"
                        width={25}
                        height={25}
                      />
                      Received offer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3">
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f4.svg"
                        alt="Hired by employer"
                        width={25}
                        height={25}
                      />
                      Hired by employer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3">
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f5.svg"
                        alt="Not hired by employer"
                        width={25}
                        height={25}
                      />
                      Not hired by employer
                    </p>
                  </div>
                  <hr className="border-y-[1px] border-black mb-1" />
                  <div className="my-3">
                    <p className="flex font-semibold justify-start items-center gap-2">
                      <Image
                        src="/f6.svg"
                        alt="No longer interested"
                        width={25}
                        height={25}
                      />
                      No longer interested
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}