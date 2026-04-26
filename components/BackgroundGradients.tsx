export default function BackgroundGradients() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-500/10 blur-[150px] rounded-full" />
        </div>
    );
}