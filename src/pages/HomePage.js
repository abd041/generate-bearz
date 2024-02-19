import React, { useState, useRef } from "react";
import { toPng } from "html-to-image";

// import clothes from "../assets/Clothes/Bear Suit.png";

import { background } from "../data/background";
import { clothes } from "../data/cloth";
import { EyeData } from "../data/eye";
import { headData } from "../data/Head";
import { MouthData } from "../data/Mouth";
import { skinData } from "../data/skin";

const HomePage = () => {
  const [currentBg, setCurrentBg] = useState(1);
  const [currentCloth, setCurrentCloth] = useState(1);
  const [currentEye, setCurrentEye] = useState(1);
  const [currentHead, setCurrentHead] = useState(1);
  const [currentmouth, setCurrentmouth] = useState(1);
  const [currentskin, setCurrentskin] = useState(1);
  const elementRef = useRef(null);

  const handleGenerateBtn = () => {
    const backgroundNumber = Math.floor(Math.random() * background.length) + 1;
    setCurrentBg(backgroundNumber);

    const clothNumber = Math.floor(Math.random() * clothes.length) + 1;
    setCurrentCloth(clothNumber);

    const eyehNumber = Math.floor(Math.random() * EyeData.length) + 1;
    setCurrentEye(eyehNumber);
    const headNumber = Math.floor(Math.random() * headData.length) + 1;
    setCurrentHead(headNumber);
    const mouthNumber = Math.floor(Math.random() * MouthData.length) + 1;
    setCurrentmouth(mouthNumber);
    const skinNumber = Math.floor(Math.random() * skinData.length) + 1;
    setCurrentskin(skinNumber);
  };
  const handleNextskin = () => {
    if (currentskin < skinData.length) {
      setCurrentskin(currentskin + 1);
    } else {
      setCurrentskin(1);
    }
  };
  const handlePrevskin = () => {
    if (currentskin > 1) {
      setCurrentskin(currentskin - 1);
    } else {
      setCurrentskin(skinData.length);
    }
  };

  const handleNextMouth = () => {
    if (currentmouth < MouthData.length) {
      setCurrentmouth(currentmouth + 1);
    } else {
      setCurrentmouth(1);
    }
  };
  const handlePrevNouth = () => {
    if (currentmouth > 1) {
      setCurrentmouth(currentmouth - 1);
    } else {
      setCurrentmouth(MouthData.length);
    }
  };

  const handleNextHead = () => {
    if (currentHead < headData.length) {
      setCurrentHead(currentHead + 1);
    } else {
      setCurrentHead(1);
    }
  };
  const handlePrevHead = () => {
    if (currentHead > 1) {
      setCurrentHead(currentHead - 1);
    } else {
      setCurrentHead(headData.length);
    }
  };

  const handleNextEye = () => {
    if (currentEye < EyeData.length) {
      setCurrentEye(currentEye + 1);
    } else {
      setCurrentEye(1);
    }
  };
  const handlePrevEye = () => {
    if (currentEye > 1) {
      setCurrentEye(currentEye - 1);
    } else {
      setCurrentEye(EyeData.length);
    }
  };

  const handleNextClothes = () => {
    if (currentCloth < clothes.length) {
      setCurrentCloth(currentCloth + 1);
    } else {
      setCurrentCloth(1);
    }
  };
  const handlePrevClothes = () => {
    if (currentCloth > 1) {
      setCurrentCloth(currentCloth - 1);
    } else {
      setCurrentCloth(clothes.length);
    }
  };

  const handleNextBg = () => {
    if (currentBg < background.length) {
      setCurrentBg(currentBg + 1);
    } else {
      setCurrentBg(1);
    }
  };
  const handlePrevBg = () => {
    if (currentBg > 1) {
      setCurrentBg(currentBg - 1);
    } else {
      setCurrentBg(background.length);
    }
  };
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div class="text-xl font-pixellari relative h-screen flex h-screen w-full overflow-hidden homepage-main-wrapper">
        <div id="root" class="w-full">
          <div class="flex flex-col items-center  lg:justify-center px-5 w-full h-full overflow-y-scroll lg:overflow-hidden scrollbar-thin scrollbar-thumb-roadmapBgGreen scrollbar-track-transparent">
            <p class="text-center text-2xl md:text-3xl  flex justify-center tracking-tighter  lg:hidden text-roadmapTitleGreen mt-[100px] font-intrepidBold">
              Create Your Villager
            </p>
            <div class="flex flex-col lg:flex-row w-full relative">
            <div class="flex flex-1 flex-col flex-grow gap-3 justify-center text-lg items-center py-5 lg:py-0 lg:pl-10">
        
                <div class="mt-5 min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevHead}
                    >
                      &lt;
                    </div>

                    <div
                      class="h-full flex flex-row justify-center items-center grow text-white"
                      onClick={handleNextHead}
                    >
                      Head
                      <span class="pl-1 text-base text-lazyGreen">
                        ({currentHead}/{headData.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextHead}
                    >
                      &gt;
                    </div>
                  </button>
                </div>

          
                <div class="min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevskin}
                    >
                      &lt;
                    </div>

                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextskin}
                    >
                      Skin
                      <span class="pl-1 text-base text-lazyGreen">(1/20)</span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextskin}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevEye}
                    >
                      &lt;
                    </div>

                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextEye}
                    >
                      Eyes
                      <span class="pl-1 text-base text-lazyGreen">
                        ({currentEye}/{EyeData.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextEye}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
 
              </div>
              <div class="flex flex-1 justify-center align-center">
                
                <div class="flex flex-col ">
                <p class="text-5xl tracking-tighter items-center justify-center hidden lg:flex text-roadmapTitleGreen pb-5 text-center font-intrepidBold">
                  Create Your Villager
                </p>
                  <div class="drop-shadow-2xl pt-[20px]">
                    <div class="border-[6px] border-lazyGreen/25 mb-2">
                      <div
                        class="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] relative"
                        ref={elementRef}
                      >
                        {/* background image */}
                        {background.map((da) => {
                          return (
                            da.id === currentBg && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}

                        {/* skin  Inititaill*/}
                        {skinData.map((da) => {
                          return (
                            da.id === currentskin && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}

                        {/* Eye wear Intial */}
                        {EyeData.map((da) => {
                          return (
                            da.id === currentEye && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}
                        {/* clothes */}
                        {clothes.map((da) => {
                          return (
                            da.id === currentCloth && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}

                        {/* head */}
                        {headData.map((da) => {
                          return (
                            da.id === currentHead && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}

                        {MouthData.map((da) => {
                          return (
                            da.id === currentmouth && (
                              <img
                                src={da.src}
                                className="h-full w-full absolute"
                              />
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <button
                  class="w-full min-h-[35px] text-white text-xl bg-lazyGreen rounded-xl relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[10px] hover:mb-[0px] hover:contrast-125 mt-[8px]"
                  onClick={handleGenerateBtn}
                >
                  Randomizer
                </button>

                  <button
                    onClick={htmlToImageConvert}
                    class="w-full h-[35px] text-lazyGreen text-xl bg-roadmapBgGreen opacity-75 rounded-xl relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[10px] hover:mb-[0px] hover:contrast-125 mt-[8px]"
                  >
                    Save Preview
                  </button>
                </div>
              </div>
              <div class="flex flex-1 flex-col flex-grow gap-3 justify-center text-lg items-center py-5 lg:py-0 lg:pl-10">
           
           
                <div class="min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevClothes}
                    >
                      &lt;
                    </div>

                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextClothes}
                    >
                      Clothes
                      <span class="pl-1 text-base text-lazyGreen">
                        ({currentCloth}/{clothes.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextClothes}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
            
            
                <div class="min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevNouth}
                    >
                      &lt;
                    </div>

                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextMouth}
                    >
                      Mouth
                      <span class="pl-1 text-base text-lazyGreen">
                        ({currentmouth}/{MouthData.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextMouth}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="min-w-[240px] w-[75%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handlePrevBg}
                    >
                      &lt;
                    </div>
                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextBg}
                    >
                      Background
                      <span class="pl-1 text-base text-lazyGreen">
                        ({currentBg}/{background.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen"
                      onClick={handleNextBg}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
