import Image from "next/image"

export const Description = () => {
    return (
        <section className="flex flex-1 justify-center p-4">
            <div className="relative rounded-2xl w-[200px] h-[200px]">
                <Image 
                    src="/images/photo-1557683316-973673baf926.avif" 
                    alt="image" 
                    fill
                    className="relative rounded-2xl w-[200px] h-2"
                />
            </div>
            <div className="flex flex-col w-1/3 p-4">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ducimus dicta harum excepturi suscipit repellat aspernatur natus nobis eligendi quod quidem, similique voluptatibus fuga quis deleniti totam debitis. Eveniet, dolorum.</p>
            </div>
        </section>
    )
} 