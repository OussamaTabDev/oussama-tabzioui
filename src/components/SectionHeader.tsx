interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-14">
    <span className="inline-block w-10 h-1 rounded-full bg-accent-primary mb-5" />
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;
