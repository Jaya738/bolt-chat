export const storiesList = [
	{
		userId: 4500088,
		seen: false,
		activeStoryIndex: 0,
		stories: [
			{
				storyId: 1,
				storyContent: "stories/hills.png",
				prevStory: null,
				nextStory: 2,
			},
			{
				storyId: 2,
				storyContent: "stories/river.png",
				prevStory: 1,
				nextStory: 3,
			},
			{
				storyId: 3,
				storyContent: "stories/beach.png",
				prevStory: 1,
				nextStory: null,
			},
		],
		nextUser: 7844322,
		prevUser: null,
	},
	{
		userId: 7844322,
		seen: false,
		activeStoryIndex: 0,
		stories: [
			{
				storyId: 1,
				storyContent: "stories/hills.png",
				prevStory: null,
				nextStory: 2,
			},
			{
				storyId: 2,
				storyContent: "stories/river.png",
				prevStory: 1,
				nextStory: 3,
			},
			{
				storyId: 3,
				storyContent: "stories/beach.png",
				prevStory: 1,
				nextStory: null,
			},
		],
		nextUser: 9880000,
		prevUser: 4500088,
	},
	{
		userId: 9880000,
		seen: false,
		activeStoryIndex: 0,
		stories: [],
		nextUser: 3874322,
		prevUser: 7844322,
	},
	{
		userId: 3874322,
		seen: false,
		activeStoryIndex: 0,
		stories: [],
		nextUser: 9900088,
		prevUser: 9880000,
	},
	{
		userId: 9900088,
		seen: false,
		activeStoryIndex: 0,
		stories: [],
		nextUser: null,
		prevUser: 3874322,
	}
];
