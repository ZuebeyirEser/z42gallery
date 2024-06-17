import Link from "next/link";

const mookUrls = ["Text 1", "Text 2 ", "Text 3", "Text 4"];

const mockImages = mookUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src="{image.url}" alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
