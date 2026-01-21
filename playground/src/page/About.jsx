import Counter from "../components/Counter";
import TaskList from "../components/TaskList";

export default function About() {
    return (
        <div className="h-100vh p-4 w-100 relative -top-20 justify-cetner items-center flex flex-col">
            <h2>About Us</h2>
            <p>Welcome to our application! We are dedicated to providing the best experience for our users.</p>
            <p>Our team is passionate about building innovative solutions that make a difference.</p>
            <TaskList />
        </div>
    )
}