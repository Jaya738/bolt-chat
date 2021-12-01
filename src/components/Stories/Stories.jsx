import "./stories.css";
import StoryItem from "./StoryItem";
import { storiesList } from '../../models/stories';

function Stories() {
	return (
		<div className="stories">
            <StoryItem data={{}} />
            {storiesList.map(story => (
                <StoryItem data={story} />
            ))}
		</div>
	);
}

export default Stories;
