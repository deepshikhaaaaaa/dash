import Image from "next/image"

export default function Header()
{
    return(
        <div className="w-[1375px] h-[120px] flex items-center bg-bgc">
           <div>
           <Image src='/search 2.png' width={28} height={28} className="h-[28px] w-[28px] relative top-[46px] z-30 left-[86px]"></Image>
<input type='text' className="inputt relative top-[-2px] ml-[50px] "/> 
           </div>
           <p className="othermenu ml-[80px]">
           OTHER MENUS
           </p>
           <div className=" justify-center items-center relative flex">
            <Image src='/bell 1.png' width={28} height={28}></Image>
            <button  className="imgbut1 relative top-[-15px] left-[-15px]">12</button>
           </div>
           <div className=" justify-center items-center relative flex">
            <Image src='/Video Lesson 2 2.png' width={28} height={28}></Image>
            <button  className="imgbut1 relative top-[-15px] left-[-15px]">5</button>
           </div>
           <div className=" justify-center items-center relative flex">
            <Image src='/checkbox (1) 1.png' width={28} height={28}></Image>
            <button  className="imgbut1 relative top-[-15px] left-[-15px]">2</button>
           </div>
           <div className=" justify-center items-center relative flex">
            <Image src='/folder (2).png' width={35} height={40} className="mt-[-15px]"></Image>
            {/* <Image src='/dotWarning.png' width={58} height={58}></Image> */}

            {/* <Image src='/background (1).png' width={85} height={85} className="top-[] relative right-[40px]"></Image> */}
            
           </div>
           <div className=" dropdiv flex justify-center items-center gap-[14px]">
           <Image src='/united-states 1.png' width={28} height={28}></Image>
<p className="droptext">ENGLISH</p>
<Image src='/arrow.png' height={8} width={15} className="w-[15px] h-[8px]"></Image>
           </div>
        </div>
    )
}