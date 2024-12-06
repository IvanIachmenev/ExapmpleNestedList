

export default function ChildeLayput({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <div>Additional layaot</div>
        {children}
    </div>
  );
}
