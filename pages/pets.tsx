import Image from "next/image";
import img from "../public/1.jpg";

function PetsPage() {
  return (
    <div>
      <Image src={img} alt="pet" placeholder="blur" />
      {/* blurDataURL , i dont know what it is but you can research for it */}
      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
            {/* this tag optimize the size and have lazyloading */}
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
