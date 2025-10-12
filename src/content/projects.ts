import { Project } from "@/types";
import {
  loadAllProjects,
  getProjectById as getProjById,
  getAllProjectIds as getProjectIds,
  getFeaturedProjects,
} from "@/lib/content-loader";

export const projects: Project[] = loadAllProjects();

export const getProjectById = getProjById;
export const getAllProjectIds = getProjectIds;
export { getFeaturedProjects };
