interface Props {
  title: string;
  description?: string;
}

export function PageTitle({ title, description }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
