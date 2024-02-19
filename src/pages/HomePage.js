import React, { useState , useRef} from "react";
import { toPng } from 'html-to-image';

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
          <div class="flex flex-col items-center lg:justify-center px-5 w-full h-full overflow-y-scroll lg:overflow-hidden scrollbar-thin scrollbar-thumb-roadmapBgGreen scrollbar-track-transparent">
            <p class="text-center text-2xl md:text-3xl tracking-tighter flex lg:hidden text-roadmapTitleGreen mt-[100px] font-intrepidBold">
              Build your BearZ
            </p>
            <div class="flex flex-col lg:flex-row w-full relative">
              <div class="flex flex-1 justify-center align-center">
                <div class="flex flex-col">
                  <div class="drop-shadow-2xl pt-[20px]">
                    <div class="border-[6px] border-lazyGreen/25 mb-2">
                      <div class="h-[250px] w-[250px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] relative" ref={elementRef}>
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
            
                  <button onClick={htmlToImageConvert} class="w-full h-[35px] text-lazyGreen text-xl bg-roadmapBgGreen opacity-75 rounded-xl relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[10px] hover:mb-[0px] hover:contrast-125 mt-[8px]">
                    Save preview
                  </button>
          
                </div>
              </div>
              <div class="flex flex-1 flex-col flex-grow gap-3 justify-center text-lg items-center py-5 lg:py-0 lg:pl-10">
                <p class="text-5xl tracking-tighter hidden lg:flex text-roadmapTitleGreen pb-5 font-intrepidBold">
                  Build your BearZ
                </p>
                <button class="w-[50%] min-h-[35px] text-white text-xl bg-lazyGreen rounded-xl relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[10px] hover:mb-[0px] hover:contrast-125 mt-[8px]">
                  Random - Surprise me!
                </button>
                <div class="mt-5 min-w-[240px] w-[80%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75"
                     onClick={handlePrevHead}
                    >
                      &lt;
                    </div>
                    <div
                      class="absolute w-full h-[8px] bottom-0 px-[3px]"
                      onClick={handleNextHead}
                    >
                      <div
                        class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                        style={{ width: "2.22222%" }}
                      ></div>
                    </div>
                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextHead}
                    >
                      Head
                      <span class="pl-1 text-base text-lazyGreen/75">
                        
                        ({currentHead}/{headData.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75"
                      onClick={handleNextHead}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="min-w-[240px] w-[70%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75"
                      onClick={handlePrevClothes}
                    >
                      &lt;
                    </div>
                    <div
                      class="absolute w-full h-[8px] bottom-0 px-[3px]"
                      onClick={handleNextClothes}
                    >
                      <div
                        class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                        style={{ width: "3.125%" }}
                      ></div>
                    </div>
                    <div
                      class="h-full flex flex-row justify-center items-center grow"
                      onClick={handleNextClothes}
                    >
                      Clothes
                      <span class="pl-1 text-base text-lazyGreen/75">
                        ({currentCloth}/{clothes.length})
                      </span>
                    </div>
                    <div
                      class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75"
                      onClick={handleNextClothes}
                    >
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="min-w-[240px] w-[66%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handlePrevEye}>
                      &lt;
                    </div>
                    <div class="absolute w-full h-[8px] bottom-0 px-[3px]" onClick={handleNextEye}>
                      <div
                        class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                        style={{ width: "4.16667%" }}
                      ></div>
                    </div>
                    <div class="h-full flex flex-row justify-center items-center grow" onClick={handleNextEye}>
                      Eye
                      <span class="pl-1 text-base text-lazyGreen/75">
                        ({currentEye}/{EyeData.length})
                      </span>
                    </div>
                    <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handleNextEye}>
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="min-w-[240px] w-[64%]">
                  <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                    <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handlePrevskin}>
                      &lt;
                    </div>
                    <div class="absolute w-full h-[8px] bottom-0 px-[3px]" onClick={handleNextskin}>
                      <div
                        class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                    <div class="h-full flex flex-row justify-center items-center grow" onClick={handleNextskin}>
                      skin
                      <span class="pl-1 text-base text-lazyGreen/75">
                        (1/20)
                      </span>
                    </div>
                    <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handleNextskin}>
                      &gt;
                    </div>
                  </button>
                </div>
                <div class="flex flex-col md:flex-row gap-2">
                  <div class="min-w-[240px] w-[60%]">
                    <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                      <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handlePrevNouth}>
                        &lt;
                      </div>
                      <div class="absolute w-full h-[8px] bottom-0 px-[3px]" onClick={handleNextMouth}>
                        <div
                          class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                          style={{ width: "4.34783%" }}
                        ></div>
                      </div>
                      <div class="h-full flex flex-row justify-center items-center grow" onClick={handleNextMouth}>
                        Mouth
                        <span class="pl-1 text-base text-lazyGreen/75">
                          ({currentmouth}/{MouthData.length})
                        </span>
                      </div>
                      <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handleNextMouth}>
                        &gt;
                      </div>
                    </button>
                  </div>
            
                </div>
                <div class="flex flex-col md:flex-row gap-2">
                  <div class="min-w-[240px] w-[60%]">
                    <button class="w-full h-[40px] text-lazyGreen text-xl bg-roadmapBgGreen rounded-xl flex flex-row items-center relative drop-shadow-lg hover:drop-shadow mb-[2px] hover:mt-[2px] hover:mb-[0px] hover:contrast-125">
                      <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75"  onClick={handlePrevBg}>
                        &lt;
                      </div>
                      <div class="absolute w-full h-[8px] bottom-0 px-[3px]" onClick={handleNextBg}>
                        <div
                          class="h-full w-0 bg-white/50 rounded-[8px] rounded-tl-[0px]"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                      <div class="h-full flex flex-row justify-center items-center grow" onClick={handleNextBg}>
                        Background
                        <span class="pl-1 text-base text-lazyGreen/75">
                        ({currentBg}/{background.length})
                        </span>
                      </div>
                      <div class="h-full w-10 flex justify-center items-center text-lazyGreen/50 hover:text-lazyGreen/75" onClick={handleNextBg}>
                        &gt;
                      </div>
                    </button>
                  </div>
             
                </div>
              </div>
            </div>
          </div>
          <div class="fixed top-0 z-20 flex flex-row">
            <div class="flex flex-row hidden">
              <a href="/">
                <img
                  class="h-[80px] md:h-[100px]"
                  src="/assets/logo-green.160fb47a.gif"
                />
              </a>
            </div>
            <div class="flex pt-5 pl-8 visible lg:hidden">
              <div class="flex flex-row justify-center align-center filter contrast-150 md:contrast-100 brightness-110">
                <div class="relative flex flex-col items-center group">
                  <a href="/">
                    <img
                      class="h-[25px] md:h-[40px] filter hover:brightness-125"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsTAAALEwEAmpwYAAALDWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTIzVDE2OjI4OjUwKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yM1QxNjoyODo1MCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplM2ZkMmE3OS0zZWRmLWZiNDItYWE2MS1mNzY2ZGMxYzQ4MWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjNjcwZWRkYS0yN2I3LWM4NDktYWU2Ny04YmRjZTBmMjdlNWMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHN0RXZ0OndoZW49IjIwMjItMDYtMjBUMTk6MTM6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ZmZjNmMTQtNTQ4Mi0zNjQxLWEwNzgtOTczNWJmMzlmNWEwIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUzZmQyYTc5LTNlZGYtZmI0Mi1hYTYxLWY3NjZkYzFjNDgxYiIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yM1QxNjoyODo1MCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2QxYTAyZjEtM2JlYi0xMTQ3LThiZTgtODlkMzVlZjAxNDc5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowMzFBRjY3RDlGRTExMUVDQkRCMEMxODAwNTlDNzYxNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTMyODNCOEE5MjZDMTFFQzlGOENBQTEwRENFMDg1MzU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjI5MzI3QkZGOUZFMTExRUNBMkEyQzVEM0YyQjNBMkNCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDQ3ODEyMzlGRTExMUVDQkJEMEU0QzMzQkIxQjJCNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzVENTRBREY5RkUxMTFFQ0JBRjBBOEY3OEFBMkZENTQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjNCNDc0MjEyOUZFMTExRUNCQzVDREIyODRCQzUzMkY0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2NDAyMDIwRDg0NjAxMUVDOUQ2OUUwODUwNzcxNkYzQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NkYzNThBQjI5RkUxMTFFQzlBNEFCRjhFNjJFRDBGREI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjczNDM4MDEzOERGMzExRUNBNjkwQTQ5OTk1QjE3RDBBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3NTkwM0JBOTlGRTExMUVDODZBNDk3QTIzNTIyN0VENDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6N0Q5MjQ4MzI5RkUxMTFFQ0JFMjdGRkFEM0JGMkFENUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhFNkVDRUQ5OUZFMTExRUNCMjZGQzI5MTU5NkU3QkYzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo5QjA4RTEzMDkyNkMxMUVDQjhBMEY0MjJCMzZCNTNCMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QUFGNTdBNUU5MjZDMTFFQzkzMzI4NjcyM0VGRDgzQjM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkIyNTk2MUFFRjJGNDExRUNBQzUyRDlGOTBCRTdDN0UzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCQjI5MkUwOUYyRjQxMUVDOEI5NkFENEZFNDYxNDdGQzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QzNGNjk1NjdGMkY0MTFFQ0JBMjRCOTBBQzYwM0UwNTc8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6KmpAOAAAClUlEQVR4nO1aUW7DIAw10e6WE609Q3Ki9XTsY4WBMQaCg5HKkyq1A2Pn+cUxZMZaCxy+AAAer2c4y4QTNsLIvj/JBIO+W+8isEwmlVyYnAsyyCg4992UeDDfP48sB+d+wHbuhwkGLLTysBE0+0EA8C4g+GMUdZEHR3X2Wo21Fqc7Gs8ZArxpeH9xE0NKnOeEGirE0AAvgsejyDaAP8USCaGMQ5qtX8AtQnkgFkzTgDggVYei8E4wB5R3FkU5374AVTciBznDcz8AgK4rTehWYq7s5JCM5aTMLRDNwRGUwk+k7u8FwtigT7SIyxwunNxlRLXKoZaD0LvMzeRsuoXUfTeKR1Bza0Zz9OtBLzwFTE3JoSlZIVwtAhBIYi88A07YARPco4n6jVHFEHUfYFwVSe5CqgOoWqDCnl2HC6DUn5Tsco1dtK6/DV3uz/0wj9eTc1xipEpDTnMJA4QIW1PRZCepAZwarlP8n4QrIcMAXjjnOPGB5pk5CxGDyyW3BlMzIPWYbBPhaKgHMI8GRjUkYQ0AmICBFYB6SzYPAwxu7QmnZmBIUzo1A0O6YnUGkrYcGs4rG+eRbbk6A5QGhu4LpmTAYcjGRJ2B4Tuj4FQQACZgYAWw9oYrAPXdsToDa3eszoA21DOgDe6k+C7c+mShgM9kQny8AhYB2gFoI6kBuGMnakLtvvjqeAmiNWQpQGCN0Y1EqyJZLAVcsBHNgID/rniWAi7YtGZcuuq3vr2Z+2xSG9zJIACw/8aSg3SNEO1DpjuZ1EaxBlR0gnc/FW71txRwwebujLe+g+96yny8AopnghdqQOKjMC7dJyTxrhMhBosA7QC0IXEeMPyUVxIfr4BFgHYA2pDoBLWxOsEerLfD2gFo4xcsUh3oH/zvdAAAAABJRU5ErkJggg=="
                    />
                  </a>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-10 pb-2 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-lazyGreen shadow-lg rounded-md">
                      Homepage
                    </span>
                  </div>
                </div>
                <p class="text-lazyLightGreen text-base md:text-2xl px-[8px] md:px-[15px]">
                  .
                </p>
                <div class="relative flex flex-col items-center group">
                  <a aria-current="page" class="brightness-125" href="/preview">
                    <img
                      class="h-[25px] md:h-[40px] filter hover:brightness-125"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsTAAALEwEAmpwYAAALDWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTIzVDE2OjI5OjIzKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yM1QxNjoyOToyMyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkMjkxNDQ5MC0yZGJmLWI3NGMtYTczNC1hZGY0NGVmOTk0ZDciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1ZWYyODVlZi1iNmJiLTdkNDUtYjU4Zi01YzEyOWI2MzRlZTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHN0RXZ0OndoZW49IjIwMjItMDYtMjBUMTk6MTM6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ZmZjNmMTQtNTQ4Mi0zNjQxLWEwNzgtOTczNWJmMzlmNWEwIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQyOTE0NDkwLTJkYmYtYjc0Yy1hNzM0LWFkZjQ0ZWY5OTRkNyIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yM1QxNjoyOToyMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2QxYTAyZjEtM2JlYi0xMTQ3LThiZTgtODlkMzVlZjAxNDc5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowMzFBRjY3RDlGRTExMUVDQkRCMEMxODAwNTlDNzYxNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTMyODNCOEE5MjZDMTFFQzlGOENBQTEwRENFMDg1MzU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjI5MzI3QkZGOUZFMTExRUNBMkEyQzVEM0YyQjNBMkNCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDQ3ODEyMzlGRTExMUVDQkJEMEU0QzMzQkIxQjJCNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzVENTRBREY5RkUxMTFFQ0JBRjBBOEY3OEFBMkZENTQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjNCNDc0MjEyOUZFMTExRUNCQzVDREIyODRCQzUzMkY0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2NDAyMDIwRDg0NjAxMUVDOUQ2OUUwODUwNzcxNkYzQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NkYzNThBQjI5RkUxMTFFQzlBNEFCRjhFNjJFRDBGREI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjczNDM4MDEzOERGMzExRUNBNjkwQTQ5OTk1QjE3RDBBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3NTkwM0JBOTlGRTExMUVDODZBNDk3QTIzNTIyN0VENDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6N0Q5MjQ4MzI5RkUxMTFFQ0JFMjdGRkFEM0JGMkFENUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhFNkVDRUQ5OUZFMTExRUNCMjZGQzI5MTU5NkU3QkYzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo5QjA4RTEzMDkyNkMxMUVDQjhBMEY0MjJCMzZCNTNCMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QUFGNTdBNUU5MjZDMTFFQzkzMzI4NjcyM0VGRDgzQjM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkIyNTk2MUFFRjJGNDExRUNBQzUyRDlGOTBCRTdDN0UzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCQjI5MkUwOUYyRjQxMUVDOEI5NkFENEZFNDYxNDdGQzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QzNGNjk1NjdGMkY0MTFFQ0JBMjRCOTBBQzYwM0UwNTc8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uBdeNAAACwElEQVR4nO1aW7aDIAyMPd1bd9Suwe6oq/P+iIaQEBA09Dbz0x6FOAxDeOi0LAvkcA9/np8XAAAuPQEA3NCFZb04JRGen1e4ueDaNAKLGwDA+zGHGuERG5c7UwlwoUlrplogtAKA0eD9mLdWUA12kowGAFiHtYn0ZtJMLC+OOHFKRhHaddAQdYWk14rECe/HHBluIRWoppHPIgZrZa0ifcAeINjtSCBqR44mF2j7L/mZA8uouRubA6iDWgNNPAESrchEEgPalexATRiQArQ7RaG41Egr4KCJT24AWQeqXST1Ah1UNO3EAVDqXcgv/s8GwQw4q+bGQRIAV9Lywhak1IlJ7wTha6zMmql2LGAr9xnOzaOxmUErmlvQCjYnk9wUUCsVO48B7LlMJFD4YOkBdDiLRDQC9MHZQEz5IiQEUGqUEpSWrDWiPAGSk7mAXKZsRsvCgF4Hcr9IiSQPMEqIE+pRIngUJHlgzZF0XSnN9CXlslNrrgtKzaSZNbvO7ZkJNUW267iba0xYQyQQwL8sziAgEdmuYxP6bOgKOAFuOpbKdlkR4SEIMKICDE5dkg2twCVrwiEVuHRROo4CVqvicRQowCnLcnMFLt8XfMVcoLleamnVfiBgSAUCvm5ndAiXb82en1e0NTNXwHxv+C8VCGAzKDqdB4ABFPC9oRMw94A1zHvAGi6ANQFrFM2EmTMjDmcnlaqdN0C6D8FwB3SI0e1damH8prMYCnfAgTq15wO943eFO0ArkDkpCmgdo2c7Kgt3AL2QOSeWUOuIoeAOOCFm8VeYQnmKrvM+xc87QD0PKMgJtT2uobsjfC+QgSoA+pCL/Rga9jNw6TMlWr93PK18Fj/vgCOzQO+VWevKsunNvTvAmgCD7nsNfKI13LsZa4zoAIpT9xruAGsCB1C91/CVYAb+btCagDVcAGsC1vgDwcEY/kvkQVYAAAAASUVORK5CYII="
                    />
                  </a>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-10 pb-2 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-lazyGreen shadow-lg rounded-md">
                      Build your BearZ
                    </span>
                  </div>
                </div>
                <p class="text-lazyLightGreen text-base md:text-2xl px-[8px] md:px-[15px]">
                  .
                </p>
                <div class="relative flex flex-col items-center group">
                  <a href="/forestmap">
                    <img
                      class="h-[25px] md:h-[40px] filter hover:brightness-125"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsTAAALEwEAmpwYAAALDWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTIzVDE2OjI5OjQ3KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yM1QxNjoyOTo0NyswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MGZjZWFlZC1kZDY3LTBhNGUtODhkOC0wZWM3YzU0OTlmOGQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ZjAzMWViNy0xNGExLWM3NDMtODA1OC01YjJlYTY2NmQxMTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHN0RXZ0OndoZW49IjIwMjItMDYtMjBUMTk6MTM6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ZmZjNmMTQtNTQ4Mi0zNjQxLWEwNzgtOTczNWJmMzlmNWEwIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUwZmNlYWVkLWRkNjctMGE0ZS04OGQ4LTBlYzdjNTQ5OWY4ZCIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yM1QxNjoyOTo0NyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2QxYTAyZjEtM2JlYi0xMTQ3LThiZTgtODlkMzVlZjAxNDc5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowMzFBRjY3RDlGRTExMUVDQkRCMEMxODAwNTlDNzYxNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTMyODNCOEE5MjZDMTFFQzlGOENBQTEwRENFMDg1MzU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjI5MzI3QkZGOUZFMTExRUNBMkEyQzVEM0YyQjNBMkNCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDQ3ODEyMzlGRTExMUVDQkJEMEU0QzMzQkIxQjJCNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzVENTRBREY5RkUxMTFFQ0JBRjBBOEY3OEFBMkZENTQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjNCNDc0MjEyOUZFMTExRUNCQzVDREIyODRCQzUzMkY0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2NDAyMDIwRDg0NjAxMUVDOUQ2OUUwODUwNzcxNkYzQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NkYzNThBQjI5RkUxMTFFQzlBNEFCRjhFNjJFRDBGREI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjczNDM4MDEzOERGMzExRUNBNjkwQTQ5OTk1QjE3RDBBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3NTkwM0JBOTlGRTExMUVDODZBNDk3QTIzNTIyN0VENDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6N0Q5MjQ4MzI5RkUxMTFFQ0JFMjdGRkFEM0JGMkFENUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhFNkVDRUQ5OUZFMTExRUNCMjZGQzI5MTU5NkU3QkYzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo5QjA4RTEzMDkyNkMxMUVDQjhBMEY0MjJCMzZCNTNCMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QUFGNTdBNUU5MjZDMTFFQzkzMzI4NjcyM0VGRDgzQjM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkIyNTk2MUFFRjJGNDExRUNBQzUyRDlGOTBCRTdDN0UzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCQjI5MkUwOUYyRjQxMUVDOEI5NkFENEZFNDYxNDdGQzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QzNGNjk1NjdGMkY0MTFFQ0JBMjRCOTBBQzYwM0UwNTc8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57jTsVAAACzUlEQVR4nO1bUXLEIAjFnb1bbtSeIblRT5d+tGQRUSHqmrS8mc7sJoj4fCIm3bDvO5TwxA8fX5/4EVsEAIAHMaY3Al6jBoEYHf1yD4EYJwYBYuyHwcfX585vYINQG2bV4PnbBe87AABsywoP0n/UdxQkubGz75EBbX2AG9A4fgy2ZQ3SjcNlMw81IE/J6CClJbm2LetrkL9jocaRrnIdPCEFH1NCLYXkINdAJCs3TzlwNfxEQOYyF764GAA6TGOzAysHCaTEwyFpALZlfTk4q0SAdMHiNO0QKzGxwU4lDqSGubRRJBEjwQY0cx6QHNCG9FqiQgB5LUQhsu9JBNrFJE4lgF5IudygdkCnNsID4FiN0qLgmkicUA4kJxKZkc381dgcQSuaR9AKcSUUcpOEHIXZ7QhzWRQAy2klR9p9T2WXTAHZoXl+5GtCSnu8Q9EPHWwuGVUjFyCWaJAmsnRfNqK2d0tbURaaALTrtMbA6QAQtRHl9pAiRmjA1P6MBnJQFwKjAsiJs6ihIwCsUMkarVFfSzQqP6VExBOQNSHl/MRG/343dAY8gCQRGashAGMKptUQwJUYuExJ9m5ojnemhy81P6gx3HsuyQDH0KL0FgxwdK2Kb8HA0LL8FgwghpwLbsHA0IPJLRjQ4tTJ6E8xcOpodh0GLnM2fDdKFVFtD9BmxmtrwM+GHsB0DczG9BmYDSdgdgCzoaqGTjwzssCahLQV+gH+TIrCFcAvFJ6T5WCtGq3th/pzBdQMtmUNlRzQe4ZrMCuOxs/+A88V0ONM3HuGtSfN3P2afQRXwBv6sOaIXu8oVHAFdPDR+zjZmgNMcAUM8Nm6Rq3vIZrgCujgY3QdMLR/V8DsAARYa/2mXcEVMDsAAdbKsakOcQXwC/y8LDwhas36rc8PvBLsiSoBil8VWP+4P+2vEhDWeIr49wrwd4OzA5gNJ2B2ALPxDUkxCn6DLqwzAAAAAElFTkSuQmCC"
                    />
                  </a>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-10 pb-2 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-lazyGreen shadow-lg rounded-md">
                      ForestMap
                    </span>
                  </div>
                </div>
                <p class="text-lazyLightGreen text-base md:text-2xl px-[8px] md:px-[15px]">
                  .
                </p>
                <div class="relative flex flex-col items-center group">
                  <a href="/links">
                    <img
                      class="h-[25px] md:h-[40px] filter hover:brightness-125"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGNURGNzQ4QzYzOEVFQzExODU4QThGNTcwMUU2RTJBQiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZjYTc2ZDgwLWE4ODEtZGU0MC1iODg0LTg3MmMwN2E4YWRjZSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplYWJhZTQ3YS04ZTQ2LTVmNGMtOTVkMC04MzE3Y2RjMGIzNWEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA5LTI2VDE0OjA3OjI2KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMC0xMVQxNDozMjo1OCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMC0xMVQxNDozMjo1OCswMjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NjA3MzBCMjY2MzhFRDExODBBM0IzNkE5RkNDNTc0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNURGNzQ4QzYzOEVFQzExODU4QThGNTcwMUU2RTJBQiIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMzA1NWExZS1lM2YzLWM5NDktOTBhNC02YmY2ZTYyYTEwNjQiIHN0RXZ0OndoZW49IjIwMjItMDktMjZUMTU6MDE6MTQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWFiYWU0N2EtOGU0Ni01ZjRjLTk1ZDAtODMxN2NkYzBiMzVhIiBzdEV2dDp3aGVuPSIyMDIyLTEwLTExVDE0OjMyOjU4KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8a9x9wAAAkxJREFUeJztWVtywyAMXHtyt5yo7RmSE7Wncz8ae2ysB+Il4rIz+QhGQixrLMG0LAsk3ADg8+crbN+sZsJoATC9fn8emE4AMN2IRqzWew/LvnGPMIbTlObg4cnLpPEwfXx/Uu0LADzvj0nigQzy1EnlYQ4tEMxk3j0kpzlLD4EXD8RyczjE+bw/2FlShgeZrM5iHGzSof5zett35ByBckB2Iv6fHHCGorEUgWq4ddLkXN0Bt29wSBZSaLz9tygROCoRsQ6kJTZNgXQoSZkzPERjeRdOxpyDKMMV3NYc/TKFW/e+M7kJcg6okaM0Lm3c6uhAgdd5jSCatBD++0EuNg4Ne0osREE/749jAA0GDp+bNwPrwKGQyMBKBKANLKLGEoQQA2ypAZKZlACs760pM6k+oCUAbu1MFKcEoKmazFNTwZUJkuOie3dqVgJkzjwmgKJrHRNAFZFpcP8cuweQklsXhXtC0g8DBWHKiC7FQFJKdgkGsr4Rl2BAg8jQJRnIOmNoDve0/C0YqFoXdM1Ak8KkSwaaVkZdMeBSmnXFgIYqtWHXDDSpEbtiwKU6dmdgVMfuDHjDfQW8cdoHK5yTlEZWhrqey6wYCvAOIAK5m1Tflbk3elSAtuJaRmJSzFCAdwDIX/EsDAV4B1AAWQoaCvAOIALXPpv0hscdSWm898mkN2rcE5bGyANqosYdWdQducG+KoYCIvrk5uqaIpqueIihAKKtdHXW9bHzUEAFn671vRVDAQk2XX/XrRgKINreKpPLxb9XwLgd9g7AG78kVZrUdo4eEAAAAABJRU5ErkJggg=="
                    />
                  </a>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-10 pb-2 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-lazyGreen shadow-lg rounded-md">
                      Contacts / Collabs / Services
                    </span>
                  </div>
                </div>
                <p class="text-lazyLightGreen text-base md:text-2xl px-[8px] md:px-[15px]">
                  .
                </p>
                <div class="relative flex flex-col items-center group">
                  <a href="/faq">
                    <img
                      class="h-[25px] md:h-[40px] filter hover:brightness-125"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAAHdbkFIAAAACXBIWXMAAAsTAAALEwEAmpwYAAALDWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTIzVDE2OjMwOjM4KzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNi0yM1QxNjozMDozOCswMjowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YzM5NTA1ZS1iMzI1LTk5NGQtYTdjNi0yYWI5OTliNThiOWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0ZWM3ZmJmMS0yYzFjLWU5NDUtYjk2NS0xOTEyNzg3MzA2YzciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZDJmMjRjNC1iNTcwLWMwNDktODVlOS1mZTc3ZDllZGFjYmUiIHN0RXZ0OndoZW49IjIwMjItMDYtMjBUMTk6MTM6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ZmZjNmMTQtNTQ4Mi0zNjQxLWEwNzgtOTczNWJmMzlmNWEwIiBzdEV2dDp3aGVuPSIyMDIyLTA2LTIwVDE5OjEzOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhjMzk1MDVlLWIzMjUtOTk0ZC1hN2M2LTJhYjk5OWI1OGI5YyIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yM1QxNjozMDozOCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2QxYTAyZjEtM2JlYi0xMTQ3LThiZTgtODlkMzVlZjAxNDc5PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDowMzFBRjY3RDlGRTExMUVDQkRCMEMxODAwNTlDNzYxNzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MTMyODNCOEE5MjZDMTFFQzlGOENBQTEwRENFMDg1MzU8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjI5MzI3QkZGOUZFMTExRUNBMkEyQzVEM0YyQjNBMkNCPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDozMDQ3ODEyMzlGRTExMUVDQkJEMEU0QzMzQkIxQjJCNjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6MzVENTRBREY5RkUxMTFFQ0JBRjBBOEY3OEFBMkZENTQ8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjNCNDc0MjEyOUZFMTExRUNCQzVDREIyODRCQzUzMkY0PC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo2NDAyMDIwRDg0NjAxMUVDOUQ2OUUwODUwNzcxNkYzQjwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6NkYzNThBQjI5RkUxMTFFQzlBNEFCRjhFNjJFRDBGREI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjczNDM4MDEzOERGMzExRUNBNjkwQTQ5OTk1QjE3RDBBPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo3NTkwM0JBOTlGRTExMUVDODZBNDk3QTIzNTIyN0VENDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6N0Q5MjQ4MzI5RkUxMTFFQ0JFMjdGRkFEM0JGMkFENUI8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOjhFNkVDRUQ5OUZFMTExRUNCMjZGQzI5MTU5NkU3QkYzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo5QjA4RTEzMDkyNkMxMUVDQjhBMEY0MjJCMzZCNTNCMzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QUFGNTdBNUU5MjZDMTFFQzkzMzI4NjcyM0VGRDgzQjM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOkIyNTk2MUFFRjJGNDExRUNBQzUyRDlGOTBCRTdDN0UzPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDpCQjI5MkUwOUYyRjQxMUVDOEI5NkFENEZFNDYxNDdGQzwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6QzNGNjk1NjdGMkY0MTFFQ0JBMjRCOTBBQzYwM0UwNTc8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz49zud8AAAC70lEQVR4nO1aW7arIAzddJ25OaJrx6Ajuh0d90e8ISREEMWuw/5p5ZXXDoRa571HDj8AMH/eYuc6LXgJ7WFJP3/eng/wABwZFK2QdO468MYNTtIhDNxXepEGx1cAAGf5wf35O2t9niqZYJ0WR3UQZ2sDgj+SAZ52zp93okNkZtCBDvDSYOe9V8OtYZ0WzJ+3X6fFqW5giKSHyRJdchMBxpZ1WpzpZ+l7kA6kcZAmUiJxQu0LeDKBezsxI/iALsDpqkndTdgHWnS2cH6BTL6IoCQC9HRRQUkEZBKSQMyBAGuBKDcB7NKDCdaeQXmwf6dhzFGZ8yChsWaCuMVq0DZvKhnKc6KBJDlSP6eB5DBpYhSBsICUhTx8Kl5IbZYm7hpR6cB/H2i2c1OyTMw5TDWn/35wFtk6pBXWacEmJ8nFowfbKXDB9LmVAloczVw4q4BKb9ovWX5WAXPLoA+S4FoFNIu5IpFCLTxgWVyNI2ciFQz2bJHPVFRT4KjFXLFiz3AFjpKLx1rLAjX2XAEuSLOkORfocZYTcFSgGBLJcq4AX+BozC0OVO+EteQ6VIZEE3ofx90VKL4etEbxBacUuWIE+A0egFETdPdAi5KsuhwDvtwDp+tB4AEeqMmC0poBgH4idvdACQeaV8TAl3jgspIceLgHLr8TAA/1wG2XEuABHqA7YdUOJ7QX3Q26e+AHHa9lwEM80O1eCDzEAwG3X0yBh3kg4LabMfAAD4zbcXcP9Eb3CPTGLS9srkb4DSaAvlvd+tUdajCgtwItYEU81z8Y0FuBDaVHUVXVIWEwoJPcqspZm1+S8xyDATfJsSJeetuMUBJxjsGAi9YtzXGLEVmGjD3gBK7661KT303vwGBA5bzWOW7hMkYNBhwc1zrHLcbctmcMBijtrSs361wvvQtUn/scgwHbpxXR0pz8mrpgMGD7LH3TdXWEi06JkpznGAxQ2q8+58/WAeM3wVY4WgneXbk1i7CFX8+A8Xa4twK98Q8bcWTzW+uU+AAAAABJRU5ErkJggg=="
                    />
                  </a>
                  <div class="absolute bottom-0 flex flex-col items-center hidden mb-10 pb-2 group-hover:flex">
                    <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-lazyGreen shadow-lg rounded-md">
                      FAQ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="fixed top-5 right-5 z-20 h-[40px] w-[40px] md:w-fit overflow-visible">
            <button class="absolute right-0 transform duration-100 delay-300 opacity-100">
              <div class="flex flex-col opacity-50 hover:opacity-100">
                <div class="w-[34px] h-[5px] md:w-[48px] md:h-[7px] bg-roadmapBgGreen"></div>
                <div class="w-[34px] h-[5px] md:w-[48px] md:h-[7px] bg-roadmapBgGreen mt-[6px]"></div>
                <div class="w-[34px] h-[5px] md:w-[48px] md:h-[7px] bg-roadmapBgGreen mt-[6px]"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
