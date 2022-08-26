import { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
  {
    // User 식별 id - userSeq
    userId: {
      type: Number,
      required: true,
    },
    // 프로젝트명
    title: {
      type: String,
      required: true,
    },
    // 시작일
    startDate: {
      type: Date,
      required: true,
    },
    // 종료일
    endDate: {
      type: Date,
      required: true,
    },
    // 설명
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };