import { CategoryOutlined, Checklist, ChecklistRtl, Home } from "@mui/icons-material";

export const pageRoutes: Record<string, string> = {
  "Trang chủ": "/",
  "Quản lý chuyên ngành": "/categories",
  "Danh sách giảng viên": "/teachers",
  "Danh sách sinh viên": "/students"
};

export const pageIcons: Record<string, any> = {
  "Trang chủ": <Home />,
  "Quản lý chuyên ngành": <CategoryOutlined />,
  "Danh sách giảng viên": <Checklist />,
  "Danh sách sinh viên": <ChecklistRtl />
};

export default {
  pageRoutes,
  pageIcons
};
