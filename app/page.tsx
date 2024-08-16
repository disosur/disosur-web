import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <main className="text-white bg-black">
            <section className="flex justify-center flex-col items-center h-screen">
                <div className="flex flex-col items-center space-y-4">
                    <p>
                        <span>I do some coding for a living and for fun</span>
                    </p>
                    <h1 className="text-9xl">Disosur</h1>
                    <h2 className="italic text-2xl">
                        and the name is Alysstair Morales
                    </h2>
                </div>
                <div className="flex space-x-4">
                    <Button variant="link" className="text-white">
                        My works
                    </Button>
                    <Button variant="link" className="text-white">
                        My Blogs
                    </Button>
                </div>
            </section>
        </main>
    )
}
