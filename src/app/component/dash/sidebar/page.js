import Image from "next/image"
export default function Sidebar() {
    return (
        <div className="sidebar h-[1041px] w-[345px] hidden sm:block ">
            <div className="w-[345px] h-[120px] flex items-center ">
                <p className="ml-[76px] techtext">
                    weframetech
                </p>
                <div className="">
                    <Image src='/Group 10.png' height={19} width={26} className="w-[26px] h-[20px]   ml-[25px] align-middle" ></Image>

                </div>
            </div>
            <div className="ml-[50px]">
                <p className="menutext">
                    MAIN MENU
                </p>
                <div>
                    <div className="flex w-[345px] h-[50px] items-center mt-[25px]">
                        <Image src="/dashboard 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-[#464366]'>Dashboard</p>

                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/email 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-[#464366]' >Email</p>
                        <button className="sev">17</button>
                        <Image src='/ic_chevron.png' width={24} height={24} className="h-[24px] w-[24px] ml-[15px]  "></Image>
                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/comment 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Chat</p>
                        <Image></Image>
                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/contact 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-[#6418C3]'>Kanban</p>
                        <Image src='/ic_chevron (1).png' width={24} height={24} className="h-[24px] w-[24px] ml-[109px]  "></Image>

                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/calendar-silhouette 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Contact</p>
                       <button className="new">NEW</button>
                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/Video Lesson 2 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Calendar</p>
                        <Image></Image>
                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/online-shopping 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Courses</p>
                        <Image src='/ic_chevron (1).png' width={24} height={24} className="h-[24px] w-[24px] ml-[107px]  "></Image>

                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/invoice 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Shop</p>
                        <Image></Image>
                    </div>
                    <div className="flex w-[345px] h-[50px] items-center">
                        <Image src="/setting 1.png" height={28} width={28} className='h-[28px] w-[28px] '></Image>
                        <p className='dashtext ml-[26px] text-abc'>Invoices</p>
                        <Image src='/ic_chevron (1).png' width={24} height={24} className="h-[24px] w-[24px] ml-[106px]  "></Image>

                    </div>

                </div>
                <div className="sidecard mt-[117px] flex justify-center items-center ">
<p className="sidecardtext mt-[5px]">Increase your work with kanban</p>
                </div>
            </div>
        </div>
    )
}