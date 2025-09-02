interface WrapperProps {
  children: React.ReactNode;
  title: string;
}

function Wrapper({ children, title }: WrapperProps) {
  return (
    <div className="my-12 space-y-4">
      <h1 className="text-xl font-geist-mono font-medium">{title}</h1>
      <div className=" font-poppins">{children}</div>
    </div>
  );
}

export default Wrapper;