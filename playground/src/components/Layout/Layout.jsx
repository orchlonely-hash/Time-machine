import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

// export default function IconLayout2({
//     children
// }) {
//     return (
//         <main>
//             <Header />
//             {children}
//         </main>
//     )
// }