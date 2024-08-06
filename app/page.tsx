import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  return (
    <main className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="p-8">
          <section className="flex flex-col min-w-fit">
            <h1 className="text-9xl font-semibold">Disosur Studio</h1>

            <div className="flex flex-col space-y-4">
              <p className="text-2xl">
                A Fullstack dev who has a knack for Design sometimes
              </p>
              <p>
                Hamlo, I&apos;m Alysstair. I make things using code and design
                things with paper and pen (not figma). I write Typescript for a
                living. But I like coding things with Go, Rust, and Flutter
              </p>
            </div>
          </section>
          <nav className="flex p-4 text-xl">Blogs Works About</nav>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Two</ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
