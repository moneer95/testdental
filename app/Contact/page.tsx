import Image from "next/image";
import whatsapp from '../../public/imgs/contacts/whatsapp.jpg'
import location from '../../public/imgs/contacts/location.jpg'
import call from '../../public/imgs/contacts/call.jpg'
import arrow from '../../public/imgs/contacts/arrow.png'
import insta from '../../public/imgs/contacts/insta.jpg'

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-[90%]  mb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="font-semibold text-[32px] leading-[38px] text-headingBlack text-center">
        Our team is dedicated to providing a swift <br /> and thorough response.
      </h2>
      <p className="font-normal text-center text-[16px] text-[#6D6D6D] mt-4">
        If you have any questions or need assistance, please feel free to
        contact us!
      </p>

      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5">
          <div className="isolate bg-white px-6 lg:px-8">
            <form
              action="#"
              method="POST"
              className="mx-auto max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    First name
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Last name
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Email
                  </label>
                  <div className="mt-[6px]">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Phone number
                  </label>
                  <div className="mt-[6px]">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] "
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        {/* <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        /> */}
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="">
                  <label
                    htmlFor="phone-number"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Do you have WhatsApp on this Phone?
                  </label>
                  <div className="mt-[6px]">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                      <div className="grid shrink-0 w-full grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] "
                        >
                          <option>--</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        {/* <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        /> */}
                      </div>
                      <input
                        id="query"
                        name="query"
                        type="text"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-method"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Preferred Contact Method
                  </label>
                  <div className="mt-[6px]">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ">
                      <div className="grid shrink-0 grid-cols-1 w-full  focus-within:relative">
                        <select className="col-start-1  row-start-1 w-full appearance-none rounded-md py-2.5 pl-3.5 pr-7 text-base text-[#101828] placeholder:text-[#667085] ">
                          <option>WhatsApp</option>
                          <option>Phone Call</option>
                          <option>Message</option>
                        </select>
                        {/* <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        /> */}
                      </div>
                      <input
                        id="contact-method"
                        name="contact-method"
                        type="text"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-[#101828] placeholder:text-[#667085] focus:outline focus:outline-0 text-[16px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[14px] font-medium text-[#344054]"
                  >
                    Message
                  </label>
                  <div className="mt-[6px]">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2.5 text-base border-[#D0D5DD] placeholder:text-[#667085] text-[#667085] border outline-none resize-none"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primaryPurple px-3.5 py-2.5 text-center text-lg font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col mt-10 lg:mt-32 gap-16">
          <div>
            <h3 className="text-[20px] mb-3.5 font-semibold text-headingBlack">
              Call us
            </h3>
            <p className="text-textBlack mb-2 font-normal text-[16px]">
              Call our team Sun-Thur from 8am to 5pm.
            </p>
            <p className="flex items-center gap-2">
              <Image
                src={call}
                alt="Phone Icon"
                className="w-5 h-5"
                width={1000}
                height={1000}
              />
              <span className="text-headingBlack text-base font-medium">
                (+20) 1111555588
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-[20px] mb-3.5 font-semibold text-headingBlack">
              Chat with us
            </h3>
            <p className="text-textBlack mb-2 font-normal text-[16px]">
              Speak to our friendly team via live chat.
            </p>
            <p className="mb-3.5 flex items-center gap-2">
              <Image
                src={arrow}
                alt="Email Icon"
                className="w-5 h-5"
                width={1000}
                height={1000}
              />
              <span className="text-headingBlack text-base font-medium">
                Shoot us an email
              </span>
            </p>
            <p className="mb-3.5 flex items-center gap-2">
              <Image
                src={whatsapp}
                alt="WhatsApp Icon"
                className="w-5 h-5"
                width={1000}
                height={1000}
              />
              <span className="text-headingBlack text-base font-medium">
                Start a chat via WhatsApp
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Image
                src={insta}
                alt="Instagram Icon"
                className="w-5 h-5"
                width={1000}
                height={1000}
              />
              <span className="text-headingBlack text-base font-medium">
                Message us on Instagram
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-[20px] mb-3.5 font-semibold text-headingBlack">
              Visit us
            </h3>
            <p className="text-textBlack mb-2 font-normal text-[16px]">
              Chat to us in person at our office.
            </p>
            <p className="flex items-center gap-2">
              <Image
                src={location}
                alt="Location Icon"
                className="w-5 h-5"
                width={1000}
                height={1000}
              />
              <span className="text-headingBlack text-base font-medium">
                Field End Road, HA5 1QR, England
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
