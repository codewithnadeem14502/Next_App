"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeHandler = async () => {
    const confirmed = confirm("Are you sure!");

    try {
      if (confirmed) {
        const data = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (data.ok) {
          router.refresh();
        }
      } else {
        throw new Error("Confirm first");
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <button className="text-red-400" onClick={removeHandler}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
