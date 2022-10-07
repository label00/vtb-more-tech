import { useState } from "react";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Навигатор", src: "navigator" },
        { title: "Обучение", src: "training" },
        { title: "Маркет ", src: "training" },
        { title: "Вебинары", src: "training" },
        { title: "Обучение", src: "training" },
        { title: "Документы", src: "Setting" },
        { title: "Идеи", src: "training" },
        { title: "Объявления", src: "training" },
        { title: "Еще", src: "training" },
        { title: "Автоматизация", src: "training" },
    ];
    return (
        <div className="flex">
            <div
                className={` ${
                    open ? "w-72" : "w-20 "
                } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                    src="images/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="images/logo.png"
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu ? "mt-9" : "mt-2"} ${
                                index === 0 && "bg-light-white"
                            } `}
                        >
                            <img src={`./src/assets/${Menu.src}.png`} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}