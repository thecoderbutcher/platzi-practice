import CreateTask from "./CreateTask"

const Header = () => {
    return (
        <div className="flex flex-col relative w-full md:w-3/4 lg:w-2/4 xl:w-1/4 justify-center items-center p-4">
            <img 
                src="/images/bojack.jpg" 
                alt="" 
                width={200}
                className="rounded-full object-cover"
            />
            <CreateTask />
            <h1 className="text-xl mt-4">Bojack Horseman</h1>
            <h2 className="text-lg text-gray-400">Task Managment</h2>
        </div>
    )
}

export default Header