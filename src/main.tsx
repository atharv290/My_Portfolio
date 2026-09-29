import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
const root = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/$/, "") || "/";
const app = <App path={path} />;
if (root.hasChildNodes() && root.dataset.page === path) hydrateRoot(root, app);
else createRoot(root).render(app);
