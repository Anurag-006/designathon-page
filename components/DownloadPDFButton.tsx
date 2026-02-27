"use client";

// Notice we no longer need jsPDF or autoTable

export function DownloadPDFButton() {
  return (
    <a
      href="/problem_statements.pdf" // Path to the file in your public/ folder
      download="VNR_Designathon_2026_Brief.pdf" // What the file will be saved as on the user's computer
      className="group relative flex items-center justify-center gap-2 px-4 py-2 border border-green-500/50 text-green-500 text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 w-fit cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:animate-bounce" // Added a subtle bounce on hover
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download_Brief_PDF
    </a>
  );
}
