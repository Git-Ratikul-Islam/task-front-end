

const Home = () => {
      return (
            <div className="lg:max-w-[1850px] md:max-w-screen-2xl sm:max-w-screen-md mx-auto">
                  <div className="grid grid-cols-6 ">
                        <div className="card w-96 bg-base-200 h-[840px] mt-4 shadow-xl rounded-none">
                              <div className="flex justify-between">
                                    <button className=" bg-[#d21010] w-6 rounded-full btn-xs hover:bg-red-400  h-2 rounded-r-none ml-4 mt-4"><span className="ml-6 text-base text-center justify-center font-bold">Incomplete</span>
                                    </button>
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