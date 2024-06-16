import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="space-y-4">
      <div>
        <h1 className="text-5xl font-semibold">Alysstair Morales</h1>
        <h3 className="text-xl">@Disosur</h3>
      </div>

      <section>
        <p>
          Hamlo, I&apos;m a fullstack developer and maker based in the
          Philippines
        </p>
      </section>
      <div>
        <h3 className="text-2xl">Things I&apos;ve made</h3>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="Apps">Apps</TabsTrigger>
            <TabsTrigger value="Websites">Websites</TabsTrigger>
            <TabsTrigger value="Blogs">Blogs</TabsTrigger>
          </TabsList>
          <TabsContent value="Apps">
            <h4>Here are the apps that I&apos;ve worked on</h4>
          </TabsContent>
          <TabsContent value="Websites">
            Different collection of static sites by me
          </TabsContent>
          <TabsContent value="Blogs">My writings</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
