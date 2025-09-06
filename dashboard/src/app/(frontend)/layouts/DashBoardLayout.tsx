interface ILayoutProps {
  children: React.ReactNode;
}

export default function DashBoardLayout({ children }: ILayoutProps) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
