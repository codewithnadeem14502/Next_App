import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
export default function TopicList() {
  return (
    <>
      <div
        // key={t._id}
        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
      >
        <div>
          <h2 className="font-bold text-2xl">title</h2>
          <div>description</div>
          {/* <h2 className="font-bold text-2xl">{t.title}</h2>
          <div>{t.description}</div> */}
        </div>

        <div className="flex gap-2">
          <RemoveBtn />
          {/* id={t._id} */}
          <Link href={`/editTopic/111`}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}