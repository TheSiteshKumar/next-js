interface ButtonProps {
    name: string;
  }
  
  export default function Hello({ name }: ButtonProps) {
    return (
      <div className="bg-green-100 p-4 rounded-lg">
        Hello, {name}! 👋
      </div>
    );
  }