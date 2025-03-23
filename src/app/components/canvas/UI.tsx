import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { achievements } from "@constants/constants";
import { UIDescription } from "@styles/sections/AchievementSectionStyle";

interface Achievements {
  id: number;
  img: string;
  desc?: string;
  date: string;
}

const achievementsData: Achievements[] = achievements;

const pictures: string[] = achievementsData.map((item) => item.img);

export const pageAtom = atom<number>(0);
interface Page {
  front: string;
  back: string;
  description?: string;
}

export const pages: Page[] = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
    description: achievementsData[i]?.desc,
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
  description: achievementsData[pictures.length - 1]?.desc,
});

console.log("pages", pages);

export const UI: React.FC = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("./audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  const nextPage = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="select-none relative h-screen w-screen flex items-center justify-center ">
      {/* Previous Page Arrow */}
      {page > 0 && (
        <button
          className="z-10 absolute left-5 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
          onClick={prevPage}
        >
          <ChevronLeft size={40} />
        </button>
      )}
      <UIDescription >
        {pages[page]?.description}
      </UIDescription>

      {/* Next Page Arrow */}
      {page < pages.length - 1 && (
        <button
          className="z-10 absolute right-5 text-gray-300 hover:text-white transition-transform transform hover:scale-110"
          onClick={nextPage}
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
};
