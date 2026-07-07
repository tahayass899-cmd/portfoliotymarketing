export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-ink px-6 text-white">
      <div className="text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-brand-green text-lg font-black text-brand-dark">
          TY
        </div>
        <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loadingSlide_1.1s_ease-in-out_infinite] rounded-full bg-brand-green" />
        </div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/60">
          Loading TYMarketing
        </p>
      </div>
    </main>
  );
}
