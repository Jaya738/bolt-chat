const storiesList = [
	{
		userId: 1,
		userName: "uday007",
		profilePic: "profiles/uday.png",
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
		nextUser: 2,
		prevUser: null,
	},
	{
		userId: 2,
		userName: "sravs",
		profilePic: "profiles/sravs.png",
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
		nextUser: 2,
		prevUser: null,
	},
];
