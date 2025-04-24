export default function Wrapper(props) {
    const { children,className } = props;
    return (
      <div className={`relative  w-full bg-white shadow ${className}`}>
        <div className="w-full mx-auto flex items-center px-4 justify-between max-w-[1340px]">
          {children}
        </div>
      </div>
    );
  }
  