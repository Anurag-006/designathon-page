"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { hackathonData } from "@/app/data/eventData";

export function DownloadPDFButton() {
  const generatePDF = () => {
    const doc = new jsPDF();
    const event = hackathonData.event;

    // --- 1. DOCUMENT HEADER ---
    doc.setFontSize(22);
    doc.setTextColor(34, 197, 94); // Green-500
    doc.text(event.name, 14, 22);

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(event.host_institution, 14, 30); //

    // --- 2. EVENT OVERVIEW TABLE ---
    autoTable(doc, {
      startY: 35,
      head: [["Category", "Details"]],
      body: [
        ["Event Dates", "24th - 25th March 2026"], //
        ["Location", event.location],
        ["Prize Pool", "INR 1,00,000"], //
        ["Round 1 Deadline", "March 15th, 12:00 PM"], //
        [
          "Team Size",
          `${event.registration.team_size_min} - ${event.registration.team_size_max} Members`,
        ],
      ],
      theme: "grid",
      headStyles: { fillColor: [34, 197, 94] },
      styles: { fontSize: 9 },
    });

    // --- 3. PROBLEM STATEMENTS ITERATION ---
    let currentY = (doc as any).lastAutoTable.finalY + 15;

    hackathonData.tracks.forEach((track) => {
      // Track Title Header
      if (currentY > 240) {
        doc.addPage();
        currentY = 20;
      }

      doc.setFontSize(16);
      doc.setTextColor(34, 211, 238); // Cyan-400
      doc.text(`TRACK: ${track.title.toUpperCase()}`, 14, currentY);
      currentY += 10;

      track.problem_statements.forEach((ps, idx) => {
        // Page break check for new problem statement
        if (currentY > 230) {
          doc.addPage();
          currentY = 20;
        }

        // PS Title
        doc.setFontSize(12);
        doc.setTextColor(234, 179, 8); // Yellow-500
        doc.text(`${track.id}.${idx + 1} ${ps.title}`, 14, currentY);
        currentY += 7;

        // Description
        doc.setFontSize(9);
        doc.setTextColor(80);
        doc.setFont("helvetica", "bold");
        doc.text("Description:", 14, currentY);
        doc.setFont("helvetica", "normal");
        const splitDesc = doc.splitTextToSize(ps.description, 180);
        doc.text(splitDesc, 14, currentY + 5);
        currentY += splitDesc.length * 5 + 10;

        // Requirements
        if (ps.requirements && ps.requirements.length > 0) {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setTextColor(34, 197, 94);
          doc.text("Requirements:", 14, currentY);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(80);
          ps.requirements.forEach((req) => {
            const splitReq = doc.splitTextToSize(`> ${req}`, 170);
            doc.text(splitReq, 20, currentY + 5);
            currentY += splitReq.length * 5;
          });
          currentY += 8;
        }

        // Outcomes
        if (ps.outcomes && ps.outcomes.length > 0) {
          if (currentY > 250) {
            doc.addPage();
            currentY = 20;
          }
          doc.setFont("helvetica", "bold");
          doc.setTextColor(234, 179, 8);
          doc.text("Expected Outcomes:", 14, currentY);
          doc.setFont("helvetica", "normal");
          doc.setTextColor(80);
          ps.outcomes.forEach((outcome) => {
            const splitOutcome = doc.splitTextToSize(`* ${outcome}`, 170);
            doc.text(splitOutcome, 20, currentY + 5);
            currentY += splitOutcome.length * 5;
          });
          currentY += 12; // Gap before next PS
        }
      });

      currentY += 5; // Gap before next Track
    });

    // --- 4. PAGE NUMBERS & FOOTER ---
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text(`Page ${i} of ${pageCount}`, 100, 285, { align: "center" });
      doc.text(`VNR Design-a-thon 2026`, 14, 285); //
    }

    doc.save("VNR_Designathon_2026_Brief.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="group relative flex items-center justify-center gap-2 px-4 py-2 border border-green-500/50 text-green-500 text-[10px] font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300"
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
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download_Brief_PDF
    </button>
  );
}
