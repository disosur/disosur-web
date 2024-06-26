import AppContent from "@/components/AppContent";
import SiteContent from "@/components/SiteContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="space-y-4">
      <div>
        <h1 className="text-5xl font-semibold">Alysstair Morales</h1>
        <h3 className="text-xl">@Disosur</h3>
        <p className="space-x-2">
          Currently in:{" "}
          <span>
            <a
              className="text-accent"
              href="https://prosperna.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prosperna
            </a>
          </span>
        </p>
      </div>
      <section>
        <p>
          Hamlo, I&apos;m a fullstack developer and maker based in the
          Philippines
        </p>
        <p>I mainly work with:</p>
        <ul>
          <li>Typescript</li>
          <li>Go</li>
          <li>Flutter</li>
          <li>C</li>
          <li>Any frontend framework at this point</li>
        </ul>
      </section>
      <div>
        <h3 className="text-2xl">Things I&apos;ve made</h3>
        <Tabs defaultValue="Apps" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="Apps">Apps</TabsTrigger>
            <TabsTrigger value="Websites">Websites</TabsTrigger>
          </TabsList>
          <TabsContent value="Apps">
            <AppContent />
          </TabsContent>
          <TabsContent value="Websites">
            <SiteContent />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
