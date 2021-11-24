import "./stories.css";
import StoryItem from "./StoryItem";

function Stories() {
    const storyData = [];
	return (
		<div className="stories">
            {storyData.map(story => (
                <StoryItem data={story} />
            ))}
		</div>
	);
}

export default Stories;
