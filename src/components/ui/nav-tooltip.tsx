export default function NavTooltip({ text }: { text: string }) {
  return (
    <div className="hidden text-white group-hover:flex right-2 z-10 absolute items-center">
      <div className="right-10 relative bg-[#404042] flex items-center gap-2 text-xs px-2 py-0.5 rounded rounded-r-none">
        {text}
        <span
          style={{
            width: "7px",
            height: "7px",
            background: "#404042",
            color: "#404042",
            position: "absolute",
            right: "2px",
            top: "50%",
            translate: "0 -50%",
            transform: "rotate(58deg) skew(-8deg, -41deg)",
            zIndex: -1,
          }}
          className="border-12 "
        ></span>
      </div>
    </div>
  );
}
