"use client";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { carouselData } from "@/lib/navitem";

/**
 * Komponen ini digunakan untuk menampilkan carousel card yang berisi data
 * dari navitem.ts. Setiap card memiliki konten yang unik sesuai dengan data
 * yang disediakan.
 *
 * @returns Komponen carousel card dengan konten yang dinamis.
 */

// Definisi tipe untuk data konten
interface ContentItem {
  title: string;
  description: string;
  imageUrl: string;
}

interface ContentData {
  title: string;
  description: string;
  imageUrl: string;
  contentItems: ContentItem[];
}

export function AppleCardsCarouselDemo() {
  // Map the imported carouselData and add the content property to each item
  const cards = carouselData.map((card, index) => (
    <Card
      key={card.src}
      card={{
        ...card,
        content: <CardContent contentData={card.contentData} />,
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

/**
 * Komponen untuk menampilkan konten spesifik untuk setiap card.
 *
 * @param {Object} props - Properties yang diberikan ke komponen
 * @param {ContentData} props.contentData - Data konten spesifik untuk card
 * @returns Komponen React yang menampilkan konten card
 */
const CardContent = ({ contentData }: { contentData?: ContentData }) => {
  // Jika tidak ada contentData, tampilkan placeholder
  if (!contentData) {
    return <div className="p-8 text-center">No content available</div>;
  }

  const { title, description, imageUrl, contentItems } = contentData;

  // Tampilkan header section dengan informasi umum
  return (
    <div className="space-y-12">
      {/* Header section */}
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {title}
          </span>{" "}
          {description}
        </p>
        <Image
          src={imageUrl}
          alt={title}
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
        />
      </div>

      {/* Content items section - menampilkan konten yang berbeda untuk setiap item */}
      {contentItems &&
        contentItems.map((item, index) => (
          <div
            key={`content-item-${index}`}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {item.title}
              </span>{" "}
              {item.description}
            </p>
            <Image
              src={item.imageUrl}
              alt={item.title}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
            />
          </div>
        ))}
    </div>
  );
};
