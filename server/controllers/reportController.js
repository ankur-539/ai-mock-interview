import PDFDocument from "pdfkit";
import { Answer } from "../models/Answer.js";

export const downloadReport = async (req, res) => {
  try {

    const { interviewId } = req.params;

    const answers = await Answer.find({
      interviewId,
    }).populate("questionId");

    const doc = new PDFDocument();

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Interview_Report.pdf"
    );

    doc.pipe(res);

    doc.fontSize(22)
      .text("AI Mock Interview Report", {
        align: "center",
      });

    doc.moveDown();

    answers.forEach((item, index) => {

      doc.fontSize(16)
        .text(`Question ${index + 1}`);

      doc.fontSize(12)
        .text(
          `Question: ${
            item.questionId?.question || ""
          }`
        );

      doc.text(
        `Your Answer: ${
          item.userAnswer
        }`
      );

      doc.text(
        `Score: ${
          item.aiScore
        }/10`
      );

      doc.text(
        `Feedback: ${
          item.aiFeedback
        }`
      );

      doc.moveDown();

    });

    doc.end();

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};