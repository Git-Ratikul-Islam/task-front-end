import { FaLayerGroup } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import { BiCalendar } from "react-icons/bi";

const Home = () => {
      return (
            <div className="lg:max-w-[1850px] md:max-w-screen-2xl sm:max-w-screen-md mx-auto">
                  <div className="grid grid-cols-6 gap-96 overflow-x-scroll scrolling-touch items-start">
                        <div className="card w-[360px] bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <button className=" bg-[#d21010] w-6 rounded-full btn-xs hover:bg-red-400  h-2 rounded-r-none ml-4 mt-4"><span className="ml-6 text-base text-center justify-center font-bold text-gray-500">Incomplete</span>
                                    </button>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                              </div>

                              <div className="card w-[345px] text-gray-500 mt-5 mx-auto bg-white rounded-none h-[135px] ">
                                    <div className="mt-3">
                                          <div className="flex justify-between mx-4 mt-2">
                                                <div>
                                                      <div className="avatar">
                                                            <div className="w-6 rounded-full">
                                                                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                            </div>
                                                            <h1 className="text-base ml-2 text-gray-500 font-bold">Client name</h1>
                                                      </div>

                                                </div>
                                                <div>
                                                      <div className="avatar">
                                                            <div className="w-6 rounded-full">
                                                                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
                                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                      </div>

                                                </div>
                                                <div className="avatar mx-4 mt-3">
                                                      <div className="w-6 rounded-full">
                                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                      </div>

                                                </div>
                                          </div>

                                          <h1 className="bg-base-200  rounded-xl h-8 text-center w-8 mt-2 font-semibold">3+</h1>
                                          <h1 className="mt-2 ml-3 font-semibold"><IoChatbubblesOutline className="text-md font-semibold inline mr-1"></IoChatbubblesOutline>21</h1>
                                          <h1 className="mt-2 ml-3 font-semibold"><CiLink className="inline font-semibold text-lg mt-0 mr-1"></CiLink>21</h1>
                                          <h1 className="mt-2 ml-3 font-semibold"><BiCalendar className="inline font-semibold text-lg mb-1 mr-1"></BiCalendar>21-12-23</h1>

                                    </div>

                              </div>
                        </div>
                        <div className="card w-[360px]  bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <button className=" bg-[#00b5ff] w-6 rounded-full btn-xs   h-2 rounded-r-none ml-4 mt-4">
                                    </button><span className="mt-4 mr-[210px] text-base font-bold text-gray-500">To Do</span>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                              </div>

                              <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                          <button className="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-[360px]  bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <button className=" bg-[#ffe700] w-6 rounded-full btn-xs  h-2 rounded-r-none ml-4 mt-4"><span className="ml-6 text-base text-center justify-center font-bold text-gray-500">Doing</span>
                                    </button>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold text-gray-500">0</button>
                              </div>

                              <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                          <button className="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-[360px]  bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <h1 className="text-gray-500 text-base font-bold mt-6 ml-4">Under Review</h1>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                              </div>

                              <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                          <button className="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-[360px]  bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <h1 className="text-gray-500 text-base font-bold mt-6 ml-4">Completed</h1>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                              </div>

                              <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                          <button className="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-[360px]  bg-[#f2f4f7] h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <h1 className="text-gray-500 text-base font-bold mt-6 ml-4">Overdraft</h1>
                                    <button className=" btn-sm bg-[#e8eef3] mt-4 mr-4 font-bold">0</button>
                              </div>

                              <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                          <button className="btn btn-primary">Buy Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Home;