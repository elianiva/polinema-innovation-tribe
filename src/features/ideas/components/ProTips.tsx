import TipsButton from "~/features/ideas/components/TipsButton";

type Tips = {
  name: string;
  description: string;
};

const tips: Tips[] = [
  {
    name: "SDGs Based Problem",
    description: "Usahakan Ide yang dibuat berdampak dengan SDGs. Hal ini akan membuat Ide yang dibuat lebih relevan dan memiliki dampak yang lebih besar. Untuk mengetahui lebih lanjut tentang SDGs, silahkan kunjungi website resmi dari Globalgoals!.",
  },
  {
    name: "Sesuai dengan Tema",
    description: "Setiap perlombaan memiliki tema yang berbeda-beda. Usahakan Ide yang dibuat sesuai dengan tema yang telah ditentukan. Tema dapat dilihat pada halaman utama dari perlombaan yang dipilih.",
  },
  {
    name: "Solusi sesuai dengan Permasalahan",
    description: "Usahakan Ide yang dibuat memiliki solusi yang sesuai dengan permasalahan yang dihadapi. Solusi yang dibuat harus dapat diimplementasikan dan memiliki dampak yang besar.",
  },
];

export default function ProTips() {
  return (
    <div className="p-2 bg-slate-800 rounded-lg flex flex-col sticky top-16 gap-6 md:w-[60%] h-full">
      <div>
        <h1 className="font-bold text-xl mt-4 text-center w-full">Pro Tips!</h1>
      </div>
      <div id="mainContent" className={"flex flex-col gap-3 "}>
        {tips.map((data) => (
          <TipsButton
            key={data.name}
            name={data.name}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
