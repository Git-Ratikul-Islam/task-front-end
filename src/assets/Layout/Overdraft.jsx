import { FaLayerGroup } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { RiAttachment2 } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiCalendar } from "react-icons/bi";
import './styles.css';
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const Overdraft = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [fileCount, setFileCount] = useState();

      const openModal = () => {
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setIsModalOpen(false);
      };

      const handleSubmit = e => {
            // e.preventDefault();
            const form = e.target;
            const file = form.file.value;
            const newFile = { file };
            console.log(newFile);
            // send data to the server
            fetch('http://localhost:5000/task', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newFile)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                              Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "File uploaded successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                              });
                        }
                        closeModal();
                  });


      };
      const tasksFile = useLoaderData();

      useEffect(() => {
            // Update file count whenever tasksFile changes
            setFileCount(tasksFile.length);
      }, [tasksFile]);
      return (
            <div className="card w-[360px] bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none ">
                  <div className="flex justify-between">
                        <h1 className="text-gray-500 text-base font-bold mt-6 ml-4">Overdraft</h1>
                        <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                  </div>
                  {/* card starts here */}

                  <div className="overflow-auto  custom-scrollbar-design scrollbar-thumb-[#0070bc] scrollbar-thin  scrollbar-track-[#e2e2e2] mt-2">
                        <div className="card w-[345px] text-gray-500 mt-5 mx-auto bg-white rounded-none h-[135px]  ">
                              <div className="mt-2">
                                    <div className="flex justify-between mx-4 mt-2">
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/FXdWL55/Black-White-Minimalist-Letter-RT-Logo.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2 text-gray-500 font-bold">Ratikul Islam</h1>
                                                </div>

                                          </div>
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/n7jNCXf/395582499-824855409644044-3366447712730888248-n.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2  font-bold text-gray-500">
                                                            Client name</h1>
                                                </div>

                                          </div>
                                    </div>
                                    <div className="flex justify-between mx-4 mt-4">
                                          <div>
                                                <div>
                                                      <div>
                                                            <h1 className="text-black text-xs"><FaLayerGroup className="inline mr-1" /> Lorem ipsum dolor sit amet curn...</h1>
                                                      </div>

                                                </div>

                                          </div>
                                          <div>
                                                <div >
                                                      <h1 className="text-sm bg-base-200 w-10 text-center font-bold">  <LuCalendarDays className="inline text-sm font-bold mb-1" />1/2</h1>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                              {/* last part of the card */}
                              <div className="flex  mx-4">
                                    <div>
                                          <div className="avatar mx-0 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://i.ibb.co/82dQYCJ/372626323-164759486653316-366531122905599354-n.jpg" />
                                                </div>

                                          </div>
                                          <div className="avatar mx-4 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>

                                          </div>
                                    </div>

                                    <h1 className="bg-base-200 font-extrabold  rounded-xl h-8 text-center w-8 mt-2 ">3+</h1>
                                    <h1 className="mt-2 ml-3 font-semibold"><IoChatbubblesOutline className="text-md  inline mr-1"></IoChatbubblesOutline>21</h1>
                                    <div>
                                          <h1
                                                className="mt-2 ml-3 font-semibold"
                                                style={{ cursor: 'pointer' }}
                                                onClick={openModal}
                                          >
                                                <RiAttachment2 className="inline font-semibold text-lg mt-0 mr-1" />{fileCount}

                                          </h1>

                                          <Modal style={{
                                                overlay: {
                                                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                },
                                                content: {
                                                      width: '40%', // Set the width of the modal content
                                                      height: '40%', // Set the height of the modal content
                                                      margin: 'auto', // Center the modal
                                                },
                                          }} isOpen={isModalOpen} onRequestClose={closeModal}>
                                                {/* Your modal content, including the upload form */}
                                                <form className="flex justify-center items-center mt-36" onSubmit={handleSubmit}>
                                                      <input type="file" name="file" />
                                                      <button className="btn bg-[#147cc3] text-white hover:text-black" type="submit">Submit</button>
                                                </form>

                                          </Modal>
                                    </div>
                                    <h1 className="mt-2 ml-[13px] font-semibold"><BiCalendar className="inline  ml-2 text-lg mb-1 mr-1"></BiCalendar>21-12-23</h1>

                              </div>

                        </div>
                        <div className="card w-[345px] text-gray-500 mt-5 mx-auto bg-white rounded-none h-[135px]  ">
                              <div className="mt-2">
                                    <div className="flex justify-between mx-4 mt-2">
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/FXdWL55/Black-White-Minimalist-Letter-RT-Logo.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2 text-gray-500 font-bold">Ratikul Islam</h1>
                                                </div>

                                          </div>
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/n7jNCXf/395582499-824855409644044-3366447712730888248-n.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2  font-bold text-gray-500">
                                                            Client name</h1>
                                                </div>

                                          </div>
                                    </div>
                                    <div className="flex justify-between mx-4 mt-4">
                                          <div>
                                                <div>
                                                      <div>
                                                            <h1 className="text-black text-xs"><FaLayerGroup className="inline mr-1" /> Lorem ipsum dolor sit amet curn...</h1>
                                                      </div>

                                                </div>

                                          </div>
                                          <div>
                                                <div >
                                                      <h1 className="text-sm bg-base-200 w-10 text-center font-bold">  <LuCalendarDays className="inline text-sm font-bold mb-1" />1/2</h1>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                              {/* last part of the card */}
                              <div className="flex  mx-4">
                                    <div>
                                          <div className="avatar mx-0 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://i.ibb.co/82dQYCJ/372626323-164759486653316-366531122905599354-n.jpg" />
                                                </div>

                                          </div>
                                          <div className="avatar mx-4 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>

                                          </div>
                                    </div>

                                    <h1 className="bg-base-200 font-extrabold  rounded-xl h-8 text-center w-8 mt-2 ">3+</h1>
                                    <h1 className="mt-2 ml-3 font-semibold"><IoChatbubblesOutline className="text-md  inline mr-1"></IoChatbubblesOutline>21</h1>
                                    <div>
                                          <h1
                                                className="mt-2 ml-3 font-semibold"
                                                style={{ cursor: 'pointer' }}
                                                onClick={openModal}
                                          >
                                                <RiAttachment2 className="inline font-semibold text-lg mt-0 mr-1" />{fileCount}

                                          </h1>

                                          <Modal style={{
                                                overlay: {
                                                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                },
                                                content: {
                                                      width: '40%', // Set the width of the modal content
                                                      height: '40%', // Set the height of the modal content
                                                      margin: 'auto', // Center the modal
                                                },
                                          }} isOpen={isModalOpen} onRequestClose={closeModal}>
                                                {/* Your modal content, including the upload form */}
                                                <form className="flex justify-center items-center mt-36" onSubmit={handleSubmit}>
                                                      <input type="file" name="file" />
                                                      <button className="btn bg-[#147cc3] text-white hover:text-black" type="submit">Submit</button>
                                                </form>

                                          </Modal>
                                    </div>
                                    <h1 className="mt-2 ml-[13px] font-semibold"><BiCalendar className="inline  ml-2 text-lg mb-1 mr-1"></BiCalendar>21-12-23</h1>

                              </div>

                        </div>
                        <div className="card w-[345px] text-gray-500 mt-5 mx-auto bg-white rounded-none h-[135px]  ">
                              <div className="mt-2">
                                    <div className="flex justify-between mx-4 mt-2">
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/FXdWL55/Black-White-Minimalist-Letter-RT-Logo.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2 text-gray-500 font-bold">Ratikul Islam</h1>
                                                </div>

                                          </div>
                                          <div>
                                                <div className="avatar">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://i.ibb.co/n7jNCXf/395582499-824855409644044-3366447712730888248-n.jpg" />
                                                      </div>
                                                      <h1 className="text-base ml-2  font-bold text-gray-500">
                                                            Client name</h1>
                                                </div>

                                          </div>
                                    </div>
                                    <div className="flex justify-between mx-4 mt-4">
                                          <div>
                                                <div>
                                                      <div>
                                                            <h1 className="text-black text-xs"><FaLayerGroup className="inline mr-1" /> Lorem ipsum dolor sit amet curn...</h1>
                                                      </div>

                                                </div>

                                          </div>
                                          <div>
                                                <div >
                                                      <h1 className="text-sm bg-base-200 w-10 text-center font-bold">  <LuCalendarDays className="inline text-sm font-bold mb-1" />1/2</h1>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                              {/* last part of the card */}
                              <div className="flex  mx-4">
                                    <div>
                                          <div className="avatar mx-0 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://i.ibb.co/82dQYCJ/372626323-164759486653316-366531122905599354-n.jpg" />
                                                </div>

                                          </div>
                                          <div className="avatar mx-4 mt-3">
                                                <div className="w-6 rounded-full">
                                                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>

                                          </div>
                                    </div>

                                    <h1 className="bg-base-200 font-extrabold  rounded-xl h-8 text-center w-8 mt-2 ">3+</h1>
                                    <h1 className="mt-2 ml-3 font-semibold"><IoChatbubblesOutline className="text-md  inline mr-1"></IoChatbubblesOutline>21</h1>
                                    <div>
                                          <h1
                                                className="mt-2 ml-3 font-semibold"
                                                style={{ cursor: 'pointer' }}
                                                onClick={openModal}
                                          >
                                                <RiAttachment2 className="inline font-semibold text-lg mt-0 mr-1" />{fileCount}

                                          </h1>

                                          <Modal style={{
                                                overlay: {
                                                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                },
                                                content: {
                                                      width: '40%', // Set the width of the modal content
                                                      height: '40%', // Set the height of the modal content
                                                      margin: 'auto', // Center the modal
                                                },
                                          }} isOpen={isModalOpen} onRequestClose={closeModal}>
                                                {/* Your modal content, including the upload form */}
                                                <form className="flex justify-center items-center mt-36" onSubmit={handleSubmit}>
                                                      <input type="file" name="file" />
                                                      <button className="btn bg-[#147cc3] text-white hover:text-black" type="submit">Submit</button>
                                                </form>

                                          </Modal>
                                    </div>
                                    <h1 className="mt-2 ml-[13px] font-semibold"><BiCalendar className="inline  ml-2 text-lg mb-1 mr-1"></BiCalendar>21-12-23</h1>

                              </div>

                        </div>

                  </div>

            </div>
      );
};

export default Overdraft;