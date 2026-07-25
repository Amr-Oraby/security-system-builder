interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="pt-4 pb-1.5 text-[10px] font-semibold tracking-widest text-gray-400">
      {children}
    </div>
  );
}
