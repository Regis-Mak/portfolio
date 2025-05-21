import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-center items-center px-4 space-y-6 relative overflow-hidden">
        <ThemeToggle/>
        {/* Floating astronaut emoji */}
        <div className="text-6xl animate-[float_6s_ease-in-out_infinite]">👩‍🚀</div>
  
        <h1 className="text-4xl sm:text-5xl font-bold text-glow animate-[fade-in_0.7s_ease-out_forwards]">
          404: Page Not Found
        </h1>
  
        <p className="text-lg sm:text-xl max-w-xl animate-[fade-in_0.7s_ease-out_0.3s_forwards]">
          You’ve ventured into uncharted space. <br />
          This page doesn’t exist . . . <span className="italic">yet ?</span>
        </p>
  
        <a
          href="/"
          className="cosmic-button animate-[fade-in_0.7s_ease-out_0.5s_forwards]"
        >
          Fly Home
        </a>
  
        {/* Animated background stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
  
        {/* Meteor */}
        <div
          className="meteor w-32 h-1 animate-[meteor_5s_linear_infinite]"
          style={{ top: '20%', left: '110%' }}
        ></div>
      </div>
    );
  };
  